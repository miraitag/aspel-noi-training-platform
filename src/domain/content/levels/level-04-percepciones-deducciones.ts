/**
 * NIVEL 4 — Percepciones y Deducciones (Lecciones 31–40)
 */
import type { Level, Lesson } from '@/domain/models/course.model';

function lesson(id: string, slug: string, num: number, title: string, desc: string, mins: number, objs: string[]): Lesson {
  return {
    id, slug, number: num, title, description: desc, durationMinutes: mins, objectives: objs,
    sections: [
      { id: `${id}-s1`, type: 'concept', title: `Concepto: ${title}`, content: `${desc}\n\nEn esta lección exploraremos a fondo los detalles de ${title.toLowerCase()}. Esto es fundamental para asegurar que nuestra nómina esté perfectamente alineada con los requisitos de NOI 11 y las disposiciones fiscales vigentes para 2026.` },
      { id: `${id}-s2`, type: 'explanation', title: 'Explicación detallada', content: `Para lograr nuestro objetivo principal: "${desc}", necesitamos entender los fundamentos técnicos y legales.\n\nEsto implica basarnos estrictamente en la normativa aplicable, como el [anexo 20](http://omawww.sat.gob.mx/tramitesyservicios/Paginas/anexo_20.htm) del [SAT](https://www.sat.gob.mx/) y el [complemento de nómina](http://omawww.sat.gob.mx/tramitesyservicios/Paginas/complemento_nomina.htm) versión vigente.\n\nAspectos que dominaremos en esta sección:\n${objs.map(o => '- ' + o).join('\n')}` },
      { id: `${id}-s3`, type: 'numeric-example', title: 'Ejemplo práctico', content: `Veamos un ejemplo de ${title.toLowerCase()} aplicado a nuestro caso práctico de "Comercializadora Horizonte".\n\nImagina que tienes que resolver la siguiente situación en la empresa:\n- ${objs[0]}\n\nAl configurar esto correctamente en NOI 11, el sistema automatizará el cálculo y nos evitará discrepancias fiscales.` },
      { id: `${id}-s4`, type: 'noi-procedure', title: 'Procedimiento en NOI', content: `Para ejecutar "${title}" dentro del sistema Aspel NOI 11, seguiremos una metodología estructurada:\n\n1. Ingresa al módulo correspondiente desde el menú principal.\n2. Verifica los parámetros del trabajador o concepto antes de guardar.\n3. Aplica los cambios a la nómina actual y revisa la bitácora.\n\nAsegúrate de validar la información fiscal en cada paso.`, steps: objs },
      { id: `${id}-s5`, type: 'guided-exercise', title: 'Ejercicio guiado', content: `Acompáñame paso a paso para completar la tarea de ${title.toLowerCase()}.\n\nTu meta es lograr: ${objs[1] || objs[0]}. Te guiaré por las pantallas de NOI 11 para que no haya errores de cálculo ni de timbrado en el proceso.` },
      { id: `${id}-s6`, type: 'practice-exercise', title: 'Ejercicio para ti', content: `Es tu turno. Utiliza tu empresa de pruebas (Comercializadora Horizonte) y realiza el procedimiento de ${title.toLowerCase()} sin ayuda.\n\nRecuerda revisar que los acumulados del trabajador cuadren perfectamente antes de cerrar el periodo de nómina.` },
      { id: `${id}-s7`, type: 'common-errors', title: 'Errores frecuentes', content: `Al configurar ${title.toLowerCase()}, los errores más comunes que cometen los usuarios de NOI son:\n\n- No revisar la fecha de aplicación del movimiento.\n- Configurar mal la clave [SAT](https://www.sat.gob.mx/) correspondiente.\n- Olvidar regenerar el cálculo del trabajador después de hacer el cambio.\n\nSiempre verifica tu recibo electrónico antes de realizar el timbrado masivo.` },
    ],
    quiz: {
      id: `q${id.slice(1)}`, title: `Mini examen — Lección ${num}`, description: 'Verifica tu comprensión sobre ' + title, passingScore: 70,
      questions: [
        { id: `q${id.slice(1)}-1`, question: `¿Cuál es el paso fundamental para ${title.toLowerCase()}?`, options: ['Configurar correctamente los parámetros en NOI y validar la clave [SAT](https://www.sat.gob.mx/)', 'Borrar la nómina y volver a calcularla', 'Hacerlo manualmente en Excel y subirlo', 'Solo afecta si el trabajador tiene faltas'], correctAnswer: 0, explanation: `Para dominar ${title.toLowerCase()} en NOI 11, la correcta configuración de los parámetros del sistema y sus claves [SAT](https://www.sat.gob.mx/) es indispensable para el éxito del cálculo.` },
      ],
    },
  };
}

export const level04: Level = {
  id: 'level-04', slug: 'percepciones-deducciones', number: 4,
  title: 'Percepciones y Deducciones', subtitle: '30 → 40',
  description: 'Catálogos de percepciones y deducciones en NOI: claves internas, claves [SAT](https://www.sat.gob.mx/), estatus, fórmulas, bases fiscales, conceptos gravados y exentos.',
  difficulty: 'intermediate', color: 'yellow', icon: '🟡',
  practicalCase: 'Configurar percepciones (sueldo, bono, horas extra, prima vacacional, aguinaldo, PTU) y deducciones (ISR, [IMSS](https://www.imss.gob.mx/), [INFONAVIT](https://portalmx.infonavit.org.mx/), préstamos, faltas) en Comercializadora Horizonte.',
  lessons: [
    lesson('l04-01', 'catalogo-percepciones', 31, 'Catálogo de percepciones', 'Entender la estructura del catálogo de percepciones en NOI.', 25, ['Navegar el catálogo de percepciones', 'Identificar percepciones predefinidas']),
    lesson('l04-02', 'catalogo-deducciones', 32, 'Catálogo de deducciones', 'Entender la estructura del catálogo de deducciones en NOI.', 25, ['Navegar el catálogo de deducciones', 'Identificar deducciones predefinidas']),
    lesson('l04-03', 'claves-percepciones', 33, 'Claves P001, P002...', 'Entender el sistema de claves internas para percepciones.', 20, ['Interpretar claves internas', 'Crear nuevas claves']),
    lesson('l04-04', 'claves-deducciones', 34, 'Claves D001, D002...', 'Entender el sistema de claves internas para deducciones.', 20, ['Interpretar claves de deducción', 'Crear nuevas claves']),
    lesson('l04-05', 'estatus-conceptos', 35, 'Estatus: Alta, Baja, Cálculo, Inactiva', 'Configurar el estatus de los conceptos de nómina.', 25, ['Entender cada estatus', 'Cambiar estatus según necesidad']),
    lesson('l04-06', 'formulas', 36, 'Fórmulas', 'Crear y modificar fórmulas de cálculo en percepciones y deducciones.', 35, ['Crear fórmulas básicas', 'Usar variables del sistema']),
    lesson('l04-07', 'bases-fiscales', 37, 'Bases fiscales', 'Configurar las bases fiscales de cada concepto.', 30, ['Entender base ISR, base [IMSS](https://www.imss.gob.mx/)', 'Configurar correctamente']),
    lesson('l04-08', 'conceptos-gravados', 38, 'Conceptos gravados', 'Identificar y configurar conceptos que pagan ISR.', 25, ['Clasificar percepciones gravadas', 'Configurar en NOI']),
    lesson('l04-09', 'conceptos-exentos', 39, 'Conceptos exentos', 'Identificar y configurar conceptos exentos de ISR.', 25, ['Conocer topes de exención en [UMA](https://www.inegi.org.mx/temas/uma/)', 'Configurar en NOI']),
    lesson('l04-10', 'claves-sat', 40, 'Claves [SAT](https://www.sat.gob.mx/)', 'Asignar las claves [SAT](https://www.sat.gob.mx/) correctas a cada concepto para timbrado.', 30, ['Consultar catálogo [SAT](https://www.sat.gob.mx/)', 'Asignar claves actualizadas 2026']),
  ],
};
