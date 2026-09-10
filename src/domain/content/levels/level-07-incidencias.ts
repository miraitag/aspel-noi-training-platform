/**
 * NIVEL 7 — Incidencias (Lecciones 61–70)
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

export const level07: Level = {
  id: 'level-07', slug: 'incidencias', number: 7,
  title: 'Incidencias', subtitle: '60 → 70',
  description: 'Manejo de incidencias: faltas, retardos, horas extra, incapacidades, vacaciones, prima vacacional, permisos, bonos, comisiones y movimientos repetitivos.',
  difficulty: 'advanced', color: 'orange', icon: '🟠',
  practicalCase: 'Procesar nómina con múltiples incidencias simultáneas: un empleado con horas extra + bono, otro con faltas + incapacidad, otro en vacaciones.',
  lessons: [
    lesson('l07-01', 'faltas', 61, 'Faltas', 'Registrar faltas justificadas e injustificadas y su impacto en la nómina.', 25, ['Calcular descuento por falta', 'Impacto en SDI y [IMSS](https://www.imss.gob.mx/)']),
    lesson('l07-02', 'retardos', 62, 'Retardos', 'Registrar retardos y su conversión a faltas según reglamento.', 20, ['Configurar política de retardos', 'Convertir retardos a faltas']),
    lesson('l07-03', 'horas-extra', 63, 'Horas extra', 'Calcular y registrar horas extra simples, dobles y triples.', 35, ['Calcular horas extra dobles', 'Calcular horas extra triples', 'Conocer parte gravada y exenta']),
    lesson('l07-04', 'incapacidades', 64, 'Incapacidades', 'Registrar incapacidades del [IMSS](https://www.imss.gob.mx/) y su subsidio.', 30, ['Tipos de incapacidad', 'Calcular subsidio [IMSS](https://www.imss.gob.mx/)']),
    lesson('l07-05', 'vacaciones', 65, 'Vacaciones', 'Calcular y registrar días de vacaciones según antigüedad.', 30, ['Calcular días por antigüedad', 'Registrar goce de vacaciones']),
    lesson('l07-06', 'prima-vacacional', 66, 'Prima vacacional', 'Calcular la prima vacacional y su tratamiento fiscal.', 25, ['Calcular prima al 25%', 'Determinar parte gravada/exenta']),
    lesson('l07-07', 'permisos', 67, 'Permisos', 'Registrar permisos con y sin goce de sueldo.', 20, ['Diferenciar tipos de permiso', 'Registrar en NOI']),
    lesson('l07-08', 'bonos', 68, 'Bonos', 'Configurar y pagar bonos de productividad, puntualidad y asistencia.', 25, ['Crear concepto de bono', 'Aplicar a trabajadores']),
    lesson('l07-09', 'comisiones', 69, 'Comisiones', 'Calcular y registrar comisiones por ventas u objetivos.', 25, ['Configurar fórmula de comisión', 'Integración al SDI']),
    lesson('l07-10', 'movimientos-repetitivos-avanzados', 70, 'Movimientos repetitivos avanzados', 'Configurar movimientos que se aplican automáticamente cada periodo.', 25, ['Crear movimientos recurrentes', 'Gestionar vigencia y condiciones']),
  ],
};
