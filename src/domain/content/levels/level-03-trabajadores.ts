/**
 * NIVEL 3 — Trabajadores (Lecciones 21–30)
 * Catálogo de trabajadores, altas, bajas, datos fiscales y laborales.
 */
import type { Level, Lesson } from '@/domain/models/course.model';

function createLesson(id: string, slug: string, num: number, title: string, desc: string, mins: number, objectives: string[]): Lesson {
  return {
    id, slug, number: num, title, description: desc, durationMinutes: mins, objectives,
    sections: [
      { id: `${id}-s1`, type: 'concept', title: `Concepto: ${title}`, content: `En esta lección aprenderás sobre: ${desc}\n\nEste es uno de los temas fundamentales del nivel de Trabajadores. Sin un catálogo de trabajadores correctamente configurado, no podrás procesar nómina ni timbrar CFDI.` },
      { id: `${id}-s2`, type: 'explanation', title: 'Explicación detallada', content: `${desc}\n\nLos datos del trabajador en NOI incluyen información personal, fiscal, laboral y de seguridad social. Cada campo tiene un propósito específico y afecta diferentes cálculos y reportes.` },
      { id: `${id}-s3`, type: 'numeric-example', title: 'Ejemplo práctico', content: `Usando nuestra empresa Comercializadora Horizonte, veremos cómo se aplica ${title.toLowerCase()} con datos reales de los 10 empleados que daremos de alta durante este nivel.` },
      { id: `${id}-s4`, type: 'noi-procedure', title: 'Procedimiento en NOI', content: `Paso a paso de cómo realizar ${title.toLowerCase()} en Aspel NOI 11. Accede a Edición → Trabajadores para gestionar el catálogo.`, steps: ['Abre Edición → Trabajadores.', 'Selecciona la opción correspondiente (Alta/Modificar/Baja).', 'Llena los campos requeridos.', 'Guarda los cambios.'] },
      { id: `${id}-s5`, type: 'guided-exercise', title: 'Ejercicio guiado', content: `Practicaremos ${title.toLowerCase()} con uno de los empleados de Comercializadora Horizonte.` },
      { id: `${id}-s6`, type: 'practice-exercise', title: 'Ejercicio para ti', content: `Ahora es tu turno. Realiza ${title.toLowerCase()} por tu cuenta con datos diferentes a los del ejercicio guiado.` },
      { id: `${id}-s7`, type: 'common-errors', title: 'Errores frecuentes', content: `Los errores más comunes al trabajar con ${title.toLowerCase()} incluyen datos incompletos, formatos incorrectos y no validar la información antes de guardar.` },
    ],
    quiz: {
      id: `q${id.slice(1)}`, title: `Mini examen — Lección ${num}`, description: `Verifica tu comprensión de ${title.toLowerCase()}.`, passingScore: 70,
      questions: [
        { id: `q${id.slice(1)}-1`, question: `¿Cuál es el aspecto más importante de ${title.toLowerCase()}?`, options: ['Velocidad de captura', 'Exactitud y completitud de datos', 'Usar atajos de teclado', 'Hacerlo al final del mes'], correctAnswer: 1, explanation: 'La exactitud y completitud de los datos es fundamental para cálculos correctos y timbrado exitoso.' },
        { id: `q${id.slice(1)}-2`, question: `¿En qué menú de NOI se gestiona ${title.toLowerCase()}?`, options: ['Archivo', 'Edición', 'Nómina', 'Reportes'], correctAnswer: 1, explanation: 'El catálogo de trabajadores y sus datos se gestionan desde el menú Edición.' },
      ],
    },
  };
}

export const level03: Level = {
  id: 'level-03', slug: 'trabajadores', number: 3,
  title: 'Trabajadores', subtitle: '20 → 30',
  description: 'Catálogo de trabajadores: alta, baja, modificación. Datos personales, fiscales (RFC, CURP), de seguridad social (NSS), contrato, jornada, salario, SDI, departamento y puesto.',
  difficulty: 'beginner', color: 'green', icon: '🟢',
  practicalCase: 'Dar de alta 10 empleados diferentes en Comercializadora Horizonte con diversos perfiles: diferentes sueldos, antigüedades, departamentos y tipos de contrato.',
  lessons: [
    createLesson('l03-01', 'catalogo-trabajadores', 21, 'Catálogo de trabajadores', 'Entender la estructura del catálogo de trabajadores en NOI y los campos que lo componen.', 25, ['Identificar todos los campos del catálogo', 'Entender la relación entre campos y cálculos']),
    createLesson('l03-02', 'alta-trabajador', 22, 'Alta de trabajador', 'Dar de alta un nuevo trabajador en NOI con todos los datos requeridos.', 30, ['Completar el formulario de alta correctamente', 'Validar datos antes de guardar']),
    createLesson('l03-03', 'rfc-curp', 23, 'RFC y CURP', 'Configurar correctamente el RFC y la CURP del trabajador para timbrado.', 20, ['Validar formato de RFC persona física', 'Validar formato de CURP']),
    createLesson('l03-04', 'numero-seguridad-social', 24, 'Número de Seguridad Social', 'Registrar el NSS del trabajador y entender su importancia para el [IMSS](https://www.imss.gob.mx/).', 20, ['Validar estructura del NSS', 'Entender la relación NSS-[IMSS](https://www.imss.gob.mx/)']),
    createLesson('l03-05', 'datos-fiscales-trabajador', 25, 'Datos fiscales del trabajador', 'Configurar régimen fiscal, código postal y datos para timbrado del CFDI del trabajador.', 25, ['Configurar régimen fiscal del trabajador', 'Asegurar datos completos para CFDI']),
    createLesson('l03-06', 'contrato-jornada', 26, 'Contrato y jornada', 'Definir tipo de contrato, tipo de jornada y horario del trabajador.', 25, ['Seleccionar tipo de contrato correcto', 'Configurar tipo de jornada']),
    createLesson('l03-07', 'salario-trabajador', 27, 'Salario', 'Capturar el salario del trabajador y entender cómo NOI lo usa para cálculos.', 25, ['Capturar sueldo correctamente', 'Verificar el cálculo del salario diario']),
    createLesson('l03-08', 'sdi-trabajador', 28, 'SDI del trabajador', 'Verificar que NOI calcule correctamente el SDI según antigüedad y prestaciones.', 30, ['Verificar factor de integración', 'Comparar SDI manual vs NOI']),
    createLesson('l03-09', 'departamento-puesto', 29, 'Departamento y puesto', 'Organizar trabajadores por departamento y puesto para reportes y gestión.', 20, ['Crear catálogo de departamentos', 'Asignar puestos a trabajadores']),
    createLesson('l03-10', 'modificacion-baja', 30, 'Modificación y baja de trabajadores', 'Modificar datos de un trabajador existente y dar de baja correctamente.', 25, ['Modificar datos sin afectar históricos', 'Procesar baja con fecha correcta']),
  ],
};
