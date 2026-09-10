/**
 * NIVEL 8 — CFDI de Nómina (Lecciones 71–80)
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

export const level08: Level = {
  id: 'level-08', slug: 'cfdi-nomina', number: 8,
  title: 'CFDI de Nómina', subtitle: '70 → 80',
  description: 'Todo sobre el CFDI de nómina: complemento, configuración fiscal, certificados, timbrado, XML, representación impresa, cancelación y corrección de errores.',
  difficulty: 'advanced', color: 'orange', icon: '🟠',
  practicalCase: 'Timbrar los CFDI de la nómina de Comercializadora Horizonte, verificar UUID y XML, y corregir un error de timbrado.',
  lessons: [
    lesson('l08-01', 'que-es-cfdi-nomina', 71, '¿Qué es un CFDI de nómina?', 'Entender el comprobante fiscal digital y su obligatoriedad.', 25, ['Definir CFDI de nómina', 'Conocer la obligación fiscal']),
    lesson('l08-02', 'complemento-nomina', 72, '[Complemento de nómina](http://omawww.sat.gob.mx/tramitesyservicios/Paginas/complemento_nomina.htm)', 'Entender la estructura del [complemento de nómina](http://omawww.sat.gob.mx/tramitesyservicios/Paginas/complemento_nomina.htm) del [SAT](https://www.sat.gob.mx/).', 30, ['Leer un XML de nómina', 'Identificar nodos principales']),
    lesson('l08-03', 'configuracion-fiscal-timbrado', 73, 'Configuración fiscal para timbrado', 'Configurar certificados CSD y datos del PAC en NOI.', 30, ['Instalar certificados CSD', 'Configurar PAC']),
    lesson('l08-04', 'certificados', 74, 'Certificados', 'Instalar y gestionar los certificados de sello digital (CSD).', 25, ['Obtener CSD del [SAT](https://www.sat.gob.mx/)', 'Instalar en NOI']),
    lesson('l08-05', 'configuracion-timbrado', 75, 'Configuración del timbrado', 'Configurar el proveedor de certificación (PAC) en NOI.', 25, ['Seleccionar PAC', 'Probar conexión']),
    lesson('l08-06', 'cierre-previo-timbrado', 76, 'Cierre de nómina previo al timbrado', 'Verificar que la nómina esté correctamente cerrada antes de timbrar.', 20, ['Verificar cierre', 'Revisar totales']),
    lesson('l08-07', 'timbrado', 77, 'Timbrado', 'Ejecutar el proceso de timbrado de los recibos de nómina.', 30, ['Timbrar recibos', 'Verificar UUID asignado']),
    lesson('l08-08', 'xml-representacion', 78, 'XML y representación impresa', 'Consultar el XML generado y la representación impresa del CFDI.', 25, ['Leer XML', 'Verificar datos en representación impresa']),
    lesson('l08-09', 'cancelacion', 79, 'Cancelación de CFDI', 'Cancelar un CFDI de nómina cuando hay errores.', 30, ['Proceso de cancelación', 'Motivos válidos', 'Re-timbrado']),
    lesson('l08-10', 'errores-timbrado', 80, 'Corrección de errores de timbrado', 'Diagnosticar y corregir errores comunes al timbrar.', 30, ['Interpretar códigos de error', 'Corregir datos y re-timbrar']),
  ],
};
