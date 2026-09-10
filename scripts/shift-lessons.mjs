import fs from 'fs';

let content = fs.readFileSync('src/domain/content/levels/level-01-fundamentos.ts', 'utf8');

for (let i = 10; i >= 1; i--) {
  const currentStr = String(i).padStart(2, '0');
  const nextStr = String(i + 1).padStart(2, '0');
  
  // Replace the ID in the lesson() call
  const idRegex = new RegExp(`'l01-${currentStr}'`, 'g');
  content = content.replace(idRegex, `'l01-${nextStr}'`);
  
  // Replace the section IDs
  const sectionIdRegex = new RegExp(`'l01-${currentStr}-s`, 'g');
  content = content.replace(sectionIdRegex, `'l01-${nextStr}-s`);
  
  // Replace the number argument in lesson()
  // lesson('l01-xx', 'slug', X, 
  const numberRegex = new RegExp(`lesson\\('l01-${nextStr}', '([^']+)', ${i},`);
  content = content.replace(numberRegex, `lesson('l01-${nextStr}', '$1', ${i + 1},`);
}

// Update the description of the level to reflect 11 lessons
content = content.replace(/10 Lecciones/, '11 Lecciones');
content = content.replace(/totalLessons: 10/, 'totalLessons: 11');

fs.writeFileSync('src/domain/content/levels/level-01-fundamentos.ts', content);
console.log('Lessons shifted successfully');
