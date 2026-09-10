/**
 * NIVEL 1 — Fundamentos de Nómina (Lecciones 1–10)
 *
 * Aquí todavía no se depende de NOI.
 * Primero se debe entender qué está haciendo el programa.
 */

import type { Level } from '@/domain/models/course.model';

export const level01: Level = {
  id: 'level-01',
  slug: 'fundamentos-nomina',
  number: 1,
  title: 'Fundamentos de Nómina',
  subtitle: '0 → 10',
  description:
    'Antes de abrir NOI, necesitas entender qué es una nómina, cómo se estructura y qué cálculos hace el programa por ti. Sin estos fundamentos, serás un operador que presiona botones sin saber por qué.',
  difficulty: 'beginner',
  color: 'green',
  icon: '🟢',
  practicalCase:
    'Calcular manualmente la nómina de un empleado con sueldo mensual de $15,000: salario diario → percepciones → deducciones → ISR/[IMSS](https://www.imss.gob.mx/) → neto a pagar.',
  lessons: [
    // ── Lección 1 ────────────────────────────────────────
    {
      id: 'l01-01',
      slug: 'que-es-una-nomina',
      number: 1,
      title: '¿Qué es una nómina?',
      description:
        'Entender el concepto fundamental de la nómina y su importancia en la relación laboral.',
      durationMinutes: 30,
      objectives: [
        'Definir qué es una nómina y para qué sirve',
        'Identificar los actores involucrados: patrón, trabajador, autoridades',
        'Comprender la obligación legal de la nómina en México',
        'Distinguir entre nómina interna y el recibo de nómina (CFDI)',
      ],
      sections: [
        {
          id: 'l01-01-s1',
          type: 'concept',
          title: '¿Qué es una nómina?',
          content:
            'Una nómina es el registro detallado de los pagos que un patrón realiza a sus trabajadores por sus servicios durante un periodo determinado. No es simplemente "lo que le pagas al empleado"; es un documento legal, fiscal y contable que refleja percepciones, deducciones y el neto a pagar.\n\nEn México, la nómina está regulada por la [Ley Federal del Trabajo](https://www.diputados.gob.mx/LeyesBiblio/pdf/[LFT](https://www.diputados.gob.mx/LeyesBiblio/pdf/125_240124.pdf).pdf) ([LFT](https://www.diputados.gob.mx/LeyesBiblio/pdf/125_240124.pdf)), la Ley del Seguro Social (LSS), la Ley del ISR y el Código Fiscal de la Federación (CFF). Cumplir con la nómina no es opcional: es una obligación patronal.',
        },
        {
          id: 'l01-01-s2',
          type: 'explanation',
          title: '¿Por qué importa la nómina?',
          content:
            'Piensa en la nómina como la columna vertebral de la relación laboral. Desde ella se derivan:\n\n- **Obligaciones fiscales**: retención y entero de ISR, cuotas al [IMSS](https://www.imss.gob.mx/) e [INFONAVIT](https://portalmx.infonavit.org.mx/).\n- **Derechos del trabajador**: aguinaldo, vacaciones, prima vacacional, PTU, antigüedad.\n- **Comprobantes fiscales**: los recibos de nómina son CFDI que el [SAT](https://www.sat.gob.mx/) vigila.\n- **Contabilidad**: la nómina es un gasto deducible para la empresa si se timbra correctamente.\n\nUna nómina mal calculada puede generar multas del [SAT](https://www.sat.gob.mx/), demandas laborales, créditos fiscales y pérdida de deducibilidad.',
          callouts: [
            {
              type: 'important',
              content:
                'En México, desde 2014 es obligatorio emitir el recibo de nómina como CFDI (factura electrónica). No basta con pagar; hay que timbrar.',
            },
          ],
        },
        {
          id: 'l01-01-s3',
          type: 'numeric-example',
          title: 'Anatomía básica de una nómina',
          content:
            'Una nómina, en su forma más simple, tiene tres partes:\n\n**1. Percepciones** — Todo lo que el trabajador RECIBE.\n**2. Deducciones** — Todo lo que se le RESTA.\n**3. Neto a pagar** — Lo que realmente llega a su cuenta.\n\nEjemplo simplificado:',
          codeBlocks: [
            {
              language: 'text',
              label: 'Nómina simplificada',
              code: 'PERCEPCIONES\n  Sueldo quincenal:       $7,500.00\n  Bono de puntualidad:      $500.00\n  ─────────────────────────────────\n  Total percepciones:     $8,000.00\n\nDEDUCCIONES\n  ISR:                      $890.00\n  [IMSS](https://www.imss.gob.mx/) (cuota obrera):      $250.00\n  ─────────────────────────────────\n  Total deducciones:      $1,140.00\n\nNETO A PAGAR:             $6,860.00',
            },
          ],
        },
        {
          id: 'l01-01-s4',
          type: 'noi-procedure',
          title: 'La nómina en Aspel NOI',
          content:
            'En esta lección todavía no abrimos NOI, pero es importante que sepas qué hace el programa con la nómina:\n\n1. **Registra** a los trabajadores con todos sus datos fiscales y laborales.\n2. **Calcula** automáticamente percepciones y deducciones según las leyes vigentes.\n3. **Genera** los recibos de nómina.\n4. **Timbra** los CFDI para cumplir con el [SAT](https://www.sat.gob.mx/).\n5. **Reporta** las cuotas obrero-patronales al [IMSS](https://www.imss.gob.mx/) e [INFONAVIT](https://portalmx.infonavit.org.mx/).\n\nNOI hace los cálculos por ti, pero si no entiendes qué está calculando y por qué, no podrás detectar errores. Esa es exactamente la razón de este primer nivel.',
          callouts: [
            {
              type: 'tip',
              content:
                'La meta de este nivel es que puedas hacer a mano lo que NOI hará automáticamente. Así, cuando veas un resultado en el programa, sabrás si tiene sentido o no.',
            },
          ],
        },
        {
          id: 'l01-01-s5',
          type: 'guided-exercise',
          title: 'Ejercicio guiado: identifica las partes',
          content:
            'Observa el siguiente recibo de nómina simplificado e identifica:\n\n- ¿Cuáles son las percepciones?\n- ¿Cuáles son las deducciones?\n- ¿Cuál es el neto a pagar?\n- ¿Qué porcentaje del sueldo bruto se fue en deducciones?',
          codeBlocks: [
            {
              language: 'text',
              label: 'Recibo de María López — Quincena 1, Septiembre 2026',
              code: 'Sueldo:                  $9,000.00\nHoras extra dobles:        $375.00\nPrima dominical:           $225.00\n─────────────────────────────────\nTotal percepciones:      $9,600.00\n\nISR:                     $1,056.00\nIMSS:                      $312.00\nCrédito [INFONAVIT](https://portalmx.infonavit.org.mx/):         $450.00\n─────────────────────────────────\nTotal deducciones:       $1,818.00\n\nNETO A PAGAR:            $7,782.00',
            },
          ],
          steps: [
            'Percepciones: Sueldo ($9,000) + Horas extra ($375) + Prima dominical ($225) = $9,600',
            'Deducciones: ISR ($1,056) + [IMSS](https://www.imss.gob.mx/) ($312) + [INFONAVIT](https://portalmx.infonavit.org.mx/) ($450) = $1,818',
            'Neto: $9,600 - $1,818 = $7,782',
            'Porcentaje de deducciones: $1,818 / $9,600 × 100 = 18.94%',
          ],
        },
        {
          id: 'l01-01-s6',
          type: 'practice-exercise',
          title: 'Ejercicio para ti',
          content:
            'Un trabajador tiene las siguientes percepciones en una quincena:\n\n- Sueldo: $12,000\n- Bono de productividad: $1,500\n- Ayuda de transporte: $800\n\nSus deducciones son:\n- ISR: $1,420\n- [IMSS](https://www.imss.gob.mx/): $480\n- Préstamo personal: $2,000\n\n**Calcula:**\n1. Total de percepciones\n2. Total de deducciones\n3. Neto a pagar\n4. ¿Qué porcentaje de sus percepciones se fue en deducciones?',
          solution:
            '1. **Total de percepciones:** $12,000 + $1,500 + $800 = **$14,300**\n2. **Total de deducciones:** $1,420 + $480 + $2,000 = **$3,900**\n3. **Neto a pagar:** $14,300 - $3,900 = **$10,400**\n4. **Porcentaje de deducciones:** ($3,900 / $14,300) × 100 = **27.27%**',
        },
        {
          id: 'l01-01-s7',
          type: 'common-errors',
          title: 'Errores frecuentes',
          content:
            '**❌ Confundir sueldo bruto con sueldo neto.**\nEl bruto es antes de deducciones; el neto es lo que recibe el trabajador. Cuando alguien dice "gano $15,000", casi siempre se refiere al bruto.\n\n**❌ Pensar que la nómina es solo "pagar al empleado".**\nLa nómina implica cálculos fiscales (ISR), de seguridad social ([IMSS](https://www.imss.gob.mx/)), de vivienda ([INFONAVIT](https://portalmx.infonavit.org.mx/)), y la generación de comprobantes fiscales (CFDI).\n\n**❌ Ignorar que la nómina es un documento legal.**\nNo llevar nómina correctamente puede resultar en multas de hasta $5,000 UMAS (más de $500,000 MXN en 2026).',
        },
      ],
      quiz: {
        id: 'q01-01',
        title: 'Mini examen — Lección 1',
        description: 'Verifica que comprendiste los conceptos fundamentales de la nómina.',
        passingScore: 70,
        questions: [
          {
            id: 'q01-01-1',
            question: '¿Qué es una nómina?',
            options: [
              'El cheque que recibe el trabajador',
              'Un registro detallado de pagos del patrón al trabajador con percepciones, deducciones y neto',
              'Un formato del [SAT](https://www.sat.gob.mx/) para cobrar impuestos',
              'El contrato de trabajo entre patrón y empleado',
            ],
            correctAnswer: 1,
            explanation:
              'La nómina es el registro detallado de percepciones, deducciones y neto a pagar. No es solo el pago, sino todo el documento legal, fiscal y contable.',
          },
          {
            id: 'q01-01-2',
            question: 'Si un trabajador tiene percepciones de $10,000 y deducciones de $2,300, ¿cuál es su neto a pagar?',
            options: ['$12,300', '$10,000', '$7,700', '$2,300'],
            correctAnswer: 2,
            explanation: 'Neto = Percepciones - Deducciones = $10,000 - $2,300 = $7,700.',
          },
          {
            id: 'q01-01-3',
            question: '¿Desde qué año es obligatorio en México emitir el recibo de nómina como CFDI?',
            options: ['2010', '2012', '2014', '2018'],
            correctAnswer: 2,
            explanation:
              'Desde 2014, todos los patrones están obligados a emitir el recibo de nómina como Comprobante Fiscal Digital por Internet (CFDI).',
          },
          {
            id: 'q01-01-4',
            question: '¿Cuáles son las tres partes fundamentales de una nómina?',
            options: [
              'Contrato, sueldo y vacaciones',
              'Percepciones, deducciones y neto a pagar',
              'ISR, [IMSS](https://www.imss.gob.mx/) e [INFONAVIT](https://portalmx.infonavit.org.mx/)',
              'Alta, movimiento y baja',
            ],
            correctAnswer: 1,
            explanation:
              'Toda nómina se compone de percepciones (lo que recibe), deducciones (lo que se resta) y neto a pagar (la diferencia).',
          },
          {
            id: 'q01-01-5',
            question: '¿Por qué es importante conocer los cálculos de nómina antes de usar NOI?',
            options: [
              'Porque NOI no calcula automáticamente',
              'Para poder detectar errores cuando el programa arroje resultados inesperados',
              'Porque es un requisito del [SAT](https://www.sat.gob.mx/)',
              'No es importante, NOI hace todo solo',
            ],
            correctAnswer: 1,
            explanation:
              'NOI calcula automáticamente, pero si no entiendes los cálculos, no podrás detectar errores. El programa es una herramienta; tú eres el profesional que valida.',
          },
        ],
      },
    },

    // ── Lección 2 ────────────────────────────────────────
    {
      id: 'l01-02',
      slug: 'que-es-aspel-noi',
      number: 2,
      title: '¿Qué es Aspel NOI y para qué sirve?',
      description: 'Conocer el software Aspel NOI 11, sus módulos principales y su rol en la nómina mexicana.',
      durationMinutes: 25,
      objectives: [
        'Describir qué es Aspel NOI y su posición en el mercado mexicano',
        'Identificar los módulos principales del programa',
        'Entender el flujo general de trabajo en NOI',
        'Conocer las novedades de NOI 11 para 2026',
      ],
      sections: [
        {
          id: 'l01-02-s1',
          type: 'concept',
          title: '¿Qué es Aspel NOI?',
          content:
            'Aspel NOI es un sistema de nómina integral desarrollado por Siigo Aspel, una de las empresas de software administrativo más utilizadas en México. NOI (Nómina Integral) permite calcular la nómina de los trabajadores, generar recibos de nómina electrónicos (CFDI), cumplir con las obligaciones ante el [IMSS](https://www.imss.gob.mx/), [INFONAVIT](https://portalmx.infonavit.org.mx/) y [SAT](https://www.sat.gob.mx/), y administrar los recursos humanos de una empresa.\n\nNOI 11 es la versión más reciente y se mantiene actualizada con los cambios fiscales y laborales de cada ejercicio.',
        },
        {
          id: 'l01-02-s2',
          type: 'explanation',
          title: 'Módulos principales de NOI 11',
          content:
            'NOI organiza su funcionalidad en módulos que siguen el flujo natural de la nómina:\n\n- **Empresa**: configuración de datos fiscales, registro patronal, parámetros del sistema.\n- **Trabajadores**: catálogo de empleados con datos personales, fiscales y laborales.\n- **Percepciones y Deducciones**: catálogo de conceptos de pago y descuento.\n- **Nómina**: captura de movimientos, procesamiento y cierre de nómina por periodo.\n- **Recibos Electrónicos**: timbrado de CFDI, consulta y cancelación.\n- **Reportes**: reportes de nómina, acumulados, listados de trabajadores, declaraciones.',
        },
        {
          id: 'l01-02-s3',
          type: 'numeric-example',
          title: 'Flujo general de trabajo en NOI',
          content:
            'El flujo de trabajo en NOI sigue siempre la misma secuencia lógica. Entender este flujo es clave porque cada paso depende del anterior:',
          codeBlocks: [
            {
              language: 'text',
              label: 'Flujo de NOI',
              code: '1. Configurar empresa\n       ↓\n2. Registrar trabajadores\n       ↓\n3. Definir percepciones y deducciones\n       ↓\n4. Crear periodo de nómina\n       ↓\n5. Capturar movimientos (incidencias, extras)\n       ↓\n6. Procesar y revisar la nómina\n       ↓\n7. Cerrar nómina\n       ↓\n8. Timbrar CFDI\n       ↓\n9. Generar reportes',
            },
          ],
          callouts: [
            {
              type: 'important',
              content:
                'Si la empresa no está bien configurada, los cálculos de ISR y [IMSS](https://www.imss.gob.mx/) serán incorrectos. Si los trabajadores no tienen todos los datos, no se podrá timbrar. Cada paso depende del anterior.',
            },
          ],
        },
        {
          id: 'l01-02-s4',
          type: 'noi-procedure',
          title: 'Novedades de NOI 11 — 2026',
          content:
            'NOI 11 se actualiza constantemente para cumplir con los cambios fiscales. Las novedades más relevantes para 2026 incluyen:\n\n- **Subsidio al empleo**: actualización de las tablas y cálculos conforme a la reforma fiscal 2026.\n- **Nuevas claves [SAT](https://www.sat.gob.mx/)**: en junio de 2026 se añadieron nuevas claves al catálogo del [complemento de nómina](http://omawww.sat.gob.mx/tramitesyservicios/Paginas/complemento_nomina.htm).\n- **[Complemento de nómina](http://omawww.sat.gob.mx/tramitesyservicios/Paginas/complemento_nomina.htm) 1.2**: NOI 11 genera el XML con la versión vigente del complemento.\n- **Descarga masiva de CFDI**: herramienta para descargar comprobantes timbrados.\n- **Compensación de ISR anual**: módulo para el cálculo y compensación del ISR del ejercicio.\n- **Respaldos automáticos**: programación de respaldos de la información.',
          callouts: [
            {
              type: 'warning',
              content:
                'Las actualizaciones de NOI son frecuentes. Antes de procesar cualquier nómina, verifica que tengas la última versión instalada. Usar una versión desactualizada puede generar CFDI con datos incorrectos.',
            },
          ],
        },
        {
          id: 'l01-02-s5',
          type: 'guided-exercise',
          title: 'Ejercicio guiado: mapea el flujo',
          content:
            'Usando el flujo de trabajo que acabamos de ver, responde:\n\n1. ¿Qué pasa si intentas timbrar CFDI sin haber cerrado la nómina?\n2. ¿Qué pasa si registras un trabajador sin RFC?\n3. ¿En qué paso del flujo capturas las horas extra de un empleado?',
          steps: [
            '1. No se puede timbrar sin cerrar. El timbrado (paso 8) requiere que la nómina esté cerrada (paso 7).',
            '2. Sin RFC no se puede timbrar el CFDI del trabajador. El registro (paso 2) debe estar completo antes de procesar.',
            '3. Las horas extra se capturan en el paso 5 (movimientos/incidencias), después de crear el periodo.',
          ],
        },
        {
          id: 'l01-02-s6',
          type: 'practice-exercise',
          title: 'Ejercicio para ti',
          content:
            'Ordena los siguientes pasos del flujo de NOI en el orden correcto:\n\nA) Timbrar CFDI\nB) Registrar trabajadores\nC) Capturar movimientos\nD) Configurar empresa\nE) Cerrar nómina\nF) Crear periodo de nómina\nG) Procesar la nómina\n\n**Escribe el orden correcto (ejemplo: D, B, F, C, G, E, A).**',
          solution:
            '**Orden correcto:** D, B, F, C, G, E, A.\n\n1. (D) Configurar empresa\n2. (B) Registrar trabajadores\n3. (F) Crear periodo de nómina\n4. (C) Capturar movimientos\n5. (G) Procesar la nómina\n6. (E) Cerrar nómina\n7. (A) Timbrar CFDI',
        },
        {
          id: 'l01-02-s7',
          type: 'common-errors',
          title: 'Errores frecuentes',
          content:
            '**❌ Pensar que NOI es solo para empresas grandes.**\nCualquier patrón con al menos un trabajador necesita calcular nómina y timbrar CFDI. NOI sirve desde 1 hasta miles de empleados.\n\n**❌ No actualizar NOI antes de procesar nómina.**\nLas tablas de ISR, [IMSS](https://www.imss.gob.mx/) y claves [SAT](https://www.sat.gob.mx/) cambian periódicamente. Si usas una versión desactualizada, los cálculos y CFDI serán incorrectos.\n\n**❌ Usar NOI sin entender lo que calcula.**\nNOI automatiza cálculos, pero no elimina tu responsabilidad profesional. Si el programa arroja un ISR de $0 para un sueldo de $50,000, debes saber que algo está mal.',
        },
      ],
      quiz: {
        id: 'q01-02',
        title: 'Mini examen — Lección 2',
        description: 'Verifica que conoces las generalidades de Aspel NOI.',
        passingScore: 70,
        questions: [
          {
            id: 'q01-02-1',
            question: '¿Qué significa "NOI" en Aspel NOI?',
            options: ['Nómina Oficial Integrada', 'Nómina Integral', 'Nuevo Operador Integrado', 'Nómina Online Inteligente'],
            correctAnswer: 1,
            explanation: 'NOI significa Nómina Integral, porque integra todos los aspectos de la nómina mexicana en un solo sistema.',
          },
          {
            id: 'q01-02-2',
            question: '¿Cuál es el PRIMER paso en el flujo de trabajo de NOI?',
            options: ['Registrar trabajadores', 'Configurar la empresa', 'Crear el periodo de nómina', 'Capturar movimientos'],
            correctAnswer: 1,
            explanation: 'Siempre se empieza configurando la empresa: datos fiscales, registro patronal y parámetros del sistema.',
          },
          {
            id: 'q01-02-3',
            question: '¿Qué debe pasar ANTES de poder timbrar los CFDI de nómina?',
            options: [
              'Solo capturar los movimientos',
              'Registrar los trabajadores',
              'Cerrar la nómina',
              'Instalar NOI',
            ],
            correctAnswer: 2,
            explanation: 'El timbrado requiere que la nómina esté cerrada. Sin cierre, no hay CFDI.',
          },
          {
            id: 'q01-02-4',
            question: '¿Por qué es importante tener NOI actualizado en 2026?',
            options: [
              'Para que se vea más bonito',
              'Porque las tablas de ISR, [IMSS](https://www.imss.gob.mx/) y claves [SAT](https://www.sat.gob.mx/) cambian y los cálculos deben reflejar la legislación vigente',
              'Para tener más colores en la interfaz',
              'No es importante, las versiones antiguas funcionan igual',
            ],
            correctAnswer: 1,
            explanation: 'Las disposiciones fiscales y laborales cambian constantemente. NOI actualizado garantiza cálculos correctos y CFDI válidos.',
          },
        ],
      },
    },

    // ── Lección 3 ────────────────────────────────────────
    {
      id: 'l01-03',
      slug: 'patron-trabajador-relacion-laboral',
      number: 3,
      title: 'Patrón, trabajador y relación laboral',
      description: 'Comprender los roles legales en una relación laboral y su impacto en la nómina.',
      durationMinutes: 30,
      objectives: [
        'Definir legalmente quién es patrón y quién es trabajador según la [LFT](https://www.diputados.gob.mx/LeyesBiblio/pdf/125_240124.pdf)',
        'Identificar los tipos de relación laboral',
        'Entender las obligaciones patronales relacionadas con la nómina',
        'Distinguir subordinación de prestación de servicios independientes',
      ],
      sections: [
        {
          id: 'l01-03-s1',
          type: 'concept',
          title: '¿Quién es patrón y quién es trabajador?',
          content:
            'Según la [Ley Federal del Trabajo](https://www.diputados.gob.mx/LeyesBiblio/pdf/[LFT](https://www.diputados.gob.mx/LeyesBiblio/pdf/125_240124.pdf).pdf) ([LFT](https://www.diputados.gob.mx/LeyesBiblio/pdf/125_240124.pdf)):\n\n**Patrón** (Art. 10 [LFT](https://www.diputados.gob.mx/LeyesBiblio/pdf/125_240124.pdf)): Persona física o moral que utiliza los servicios de uno o más trabajadores. El patrón puede ser una empresa, un profesionista, o cualquier persona que contrate personal subordinado.\n\n**Trabajador** (Art. 8 [LFT](https://www.diputados.gob.mx/LeyesBiblio/pdf/125_240124.pdf)): Persona física que presta a otra, física o moral, un trabajo personal subordinado. La clave aquí es la palabra "subordinado" — significa que el patrón dirige y el trabajador obedece instrucciones.',
        },
        {
          id: 'l01-03-s2',
          type: 'explanation',
          title: 'Tipos de relación laboral',
          content:
            'La relación laboral puede clasificarse por su duración:\n\n- **Tiempo indeterminado**: Sin fecha de terminación. Es el más común. Incluye periodo de prueba (hasta 30 días, o 180 para puestos directivos).\n- **Tiempo determinado**: Con fecha de inicio y fin. Solo se permite cuando la naturaleza del trabajo lo justifica (obra determinada, suplencia, temporada).\n- **Periodo de prueba**: Máximo 30 días (180 para dirección). Si no se acredita aptitud, la relación puede terminar sin responsabilidad.\n- **Capacitación inicial**: El trabajador adquiere conocimientos o habilidades. Máximo 3 meses (6 para dirección).\n\nEsto importa para la nómina porque el tipo de relación determina prestaciones, antigüedad y tipo de baja.',
          callouts: [
            {
              type: 'note',
              content:
                'En NOI, al dar de alta un trabajador, deberás especificar el tipo de contrato. Esto afecta directamente el timbrado del CFDI.',
            },
          ],
        },
        {
          id: 'l01-03-s3',
          type: 'numeric-example',
          title: 'Obligaciones patronales que impactan la nómina',
          content:
            'Cada obligación del patrón se traduce en un concepto de nómina:\n\n| Obligación | Impacto en nómina |\n|---|---|\n| Pagar salario | Percepción: Sueldo |\n| Inscribir en [IMSS](https://www.imss.gob.mx/) | Deducción: Cuota obrera [IMSS](https://www.imss.gob.mx/) |\n| Retener ISR | Deducción: ISR |\n| Retener [INFONAVIT](https://portalmx.infonavit.org.mx/) | Deducción: Crédito [INFONAVIT](https://portalmx.infonavit.org.mx/) |\n| Otorgar vacaciones | Percepción: Prima vacacional |\n| Pagar aguinaldo | Percepción: Aguinaldo (diciembre) |\n| Reparto de utilidades | Percepción: PTU (mayo) |',
        },
        {
          id: 'l01-03-s4',
          type: 'noi-procedure',
          title: '¿Cómo se refleja en NOI?',
          content:
            'En NOI, la relación laboral se configura en el catálogo de trabajadores:\n\n- **Tipo de contrato**: Indeterminado, determinado, periodo de prueba, capacitación inicial.\n- **Tipo de jornada**: Diurna, nocturna, mixta.\n- **Tipo de régimen**: Sueldos y salarios, asimilados, honorarios.\n- **Registro patronal**: Vincula al trabajador con el patrón ante el [IMSS](https://www.imss.gob.mx/).\n\nTodos estos datos son necesarios para el timbrado del CFDI y deben corresponder exactamente con lo que el patrón reporta al [IMSS](https://www.imss.gob.mx/).',
        },
        {
          id: 'l01-03-s5',
          type: 'guided-exercise',
          title: 'Ejercicio guiado: identifica la relación',
          content:
            'Para cada caso, identifica si existe relación laboral subordinada y qué tipo de contrato aplicaría:\n\n**Caso A**: Juan trabaja de lunes a viernes, de 9 a 6, en las oficinas de la empresa, usando equipo de la empresa, bajo las instrucciones de su jefe.\n\n**Caso B**: María es contadora independiente. Lleva la contabilidad de 5 empresas desde su oficina, con su propio equipo, en el horario que ella decide.',
          steps: [
            'Caso A: SÍ hay relación laboral subordinada. Juan cumple horario, usa equipo del patrón y recibe instrucciones. Contrato por tiempo indeterminado.',
            'Caso B: NO hay relación laboral subordinada. María es prestadora de servicios independientes (honorarios). No se incluye en la nómina.',
          ],
        },
        {
          id: 'l01-03-s6',
          type: 'practice-exercise',
          title: 'Ejercicio para ti',
          content:
            'Determina para cada caso si la persona debe aparecer en la nómina de la empresa:\n\n1. Pedro, vigilante nocturno contratado por tiempo indeterminado.\n2. Sofía, abogada externa que cobra por honorarios cada vez que la empresa la consulta.\n3. Luis, pasante que está en periodo de capacitación inicial (2 meses).\n4. Ana, freelance de diseño que entrega proyectos desde su casa sin horario fijo.\n5. Carlos, chofer que trabaja exclusivamente para la empresa, con horario y vehículo de la empresa.',
          solution:
            '1. **Sí (Pedro)**: Está contratado por tiempo indeterminado.\n2. **No (Sofía)**: Es prestadora de servicios externos (honorarios).\n3. **Sí (Luis)**: El periodo de capacitación inicial es una relación laboral formal.\n4. **No (Ana)**: No hay subordinación, es freelance.\n5. **Sí (Carlos)**: Hay subordinación (horario, herramientas de la empresa, trabajo exclusivo).',
        },
        {
          id: 'l01-03-s7',
          type: 'common-errors',
          title: 'Errores frecuentes',
          content:
            '**❌ Confundir prestador de servicios con trabajador subordinado.**\nSi alguien cumple horario, usa equipo de la empresa y recibe instrucciones, es trabajador subordinado, independientemente de que le paguen por "honorarios".\n\n**❌ No registrar el tipo de contrato correcto en NOI.**\nEl tipo de contrato afecta el timbrado del CFDI. Si el [SAT](https://www.sat.gob.mx/) detecta inconsistencias entre el contrato registrado y la realidad, puede haber observaciones.\n\n**❌ Olvidar que el periodo de prueba tiene límite legal.**\nMáximo 30 días (180 para dirección/administración). Si pasa ese tiempo y el trabajador sigue, la relación se vuelve por tiempo indeterminado automáticamente.',
        },
      ],
      quiz: {
        id: 'q01-03',
        title: 'Mini examen — Lección 3',
        description: 'Verifica que comprendes la relación laboral y sus implicaciones.',
        passingScore: 70,
        questions: [
          {
            id: 'q01-03-1',
            question: '¿Cuál es la palabra clave que define a un trabajador según la [LFT](https://www.diputados.gob.mx/LeyesBiblio/pdf/125_240124.pdf)?',
            options: ['Asalariado', 'Subordinado', 'Empleado', 'Contratado'],
            correctAnswer: 1,
            explanation: 'El Art. 8 de la [LFT](https://www.diputados.gob.mx/LeyesBiblio/pdf/125_240124.pdf) define al trabajador como quien presta un trabajo personal SUBORDINADO.',
          },
          {
            id: 'q01-03-2',
            question: '¿Cuánto dura como máximo un periodo de prueba para un puesto operativo?',
            options: ['15 días', '30 días', '90 días', '180 días'],
            correctAnswer: 1,
            explanation: 'El periodo de prueba para puestos operativos es de máximo 30 días. Solo para puestos de dirección puede ser hasta 180 días.',
          },
          {
            id: 'q01-03-3',
            question: 'Una persona que trabaja con su propio equipo, sin horario fijo, para múltiples clientes, ¿es un trabajador subordinado?',
            options: [
              'Sí, siempre que le paguen un salario',
              'No, es un prestador de servicios independiente',
              'Depende del monto que le paguen',
              'Sí, si le factura a la empresa',
            ],
            correctAnswer: 1,
            explanation: 'Sin subordinación (horario, equipo, instrucciones del patrón), no hay relación laboral. Es prestación de servicios independientes.',
          },
        ],
      },
    },

    // ── Lección 4 ────────────────────────────────────────
    {
      id: 'l01-04',
      slug: 'periodos-de-nomina',
      number: 4,
      title: 'Periodos de nómina: semanal, catorcenal, quincenal y mensual',
      description: 'Entender los diferentes periodos de pago y cuándo usar cada uno.',
      durationMinutes: 25,
      objectives: [
        'Identificar los 4 periodos de nómina más comunes en México',
        'Calcular cuántos periodos hay por año para cada tipo',
        'Entender cómo el periodo afecta los cálculos de ISR e [IMSS](https://www.imss.gob.mx/)',
        'Conocer las implicaciones fiscales de cada periodo',
      ],
      sections: [
        {
          id: 'l01-04-s1',
          type: 'concept',
          title: 'Los periodos de nómina',
          content:
            'El periodo de nómina es la frecuencia con la que se paga al trabajador. En México, los periodos más comunes son:\n\n- **Semanal**: pago cada 7 días (52 periodos/año). Común en industria, construcción y comercio.\n- **Catorcenal**: pago cada 14 días (26 periodos/año). Usado en algunas fábricas y gobierno.\n- **Quincenal**: pago cada 15 días, usualmente los días 15 y último de mes (24 periodos/año). El más común en oficinas.\n- **Mensual**: pago una vez al mes (12 periodos/año). Usado para directivos y en algunos esquemas.\n\nLa [LFT](https://www.diputados.gob.mx/LeyesBiblio/pdf/125_240124.pdf) establece que los trabajadores de planta deben recibir su salario al menos semanalmente (Art. 88 [LFT](https://www.diputados.gob.mx/LeyesBiblio/pdf/125_240124.pdf)).',
        },
        {
          id: 'l01-04-s2',
          type: 'explanation',
          title: '¿Por qué importa el periodo?',
          content:
            'El periodo de nómina afecta directamente los cálculos fiscales:\n\n- **ISR**: las tablas de ISR son mensuales. Para periodos semanales o quincenales, hay que "proporcionar" la tabla al número de días del periodo.\n- **[IMSS](https://www.imss.gob.mx/)**: las cuotas se calculan con base en el Salario Base de Cotización (SBC) y los días del periodo.\n- **Factor de integración**: cambia según el periodo porque las prestaciones (aguinaldo, vacaciones) se "integran" al salario diario.\n\nCambiar el periodo de nómina de una empresa no es trivial. Afecta tablas, cálculos y reportes. En NOI se configura al crear la empresa y se recomienda no modificarlo una vez en operación.',
          callouts: [
            {
              type: 'warning',
              content:
                'Un error común es pensar que un sueldo quincenal de $7,500 equivale a un sueldo mensual de $15,000. NO es así. $7,500 × 24 quincenas = $180,000/año, pero $15,000 × 12 meses = $180,000/año. Sí coincide en anual, pero el ISR se calcula diferente porque el periodo tiene diferente número de días.',
            },
          ],
        },
        {
          id: 'l01-04-s3',
          type: 'numeric-example',
          title: 'Cálculo: de mensual a semanal y viceversa',
          content:
            'Para convertir un sueldo entre periodos, el factor clave es el **salario diario**:\n\nSalario diario = Sueldo mensual ÷ 30\n\nDesde el salario diario puedes obtener cualquier periodo:',
          codeBlocks: [
            {
              language: 'formula',
              label: 'Conversión de periodos',
              code: 'Sueldo mensual:      $15,000.00\nSalario diario:      $15,000 ÷ 30 = $500.00\n\nSemanal (7 días):    $500 × 7  = $3,500.00\nCatorcenal (14 días): $500 × 14 = $7,000.00\nQuincenal (15 días):  $500 × 15 = $7,500.00\nMensual (30 días):    $500 × 30 = $15,000.00',
            },
          ],
          callouts: [
            {
              type: 'important',
              content:
                'La [LFT](https://www.diputados.gob.mx/LeyesBiblio/pdf/125_240124.pdf) usa 30 días para calcular el salario diario a partir del mensual, NO 30.4 ni los días del mes. Esto es estándar en toda la nómina mexicana.',
            },
          ],
        },
        {
          id: 'l01-04-s4',
          type: 'noi-procedure',
          title: 'El periodo de nómina en NOI',
          content:
            'En NOI, el periodo de nómina se configura al crear la empresa:\n\n1. Al crear una nueva empresa, seleccionas el tipo de periodo (semanal, catorcenal, quincenal o mensual).\n2. NOI calcula automáticamente los periodos del año.\n3. Cada vez que procesas nómina, seleccionas el periodo a calcular.\n4. NOI aplica las tablas de ISR proporcionadas al periodo.\n\nPuede haber más de un tipo de periodo en la misma empresa. Por ejemplo: obreros con nómina semanal y administrativos con nómina quincenal. NOI maneja esto con diferentes "tipos de nómina" dentro de la misma empresa.',
        },
        {
          id: 'l01-04-s5',
          type: 'guided-exercise',
          title: 'Ejercicio guiado: calcula los periodos',
          content:
            'Un trabajador tiene un sueldo mensual de $22,500.\n\nCalcula su sueldo para cada periodo:',
          steps: [
            'Salario diario = $22,500 ÷ 30 = $750.00',
            'Semanal = $750 × 7 = $5,250.00',
            'Catorcenal = $750 × 14 = $10,500.00',
            'Quincenal = $750 × 15 = $11,250.00',
            'Mensual = $750 × 30 = $22,500.00 (verificación)',
          ],
        },
        {
          id: 'l01-04-s6',
          type: 'practice-exercise',
          title: 'Ejercicio para ti',
          content:
            '1. Un empleado gana $4,200 semanales. ¿Cuál es su sueldo mensual?\n2. Un directivo gana $45,000 mensuales. ¿Cuánto gana catorcenalmente?\n3. Una empresa tiene 15 obreros con nómina semanal y 8 administrativos con nómina quincenal. ¿Cuántos cálculos de nómina hará al año para CADA grupo?\n4. ¿Cuántos periodos quincenales hay en un año?',
          solution:
            '1. **$18,000.** (Salario diario = $4,200 ÷ 7 = $600. Mensual = $600 × 30 = $18,000).\n2. **$21,000.** (Salario diario = $45,000 ÷ 30 = $1,500. Catorcenal = $1,500 × 14 = $21,000).\n3. **52 cálculos para obreros** y **24 cálculos para administrativos.**\n4. **24 periodos.**',
        },
        {
          id: 'l01-04-s7',
          type: 'common-errors',
          title: 'Errores frecuentes',
          content:
            '**❌ Dividir el sueldo mensual entre 15 para obtener el quincenal.**\nAunque matemáticamente $15,000 ÷ 2 = $7,500, la forma correcta es: Salario diario × 15 días. Para sueldos fijos coincide, pero para calcular ISR el número de días del periodo importa.\n\n**❌ Asumir que todos los meses tienen la misma cantidad de días.**\nPara efectos de nómina, un mes siempre tiene 30 días ([LFT](https://www.diputados.gob.mx/LeyesBiblio/pdf/125_240124.pdf)). No importa que febrero tenga 28 o que julio tenga 31.\n\n**❌ Cambiar el periodo de nómina a mitad de ejercicio.**\nEsto genera complicaciones en acumulados de ISR, [IMSS](https://www.imss.gob.mx/) y reportes. Si necesitas cambiar, hazlo al inicio de un ejercicio fiscal.',
        },
      ],
      quiz: {
        id: 'q01-04',
        title: 'Mini examen — Lección 4',
        description: 'Verifica que dominas los periodos de nómina.',
        passingScore: 70,
        questions: [
          {
            id: 'q01-04-1',
            question: '¿Cuántos periodos quincenales hay en un año?',
            options: ['12', '24', '26', '52'],
            correctAnswer: 1,
            explanation: 'Un año tiene 24 quincenas (2 por mes × 12 meses).',
          },
          {
            id: 'q01-04-2',
            question: 'Si un empleado gana $600 de salario diario, ¿cuánto gana semanalmente?',
            options: ['$3,600', '$4,200', '$9,000', '$18,000'],
            correctAnswer: 1,
            explanation: 'Semanal = Salario diario × 7 = $600 × 7 = $4,200.',
          },
          {
            id: 'q01-04-3',
            question: 'Para calcular el salario diario a partir del mensual, ¿entre cuántos días se divide según la [LFT](https://www.diputados.gob.mx/LeyesBiblio/pdf/125_240124.pdf)?',
            options: ['28', '30', '30.4', '31'],
            correctAnswer: 1,
            explanation: 'La [LFT](https://www.diputados.gob.mx/LeyesBiblio/pdf/125_240124.pdf) establece que el salario diario se obtiene dividiendo el mensual entre 30 días, siempre.',
          },
        ],
      },
    },

    // ── Lección 5 ────────────────────────────────────────
    {
      id: 'l01-05',
      slug: 'sueldo-bruto-vs-neto',
      number: 5,
      title: 'Sueldo bruto vs. sueldo neto',
      description: 'Diferenciar claramente entre lo que gana el trabajador y lo que recibe.',
      durationMinutes: 20,
      objectives: [
        'Definir sueldo bruto y sueldo neto',
        'Calcular el neto a partir del bruto',
        'Entender qué factores determinan las deducciones',
        'Interpretar correctamente un recibo de nómina',
      ],
      sections: [
        {
          id: 'l01-05-s1',
          type: 'concept',
          title: 'Bruto vs. Neto',
          content:
            '**Sueldo bruto**: es el monto TOTAL de percepciones antes de cualquier deducción. Es lo que el patrón "asigna" como pago.\n\n**Sueldo neto**: es lo que el trabajador realmente recibe después de restar todas las deducciones (ISR, [IMSS](https://www.imss.gob.mx/), [INFONAVIT](https://portalmx.infonavit.org.mx/), préstamos, etc.).\n\nFórmula fundamental:\n\n**Neto = Bruto − Deducciones**\n\nCuando un empleador dice "te vamos a pagar $20,000", generalmente se refiere al bruto. El trabajador recibirá menos.',
        },
        {
          id: 'l01-05-s2',
          type: 'explanation',
          title: '¿Qué afecta la diferencia entre bruto y neto?',
          content:
            'Las principales deducciones que reducen el bruto son:\n\n- **ISR** (Impuesto Sobre la Renta): depende del nivel de ingreso. A mayor sueldo, mayor tasa.\n- **[IMSS](https://www.imss.gob.mx/)** (cuota obrera): porcentaje del SBC que paga el trabajador por seguridad social.\n- **[INFONAVIT](https://portalmx.infonavit.org.mx/)**: si el trabajador tiene un crédito de vivienda, se deduce de su nómina.\n- **Otras**: préstamos, caja de ahorro, pensión alimenticia, cuota sindical.\n\nComo regla general, las deducciones obligatorias (ISR + [IMSS](https://www.imss.gob.mx/)) representan entre el 10% y el 35% del sueldo bruto, dependiendo del nivel salarial.',
        },
        {
          id: 'l01-05-s3',
          type: 'numeric-example',
          title: 'Ejemplo: bruto a neto',
          content: 'Calculemos el neto para dos empleados con sueldos muy diferentes:',
          codeBlocks: [
            {
              language: 'text',
              label: 'Empleado A — Sueldo bajo',
              code: 'Sueldo bruto mensual:    $8,000.00\nISR:                    −$  303.00\nIMSS:                   −$  210.00\n──────────────────────────────────\nNeto:                    $7,487.00\n% deducido:              6.4%',
            },
            {
              language: 'text',
              label: 'Empleado B — Sueldo alto',
              code: 'Sueldo bruto mensual:   $50,000.00\nISR:                    −$8,225.00\nIMSS:                   −$  875.00\n──────────────────────────────────\nNeto:                   $40,900.00\n% deducido:              18.2%',
            },
          ],
          callouts: [
            {
              type: 'note',
              content:
                'Nota cómo el % de deducciones sube con el sueldo. Esto es porque el ISR es progresivo: a mayor ingreso, mayor tasa impositiva. En el nivel 6 profundizaremos en las tablas de ISR.',
            },
          ],
        },
        {
          id: 'l01-05-s4',
          type: 'noi-procedure',
          title: 'Bruto y neto en NOI',
          content:
            'En NOI, el sueldo bruto se configura en el catálogo de trabajadores como "Sueldo". NOI calcula automáticamente todas las deducciones y muestra el neto en la vista de nómina procesada.\n\nImportante: en NOI puedes ver el desglose completo de un trabajador en la pantalla de "Revisión de Nómina", donde se muestran todas las percepciones y deducciones con sus importes.',
        },
        {
          id: 'l01-05-s5',
          type: 'guided-exercise',
          title: 'Ejercicio guiado',
          content:
            'Un empleado tiene:\n- Sueldo bruto: $25,000/mes\n- ISR: $3,450\n- [IMSS](https://www.imss.gob.mx/): $650\n- Crédito [INFONAVIT](https://portalmx.infonavit.org.mx/): $1,250\n\n¿Cuál es su neto?',
          steps: [
            'Total deducciones = $3,450 + $650 + $1,250 = $5,350',
            'Neto = $25,000 − $5,350 = $19,650',
            '% deducido = $5,350 ÷ $25,000 × 100 = 21.4%',
          ],
        },
        {
          id: 'l01-05-s6',
          type: 'practice-exercise',
          title: 'Ejercicio para ti',
          content:
            'Dos empleados te preguntan cuánto van a recibir. Calcula el neto de cada uno:\n\n**Empleado 1**: Bruto $12,000 | ISR $720 | [IMSS](https://www.imss.gob.mx/) $360\n**Empleado 2**: Bruto $35,000 | ISR $5,680 | [IMSS](https://www.imss.gob.mx/) $780 | [INFONAVIT](https://portalmx.infonavit.org.mx/) $2,100\n\n¿Cuál recibe un mayor porcentaje de su bruto?',
          solution:
            '**Empleado 1:**\n- Total deducciones = $720 + $360 = $1,080\n- Neto = $12,000 - $1,080 = **$10,920**\n- Porcentaje neto = ($10,920 / $12,000) = **91%**\n\n**Empleado 2:**\n- Total deducciones = $5,680 + $780 + $2,100 = $8,560\n- Neto = $35,000 - $8,560 = **$26,440**\n- Porcentaje neto = ($26,440 / $35,000) = **75.54%**\n\n**Respuesta:** El **Empleado 1** recibe un mayor porcentaje (91% vs 75.54%) porque el ISR es progresivo (a menor sueldo, menor tasa de retención) y no tiene deducciones extra como INFONAVIT.',
        },
        {
          id: 'l01-05-s7',
          type: 'common-errors',
          title: 'Errores frecuentes',
          content:
            '**❌ Negociar sueldo neto sin considerar el costo para la empresa.**\nSi le ofreces a alguien $20,000 "netos", el costo bruto para la empresa puede ser $27,000 o más (sumando ISR patronal, [IMSS](https://www.imss.gob.mx/) patronal, [INFONAVIT](https://portalmx.infonavit.org.mx/) patronal).\n\n**❌ Asumir que todos los empleados con el mismo bruto reciben el mismo neto.**\nNo necesariamente. Si uno tiene crédito [INFONAVIT](https://portalmx.infonavit.org.mx/), pensión alimenticia o préstamos, su neto será menor.\n\n**❌ No diferenciar percepciones gravadas de exentas.**\nAlgunas percepciones no pagan ISR (como el aguinaldo hasta cierto límite). Esto afecta el cálculo del neto. Lo veremos a detalle en el nivel 4.',
        },
      ],
      quiz: {
        id: 'q01-05',
        title: 'Mini examen — Lección 5',
        description: 'Verifica que dominas la diferencia entre bruto y neto.',
        passingScore: 70,
        questions: [
          {
            id: 'q01-05-1',
            question: '¿Cuál es la fórmula correcta para calcular el sueldo neto?',
            options: [
              'Neto = Bruto + Deducciones',
              'Neto = Bruto − Deducciones',
              'Neto = Bruto × Tasa ISR',
              'Neto = Bruto ÷ 30',
            ],
            correctAnswer: 1,
            explanation: 'Neto = Bruto (percepciones) − Deducciones. Es la fórmula fundamental de toda nómina.',
          },
          {
            id: 'q01-05-2',
            question: '¿Por qué un empleado con sueldo de $50,000 pierde un porcentaje mayor que uno de $8,000?',
            options: [
              'Porque el [IMSS](https://www.imss.gob.mx/) cobra más a quien gana más',
              'Porque el ISR es progresivo: a mayor ingreso, mayor tasa',
              'Porque tiene más créditos [INFONAVIT](https://portalmx.infonavit.org.mx/)',
              'Es un error de cálculo',
            ],
            correctAnswer: 1,
            explanation: 'El ISR usa tablas progresivas. Los rangos altos de ingreso pagan tasas mayores.',
          },
          {
            id: 'q01-05-3',
            question: 'Si un empleado gana $18,000 brutos y tiene deducciones de $3,200, ¿cuánto recibe?',
            options: ['$21,200', '$18,000', '$14,800', '$15,000'],
            correctAnswer: 2,
            explanation: 'Neto = $18,000 − $3,200 = $14,800.',
          },
        ],
      },
    },

    // ── Lección 6 ────────────────────────────────────────
    {
      id: 'l01-06',
      slug: 'salario-diario',
      number: 6,
      title: 'Salario diario',
      description: 'Dominar el cálculo del salario diario, la base de todos los cálculos de nómina.',
      durationMinutes: 25,
      objectives: [
        'Calcular el salario diario desde cualquier periodo',
        'Entender por qué el salario diario es la base de todo',
        'Aplicar la regla de los 30 días de la [LFT](https://www.diputados.gob.mx/LeyesBiblio/pdf/125_240124.pdf)',
      ],
      sections: [
        {
          id: 'l01-06-s1',
          type: 'concept',
          title: 'El salario diario',
          content:
            'El salario diario (SD) es la unidad fundamental de la nómina mexicana. TODO se calcula a partir de él:\n\n- Salario Diario Integrado (SDI)\n- Cuotas [IMSS](https://www.imss.gob.mx/)\n- Aguinaldo\n- Vacaciones y prima vacacional\n- Finiquito e indemnización\n- ISR (base gravable diaria)\n\nSi no sabes calcular correctamente el salario diario, todos los cálculos que dependan de él estarán mal.',
        },
        {
          id: 'l01-06-s2',
          type: 'explanation',
          title: 'Cómo se calcula',
          content:
            'La fórmula es simple pero hay que aplicarla correctamente:\n\n**Salario diario = Sueldo mensual ÷ 30**\n\nSiempre se divide entre 30, sin importar el mes. Es una convención de la [LFT](https://www.diputados.gob.mx/LeyesBiblio/pdf/125_240124.pdf) (Art. 89).\n\nSi el trabajador no tiene sueldo mensual sino semanal, catorcenal o quincenal:\n\n- **Desde semanal**: SD = Sueldo semanal ÷ 7\n- **Desde catorcenal**: SD = Sueldo catorcenal ÷ 14\n- **Desde quincenal**: SD = Sueldo quincenal ÷ 15',
        },
        {
          id: 'l01-06-s3',
          type: 'numeric-example',
          title: 'Ejemplos de cálculo',
          content: 'Calculemos el salario diario para diferentes escenarios:',
          codeBlocks: [
            {
              language: 'formula',
              label: 'Desde mensual',
              code: 'Sueldo mensual: $18,000\nSD = $18,000 ÷ 30 = $600.00 diarios',
            },
            {
              language: 'formula',
              label: 'Desde quincenal',
              code: 'Sueldo quincenal: $6,750\nSD = $6,750 ÷ 15 = $450.00 diarios',
            },
            {
              language: 'formula',
              label: 'Desde semanal',
              code: 'Sueldo semanal: $2,940\nSD = $2,940 ÷ 7 = $420.00 diarios',
            },
          ],
        },
        {
          id: 'l01-06-s4',
          type: 'noi-procedure',
          title: 'El salario diario en NOI',
          content:
            'En NOI, cuando das de alta un trabajador:\n\n1. Ingresas el sueldo en el periodo configurado (mensual, quincenal, etc.).\n2. NOI calcula automáticamente el salario diario.\n3. A partir del SD, NOI deriva el SDI para las cuotas del [IMSS](https://www.imss.gob.mx/).\n\nSi el sueldo que capturas no es consistente con el periodo, NOI puede generar cálculos incorrectos. Siempre verifica que el SD que muestra NOI coincida con tu cálculo manual.',
        },
        {
          id: 'l01-06-s5',
          type: 'guided-exercise',
          title: 'Ejercicio guiado',
          content:
            'Un trabajador fue contratado con un sueldo mensual de $24,000.\n\nCalcula:\n1. Su salario diario\n2. Lo que ganaría en una semana\n3. Lo que ganaría en una quincena',
          steps: [
            'SD = $24,000 ÷ 30 = $800.00',
            'Semanal = $800 × 7 = $5,600.00',
            'Quincenal = $800 × 15 = $12,000.00',
          ],
        },
        {
          id: 'l01-06-s6',
          type: 'practice-exercise',
          title: 'Ejercicio para ti',
          content:
            'Calcula el salario diario para cada caso:\n\n1. Sueldo mensual: $9,000\n2. Sueldo quincenal: $5,250\n3. Sueldo semanal: $3,150\n4. Sueldo catorcenal: $8,400\n\nPregunta extra: ¿Cuáles de estos trabajadores ganan el mismo salario diario?',
          solution:
            '1. **$300/día** ($9,000 ÷ 30)\n2. **$350/día** ($5,250 ÷ 15)\n3. **$450/día** ($3,150 ÷ 7)\n4. **$600/día** ($8,400 ÷ 14)\n\n**Pregunta extra:** Ninguno de estos trabajadores gana el mismo salario diario.',
        },
        {
          id: 'l01-06-s7',
          type: 'common-errors',
          title: 'Errores frecuentes',
          content:
            '**❌ Dividir entre los días reales del mes.**\nSiempre se divide entre 30. No importa si el mes tiene 28, 29 o 31 días.\n\n**❌ Confundir salario diario con salario diario integrado.**\nEl SD es solo el sueldo dividido entre los días. El SDI incluye la integración de prestaciones (aguinaldo, vacaciones). Son conceptos diferentes. El SDI lo veremos en la siguiente lección.\n\n**❌ Calcular el SD con percepciones extras.**\nEl salario diario se calcula SOLO con el sueldo base. Los bonos, horas extra y comisiones NO se incluyen en el SD.',
        },
      ],
      quiz: {
        id: 'q01-06',
        title: 'Mini examen — Lección 6',
        description: 'Verifica que dominas el cálculo del salario diario.',
        passingScore: 70,
        questions: [
          {
            id: 'q01-06-1',
            question: '¿Entre cuántos días se divide el sueldo mensual para obtener el salario diario según la [LFT](https://www.diputados.gob.mx/LeyesBiblio/pdf/125_240124.pdf)?',
            options: ['28', '30', '30.4', '31'],
            correctAnswer: 1,
            explanation: 'La [LFT](https://www.diputados.gob.mx/LeyesBiblio/pdf/125_240124.pdf) establece que siempre se divide entre 30, independientemente del mes.',
          },
          {
            id: 'q01-06-2',
            question: 'Un empleado gana $21,000 mensuales. ¿Cuál es su salario diario?',
            options: ['$677.42', '$700.00', '$750.00', '$1,050.00'],
            correctAnswer: 1,
            explanation: 'SD = $21,000 ÷ 30 = $700.00',
          },
          {
            id: 'q01-06-3',
            question: '¿El bono de puntualidad se incluye en el cálculo del salario diario?',
            options: [
              'Sí, siempre',
              'No, el SD solo incluye el sueldo base',
              'Solo si es mayor a $1,000',
              'Depende del contrato',
            ],
            correctAnswer: 1,
            explanation: 'El salario diario se calcula exclusivamente con el sueldo base. Percepciones adicionales como bonos no se incluyen.',
          },
        ],
      },
    },

    // ── Lección 7 ────────────────────────────────────────
    {
      id: 'l01-07',
      slug: 'salario-diario-integrado',
      number: 7,
      title: 'Salario Diario Integrado (SDI)',
      description: 'Aprender a calcular el SDI, la base para las cuotas del [IMSS](https://www.imss.gob.mx/) e [INFONAVIT](https://portalmx.infonavit.org.mx/).',
      durationMinutes: 35,
      objectives: [
        'Entender qué es el SDI y para qué sirve',
        'Calcular el factor de integración',
        'Obtener el SDI a partir del salario diario',
        'Comprender cómo el SDI cambia con la antigüedad',
      ],
      sections: [
        {
          id: 'l01-07-s1',
          type: 'concept',
          title: '¿Qué es el SDI?',
          content:
            'El Salario Diario Integrado (SDI), también llamado Salario Base de Cotización (SBC), es el salario diario más la parte proporcional diaria de las prestaciones mínimas de ley que le corresponden al trabajador.\n\nEs "integrado" porque integra al salario diario las prestaciones: aguinaldo y prima vacacional. El SDI se usa como base para:\n\n- Cuotas obrero-patronales del [IMSS](https://www.imss.gob.mx/)\n- Aportaciones al [INFONAVIT](https://portalmx.infonavit.org.mx/)\n- Amortización de créditos [INFONAVIT](https://portalmx.infonavit.org.mx/)\n- Cuotas del SAR (Sistema de Ahorro para el Retiro)',
        },
        {
          id: 'l01-07-s2',
          type: 'explanation',
          title: 'Factor de integración',
          content:
            'El factor de integración es un número que, multiplicado por el salario diario, da el SDI.\n\n**Fórmula del factor de integración:**\n\nFI = 1 + (Aguinaldo ÷ 365) + (Días de vacaciones × % prima vacacional ÷ 365)\n\nPara un trabajador de NUEVO ingreso (menos de 1 año) con prestaciones mínimas de ley:\n\n- Aguinaldo: 15 días\n- Vacaciones: 12 días (reforma 2023)\n- Prima vacacional: 25%\n\nFI = 1 + (15 ÷ 365) + (12 × 0.25 ÷ 365)\nFI = 1 + 0.0411 + 0.0082\nFI = 1.0493\n\nEste factor AUMENTA con la antigüedad porque los días de vacaciones incrementan.',
          callouts: [
            {
              type: 'important',
              content:
                'Con la reforma de vacaciones de 2023, el mínimo de vacaciones es 12 días el primer año (antes era 6). Esto cambió todos los factores de integración. Asegúrate de usar los factores actualizados.',
            },
          ],
        },
        {
          id: 'l01-07-s3',
          type: 'numeric-example',
          title: 'Cálculo completo del SDI',
          content: 'Calculemos el SDI para dos empleados con diferente antigüedad:',
          codeBlocks: [
            {
              language: 'formula',
              label: 'Empleado nuevo (1er año) — Sueldo mensual $15,000',
              code: 'SD = $15,000 ÷ 30 = $500.00\n\nFactor de integración:\n  Aguinaldo: 15 días ÷ 365 = 0.0411\n  Vacaciones: 12 días × 25% ÷ 365 = 0.0082\n  FI = 1 + 0.0411 + 0.0082 = 1.0493\n\nSDI = $500.00 × 1.0493 = $524.66',
            },
            {
              language: 'formula',
              label: 'Empleado con 5 años — Sueldo mensual $15,000',
              code: 'SD = $15,000 ÷ 30 = $500.00\n\nVacaciones por antigüedad:\n  Año 1: 12 días\n  Año 2: 14 días\n  Año 3: 16 días\n  Año 4: 18 días\n  Año 5: 20 días ← este aplica\n\nFactor de integración:\n  Aguinaldo: 15 ÷ 365 = 0.0411\n  Vacaciones: 20 × 0.25 ÷ 365 = 0.0137\n  FI = 1 + 0.0411 + 0.0137 = 1.0548\n\nSDI = $500.00 × 1.0548 = $527.40',
            },
          ],
          callouts: [
            {
              type: 'note',
              content:
                'Aunque la diferencia parece pequeña ($524.66 vs $527.40), al multiplicar por las tasas del [IMSS](https://www.imss.gob.mx/) y por todos los meses del año, la diferencia en cuotas es significativa. Por eso NOI recalcula automáticamente el SDI cuando cambia la antigüedad.',
            },
          ],
        },
        {
          id: 'l01-07-s4',
          type: 'noi-procedure',
          title: 'El SDI en NOI',
          content:
            'NOI calcula el SDI automáticamente cuando:\n\n1. Das de alta un trabajador con su sueldo y fecha de ingreso.\n2. NOI aplica el factor de integración según la antigüedad y las prestaciones configuradas.\n3. Cuando el trabajador cumple un año más, NOI actualiza el factor.\n\nSi tu empresa otorga prestaciones superiores a las de ley (más días de aguinaldo, más vacaciones), debes configurarlo en los parámetros de la empresa para que NOI calcule correctamente el factor de integración.',
        },
        {
          id: 'l01-07-s5',
          type: 'guided-exercise',
          title: 'Ejercicio guiado',
          content:
            'Calcula el SDI para un trabajador con 3 años de antigüedad y sueldo mensual de $18,000.\n\nPrestaciones de ley:\n- Aguinaldo: 15 días\n- Vacaciones (3er año): 16 días\n- Prima vacacional: 25%',
          steps: [
            'SD = $18,000 ÷ 30 = $600.00',
            'Aguinaldo: 15 ÷ 365 = 0.0411',
            'Vacaciones: 16 × 0.25 ÷ 365 = 0.0110',
            'FI = 1 + 0.0411 + 0.0110 = 1.0521',
            'SDI = $600.00 × 1.0521 = $631.23',
          ],
        },
        {
          id: 'l01-07-s6',
          type: 'practice-exercise',
          title: 'Ejercicio para ti',
          content:
            'Calcula el SDI para:\n\n1. Trabajador con 1 año, sueldo mensual $10,000, prestaciones de ley.\n2. Trabajador con 8 años, sueldo mensual $25,000, prestaciones de ley. (Vacaciones 8° año: 26 días)\n3. Trabajador con 2 años, sueldo mensual $30,000, pero la empresa da 20 días de aguinaldo y 25% de prima vacacional.',
          solution:
            '**Caso 1 (1 año, ley):**\n- SD = $10,000 ÷ 30 = $333.33\n- Factor (FI) = 1 + (15/365) + (12 × 0.25 / 365) = 1 + 0.04109 + 0.00821 = 1.0493\n- SDI = $333.33 × 1.0493 = **$349.76**\n\n**Caso 2 (8 años, ley):**\n- SD = $25,000 ÷ 30 = $833.33\n- Factor (FI) = 1 + (15/365) + (26 × 0.25 / 365) = 1 + 0.04109 + 0.01780 = 1.0589\n- SDI = $833.33 × 1.0589 = **$882.41**\n\n**Caso 3 (2 años, superior):**\n- SD = $30,000 ÷ 30 = $1,000.00\n- Factor (FI) = 1 + (20/365) + (14 × 0.25 / 365) = 1 + 0.05479 + 0.00958 = 1.0644\n- SDI = $1,000.00 × 1.0644 = **$1,064.40**',
        },
        {
          id: 'l01-07-s7',
          type: 'common-errors',
          title: 'Errores frecuentes',
          content:
            '**❌ Confundir SD con SDI.**\nEl SD es solo el sueldo base dividido entre los días. El SDI integra las prestaciones. Son diferentes y se usan para cosas diferentes.\n\n**❌ No actualizar el factor cuando cambia la antigüedad.**\nCada aniversario, los días de vacaciones aumentan, lo que modifica el factor de integración. Si no se actualiza, las cuotas del [IMSS](https://www.imss.gob.mx/) serán incorrectas.\n\n**❌ Usar el factor de antes de la reforma de vacaciones 2023.**\nLos factores viejos (cuando el primer año eran 6 días de vacaciones) ya no aplican. Desde 2023, el mínimo es 12 días.',
        },
      ],
      quiz: {
        id: 'q01-07',
        title: 'Mini examen — Lección 7',
        description: 'Verifica que dominas el cálculo del SDI.',
        passingScore: 70,
        questions: [
          {
            id: 'q01-07-1',
            question: '¿Qué prestaciones se integran al salario diario para obtener el SDI?',
            options: [
              'ISR e [IMSS](https://www.imss.gob.mx/)',
              'Aguinaldo y prima vacacional proporcional',
              'Horas extra y bonos',
              'Todas las percepciones',
            ],
            correctAnswer: 1,
            explanation: 'El SDI integra la parte proporcional diaria del aguinaldo y la prima vacacional al salario diario.',
          },
          {
            id: 'q01-07-2',
            question: '¿Cuál es el factor de integración para un trabajador nuevo con prestaciones de ley (12 días vacaciones, 15 días aguinaldo, 25% prima)?',
            options: ['1.0411', '1.0493', '1.0548', '1.0750'],
            correctAnswer: 1,
            explanation: 'FI = 1 + (15/365) + (12 × 0.25 / 365) = 1 + 0.0411 + 0.0082 = 1.0493.',
          },
          {
            id: 'q01-07-3',
            question: '¿Para qué se usa principalmente el SDI?',
            options: [
              'Para calcular el ISR',
              'Para calcular las cuotas obrero-patronales del [IMSS](https://www.imss.gob.mx/)',
              'Para pagar el aguinaldo',
              'Para determinar las horas extra',
            ],
            correctAnswer: 1,
            explanation: 'El SDI (o SBC) es la base para calcular las cuotas que se pagan al [IMSS](https://www.imss.gob.mx/), [INFONAVIT](https://portalmx.infonavit.org.mx/) y SAR.',
          },
        ],
      },
    },

    // ── Lección 8 ────────────────────────────────────────
    {
      id: 'l01-08',
      slug: 'percepciones',
      number: 8,
      title: 'Percepciones',
      description: 'Conocer las principales percepciones que puede tener un trabajador.',
      durationMinutes: 30,
      objectives: [
        'Identificar los tipos de percepciones en una nómina',
        'Distinguir entre percepciones gravadas y exentas',
        'Listar las percepciones más comunes en México',
        'Entender cómo afectan al cálculo del ISR',
      ],
      sections: [
        {
          id: 'l01-08-s1',
          type: 'concept',
          title: '¿Qué son las percepciones?',
          content:
            'Las percepciones son todos los pagos y beneficios económicos que recibe el trabajador por parte del patrón. Son la parte "positiva" de la nómina.\n\nSe clasifican en:\n\n- **Fijas**: se pagan siempre (sueldo base).\n- **Variables**: dependen de eventos (horas extra, comisiones, bonos).\n- **Gravadas**: pagan ISR.\n- **Exentas**: no pagan ISR (hasta ciertos límites).',
        },
        {
          id: 'l01-08-s2',
          type: 'explanation',
          title: 'Percepciones más comunes',
          content:
            '| Percepción | Fija/Variable | Gravada/Exenta |\n|---|---|---|\n| Sueldo | Fija | Gravada |\n| Horas extra (primeras 9/semana) | Variable | Exenta al 50% |\n| Aguinaldo | Fija (anual) | Exenta hasta 30 [UMA](https://www.inegi.org.mx/temas/uma/) |\n| Prima vacacional | Fija (anual) | Exenta hasta 15 [UMA](https://www.inegi.org.mx/temas/uma/) |\n| PTU | Fija (anual) | Exenta hasta 15 [UMA](https://www.inegi.org.mx/temas/uma/) |\n| Bono de productividad | Variable | Gravada |\n| Comisiones | Variable | Gravada |\n| Ayuda de transporte | Variable | Depende del monto |\n| Fondo de ahorro | Variable | Exenta (con límites) |\n| Vales de despensa | Variable | Exenta hasta 40% [UMA](https://www.inegi.org.mx/temas/uma/) |\n\nLa [UMA](https://www.inegi.org.mx/temas/uma/) ([Unidad de Medida y Actualización](https://www.inegi.org.mx/temas/uma/)) en 2026 tiene un valor diario de $113.14 aproximadamente. Todos los topes de exención se calculan en [UMAs](https://www.inegi.org.mx/temas/uma/).',
          callouts: [
            {
              type: 'tip',
              content:
                'La diferencia entre gravada y exenta es CRUCIAL. Una percepción gravada aumenta la base para calcular ISR. Una exenta no. Esto impacta directamente cuánto ISR se retiene al trabajador.',
            },
          ],
        },
        {
          id: 'l01-08-s3',
          type: 'numeric-example',
          title: 'Ejemplo: percepciones gravadas y exentas',
          content: 'Un empleado recibe en diciembre su aguinaldo de 15 días:',
          codeBlocks: [
            {
              language: 'formula',
              label: 'Cálculo de aguinaldo (gravado vs exento)',
              code: 'SD = $600.00\nAguinaldo = 15 × $600 = $9,000.00\n\nTope exento = 30 [UMA](https://www.inegi.org.mx/temas/uma/) = 30 × $113.14 = $3,394.20\n\nParte exenta:  $3,394.20 (no paga ISR)\nParte gravada: $9,000 − $3,394.20 = $5,605.80 (sí paga ISR)',
            },
          ],
        },
        {
          id: 'l01-08-s4',
          type: 'noi-procedure',
          title: 'Percepciones en NOI',
          content:
            'En NOI, las percepciones se configuran en el catálogo de percepciones:\n\n- Cada percepción tiene una clave interna (P001, P002...) y una clave [SAT](https://www.sat.gob.mx/).\n- Se define si es gravada, exenta o mixta.\n- Se configura su fórmula de cálculo (fija, porcentaje, días, etc.).\n- Se puede asociar a trabajadores específicos o a todos.\n\nNOI trae percepciones predefinidas (sueldo, aguinaldo, vacaciones), pero puedes crear las que necesites.',
        },
        {
          id: 'l01-08-s5',
          type: 'guided-exercise',
          title: 'Ejercicio guiado',
          content:
            'Identifica las percepciones en este recibo y clasifícalas:',
          codeBlocks: [
            {
              language: 'text',
              label: 'Recibo de nómina — Percepciones',
              code: 'Sueldo quincenal:     $12,000  ← ¿Gravada o exenta?\nHoras extra (6h):        $600  ← ¿Gravada o exenta?\nBono productividad:    $1,500  ← ¿Gravada o exenta?\nAyuda de transporte:     $400  ← ¿Gravada o exenta?',
            },
          ],
          steps: [
            'Sueldo: GRAVADA — siempre gravada en su totalidad.',
            'Horas extra (6h en la semana): EXENTAS al 50% — las primeras 9 horas extra semanales son 50% exentas.',
            'Bono productividad: GRAVADA — los bonos son percepciones gravadas.',
            'Ayuda de transporte: depende de la política, pero generalmente GRAVADA si se paga en efectivo.',
          ],
        },
        {
          id: 'l01-08-s6',
          type: 'practice-exercise',
          title: 'Ejercicio para ti',
          content:
            'Un empleado con SD de $500 recibe en una quincena:\n- Sueldo: $7,500\n- Aguinaldo proporcional: $2,500\n- Vales de despensa: $1,200\n\n1. ¿Cuál es el total de percepciones?\n2. ¿Cuánto es gravado y cuánto es exento? (Usa [UMA](https://www.inegi.org.mx/temas/uma/) 2026 = $113.14/día)',
          solution:
            '1. **Total de percepciones:** $7,500 + $2,500 + $1,200 = **$11,200**\n2. **Gravado y Exento:**\n   - **Sueldo:** $7,500 (100% gravado)\n   - **Aguinaldo:** Tope 30 UMA = 30 × 113.14 = $3,394.20. Como recibe $2,500, no rebasa el tope, así que es **100% exento**.\n   - **Vales de despensa:** Tope 40% UMA = 0.40 × 113.14 × 15 días = $678.84 exentos. El resto ($1,200 - $678.84 = $521.16) es gravado.\n   - **Resumen:**\n     - **Gravado:** $7,500 + $521.16 = **$8,021.16**\n     - **Exento:** $2,500 + $678.84 = **$3,178.84**',
        },
        {
          id: 'l01-08-s7',
          type: 'common-errors',
          title: 'Errores frecuentes',
          content:
            '**❌ Asumir que todas las percepciones son gravadas.**\nNo. El aguinaldo, prima vacacional y PTU tienen partes exentas. Gravarlas completamente significa retener más ISR del debido.\n\n**❌ Ignorar los topes de exención.**\nLas exenciones tienen límites en [UMAs](https://www.inegi.org.mx/temas/uma/). Si el aguinaldo excede 30 [UMAs](https://www.inegi.org.mx/temas/uma/), el excedente sí es gravado.\n\n**❌ Confundir "percepción" con "ingreso".**\nPara efectos de nómina, percepción es lo que el patrón paga al trabajador. No incluye ingresos por otras fuentes (rentas, inversiones, etc.).',
        },
      ],
      quiz: {
        id: 'q01-08',
        title: 'Mini examen — Lección 8',
        description: 'Verifica que comprendes las percepciones.',
        passingScore: 70,
        questions: [
          {
            id: 'q01-08-1',
            question: '¿Qué diferencia hay entre una percepción gravada y una exenta?',
            options: [
              'La gravada es más grande',
              'La gravada paga ISR, la exenta no (hasta ciertos límites)',
              'La exenta es un bono, la gravada es el sueldo',
              'No hay diferencia fiscal',
            ],
            correctAnswer: 1,
            explanation: 'Las percepciones gravadas se incluyen en la base para calcular ISR. Las exentas no pagan ISR, pero tienen topes.',
          },
          {
            id: 'q01-08-2',
            question: '¿Hasta cuántas [UMAs](https://www.inegi.org.mx/temas/uma/) está exento el aguinaldo?',
            options: ['15 [UMA](https://www.inegi.org.mx/temas/uma/)', '20 [UMA](https://www.inegi.org.mx/temas/uma/)', '30 [UMA](https://www.inegi.org.mx/temas/uma/)', '40 [UMA](https://www.inegi.org.mx/temas/uma/)'],
            correctAnswer: 2,
            explanation: 'El aguinaldo está exento de ISR hasta el equivalente a 30 [UMA](https://www.inegi.org.mx/temas/uma/) (días). El excedente es gravado.',
          },
          {
            id: 'q01-08-3',
            question: '¿El sueldo base es gravado o exento?',
            options: ['Exento', 'Gravado', '50% exento', 'Depende del monto'],
            correctAnswer: 1,
            explanation: 'El sueldo base es siempre una percepción gravada al 100%. No tiene parte exenta.',
          },
        ],
      },
    },

    // ── Lección 9 ────────────────────────────────────────
    {
      id: 'l01-09',
      slug: 'deducciones',
      number: 9,
      title: 'Deducciones',
      description: 'Conocer las principales deducciones legales y voluntarias en una nómina.',
      durationMinutes: 30,
      objectives: [
        'Identificar las deducciones obligatorias vs voluntarias',
        'Entender el impacto de cada deducción en el neto',
        'Distinguir entre retenciones y descuentos',
        'Conocer los límites legales para las deducciones',
      ],
      sections: [
        {
          id: 'l01-09-s1',
          type: 'concept',
          title: '¿Qué son las deducciones?',
          content:
            'Las deducciones son los montos que se restan de las percepciones del trabajador antes de pagarle. Se clasifican en:\n\n- **Obligatorias por ley**: ISR, [IMSS](https://www.imss.gob.mx/) (cuota obrera), [INFONAVIT](https://portalmx.infonavit.org.mx/) (si tiene crédito).\n- **Por orden judicial**: pensiones alimenticias.\n- **Voluntarias**: préstamos personales, caja de ahorro, cuota sindical, fondo de ahorro.\n\nLa [LFT](https://www.diputados.gob.mx/LeyesBiblio/pdf/125_240124.pdf) (Art. 110) limita las deducciones: el patrón no puede descontar más del 30% del excedente del salario mínimo, excepto para obligaciones legales (ISR, [IMSS](https://www.imss.gob.mx/), pensión alimenticia).',
        },
        {
          id: 'l01-09-s2',
          type: 'explanation',
          title: 'Deducciones más comunes',
          content:
            '| Deducción | Tipo | Quién la determina |\n|---|---|---|\n| ISR | Obligatoria | [SAT](https://www.sat.gob.mx/) (tablas de ISR) |\n| [IMSS](https://www.imss.gob.mx/) (cuota obrera) | Obligatoria | [IMSS](https://www.imss.gob.mx/) (tasas sobre SBC) |\n| Crédito [INFONAVIT](https://portalmx.infonavit.org.mx/) | Obligatoria (si hay crédito) | [INFONAVIT](https://portalmx.infonavit.org.mx/) |\n| Pensión alimenticia | Por orden judicial | Juzgado familiar |\n| Préstamo de caja de ahorro | Voluntaria | Acuerdo con el trabajador |\n| Cuota sindical | Voluntaria | Contrato colectivo |\n| Préstamo personal | Voluntaria | Acuerdo con el trabajador |\n| Falta injustificada | Patronal | Reglamento interior |\n\nLas deducciones de ISR e [IMSS](https://www.imss.gob.mx/) las calcula NOI automáticamente. Las voluntarias las configura el patrón.',
          callouts: [
            {
              type: 'warning',
              content:
                'El patrón NO puede descontar al trabajador por daños o pérdidas sin seguir el procedimiento legal. Un descuento unilateral puede ser demandado ante la Junta de Conciliación.',
            },
          ],
        },
        {
          id: 'l01-09-s3',
          type: 'numeric-example',
          title: 'Ejemplo: desglose de deducciones',
          content: 'Veamos las deducciones de un empleado con sueldo quincenal de $11,250:',
          codeBlocks: [
            {
              language: 'text',
              label: 'Deducciones típicas',
              code: 'Percepción bruta:       $11,250.00\n\nDEDUCCIONES:\n  ISR:                  −$1,284.00  (obligatoria)\n  [IMSS](https://www.imss.gob.mx/) cuota obrera:      −$365.00  (obligatoria)\n  Crédito [INFONAVIT](https://portalmx.infonavit.org.mx/):      −$562.00  (obligatoria)\n  Préstamo personal:      −$500.00  (voluntaria)\n  ───────────────────────────────────\n  Total deducciones:    −$2,711.00\n\nNETO A PAGAR:            $8,539.00',
            },
          ],
        },
        {
          id: 'l01-09-s4',
          type: 'noi-procedure',
          title: 'Deducciones en NOI',
          content:
            'En NOI, las deducciones se manejan de dos formas:\n\n**Automáticas**: ISR, [IMSS](https://www.imss.gob.mx/) y [INFONAVIT](https://portalmx.infonavit.org.mx/) los calcula NOI con base en las tablas vigentes y el SBC del trabajador. No necesitas capturarlas manualmente.\n\n**Manuales**: préstamos, cuotas sindicales, faltas y otras retenciones se configuran en el catálogo de deducciones y se capturan como movimientos en cada periodo.\n\nCada deducción tiene una clave interna (D001, D002...) y una clave [SAT](https://www.sat.gob.mx/) para el timbrado del CFDI.',
        },
        {
          id: 'l01-09-s5',
          type: 'guided-exercise',
          title: 'Ejercicio guiado',
          content:
            'Clasifica cada deducción como obligatoria o voluntaria:\n\n1. ISR de $2,100\n2. Cuota sindical de $150\n3. [IMSS](https://www.imss.gob.mx/) cuota obrera de $430\n4. Préstamo personal de $1,000\n5. Pensión alimenticia de $3,000\n6. Crédito [INFONAVIT](https://portalmx.infonavit.org.mx/) de $890',
          steps: [
            '1. ISR: OBLIGATORIA (ley del ISR)',
            '2. Cuota sindical: VOLUNTARIA (contrato colectivo)',
            '3. [IMSS](https://www.imss.gob.mx/): OBLIGATORIA (ley del seguro social)',
            '4. Préstamo personal: VOLUNTARIA (acuerdo patrón-trabajador)',
            '5. Pensión alimenticia: OBLIGATORIA (orden judicial, no se puede omitir)',
            '6. Crédito [INFONAVIT](https://portalmx.infonavit.org.mx/): OBLIGATORIA (si existe crédito vigente, el patrón debe retener)',
          ],
        },
        {
          id: 'l01-09-s6',
          type: 'practice-exercise',
          title: 'Ejercicio para ti',
          content:
            'Un empleado tiene sueldo quincenal de $9,000. Sus deducciones son:\n- ISR: $680\n- [IMSS](https://www.imss.gob.mx/): $290\n- Préstamo empresa: $1,500\n- Fondo de ahorro: $450\n\n1. ¿Cuál es su neto?\n2. ¿Cuáles son obligatorias y cuáles voluntarias?\n3. ¿Qué porcentaje de su sueldo se va en deducciones obligatorias?\n4. ¿Qué porcentaje en voluntarias?',
          solution:
            '1. **Neto:** $9,000 - $680 - $290 - $1,500 - $450 = **$6,080**\n2. **Clasificación:**\n   - **Obligatorias:** ISR ($680) e IMSS ($290)\n   - **Voluntarias:** Préstamo ($1,500) y Fondo de ahorro ($450)\n3. **Porcentaje obligatorias:** ($970 / $9,000) × 100 = **10.77%**\n4. **Porcentaje voluntarias:** ($1,950 / $9,000) × 100 = **21.66%**',
        },
        {
          id: 'l01-09-s7',
          type: 'common-errors',
          title: 'Errores frecuentes',
          content:
            '**❌ Descontar al trabajador sin su consentimiento.**\nLas deducciones voluntarias requieren acuerdo escrito. Sin él, el descuento es ilegal.\n\n**❌ Olvidar retener el crédito [INFONAVIT](https://portalmx.infonavit.org.mx/).**\nSi el trabajador tiene crédito vigente, el patrón ESTÁ OBLIGADO a retenerlo. No hacerlo genera recargos y responsabilidad patronal.\n\n**❌ Confundir deducciones del trabajador con cargas patronales.**\nEl [IMSS](https://www.imss.gob.mx/) tiene cuota obrera (deducción al trabajador) y cuota patronal (gasto de la empresa). Son montos diferentes y se calculan con tasas diferentes. En la nómina del trabajador solo aparece la cuota obrera.',
        },
      ],
      quiz: {
        id: 'q01-09',
        title: 'Mini examen — Lección 9',
        description: 'Verifica que comprendes las deducciones de nómina.',
        passingScore: 70,
        questions: [
          {
            id: 'q01-09-1',
            question: '¿Cuáles son las tres deducciones obligatorias principales?',
            options: [
              'Sueldo, bono, comisiones',
              'ISR, [IMSS](https://www.imss.gob.mx/) (cuota obrera), [INFONAVIT](https://portalmx.infonavit.org.mx/) (si hay crédito)',
              'Préstamo, cuota sindical, fondo de ahorro',
              'Aguinaldo, vacaciones, PTU',
            ],
            correctAnswer: 1,
            explanation: 'ISR, [IMSS](https://www.imss.gob.mx/) e [INFONAVIT](https://portalmx.infonavit.org.mx/) son las tres deducciones obligatorias que todo patrón debe retener.',
          },
          {
            id: 'q01-09-2',
            question: '¿Qué pasa si el patrón no retiene el crédito [INFONAVIT](https://portalmx.infonavit.org.mx/) del trabajador?',
            options: [
              'Nada, es opcional',
              'El patrón es responsable de los pagos no retenidos y se generan recargos',
              'El trabajador pierde su crédito',
              'El [SAT](https://www.sat.gob.mx/) multa al trabajador',
            ],
            correctAnswer: 1,
            explanation: 'El patrón está obligado a retener. Si no lo hace, el patrón asume la responsabilidad y se generan recargos.',
          },
          {
            id: 'q01-09-3',
            question: '¿Qué tipo de deducción es la pensión alimenticia?',
            options: ['Voluntaria', 'Patronal', 'Obligatoria por orden judicial', 'No es una deducción'],
            correctAnswer: 2,
            explanation: 'La pensión alimenticia se descuenta por orden del juzgado familiar. El patrón DEBE retenerla; no es negociable.',
          },
        ],
      },
    },

    // ── Lección 10 ───────────────────────────────────────
    {
      id: 'l01-10',
      slug: 'introduccion-isr-imss-[infonavit](https://portalmx.infonavit.org.mx/)',
      number: 10,
      title: 'Introducción a ISR, [IMSS](https://www.imss.gob.mx/) e [INFONAVIT](https://portalmx.infonavit.org.mx/)',
      description: 'Primera aproximación a los tres pilares de la nómina mexicana.',
      durationMinutes: 35,
      objectives: [
        'Entender qué es el ISR y cómo se calcula a grandes rasgos',
        'Conocer la estructura básica de las cuotas del [IMSS](https://www.imss.gob.mx/)',
        'Saber qué es el [INFONAVIT](https://portalmx.infonavit.org.mx/) y cómo funciona el crédito',
        'Ver el panorama completo de la "nómina fiscal"',
      ],
      sections: [
        {
          id: 'l01-10-s1',
          type: 'concept',
          title: 'Los tres pilares de la nómina fiscal',
          content:
            'Toda nómina en México gira alrededor de tres instituciones:\n\n**1. [SAT](https://www.sat.gob.mx/) — ISR (Impuesto Sobre la Renta)**\nEl impuesto que el trabajador paga al gobierno por sus ingresos. El patrón lo retiene y lo entera (paga) al [SAT](https://www.sat.gob.mx/).\n\n**2. [IMSS](https://www.imss.gob.mx/) — Seguro Social**\nLas cuotas que tanto el patrón como el trabajador pagan para que el empleado tenga acceso a servicios médicos, pensión, guarderías, etc.\n\n**3. [INFONAVIT](https://portalmx.infonavit.org.mx/) — Vivienda**\nLas aportaciones patronales para que el trabajador pueda acceder a un crédito de vivienda. Si el trabajador ya tiene crédito, se le descuenta de la nómina.',
        },
        {
          id: 'l01-10-s2',
          type: 'explanation',
          title: 'ISR — Lo básico',
          content:
            'El ISR para nóminas se calcula con tablas progresivas publicadas por el [SAT](https://www.sat.gob.mx/). A mayor ingreso, mayor tasa.\n\nEl cálculo simplificado es:\n\n1. Determinar la base gravable (percepciones gravadas del periodo).\n2. Ubicar el rango en la tabla de ISR.\n3. Aplicar la fórmula: ISR = (Base − Límite inferior) × Tasa + Cuota fija.\n4. Restar el subsidio al empleo (si aplica).\n\nEn el nivel 6 profundizaremos en las tablas y el cálculo completo. Por ahora, quédate con el concepto: el ISR se calcula sobre la base gravable y es progresivo.',
          callouts: [
            {
              type: 'note',
              content:
                'El subsidio al empleo es un beneficio fiscal que reduce o elimina el ISR para trabajadores de ingresos bajos. En 2026, NOI 11 tiene tablas actualizadas de subsidio.',
            },
          ],
        },
        {
          id: 'l01-10-s3',
          type: 'numeric-example',
          title: 'Panorama de costos',
          content:
            'Veamos cuánto cuesta realmente un empleado con sueldo mensual de $15,000. No solo es el sueldo; el patrón paga mucho más:',
          codeBlocks: [
            {
              language: 'text',
              label: 'Costo real de un empleado',
              code: 'LO QUE EL TRABAJADOR VE:\n  Sueldo bruto:         $15,000.00\n  − ISR:                −$1,226.00\n  − [IMSS](https://www.imss.gob.mx/) obrero:          −$438.00\n  ═══════════════════════════════\n  Neto a recibir:       $13,336.00\n\nLO QUE EL PATRÓN PAGA (además del sueldo):\n  [IMSS](https://www.imss.gob.mx/) patronal:         $3,180.00\n  [INFONAVIT](https://portalmx.infonavit.org.mx/) (5%):          $750.00\n  SAR/Retiro (2%):         $300.00\n  Nóminas (impuesto):      $450.00\n  ═══════════════════════════════\n  Costo patronal extra:  $4,680.00\n\nCOSTO TOTAL PARA LA EMPRESA:\n  $15,000 + $4,680 =    $19,680.00',
            },
          ],
          callouts: [
            {
              type: 'important',
              content:
                'El costo real de un empleado para la empresa es aproximadamente 30-35% más que su sueldo bruto. Esto es fundamental para presupuestos y cotizaciones.',
            },
          ],
        },
        {
          id: 'l01-10-s4',
          type: 'noi-procedure',
          title: 'ISR, [IMSS](https://www.imss.gob.mx/) e [INFONAVIT](https://portalmx.infonavit.org.mx/) en NOI',
          content:
            'NOI calcula automáticamente los tres:\n\n- **ISR**: con las tablas del ejercicio vigente. Se actualiza con cada versión de NOI.\n- **[IMSS](https://www.imss.gob.mx/)**: con las tasas y topes vigentes. Calcula cuota obrera y patronal.\n- **[INFONAVIT](https://portalmx.infonavit.org.mx/)**: si el trabajador tiene crédito, NOI aplica el descuento según el tipo (porcentaje, cuota fija o VSM).\n\nTodo esto se refleja en el recibo de nómina y en los reportes para declaraciones.',
        },
        {
          id: 'l01-10-s5',
          type: 'guided-exercise',
          title: 'Ejercicio guiado: el panorama completo',
          content:
            'Hagamos el ejercicio práctico del nivel: calcular manualmente una nómina sencilla.\n\nEmpleado: Roberto García\nSueldo mensual: $15,000\nAntigüedad: 1 año\nPeriodo: quincenal\nSin crédito [INFONAVIT](https://portalmx.infonavit.org.mx/)\nSin incidencias',
          codeBlocks: [
            {
              language: 'formula',
              label: 'Cálculo paso a paso',
              code: 'PASO 1: Salario diario\n  SD = $15,000 ÷ 30 = $500.00\n\nPASO 2: Sueldo quincenal (percepción)\n  Sueldo = $500 × 15 = $7,500.00\n\nPASO 3: ISR aproximado (simplificado)\n  Base gravable quincenal: $7,500.00\n  ISR aproximado: ~$613.00\n\nPASO 4: [IMSS](https://www.imss.gob.mx/) cuota obrera (aproximado)\n  Sobre SBC ≈ $524.66 × 15 días\n  Cuota obrera ≈ $219.00\n\nPASO 5: Neto\n  $7,500 − $613 − $219 = $6,668.00',
            },
          ],
          steps: [
            'El cálculo exacto del ISR requiere las tablas del [SAT](https://www.sat.gob.mx/) (nivel 6).',
            'El cálculo exacto del [IMSS](https://www.imss.gob.mx/) requiere las tasas vigentes (nivel 6).',
            'Por ahora, los valores son aproximados para que veas el flujo completo.',
            'En NOI, estos cálculos se hacen automáticamente. Tu trabajo es verificar que tengan sentido.',
          ],
        },
        {
          id: 'l01-10-s6',
          type: 'practice-exercise',
          title: 'Ejercicio para ti — Caso práctico del nivel',
          content:
            'Ahora es tu turno. Calcula la nómina quincenal (aproximada) para:\n\n**Empleada**: Ana Martínez\n**Sueldo mensual**: $18,000\n**Antigüedad**: 2 años\n**Sin [INFONAVIT](https://portalmx.infonavit.org.mx/), sin incidencias**\n\nCalcula:\n1. Salario diario\n2. SDI (FI para 2 años: ~1.0521)\n3. Sueldo quincenal\n4. ISR aproximado (usa 8% del bruto como estimación)\n5. [IMSS](https://www.imss.gob.mx/) obrero aproximado (usa 3% del bruto como estimación)\n6. Neto a pagar\n\n¿El resultado tiene sentido? ¿El neto está entre 85% y 92% del bruto?',
          solution:
            '1. **Salario diario:** $18,000 ÷ 30 = **$600.00**\n2. **SDI:** $600.00 × 1.0521 = **$631.26**\n3. **Sueldo quincenal:** $600.00 × 15 = **$9,000.00** (Bruto)\n4. **ISR aproximado:** $9,000 × 0.08 = **$720.00**\n5. **IMSS obrero aproximado:** $9,000 × 0.03 = **$270.00**\n6. **Neto a pagar:** $9,000 - $720 - $270 = **$8,010.00**\n\n**Evaluación:** Sí, tiene sentido. El neto ($8,010) representa exactamente el **89%** del sueldo bruto ($9,000), que está perfectamente dentro del rango saludable del 85% - 92%.',
        },
        {
          id: 'l01-10-s7',
          type: 'common-errors',
          title: 'Errores frecuentes',
          content:
            '**❌ Pensar que el ISR es un porcentaje fijo.**\nEl ISR es progresivo. No hay "un 20% de ISR para todos". Cada rango de ingreso tiene su tasa.\n\n**❌ Confundir cuota obrera con cuota patronal del [IMSS](https://www.imss.gob.mx/).**\nLa nómina del trabajador solo muestra la cuota OBRERA. La patronal es un gasto de la empresa que no aparece en el recibo.\n\n**❌ Olvidar que el costo patronal es adicional al sueldo.**\nCuando presupuestes personal, el costo real es ~30-35% más que el sueldo bruto.\n\n**❌ Asumir que NOI hace todo perfecto.**\nNOI calcula correctamente SI la configuración es correcta. Basura entra, basura sale. Por eso este nivel existe.',
        },
      ],
      quiz: {
        id: 'q01-10',
        title: 'Mini examen — Lección 10 (Examen del Nivel 1)',
        description: 'Examen integrador del Nivel 1. Demuestra que dominas los fundamentos de nómina.',
        passingScore: 80,
        questions: [
          {
            id: 'q01-10-1',
            question: '¿Cuáles son los tres pilares de la nómina fiscal mexicana?',
            options: [
              'Sueldo, bono, comisiones',
              'ISR ([SAT](https://www.sat.gob.mx/)), [IMSS](https://www.imss.gob.mx/), [INFONAVIT](https://portalmx.infonavit.org.mx/)',
              'Percepciones, deducciones, neto',
              '[LFT](https://www.diputados.gob.mx/LeyesBiblio/pdf/125_240124.pdf), CFF, LISR',
            ],
            correctAnswer: 1,
            explanation: 'ISR ([SAT](https://www.sat.gob.mx/)), [IMSS](https://www.imss.gob.mx/) e [INFONAVIT](https://portalmx.infonavit.org.mx/) son las tres instituciones que definen las obligaciones fiscales de la nómina.',
          },
          {
            id: 'q01-10-2',
            question: '¿Aproximadamente cuánto más le cuesta a una empresa un empleado respecto a su sueldo bruto?',
            options: ['5-10% más', '15-20% más', '30-35% más', '50% más'],
            correctAnswer: 2,
            explanation:
              'Entre cuotas patronales de [IMSS](https://www.imss.gob.mx/), [INFONAVIT](https://portalmx.infonavit.org.mx/), SAR e impuesto sobre nóminas, el costo real es aproximadamente 30-35% superior al sueldo bruto.',
          },
          {
            id: 'q01-10-3',
            question: 'Un empleado con sueldo mensual de $21,000. ¿Cuál es su salario diario?',
            options: ['$677.42', '$700.00', '$1,050.00', '$750.00'],
            correctAnswer: 1,
            explanation: 'SD = $21,000 ÷ 30 = $700.00',
          },
          {
            id: 'q01-10-4',
            question: '¿Qué es el factor de integración?',
            options: [
              'Un porcentaje que se resta al sueldo',
              'Un número que, multiplicado por el SD, da el SDI al integrar prestaciones',
              'La tasa del ISR',
              'El porcentaje de [IMSS](https://www.imss.gob.mx/)',
            ],
            correctAnswer: 1,
            explanation:
              'El factor de integración convierte el SD en SDI al incorporar la parte proporcional diaria de aguinaldo y prima vacacional.',
          },
          {
            id: 'q01-10-5',
            question: 'Si las percepciones son $10,000, el ISR es $1,100, el [IMSS](https://www.imss.gob.mx/) es $350, ¿cuál es el neto?',
            options: ['$11,450', '$10,000', '$8,550', '$8,900'],
            correctAnswer: 2,
            explanation: 'Neto = $10,000 − $1,100 − $350 = $8,550.',
          },
        ],
      },
    },
  ],
};
