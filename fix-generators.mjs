import fs from 'fs';
import path from 'path';

const dir = '/Users/tahuilan/Repository/aspel-noi-training-platform/src/domain/content/levels';
const files = fs.readdirSync(dir).filter(f => f.startsWith('level-') && f !== 'level-01-fundamentos.ts' && f !== 'level-02-primeros-pasos.ts');

const newLessonFunc = `function lesson(id: string, slug: string, num: number, title: string, desc: string, mins: number, objs: string[]): Lesson {
  return {
    id, slug, number: num, title, description: desc, durationMinutes: mins, objectives: objs,
    sections: [
      { id: \`\${id}-s1\`, type: 'concept', title: \`Concepto: \${title}\`, content: \`\${desc}\\n\\nEn esta lección exploraremos a fondo los detalles de \${title.toLowerCase()}. Esto es fundamental para asegurar que nuestra nómina esté perfectamente alineada con los requisitos de NOI 11 y las disposiciones fiscales vigentes para 2026.\` },
      { id: \`\${id}-s2\`, type: 'explanation', title: 'Explicación detallada', content: \`Para lograr nuestro objetivo principal: "\${desc}", necesitamos entender los fundamentos técnicos y legales.\\n\\nEsto implica basarnos estrictamente en la normativa aplicable, como el anexo 20 del SAT y el complemento de nómina versión vigente.\\n\\nAspectos que dominaremos en esta sección:\\n\${objs.map(o => '- ' + o).join('\\n')}\` },
      { id: \`\${id}-s3\`, type: 'numeric-example', title: 'Ejemplo práctico', content: \`Veamos un ejemplo de \${title.toLowerCase()} aplicado a nuestro caso práctico de "Comercializadora Horizonte".\\n\\nImagina que tienes que resolver la siguiente situación en la empresa:\\n- \${objs[0]}\\n\\nAl configurar esto correctamente en NOI 11, el sistema automatizará el cálculo y nos evitará discrepancias fiscales.\` },
      { id: \`\${id}-s4\`, type: 'noi-procedure', title: 'Procedimiento en NOI', content: \`Para ejecutar "\${title}" dentro del sistema Aspel NOI 11, seguiremos una metodología estructurada:\\n\\n1. Ingresa al módulo correspondiente desde el menú principal.\\n2. Verifica los parámetros del trabajador o concepto antes de guardar.\\n3. Aplica los cambios a la nómina actual y revisa la bitácora.\\n\\nAsegúrate de validar la información fiscal en cada paso.\`, steps: objs },
      { id: \`\${id}-s5\`, type: 'guided-exercise', title: 'Ejercicio guiado', content: \`Acompáñame paso a paso para completar la tarea de \${title.toLowerCase()}.\\n\\nTu meta es lograr: \${objs[1] || objs[0]}. Te guiaré por las pantallas de NOI 11 para que no haya errores de cálculo ni de timbrado en el proceso.\` },
      { id: \`\${id}-s6\`, type: 'practice-exercise', title: 'Ejercicio para ti', content: \`Es tu turno. Utiliza tu empresa de pruebas (Comercializadora Horizonte) y realiza el procedimiento de \${title.toLowerCase()} sin ayuda.\\n\\nRecuerda revisar que los acumulados del trabajador cuadren perfectamente antes de cerrar el periodo de nómina.\` },
      { id: \`\${id}-s7\`, type: 'common-errors', title: 'Errores frecuentes', content: \`Al configurar \${title.toLowerCase()}, los errores más comunes que cometen los usuarios de NOI son:\\n\\n- No revisar la fecha de aplicación del movimiento.\\n- Configurar mal la clave SAT correspondiente.\\n- Olvidar regenerar el cálculo del trabajador después de hacer el cambio.\\n\\nSiempre verifica tu recibo electrónico antes de realizar el timbrado masivo.\` },
    ],
    quiz: {
      id: \`q\${id.slice(1)}\`, title: \`Mini examen — Lección \${num}\`, description: 'Verifica tu comprensión sobre ' + title, passingScore: 70,
      questions: [
        { id: \`q\${id.slice(1)}-1\`, question: \`¿Cuál es el paso fundamental para \${title.toLowerCase()}?\`, options: ['Configurar correctamente los parámetros en NOI y validar la clave SAT', 'Borrar la nómina y volver a calcularla', 'Hacerlo manualmente en Excel y subirlo', 'Solo afecta si el trabajador tiene faltas'], correctAnswer: 0, explanation: \`Para dominar \${title.toLowerCase()} en NOI 11, la correcta configuración de los parámetros del sistema y sus claves SAT es indispensable para el éxito del cálculo.\` },
      ],
    },
  };
}`;

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace the old lesson function with the new one
  content = content.replace(/function lesson\(id: string.*?return \{.*?\n  \};\n\}/s, newLessonFunc);
  
  fs.writeFileSync(filePath, content);
  console.log(`Updated ${file}`);
}
