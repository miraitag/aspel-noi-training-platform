import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const LEVELS_DIR = path.join(__dirname, '../src/domain/content/levels');

const replacements = [
  // Fix Anexo 20 broken URL
  {
    regex: /https:\/\/www\.sat\.gob\.mx\/consultas\/43074\/actualizacion-factura-electronica---reforma-fiscal-2022/g,
    replacement: 'http://omawww.sat.gob.mx/tramitesyservicios/Paginas/anexo_20.htm'
  },
  // Fix LFT broken URL
  {
    regex: /https:\/\/www\.diputados\.gob\.mx\/LeyesBiblio\/pdf\/LFT\.pdf/g,
    replacement: 'https://www.diputados.gob.mx/LeyesBiblio/pdf/125_240124.pdf'
  },
  // Add Complemento de Nómina (if not linked)
  {
    regex: /\b(Complemento de Nómina)\b(?!\s*\])/gi,
    replacement: '[$1](http://omawww.sat.gob.mx/tramitesyservicios/Paginas/complemento_nomina.htm)'
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

      // Extract existing links to avoid breaking them when adding Complemento de Nómina
      const links = [];
      content = content.replace(/\[.*?\]\(.*?\)/g, match => {
        links.push(match);
        return `__LINK_${links.length - 1}__`;
      });
      
      // Apply the Complemento de Nómina replacement (since it ignores already linked stuff)
      if (replacements[2].regex.test(content)) {
        content = content.replace(replacements[2].regex, replacements[2].replacement);
        modified = true;
      }

      // Restore links
      content = content.replace(/__LINK_(\d+)__/g, (match, index) => {
        return links[Number(index)];
      });

      // Apply URL replacements (these happen ON the links)
      for (let i = 0; i < 2; i++) {
        const rule = replacements[i];
        if (rule.regex.test(content)) {
          content = content.replace(rule.regex, rule.replacement);
          modified = true;
        }
      }

      if (modified) {
        await fs.writeFile(filePath, content, 'utf-8');
        console.log(`Updated ${file}`);
      }
    }
    console.log('✅ Links fixed.');
  } catch (error) {
    console.error('Error:', error);
  }
}

main();
