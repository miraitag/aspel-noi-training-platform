/**
 * NIVEL 5 — Procesamiento de una nómina real (Lecciones 41–50)
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

export const level05: Level = {
  id: 'level-05', slug: 'nomina-real', number: 5,
  title: 'Procesamiento de una Nómina Real', subtitle: '40 → 50',
  description: 'Proceso completo de una nómina: crear periodo, revisar trabajadores, capturar movimientos, procesar, revisar reportes, calcular neto y cerrar nómina.',
  difficulty: 'intermediate', color: 'yellow', icon: '🟡',
  practicalCase: 'Procesar la nómina quincenal completa de Comercializadora Horizonte con sus 10 empleados, incluyendo movimientos, percepciones individuales, deducciones y cierre.',
  lessons: [
    lesson('l05-01', 'crear-periodo-nomina', 41, 'Crear periodo', 'Crear y abrir un periodo de nómina para procesamiento.', 20, ['Crear un nuevo periodo', 'Verificar fechas del periodo']),
    lesson('l05-02', 'revisar-trabajadores-periodo', 42, 'Revisar trabajadores', 'Verificar que los trabajadores activos están correctamente configurados antes de procesar.', 25, ['Listar trabajadores activos', 'Verificar datos completos']),
    lesson('l05-03', 'capturar-movimientos', 43, 'Capturar movimientos', 'Capturar movimientos e incidencias del periodo (faltas, horas extra, bonos).', 30, ['Capturar movimientos individuales', 'Usar captura masiva']),
    lesson('l05-04', 'percepciones-individuales', 44, 'Percepciones individuales', 'Aplicar percepciones específicas a trabajadores individuales.', 25, ['Asignar percepciones por trabajador', 'Verificar montos']),
    lesson('l05-05', 'deducciones-individuales', 45, 'Deducciones individuales', 'Aplicar deducciones específicas a trabajadores individuales.', 25, ['Asignar deducciones por trabajador', 'Verificar retenciones']),
    lesson('l05-06', 'movimientos-repetitivos', 46, 'Movimientos repetitivos', 'Configurar movimientos que se repiten en cada periodo.', 20, ['Crear movimientos repetitivos', 'Administrar vigencia']),
    lesson('l05-07', 'revision-nomina', 47, 'Revisión de nómina', 'Revisar la nómina procesada antes de cerrarla.', 30, ['Revisar por trabajador', 'Identificar anomalías']),
    lesson('l05-08', 'reportes-nomina', 48, 'Reportes', 'Generar y analizar reportes de nómina.', 25, ['Generar reporte de nómina', 'Interpretar totales']),
    lesson('l05-09', 'neto-a-pagar', 49, 'Neto a pagar', 'Verificar el neto a pagar y preparar la dispersión bancaria.', 25, ['Verificar netos individuales', 'Generar layout bancario']),
    lesson('l05-10', 'cierre-nomina', 50, 'Cierre de nómina', 'Cerrar el periodo de nómina y preparar para timbrado.', 30, ['Cerrar nómina correctamente', 'Entender qué pasa después del cierre']),
  ],
};
