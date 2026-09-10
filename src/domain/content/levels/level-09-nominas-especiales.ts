/**
 * NIVEL 9 — Nóminas Especiales (Lecciones 81–90)
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

export const level09: Level = {
  id: 'level-09', slug: 'nominas-especiales', number: 9,
  title: 'Nóminas Especiales', subtitle: '80 → 90',
  description: 'Cálculos especiales: vacaciones avanzadas, prima vacacional, aguinaldo, PTU, finiquito, renuncia, despido, indemnización, nómina extraordinaria y cálculo anual de ISR.',
  difficulty: 'expert', color: 'red', icon: '🔴',
  practicalCase: 'Empleado con 6 años de antigüedad renuncia. Calcular finiquito completo: vacaciones proporcionales, prima vacacional, aguinaldo proporcional, salarios devengados, ISR.',
  lessons: [
    lesson('l09-01', 'vacaciones-avanzadas', 81, 'Vacaciones avanzadas', 'Cálculo avanzado de vacaciones con antigüedad, proporcionalidad y periodos no gozados.', 30, ['Calcular vacaciones proporcionales', 'Manejar periodos acumulados']),
    lesson('l09-02', 'prima-vacacional-avanzada', 82, 'Prima vacacional avanzada', 'Cálculo de prima vacacional con diferentes escenarios y su tratamiento fiscal.', 25, ['Calcular prima para diferentes antigüedades', 'Aplicar exención correcta']),
    lesson('l09-03', 'aguinaldo', 83, 'Aguinaldo', 'Cálculo completo del aguinaldo: proporcional, base fiscal, exención y retención.', 35, ['Calcular aguinaldo proporcional', 'Determinar parte gravada y exenta']),
    lesson('l09-04', 'ptu', 84, 'PTU', 'Reparto de utilidades: base, cálculo por días trabajados y por salario devengado.', 35, ['Calcular PTU por trabajador', 'Aplicar topes y exenciones']),
    lesson('l09-05', 'finiquito', 85, 'Finiquito', 'Cálculo completo del finiquito por terminación de relación laboral.', 40, ['Identificar conceptos del finiquito', 'Calcular cada concepto']),
    lesson('l09-06', 'renuncia', 86, 'Renuncia', 'Procesamiento de baja voluntaria y liquidación de prestaciones.', 30, ['Procesar renuncia en NOI', 'Calcular pago final']),
    lesson('l09-07', 'despido', 87, 'Despido', 'Procesamiento de despido y cálculo de indemnización constitucional.', 35, ['Diferenciar despido justificado de injustificado', 'Calcular indemnización']),
    lesson('l09-08', 'indemnizacion', 88, 'Indemnización', 'Cálculo detallado de 3 meses, 20 días/año, prima de antigüedad.', 35, ['Calcular 3 meses constitucionales', 'Calcular 20 días por año']),
    lesson('l09-09', 'nomina-extraordinaria', 89, 'Nómina extraordinaria', 'Crear y procesar nóminas fuera del calendario regular.', 25, ['Crear nómina extraordinaria', 'Procesar y timbrar']),
    lesson('l09-10', 'calculo-anual-isr', 90, 'Cálculo anual de ISR', 'Realizar el cálculo anual de ISR de los trabajadores.', 40, ['Acumular percepciones del ejercicio', 'Calcular ISR anual vs retenido']),
  ],
};
