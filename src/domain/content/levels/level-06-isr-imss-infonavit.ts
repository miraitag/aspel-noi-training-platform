/**
 * NIVEL 6 — ISR + [IMSS](https://www.imss.gob.mx/) + [INFONAVIT](https://portalmx.infonavit.org.mx/) (Lecciones 51–60)
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

export const level06: Level = {
  id: 'level-06', slug: 'isr-imss-[infonavit](https://portalmx.infonavit.org.mx/)', number: 6,
  title: 'ISR + [IMSS](https://www.imss.gob.mx/) + [INFONAVIT](https://portalmx.infonavit.org.mx/)', subtitle: '50 → 60',
  description: 'Cálculos fiscales a profundidad: tablas de ISR, base gravable, subsidio al empleo 2026, SBC/SDI, cuotas obreras del [IMSS](https://www.imss.gob.mx/), créditos [INFONAVIT](https://portalmx.infonavit.org.mx/) y auditoría fiscal.',
  difficulty: 'intermediate', color: 'yellow', icon: '🟡',
  practicalCase: 'Calcular manualmente ISR, [IMSS](https://www.imss.gob.mx/) e [INFONAVIT](https://portalmx.infonavit.org.mx/) para empleados con diferentes sueldos y verificar que NOI arroja los mismos resultados.',
  lessons: [
    lesson('l06-01', 'introduccion-isr', 51, 'Introducción al ISR', 'Entender el Impuesto Sobre la Renta aplicado a sueldos y salarios.', 30, ['Entender el ISR progresivo', 'Conocer las tablas del [SAT](https://www.sat.gob.mx/)']),
    lesson('l06-02', 'tablas-isr', 52, 'Tablas de ISR', 'Leer e interpretar las tablas de ISR mensuales y anuales.', 35, ['Leer tablas del [SAT](https://www.sat.gob.mx/)', 'Identificar límites y tasas']),
    lesson('l06-03', 'base-gravable', 53, 'Base gravable', 'Calcular la base gravable para determinar el ISR.', 30, ['Calcular base gravable', 'Restar percepciones exentas']),
    lesson('l06-04', 'subsidio-empleo', 54, 'Subsidio al empleo', 'Aplicar el subsidio al empleo según tablas 2026.', 30, ['Calcular subsidio al empleo', 'Entender actualización 2026']),
    lesson('l06-05', 'isr-en-noi', 55, 'ISR en NOI', 'Verificar el cálculo de ISR que realiza NOI.', 25, ['Localizar ISR en NOI', 'Auditar el cálculo']),
    lesson('l06-06', 'imss-generalidades', 56, '[IMSS](https://www.imss.gob.mx/)', 'Estructura de las cuotas obrero-patronales del [IMSS](https://www.imss.gob.mx/).', 35, ['Conocer los ramos del [IMSS](https://www.imss.gob.mx/)', 'Identificar tasas por ramo']),
    lesson('l06-07', 'sbc-sdi', 57, 'SBC/SDI', 'Calcular el Salario Base de Cotización para cuotas [IMSS](https://www.imss.gob.mx/).', 30, ['Calcular SBC con topes', 'Aplicar límite de 25 [UMA](https://www.inegi.org.mx/temas/uma/)']),
    lesson('l06-08', 'cuotas-obreras', 58, 'Cuotas obreras', 'Calcular las cuotas que se descuentan al trabajador por [IMSS](https://www.imss.gob.mx/).', 30, ['Calcular cuota por ramo', 'Sumar cuota total']),
    lesson('l06-09', 'creditos-[infonavit](https://portalmx.infonavit.org.mx/)', 59, 'Créditos [INFONAVIT](https://portalmx.infonavit.org.mx/)', 'Configurar y verificar la retención de créditos [INFONAVIT](https://portalmx.infonavit.org.mx/).', 25, ['Configurar tipo de crédito', 'Verificar descuento']),
    lesson('l06-10', 'auditoria-fiscal', 60, 'Auditoría ISR/[IMSS](https://www.imss.gob.mx/)/[INFONAVIT](https://portalmx.infonavit.org.mx/)', 'Auditar los cálculos fiscales de la nómina procesada.', 35, ['Comparar manual vs NOI', 'Detectar y corregir errores']),
  ],
};
