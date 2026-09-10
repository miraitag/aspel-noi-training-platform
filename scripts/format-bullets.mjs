import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const LEVELS_DIR = path.join(__dirname, '../src/domain/content/levels');

async function main() {
  try {
    const files = await fs.readdir(LEVELS_DIR);
    const tsFiles = files.filter(f => f.endsWith('.ts'));

    for (const file of tsFiles) {
      const filePath = path.join(LEVELS_DIR, file);
      let content = await fs.readFile(filePath, 'utf-8');
      
      let modified = false;

      // Replace bullet points '•' with '-' so Markdown recognizes them as lists
      if (/•/.test(content)) {
        content = content.replace(/•\s*/g, '- ');
        modified = true;
      }

      if (modified) {
        await fs.writeFile(filePath, content, 'utf-8');
        console.log(`Updated ${file}`);
      }
    }
    console.log('✅ Bullet points formatted.');
  } catch (error) {
    console.error('Error:', error);
  }
}

main();
