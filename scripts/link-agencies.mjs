import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const LEVELS_DIR = path.join(__dirname, '../src/domain/content/levels');

const replacements = [
  // LFT full string
  {
    regex: /\b(Ley Federal del Trabajo)\b(?!\s*\])/gi,
    replacement: '[$1](https://www.diputados.gob.mx/LeyesBiblio/pdf/LFT.pdf)'
  },
  // LFT acronym
  {
    regex: /\b(LFT)\b(?!\s*\])/g,
    replacement: '[$1](https://www.diputados.gob.mx/LeyesBiblio/pdf/LFT.pdf)'
  },
  // SAT
  {
    regex: /\b(SAT)\b(?!\s*\])/g,
    replacement: '[$1](https://www.sat.gob.mx/)'
  },
  // IMSS
  {
    regex: /\b(IMSS)\b(?!\s*\])/g,
    replacement: '[$1](https://www.imss.gob.mx/)'
  },
  // INFONAVIT
  {
    regex: /\b(INFONAVIT)\b(?!\s*\])/gi,
    replacement: '[$1](https://portalmx.infonavit.org.mx/)'
  },
  // FONACOT
  {
    regex: /\b(FONACOT)\b(?!\s*\])/gi,
    replacement: '[$1](https://www.fonacot.gob.mx/)'
  },
  // UMA full string
  {
    regex: /\b(Unidad de Medida y Actualización)\b(?!\s*\])/gi,
    replacement: '[$1](https://www.inegi.org.mx/temas/uma/)'
  },
  // UMA acronym
  {
    regex: /\b(UMAs?)\b(?!\s*\])/g,
    replacement: '[$1](https://www.inegi.org.mx/temas/uma/)'
  },
  // Anexo 20
  {
    regex: /\b(Anexo 20)\b(?!\s*\])/gi,
    replacement: '[$1](https://www.sat.gob.mx/consultas/43074/actualizacion-factura-electronica---reforma-fiscal-2022)'
  },
  // SUA
  {
    regex: /\b(SUA)\b(?!\s*\])/g,
    replacement: '[$1](https://www.imss.gob.mx/patrones/sua)'
  },
  // IDSE
  {
    regex: /\b(IDSE)\b(?!\s*\])/g,
    replacement: '[$1](https://idse.imss.gob.mx/imss/)'
  }
];

async function main() {
  try {
    const files = await fs.readdir(LEVELS_DIR);
    const tsFiles = files.filter(f => f.endsWith('.ts'));

    for (const file of tsFiles) {
      const filePath = path.join(LEVELS_DIR, file);
      let content = await fs.readFile(filePath, 'utf-8');
      
      let modified = false;

      // Ensure we don't accidentally replace within already formed links like [SAT](...) or inside URLs
      const links = [];
      content = content.replace(/\[.*?\]\(.*?\)/g, match => {
        links.push(match);
        return `__LINK_${links.length - 1}__`;
      });
      
      for (const rule of replacements) {
        if (rule.regex.test(content)) {
          content = content.replace(rule.regex, rule.replacement);
          modified = true;
        }
      }

      // Restore links
      content = content.replace(/__LINK_(\d+)__/g, (match, index) => {
        return links[Number(index)];
      });

      if (modified) {
        await fs.writeFile(filePath, content, 'utf-8');
        console.log(`Updated ${file}`);
      }
    }
    console.log('✅ Links injection completed.');
  } catch (error) {
    console.error('Error:', error);
  }
}

main();
