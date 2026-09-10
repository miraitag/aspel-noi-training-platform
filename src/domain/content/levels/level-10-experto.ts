/**
 * NIVEL 10 — Aspel NOI Experto (Lecciones 91–100)
 *
 * Aquí cambia la dinámica. Ya no se dice "Haz clic aquí."
 * Se presentan problemas reales.
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

export const level10: Level = {
  id: 'level-10', slug: 'experto', number: 10,
  title: 'Aspel NOI Experto', subtitle: '90 → 100',
  description: 'Nivel experto: auditorías, diagnóstico de errores, correcciones fiscales, respaldos avanzados, cierre anual y proyecto final con auditoría completa de nómina.',
  difficulty: 'expert', color: 'fire', icon: '🔥',
  practicalCase: 'Proyecto final: auditoría completa de una empresa con ~20 empleados, diferentes condiciones, errores deliberados que debes encontrar y corregir.',
  lessons: [
    lesson('l10-01', 'auditoria-trabajadores', 91, 'Auditoría de trabajadores', 'Revisar sistemáticamente el catálogo de trabajadores para detectar inconsistencias.', 35, ['Detectar datos faltantes', 'Verificar consistencia RFC/CURP/NSS']),
    lesson('l10-02', 'auditoria-percepciones-deducciones', 92, 'Auditoría de percepciones y deducciones', 'Auditar que los conceptos de nómina estén correctamente configurados.', 35, ['Verificar claves [SAT](https://www.sat.gob.mx/)', 'Auditar fórmulas y bases fiscales']),
    lesson('l10-03', 'auditoria-fiscal', 93, 'Auditoría fiscal', 'Verificar que los cálculos de ISR, [IMSS](https://www.imss.gob.mx/) e [INFONAVIT](https://portalmx.infonavit.org.mx/) sean correctos.', 40, ['Auditar ISR retenido vs calculado', 'Verificar cuotas [IMSS](https://www.imss.gob.mx/)']),
    lesson('l10-04', 'errores-isr', 94, 'Errores en ISR', 'Diagnosticar y corregir errores comunes en el cálculo del ISR.', 35, ['Identificar ISR sobre-retenido', 'Corregir subsidio mal aplicado']),
    lesson('l10-05', 'errores-imss', 95, 'Errores [IMSS](https://www.imss.gob.mx/)', 'Diagnosticar y corregir errores en las cuotas del [IMSS](https://www.imss.gob.mx/).', 30, ['Verificar SBC reportado', 'Corregir movimientos afiliatorios']),
    lesson('l10-06', 'errores-[infonavit](https://portalmx.infonavit.org.mx/)', 96, 'Errores [INFONAVIT](https://portalmx.infonavit.org.mx/)', 'Diagnosticar y corregir errores en retenciones de [INFONAVIT](https://portalmx.infonavit.org.mx/).', 30, ['Verificar tipo de crédito', 'Corregir montos retenidos']),
    lesson('l10-07', 'errores-cfdi', 97, 'Errores CFDI', 'Diagnosticar y corregir errores en CFDI timbrados.', 35, ['Analizar XML con errores', 'Proceso de cancelación y re-timbrado']),
    lesson('l10-08', 'respaldos-recuperacion', 98, 'Respaldos y recuperación avanzados', 'Estrategias avanzadas de respaldo, recuperación ante desastres y migración.', 25, ['Plan de recuperación ante desastres', 'Migración entre equipos']),
    lesson('l10-09', 'cierre-anual', 99, 'Cierre mensual y anual', 'Procesos de cierre mensual, bimestral y anual en NOI.', 35, ['Cierre mensual de nómina', 'Cierre de ejercicio fiscal']),
    lesson('l10-10', 'proyecto-final', 100, 'Proyecto final: auditoría completa de nómina', 'Auditoría integral de una empresa con ~20 empleados, diferentes condiciones y errores deliberados.', 60, ['Auditar empresa completa', 'Encontrar y corregir errores', 'Generar reporte de auditoría']),
  ],
};
