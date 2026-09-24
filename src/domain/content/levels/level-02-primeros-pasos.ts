/**
 * NIVEL 2 — Primeros Pasos en Aspel NOI (Lecciones 11–20)
 *
 * Configuración inicial del programa.
 * Construimos la empresa ficticia: Comercializadora Horizonte S.A. de C.V.
 */

import type { Level } from '@/domain/models/course.model';

export const level02: Level = {
  id: 'level-02',
  slug: 'primeros-pasos-noi',
  number: 2,
  title: 'Primeros Pasos en Aspel NOI',
  subtitle: '10 → 20',
  description:
    'Instalación, configuración y primeros pasos en NOI 11. Construiremos nuestra empresa ficticia "Comercializadora Horizonte S.A. de C.V." que nos acompañará durante todo el curso.',
  difficulty: 'beginner',
  color: 'green',
  icon: '🟢',
  practicalCase:
    'Configurar desde cero una empresa ficticia: Comercializadora Horizonte S.A. de C.V., con todos sus datos fiscales, registro patronal y parámetros de nómina.',
  lessons: [
    {
      id: 'l02-01',
      slug: 'instalacion-noi-11',
      number: 11,
      title: 'Instalación de NOI 11',
      description: 'Requisitos del sistema, descarga e instalación de Aspel NOI 11.',
      durationMinutes: 25,
      objectives: [
        'Verificar los requisitos mínimos del sistema',
        'Descargar NOI 11 desde el portal de Aspel',
        'Instalar el programa paso a paso',
        'Activar la licencia o versión de prueba',
      ],
      sections: [
        {
          id: 'l02-01-s1',
          type: 'concept',
          title: 'Antes de instalar',
          content:
            'Aspel NOI 11 es un programa de escritorio para Windows. Antes de instalarlo, necesitas verificar que tu equipo cumpla con los requisitos mínimos:\n\n- **Sistema operativo**: Windows 10 o superior (64 bits)\n- **Procesador**: Intel Core i3 o equivalente (recomendado: i5 o superior)\n- **RAM**: 4 GB mínimo (recomendado: 8 GB)\n- **Disco**: 2 GB de espacio libre\n- **Base de datos**: SQL Server Express (NOI lo instala automáticamente)\n- **Conexión a internet**: necesaria para timbrado y actualizaciones',
        },
        {
          id: 'l02-01-s2',
          type: 'explanation',
          title: 'Tipos de licencia para aprender',
          content: 'NOI 11 ofrece modalidades premium (suscripción o licencia perpetua), pero para efectos de aprendizaje puedes acceder al software sin costo. A continuación, elige el camino que mejor se adapte a tu situación actual:',
          tabs: [
            {
              id: 'evaluacion',
              title: 'Versión de Evaluación (30 días)',
              content: 'La **Versión de evaluación** te otorga 30 días gratis con **funcionalidad 100% completa**.\n\n### 🔹 Ventajas:\n- Tienes acceso exacto a las mismas funciones que una empresa pagando la licencia Premium.\n- Puedes realizar todos los ejercicios del curso sin restricción alguna.\n- Ideal si planeas terminar este curso en menos de un mes.\n\n### ⚠️ Diferencias con la versión Oficial/Premium:\nLa única diferencia es el **límite de tiempo**. A los 30 días el sistema te impedirá abrir tu base de datos a menos que compres o rentes una licencia oficial de Aspel. En la versión oficial tienes acceso vitalicio (o mientras dure tu suscripción) y soporte técnico.'
            },
            {
              id: 'educativa',
              title: 'Versión Educativa (Académica)',
              content: 'La **Versión Educativa** es un licenciamiento especial proporcionado por Aspel a instituciones académicas (universidades y escuelas).\n\n### 🔹 Ventajas:\n- No caduca en 30 días. Su licencia suele durar todo el semestre o ciclo escolar.\n- Te permite realizar prácticas y cálculos a tu propio ritmo sin la presión del reloj.\n\n### ⚠️ Diferencias con la versión Oficial y Evaluación:\n- **Fechas bloqueadas:** Aspel restringe la fecha de trabajo. A menudo solo te permite capturar nóminas en un rango de fechas específico (ej. un semestre del año pasado). Esto significa que si quieres usar tablas de ISR o Salario Mínimo actualizadas al año corriente, el sistema podría marcar error por estar fuera de rango.\n- **Timbrado deshabilitado:** No podrás timbrar recibos electrónicos reales.\n- **Límite de registros:** Tiene un tope máximo de trabajadores (por ejemplo, 50 empleados).\n\n*Nota: Para los ejercicios de este curso, cualquiera de los dos caminos te servirá perfectamente para aprender el manejo operativo del sistema.*'
            }
          ]
        },
        {
          id: 'l02-01-s3',
          type: 'numeric-example',
          title: 'Proceso de instalación',
          content: 'La instalación sigue un proceso estándar de Windows. Los pasos clave son verificar que SQL Server Express se instale correctamente (NOI lo necesita como motor de base de datos) y seleccionar la ruta de instalación. Se recomienda usar la ruta predeterminada.',
        },
        {
          id: 'l02-01-s4',
          type: 'noi-procedure',
          title: 'Paso a paso en NOI',
          content:
            'Procedimiento de instalación:',
          steps: [
            'Descarga el instalador desde el portal de clientes de Aspel (noiportaldeclientes.aspel.com.mx).',
            'Ejecuta el archivo descargado como Administrador.',
            'Acepta los términos de licencia.',
            'Selecciona la ruta de instalación (recomendado: la predeterminada).',
            'Permite la instalación de SQL Server Express si no está instalado.',
            'Espera a que se complete la instalación (puede tomar 5-15 minutos).',
            'Al finalizar, abre NOI y activa con tu número de serie o selecciona "Versión de evaluación".',
            'Verifica que el programa abre correctamente y muestra la pantalla de bienvenida.',
          ],
        },
        {
          id: 'l02-01-s5',
          type: 'guided-exercise',
          title: 'Ejercicio guiado',
          content: 'Instala NOI 11 en tu equipo siguiendo los pasos anteriores. Verifica que:\n\n1. El programa abre sin errores.\n2. La pantalla de bienvenida se muestra.\n3. Puedes acceder al menú principal.',
          steps: [
            'Si recibes un error de SQL Server, reinicia el equipo e intenta de nuevo.',
            'Si el antivirus bloquea la instalación, agrega una excepción para la carpeta de Aspel.',
            'Toma una captura de pantalla de la pantalla inicial para confirmar.',
          ],
        },
        {
          id: 'l02-01-s6',
          type: 'practice-exercise',
          title: 'Ejercicio para ti',
          content: 'Una vez instalado, navega por los menús principales sin modificar nada. Identifica:\n\n1. ¿Dónde se crean las empresas?\n2. ¿Dónde están los catálogos de trabajadores?\n3. ¿Dónde se procesan las nóminas?\n4. ¿Dónde se generan los reportes?',
          solution: '1. **Empresas:** En el menú *Configuración* -> *Parámetros del Sistema*.\n2. **Trabajadores:** En el menú *Nómina* -> *Trabajadores*.\n3. **Cálculo:** En el menú *Nómina* -> *Cálculo de Nómina*.\n4. **Reportes:** En el menú *Reportes* -> *Recibos Electrónicos* o *Nómina*.',
        },
        {
          id: 'l02-01-s7',
          type: 'common-errors',
          title: 'Errores frecuentes',
          content:
            '**❌ Instalar sin permisos de administrador.**\nNOI necesita permisos para instalar SQL Server y configurar servicios. Siempre ejecutar como Administrador.\n\n**❌ No reiniciar después de la instalación.**\nAlgunos componentes (especialmente SQL Server) requieren reinicio para funcionar correctamente.\n\n**❌ Tener otra instancia de SQL Server que entre en conflicto.**\nSi ya tienes SQL Server instalado, puede haber conflictos de puertos. El instalador de NOI normalmente lo resuelve, pero si hay problemas, contacta soporte de Aspel.',
        },
      ],
      quiz: {
        id: 'q02-01',
        title: 'Mini examen — Lección 11',
        description: 'Verifica que completaste la instalación.',
        passingScore: 70,
        questions: [
          {
            id: 'q02-01-1',
            question: '¿Qué motor de base de datos utiliza Aspel NOI 11?',
            options: ['MySQL', 'PostgreSQL', 'SQL Server Express', 'SQLite'],
            correctAnswer: 2,
            explanation: 'NOI 11 usa SQL Server Express como motor de base de datos. Se instala automáticamente con el programa.',
          },
          {
            id: 'q02-01-2',
            question: '¿Cuántos días dura la versión de evaluación de NOI?',
            options: ['7 días', '15 días', '30 días', '60 días'],
            correctAnswer: 2,
            explanation: 'La versión de evaluación dura 30 días con funcionalidad completa.',
          },
          {
            id: 'q02-01-3',
            question: '¿Qué sistema operativo necesita NOI 11?',
            options: ['macOS', 'Linux', 'Windows 10 o superior (64 bits)', 'Cualquiera'],
            correctAnswer: 2,
            explanation: 'NOI 11 es un programa de escritorio exclusivo para Windows 10 o superior en 64 bits.',
          },
        ],
      },
    },
    {
      id: 'l02-02',
      slug: 'interfaz-y-menus',
      number: 12,
      title: 'Interfaz y menús',
      description: 'Navegar la interfaz de NOI 11 y conocer los menús principales.',
      durationMinutes: 20,
      objectives: ['Identificar las áreas principales de la interfaz', 'Navegar los menús del programa', 'Conocer los atajos de teclado más útiles'],
      sections: [
        { id: 'l02-02-s1', type: 'concept', title: 'La interfaz de NOI 11', content: 'NOI 11 tiene una interfaz de escritorio clásica organizada en:\n\n- **Barra de menús**: Archivo, Edición, Nómina, Consultas, Reportes, Utilerías.\n- **Barra de herramientas**: accesos rápidos a funciones comunes.\n- **Área de trabajo**: donde se despliegan las ventanas de captura y consulta.\n- **Barra de estado**: muestra la empresa activa, periodo y usuario.\n\nLa organización sigue el flujo natural: primero configuras (Archivo), luego capturas (Nómina), después consultas y reportas.' },
        { id: 'l02-02-s2', type: 'explanation', title: 'Menús principales', content: '- **Archivo**: crear/abrir empresa, configurar parámetros, respaldos.\n- **Edición**: catálogos de trabajadores, percepciones, deducciones.\n- **Nómina**: crear periodos, capturar movimientos, procesar, cerrar.\n- **Consultas**: revisar nómina procesada, acumulados, historial.\n- **Reportes**: generar reportes de nómina, listados, declaraciones.\n- **Utilerías**: herramientas de mantenimiento, importación/exportación.' },
        { id: 'l02-02-s3', type: 'numeric-example', title: 'Atajos de teclado', content: 'Los atajos más útiles en NOI:\n\n| Atajo | Función |\n|---|---|\n| F2 | Modificar registro seleccionado |\n| F3 | Dar de alta nuevo registro |\n| F5 | Actualizar/refrescar vista |\n| Ctrl+P | Imprimir |\n| F1 | Ayuda contextual |' },
        { id: 'l02-02-s4', type: 'noi-procedure', title: 'Explorando la interfaz', content: 'Abre NOI y recorre cada menú sin hacer cambios. Observa:\n\n1. La barra de estado inferior muestra la empresa activa.\n2. Los catálogos se abren en ventanas flotantes.\n3. Las ventanas de captura tienen botones de Alta, Baja, Modificar.\n4. Los reportes se pueden previsualizar antes de imprimir.', steps: ['Abre cada menú principal y observa las opciones.', 'Pasa el cursor sobre los iconos de la barra de herramientas para ver tooltips.', 'Identifica dónde están los catálogos de trabajadores y percepciones.', 'Nota que algunos menús están deshabilitados si no hay empresa abierta.'] },
        { id: 'l02-02-s5', type: 'guided-exercise', title: 'Ejercicio guiado', content: 'Abre NOI y responde:\n1. ¿En qué menú se crea una nueva empresa?\n2. ¿Dónde se configura el catálogo de trabajadores?\n3. ¿Desde qué menú se procesa la nómina?', steps: ['1. Menú Archivo → Nueva empresa.', '2. Menú Edición → Trabajadores.', '3. Menú Nómina → Procesar nómina.'] },
        { id: 'l02-02-s6', type: 'practice-exercise', title: 'Ejercicio para ti', content: 'Sin modificar nada, haz un mapa de la interfaz: dibuja o escribe los 6 menús principales y lista al menos 3 opciones de cada uno. Esto te servirá como referencia rápida durante el curso.', solution: '**Menús Principales:**\n1. **Archivo:** Respaldos, Empresa, Salir.\n2. **Catálogos:** Departamentos, Puestos, Tipos de Faltas.\n3. **Nómina:** Trabajadores, Cálculo, Faltas.\n4. **CFDI:** Timbrar, Cancelar, Administrador de CFDI.\n5. **Reportes:** Emisión de recibos, Acumulados, IMSS/Afore/Infonavit.\n6. **Configuración:** Parámetros del sistema, Usuarios, Perfiles.' },
        { id: 'l02-02-s7', type: 'common-errors', title: 'Errores frecuentes', content: '**❌ Intentar capturar datos sin empresa abierta.**\nNOI necesita que primero abras o crees una empresa. Sin ella, la mayoría de menús están deshabilitados.\n\n**❌ No usar F1 para la ayuda.**\nNOI tiene ayuda contextual integrada. Si no sabes qué hace un campo, presiona F1.' },
      ],
      quiz: {
        id: 'q02-02', title: 'Mini examen — Lección 12', description: 'Verifica que conoces la interfaz.', passingScore: 70,
        questions: [
          { id: 'q02-02-1', question: '¿En qué menú se crea una nueva empresa en NOI?', options: ['Edición', 'Nómina', 'Archivo', 'Utilerías'], correctAnswer: 2, explanation: 'La creación de empresas se encuentra en el menú Archivo.' },
          { id: 'q02-02-2', question: '¿Qué tecla abre la ayuda contextual en NOI?', options: ['F1', 'F2', 'F5', 'Ctrl+H'], correctAnswer: 0, explanation: 'F1 abre la ayuda contextual en cualquier ventana de NOI.' },
        ],
      },
    },
    {
      id: 'l02-03', slug: 'crear-empresa', number: 13, title: 'Crear una empresa', description: 'Crear la empresa ficticia Comercializadora Horizonte S.A. de C.V.', durationMinutes: 30,
      objectives: ['Crear una empresa nueva en NOI', 'Ingresar los datos generales de la empresa', 'Entender la diferencia entre empresa fiscal y empresa en NOI'],
      sections: [
        { id: 'l02-03-s1', type: 'concept', title: '¿Qué es una empresa en NOI?', content: 'En NOI, una "empresa" es un espacio de trabajo independiente con su propia configuración, catálogos y nóminas. Cada empresa tiene:\n\n- Datos fiscales propios (RFC, razón social)\n- Su propio catálogo de trabajadores\n- Sus propias percepciones y deducciones\n- Sus propios periodos y nóminas\n\nSi una persona física o moral tiene múltiples registros patronales, puede manejarlos como empresas separadas en NOI.' },
        { id: 'l02-03-s2', type: 'explanation', title: 'Nuestra empresa ficticia', content: 'Durante todo el curso trabajaremos con:\n\n**Razón social**: Comercializadora Horizonte S.A. de C.V.\n**RFC**: CHO260101ABC\n**Giro**: Comercio al por mayor\n**Domicilio fiscal**: Av. Reforma 500, Col. Centro, CP 06000, CDMX\n**Registro patronal**: Y60-12345-10-1\n**Periodos**: Quincenal (administrativos) y Semanal (operativos)\n\nEsta empresa nos acompañará de la lección 13 a la 100.' },
        { id: 'l02-03-s3', type: 'numeric-example', title: 'Datos necesarios para crear la empresa', content: 'NOI solicita como mínimo:\n\n1. Nombre o razón social\n2. RFC\n3. Régimen fiscal\n4. Domicilio fiscal completo (calle, número, colonia, CP, municipio, estado)\n5. Tipo de periodo de nómina principal' },
        { id: 'l02-03-s4', type: 'noi-procedure', title: 'Paso a paso', content: 'Creación de la empresa en NOI:', steps: ['Abre NOI y ve a Archivo → Nueva empresa.', 'Ingresa la razón social: Comercializadora Horizonte S.A. de C.V.', 'Ingresa el RFC: CHO260101ABC', 'Selecciona el régimen fiscal correspondiente.', 'Captura el domicilio fiscal completo.', 'Selecciona el periodo principal: Quincenal.', 'Guarda la empresa.', 'Verifica que aparece en la barra de estado como empresa activa.'] },
        { id: 'l02-03-s5', type: 'guided-exercise', title: 'Ejercicio guiado', content: 'Crea la empresa Comercializadora Horizonte siguiendo los pasos anteriores. Al finalizar, verifica que:\n\n1. La empresa aparece en la lista de empresas.\n2. Los datos fiscales están completos.\n3. El periodo quincenal está configurado.' },
        { id: 'l02-03-s6', type: 'practice-exercise', title: 'Ejercicio para ti', content: 'Crea una SEGUNDA empresa de prueba con datos ficticios diferentes (otra razón social, otro RFC, periodo semanal). Esto te ayudará a entender que NOI maneja empresas independientes.', solution: 'Al crear una segunda empresa (Empresa 2) desde *Archivo -> Empresa*, NOI genera un juego de tablas completamente independiente en la base de datos (e.g., `NOI11EMP02.FDB` vs `NOI11EMP01.FDB`). Los trabajadores, periodos y configuraciones de la Empresa 1 no afectarán a la Empresa 2.' },
        { id: 'l02-03-s7', type: 'common-errors', title: 'Errores frecuentes', content: '**❌ Ingresar un RFC con formato incorrecto.**\nPersona moral: 3 letras + 6 números + 3 caracteres. Persona física: 4 letras + 6 números + 3 caracteres.\n\n**❌ No completar el domicilio fiscal.**\nEl CP y la entidad federativa son necesarios para el timbrado del CFDI. Sin ellos, no podrás timbrar.\n\n**❌ Seleccionar el periodo incorrecto.**\nCambiar el periodo después de haber procesado nóminas es muy complicado. Asegúrate de elegir el correcto desde el inicio.' },
      ],
      quiz: {
        id: 'q02-03', title: 'Mini examen — Lección 13', description: 'Verifica la creación de empresa.', passingScore: 70,
        questions: [
          { id: 'q02-03-1', question: '¿Cuál es el RFC de nuestra empresa ficticia?', options: ['HOR260101ABC', 'CHO260101ABC', 'COM260101ABC', 'CIH260101ABC'], correctAnswer: 1, explanation: 'El RFC de Comercializadora Horizonte S.A. de C.V. es CHO260101ABC.' },
          { id: 'q02-03-2', question: '¿Qué datos son indispensables para timbrar CFDI?', options: ['Solo el RFC', 'RFC y razón social', 'RFC, razón social, domicilio fiscal completo y régimen fiscal', 'Solo el nombre de la empresa'], correctAnswer: 2, explanation: 'Para timbrar se necesitan todos los datos fiscales completos: RFC, razón social, domicilio con CP y régimen fiscal.' },
        ],
      },
    },
    {
      id: 'l02-04', slug: 'datos-fiscales', number: 14, title: 'Datos fiscales de la empresa', description: 'Configurar correctamente los datos fiscales para timbrado de CFDI.', durationMinutes: 25,
      objectives: ['Configurar RFC, régimen fiscal y domicilio correctamente', 'Entender la relación entre datos fiscales y timbrado'],
      sections: [
        { id: 'l02-04-s1', type: 'concept', title: 'Datos fiscales en NOI', content: 'Los datos fiscales son la identidad de la empresa ante el [SAT](https://www.sat.gob.mx/). Son necesarios para:\n\n- Generar CFDI de nómina válidos\n- Presentar declaraciones\n- Calcular correctamente el ISR\n- Reportar al [IMSS](https://www.imss.gob.mx/)\n\nEn NOI, estos datos se configuran en Archivo → Parámetros de la empresa.' },
        { id: 'l02-04-s2', type: 'explanation', title: 'Campos fiscales críticos', content: '- **RFC**: debe coincidir EXACTAMENTE con la Constancia de Situación Fiscal.\n- **Razón social**: tal como aparece en la constancia, sin abreviaturas no autorizadas.\n- **Régimen fiscal**: seleccionar el correcto del catálogo del [SAT](https://www.sat.gob.mx/).\n- **Código postal**: el del domicilio fiscal registrado ante el [SAT](https://www.sat.gob.mx/).\n- **CURP del representante legal**: necesario para algunos trámites.\n\nSi cualquiera de estos datos no coincide con lo que el [SAT](https://www.sat.gob.mx/) tiene registrado, el CFDI será rechazado.' },
        { id: 'l02-04-s3', type: 'numeric-example', title: 'Datos de Comercializadora Horizonte', content: 'RFC: CHO260101ABC\nRazón social: Comercializadora Horizonte S.A. de C.V.\nRégimen: 601 - General de Ley Personas Morales\nCP fiscal: 06000\nEstado: Ciudad de México\nMunicipio: Cuauhtémoc' },
        { id: 'l02-04-s4', type: 'noi-procedure', title: 'Configuración en NOI', content: 'Accede a los datos fiscales:', steps: ['Abre la empresa en NOI.', 'Ve a Archivo → Parámetros de la empresa.', 'Selecciona la pestaña "Datos fiscales".', 'Verifica que el RFC coincida con tu constancia.', 'Ingresa o verifica la razón social exacta.', 'Selecciona el régimen fiscal del catálogo.', 'Verifica el CP del domicilio fiscal.', 'Guarda los cambios.'] },
        { id: 'l02-04-s5', type: 'guided-exercise', title: 'Ejercicio guiado', content: 'Verifica y completa los datos fiscales de Comercializadora Horizonte en NOI. Asegúrate de que todos los campos estén llenos y correctos.' },
        { id: 'l02-04-s6', type: 'practice-exercise', title: 'Ejercicio para ti', content: '¿Qué pasaría si el CP fiscal en NOI es 06000 pero ante el [SAT](https://www.sat.gob.mx/) tienes registrado 03100? ¿Podrías timbrar? ¿Qué error recibirías?', solution: '**No podrías timbrar.** Al intentar certificar el recibo de nómina (CFDI 4.0), el PAC (Proveedor Autorizado de Certificación) del SAT rechazaría el timbrado devolviendo el error **CFDI40149**, el cual indica que el Código Postal del Emisor no coincide con el registrado en su Constancia de Situación Fiscal.' },
        { id: 'l02-04-s7', type: 'common-errors', title: 'Errores frecuentes', content: '**❌ Copiar el RFC con espacios o caracteres invisibles.**\nAl copiar-pegar el RFC, pueden colarse espacios que invalidan el timbrado.\n\n**❌ No actualizar los datos cuando cambia el domicilio fiscal.**\nSi la empresa cambió de domicilio ante el [SAT](https://www.sat.gob.mx/), debes actualizarlo en NOI antes de timbrar.' },
      ],
      quiz: {
        id: 'q02-04', title: 'Mini examen — Lección 14', description: 'Datos fiscales.', passingScore: 70,
        questions: [
          { id: 'q02-04-1', question: '¿Qué pasa si el RFC en NOI no coincide con el registrado ante el [SAT](https://www.sat.gob.mx/)?', options: ['Nada', 'Los CFDI son rechazados al timbrar', 'Solo afecta reportes', 'Se corrige automáticamente'], correctAnswer: 1, explanation: 'Si el RFC no coincide, el PAC rechazará el CFDI al intentar timbrar.' },
        ],
      },
    },
    {
      id: 'l02-05', slug: 'registro-patronal', number: 15, title: 'Registro patronal', description: 'Entender y configurar el registro patronal ante el [IMSS](https://www.imss.gob.mx/).', durationMinutes: 25,
      objectives: ['Entender qué es el registro patronal', 'Configurar el registro patronal en NOI', 'Conocer la estructura del número de registro patronal'],
      sections: [
        { id: 'l02-05-s1', type: 'concept', title: '¿Qué es el registro patronal?', content: 'El registro patronal es el número que el [IMSS](https://www.imss.gob.mx/) asigna a cada patrón para identificarlo. Es necesario para:\n\n- Inscribir trabajadores en el [IMSS](https://www.imss.gob.mx/)\n- Pagar cuotas obrero-patronales\n- Reportar movimientos afiliatorios (altas, bajas, modificaciones de salario)\n- Vincular créditos [INFONAVIT](https://portalmx.infonavit.org.mx/)\n\nUna empresa puede tener múltiples registros patronales si tiene establecimientos en diferentes entidades o actividades con diferente prima de riesgo.' },
        { id: 'l02-05-s2', type: 'explanation', title: 'Estructura del registro patronal', content: 'El número tiene el formato: **X00-00000-00-0**\n\n- Primer carácter: clase de riesgo o subdelegación\n- Siguientes dígitos: número secuencial asignado por el [IMSS](https://www.imss.gob.mx/)\n- Últimos dígitos: dígito verificador\n\nPara nuestra empresa: **Y60-12345-10-1**' },
        { id: 'l02-05-s3', type: 'numeric-example', title: 'Clases de riesgo', content: 'El [IMSS](https://www.imss.gob.mx/) clasifica las actividades en 5 clases de riesgo:\n\n| Clase | Prima | Ejemplo |\n|---|---|---|\n| I | 0.54355% | Oficinas |\n| II | 1.13065% | Comercio |\n| III | 2.59840% | Manufactura ligera |\n| IV | 4.65325% | Construcción |\n| V | 7.58875% | Minería |\n\nLa clase de riesgo determina cuánto paga el patrón por el seguro de riesgos de trabajo.' },
        { id: 'l02-05-s4', type: 'noi-procedure', title: 'Configuración en NOI', content: 'Registro patronal en NOI:', steps: ['Ve a Archivo → Parámetros de la empresa.', 'Selecciona "Registro patronal".', 'Ingresa el número: Y60-12345-10-1.', 'Selecciona la clase de riesgo (II para comercio).', 'Ingresa la prima de riesgo vigente.', 'Guarda los cambios.'] },
        { id: 'l02-05-s5', type: 'guided-exercise', title: 'Ejercicio guiado', content: 'Configura el registro patronal de Comercializadora Horizonte con los datos proporcionados. Verifica que la clase de riesgo sea II (Comercio).' },
        { id: 'l02-05-s6', type: 'practice-exercise', title: 'Ejercicio para ti', content: '¿Por qué una empresa constructora paga más de prima de riesgo de trabajo que una oficina de contadores? ¿Qué clase de riesgo le correspondería a cada una?', solution: 'El IMSS clasifica a las empresas según la peligrosidad de su actividad (Clases de la I a la V). \n\n- **Constructora (Clase V - Riesgo Máximo):** Paga una prima mucho más alta (~7.58875% base) porque los albañiles están expuestos a caídas, accidentes graves o fatales.\n- **Oficina de contadores (Clase I - Riesgo Mínimo):** Paga la prima mínima (0.50000%) porque el riesgo de sufrir un riesgo de trabajo frente a una computadora es casi nulo.' },
        { id: 'l02-05-s7', type: 'common-errors', title: 'Errores frecuentes', content: '**❌ No actualizar la prima de riesgo cada año.**\nLa prima de riesgo se revisa anualmente. Si sube o baja, debes actualizarla en NOI.\n\n**❌ Confundir registro patronal con RFC.**\nSon identificadores diferentes: el RFC es ante el [SAT](https://www.sat.gob.mx/), el registro patronal es ante el [IMSS](https://www.imss.gob.mx/).' },
      ],
      quiz: {
        id: 'q02-05', title: 'Mini examen — Lección 15', description: 'Registro patronal.', passingScore: 70,
        questions: [
          { id: 'q02-05-1', question: '¿Ante qué institución se tramita el registro patronal?', options: ['[SAT](https://www.sat.gob.mx/)', '[INFONAVIT](https://portalmx.infonavit.org.mx/)', '[IMSS](https://www.imss.gob.mx/)', 'STPS'], correctAnswer: 2, explanation: 'El registro patronal se tramita ante el [IMSS](https://www.imss.gob.mx/).' },
          { id: 'q02-05-2', question: '¿Cuántas clases de riesgo de trabajo existen?', options: ['3', '4', '5', '6'], correctAnswer: 2, explanation: 'Existen 5 clases de riesgo, de la I (menor riesgo) a la V (mayor riesgo).' },
        ],
      },
    },
    {
      id: 'l02-06', slug: 'parametros-sistema', number: 16, title: 'Parámetros del sistema', description: 'Configurar los parámetros globales del sistema NOI.', durationMinutes: 20,
      objectives: ['Configurar los parámetros generales del sistema', 'Entender cómo afectan al comportamiento global de NOI'],
      sections: [
        { id: 'l02-06-s1', type: 'concept', title: 'Parámetros del sistema', content: 'Los parámetros del sistema son configuraciones globales que afectan cómo NOI funciona:\n\n- Ruta de respaldos\n- Formato de impresión\n- Configuración de correo electrónico para envío de recibos\n- Opciones de seguridad (contraseñas, perfiles de usuario)\n- Configuración del timbrado (PAC, certificados)' },
        { id: 'l02-06-s2', type: 'explanation', title: 'Configuraciones clave', content: 'Las más importantes para empezar:\n\n1. **Ruta de respaldos**: define dónde se guardan los respaldos automáticos. Usa una carpeta fuera del disco C: o en la nube.\n2. **Timbrado**: necesitarás configurar tu PAC (Proveedor Autorizado de Certificación) para timbrar. Lo haremos en el nivel 8.\n3. **Correo**: configura el servidor SMTP si quieres enviar recibos por email.' },
        { id: 'l02-06-s3', type: 'numeric-example', title: 'Ejemplo de configuración', content: 'Ruta de respaldos: D:\\Respaldos\\NOI\\\nFormato de fecha: dd/mm/aaaa\nMoneda: MXN\nDecimales: 2' },
        { id: 'l02-06-s4', type: 'noi-procedure', title: 'Configuración en NOI', content: 'Accede a los parámetros:', steps: ['Ve a Archivo → Parámetros del sistema.', 'Configura la ruta de respaldos.', 'Verifica el formato de fecha y moneda.', 'Guarda los cambios.'] },
        { id: 'l02-06-s5', type: 'guided-exercise', title: 'Ejercicio guiado', content: 'Configura los parámetros básicos del sistema. Crea una carpeta de respaldos y configúrala en NOI.' },
        { id: 'l02-06-s6', type: 'practice-exercise', title: 'Ejercicio para ti', content: '¿Por qué es importante tener la ruta de respaldos en un disco diferente al de instalación o en la nube?', solution: 'Si guardas los respaldos en el mismo disco duro (C:) donde está instalada la base de datos, y el disco duro falla (se quema, sufre un ataque de ransomware, o se corrompe el sistema operativo), **perderás tanto la base de datos original como los respaldos al mismo tiempo**. Guardarlos en otro disco, servidor o en la nube garantiza la continuidad del negocio ante desastres físicos.' },
        { id: 'l02-06-s7', type: 'common-errors', title: 'Errores frecuentes', content: '**❌ No configurar respaldos.**\nSi el disco falla, pierdes toda la información de nómina. Los respaldos son obligatorios.\n\n**❌ Usar la carpeta predeterminada en C:\\.**\nSi el sistema operativo falla, pierdes los respaldos junto con NOI.' },
      ],
      quiz: {
        id: 'q02-06', title: 'Mini examen — Lección 16', description: 'Parámetros del sistema.', passingScore: 70,
        questions: [
          { id: 'q02-06-1', question: '¿Dónde se recomienda configurar la ruta de respaldos?', options: ['En el escritorio', 'En la misma carpeta de NOI', 'En un disco diferente o en la nube', 'No es necesario configurar respaldos'], correctAnswer: 2, explanation: 'Los respaldos deben estar en una ubicación diferente para proteger contra fallas de disco.' },
        ],
      },
    },
    {
      id: 'l02-07', slug: 'parametros-nomina', number: 17, title: 'Parámetros de nómina', description: 'Configurar los parámetros específicos de cálculo de nómina.', durationMinutes: 30,
      objectives: ['Configurar tablas de ISR vigentes', 'Configurar tasas de [IMSS](https://www.imss.gob.mx/)', 'Configurar el salario mínimo y [UMA](https://www.inegi.org.mx/temas/uma/)'],
      sections: [
        { id: 'l02-07-s1', type: 'concept', title: 'Parámetros de nómina', content: 'Los parámetros de nómina son las tablas y tasas que NOI usa para calcular la nómina. Incluyen:\n\n- Tablas de ISR (mensuales y anuales)\n- Tasas de [IMSS](https://www.imss.gob.mx/) (por ramo de seguro)\n- Salario mínimo general y profesional\n- [UMA](https://www.inegi.org.mx/temas/uma/) vigente\n- Tope de SBC (25 [UMA](https://www.inegi.org.mx/temas/uma/))\n- Tabla de subsidio al empleo\n- Tabla de vacaciones por antigüedad\n\nEstos parámetros se actualizan al menos una vez al año. NOI incluye las tablas vigentes en cada actualización.' },
        { id: 'l02-07-s2', type: 'explanation', title: 'Tablas y tasas 2026', content: 'Valores clave para 2026:\n\n- **Salario mínimo general**: $278.80 diarios (zona única)\n- **[UMA](https://www.inegi.org.mx/temas/uma/) diaria**: $113.14\n- **Tope de SBC**: 25 [UMA](https://www.inegi.org.mx/temas/uma/) = $2,828.50 diarios\n- **Subsidio al empleo**: tablas actualizadas conforme a reforma 2026\n\nNOI debe tener estos valores correctamente configurados. Si no, los cálculos serán incorrectos.' },
        { id: 'l02-07-s3', type: 'numeric-example', title: 'Verificación de parámetros', content: 'Para verificar que NOI tiene las tablas correctas:\n\n1. Abre Archivo → Parámetros de nómina → Tablas ISR.\n2. Verifica que el primer rango de la tabla mensual inicie en $0.01.\n3. Verifica que el salario mínimo sea $278.80.\n4. Verifica que la [UMA](https://www.inegi.org.mx/temas/uma/) sea $113.14.' },
        { id: 'l02-07-s4', type: 'noi-procedure', title: 'Verificación en NOI', content: 'Verifica los parámetros:', steps: ['Ve a Archivo → Parámetros de nómina.', 'Revisa la pestaña "Tablas ISR" — verifica que sean las de 2026.', 'Revisa la pestaña "[IMSS](https://www.imss.gob.mx/)" — verifica las tasas.', 'Revisa el salario mínimo y la [UMA](https://www.inegi.org.mx/temas/uma/).', 'Si algún valor está desactualizado, actualiza NOI primero.'] },
        { id: 'l02-07-s5', type: 'guided-exercise', title: 'Ejercicio guiado', content: 'Verifica que todos los parámetros de nómina en tu instalación correspondan a 2026. Anota cualquier discrepancia.' },
        { id: 'l02-07-s6', type: 'practice-exercise', title: 'Ejercicio para ti', content: '¿Qué es la [UMA](https://www.inegi.org.mx/temas/uma/) y por qué se usa en lugar del salario mínimo para calcular topes y exenciones? Investiga cuándo se creó la [UMA](https://www.inegi.org.mx/temas/uma/) y cuál era su valor original.', solution: 'La **UMA (Unidad de Medida y Actualización)** es la referencia económica en pesos para determinar la cuantía del pago de obligaciones (multas, impuestos, exenciones). Se creó en **2016** (con un valor original de $73.04) a través de la Reforma Constitucional de desindexación del Salario Mínimo. \n\n**¿Por qué se usa?** Porque antes, si el gobierno quería subir el salario mínimo para beneficiar a los trabajadores, automáticamente subían las multas, créditos Infonavit y topes de impuestos que estaban "indexados" (amarrados) al salario mínimo. La UMA permitió subir el salario sin encarecer multas y deudas.' },
        { id: 'l02-07-s7', type: 'common-errors', title: 'Errores frecuentes', content: '**❌ Procesar nómina con tablas del año anterior.**\nSi no actualizaste NOI, las tablas de ISR serán las viejas y el ISR retenido será incorrecto.\n\n**❌ Confundir salario mínimo con [UMA](https://www.inegi.org.mx/temas/uma/).**\nDesde 2016 se usan valores diferentes. La [UMA](https://www.inegi.org.mx/temas/uma/) se usa para topes legales; el salario mínimo para pagar trabajadores.' },
      ],
      quiz: {
        id: 'q02-07', title: 'Mini examen — Lección 17', description: 'Parámetros de nómina.', passingScore: 70,
        questions: [
          { id: 'q02-07-1', question: '¿Cuál es el tope del SBC en 2026?', options: ['15 [UMA](https://www.inegi.org.mx/temas/uma/)', '20 [UMA](https://www.inegi.org.mx/temas/uma/)', '25 [UMA](https://www.inegi.org.mx/temas/uma/)', '30 [UMA](https://www.inegi.org.mx/temas/uma/)'], correctAnswer: 2, explanation: 'El tope del Salario Base de Cotización es 25 veces la [UMA](https://www.inegi.org.mx/temas/uma/) diaria.' },
          { id: 'q02-07-2', question: '¿Cada cuánto se deben verificar los parámetros de nómina?', options: ['Nunca', 'Al menos al inicio de cada ejercicio fiscal', 'Solo al instalar NOI', 'Cada semana'], correctAnswer: 1, explanation: 'Las tablas y tasas cambian al menos anualmente. Hay que verificar al inicio de cada ejercicio y cuando haya reformas fiscales.' },
        ],
      },
    },
    {
      id: 'l02-08', slug: 'creacion-periodos', number: 18, title: 'Creación de periodos', description: 'Crear los periodos de nómina para el ejercicio.', durationMinutes: 25,
      objectives: ['Crear periodos de nómina en NOI', 'Entender la numeración de periodos', 'Configurar fechas de pago'],
      sections: [
        { id: 'l02-08-s1', type: 'concept', title: '¿Qué es un periodo?', content: 'Un periodo de nómina es el intervalo de tiempo para el cual se calcula y paga la nómina. En NOI:\n\n- Cada periodo tiene un número secuencial (1, 2, 3...)\n- Tiene fecha de inicio y fecha de fin\n- Tiene fecha de pago\n- Al crear el ejercicio, NOI genera automáticamente todos los periodos del año' },
        { id: 'l02-08-s2', type: 'explanation', title: 'Periodos por tipo de nómina', content: '| Tipo | Periodos/año | Días/periodo |\n|---|---|---|\n| Semanal | 52 | 7 |\n| Catorcenal | 26 | 14 |\n| Quincenal | 24 | 15 |\n| Mensual | 12 | 30 |\n\nPara nuestra empresa usaremos quincenal. NOI creará automáticamente 24 periodos para 2026.' },
        { id: 'l02-08-s3', type: 'numeric-example', title: 'Ejemplo de periodos quincenales', content: 'Periodo 1: 01/01/2026 – 15/01/2026 (pago: 15/01)\nPeriodo 2: 16/01/2026 – 31/01/2026 (pago: 31/01)\nPeriodo 3: 01/02/2026 – 15/02/2026 (pago: 15/02)\n...\nPeriodo 24: 16/12/2026 – 31/12/2026 (pago: 31/12)' },
        { id: 'l02-08-s4', type: 'noi-procedure', title: 'Creación en NOI', content: 'Crear periodos:', steps: ['Ve a Nómina → Periodos.', 'Selecciona "Crear periodos del ejercicio".', 'Selecciona el ejercicio 2026.', 'NOI generará automáticamente los 24 periodos quincenales.', 'Verifica las fechas de inicio, fin y pago.', 'Guarda.'] },
        { id: 'l02-08-s5', type: 'guided-exercise', title: 'Ejercicio guiado', content: 'Crea los periodos quincenales de 2026 para Comercializadora Horizonte. Verifica que se crearon 24 periodos.' },
        { id: 'l02-08-s6', type: 'practice-exercise', title: 'Ejercicio para ti', content: 'Si la empresa también tuviera empleados con nómina semanal, ¿cuántos periodos se crearían? ¿Podrías tener ambos tipos en la misma empresa?', solution: 'Se crearían **52 periodos semanales** en el año (más 24 quincenales). **No se recomienda mezclar periodos en la misma empresa dentro de Aspel NOI**. Lo correcto por configuración, control de fechas de corte y timbrado es crear la **Empresa 1 para Nómina Quincenal** y la **Empresa 2 para Nómina Semanal** (ambas bajo el mismo RFC patronal). Al final el SAT los recibe igual.' },
        { id: 'l02-08-s7', type: 'common-errors', title: 'Errores frecuentes', content: '**❌ No crear los periodos antes de intentar procesar nómina.**\nSin periodos creados, no puedes capturar movimientos ni procesar.\n\n**❌ Modificar las fechas de periodos ya cerrados.**\nUna vez que procesas y cierras un periodo, no se deben modificar sus fechas.' },
      ],
      quiz: {
        id: 'q02-08', title: 'Mini examen — Lección 18', description: 'Periodos de nómina.', passingScore: 70,
        questions: [
          { id: 'q02-08-1', question: '¿Cuántos periodos quincenales tiene un año?', options: ['12', '24', '26', '52'], correctAnswer: 1, explanation: '24 periodos quincenales (2 por mes × 12 meses).' },
        ],
      },
    },
    {
      id: 'l02-09', slug: 'configuracion-periodos', number: 19, title: 'Configuración semanal/quincenal/mensual', description: 'Configurar diferentes tipos de nómina en una misma empresa.', durationMinutes: 20,
      objectives: ['Configurar múltiples tipos de nómina', 'Entender cuándo usar cada tipo', 'Manejar la coexistencia de periodos diferentes'],
      sections: [
        { id: 'l02-09-s1', type: 'concept', title: 'Múltiples tipos de nómina', content: 'Una empresa puede tener trabajadores con diferentes periodos de pago:\n\n- Obreros: semanal\n- Administrativos: quincenal\n- Directivos: mensual\n\nEn NOI, esto se maneja con "tipos de nómina". Cada tipo tiene su propio calendario de periodos y se procesa por separado.' },
        { id: 'l02-09-s2', type: 'explanation', title: 'Configuración práctica', content: 'Para Comercializadora Horizonte:\n\n- **Tipo 1 (Quincenal)**: para el área administrativa (8 empleados)\n- **Tipo 2 (Semanal)**: para el área operativa (que agregaremos después)\n\nCada tipo de nómina genera sus propios recibos, CFDI y reportes.' },
        { id: 'l02-09-s3', type: 'numeric-example', title: 'Calendario de procesamiento', content: 'Quincenal: procesas 2 veces al mes → 24 procesamientos/año\nSemanal: procesas cada semana → 52 procesamientos/año\n\nTotal: 76 procesamientos de nómina al año para la empresa.' },
        { id: 'l02-09-s4', type: 'noi-procedure', title: 'Configuración en NOI', content: 'Configurar tipos de nómina:', steps: ['Ve a Archivo → Parámetros de nómina.', 'En la sección de tipos de nómina, verifica el tipo quincenal.', 'Si necesitas agregar un tipo semanal, créalo desde aquí.', 'Asigna los trabajadores al tipo de nómina correspondiente.'] },
        { id: 'l02-09-s5', type: 'guided-exercise', title: 'Ejercicio guiado', content: 'Verifica la configuración del tipo de nómina quincenal de Comercializadora Horizonte.' },
        { id: 'l02-09-s6', type: 'practice-exercise', title: 'Ejercicio para ti', content: '¿Qué ventajas tiene pagar semanalmente vs quincenalmente? ¿Hay alguna implicación fiscal diferente?', solution: '**Semanal:** Favorece a trabajadores operativos u obreros brindándoles liquidez inmediata. Exige a la empresa un flujo de efectivo constante y cuadruplica la carga administrativa de RRHH (calcular y timbrar 4 o 5 veces al mes).\n**Quincenal:** Preferida para personal administrativo. Reduce la carga de trabajo al procesar nóminas solo 2 veces al mes.\n\n**Implicación fiscal:** Ninguna a nivel anual. El ISR anualizado y las cuotas del IMSS serán exactamente las mismas, solo se retienen y enteran en fracciones diferentes.' },
        { id: 'l02-09-s7', type: 'common-errors', title: 'Errores frecuentes', content: '**❌ Asignar un trabajador al tipo de nómina incorrecto.**\nSi un trabajador quincenal está en nómina semanal, recibirá pagos con la frecuencia incorrecta.\n\n**❌ No procesar todos los tipos de nómina.**\nSi tienes semanal y quincenal, debes procesar AMBOS en sus fechas correspondientes.' },
      ],
      quiz: {
        id: 'q02-09', title: 'Mini examen — Lección 19', description: 'Tipos de nómina.', passingScore: 70,
        questions: [
          { id: 'q02-09-1', question: '¿Puede una empresa tener trabajadores con nómina semanal y quincenal al mismo tiempo?', options: ['No, debe elegir uno', 'Sí, usando diferentes tipos de nómina', 'Solo con licencia especial', 'Sí, pero en empresas separadas'], correctAnswer: 1, explanation: 'NOI permite múltiples tipos de nómina en la misma empresa, cada uno con su calendario.' },
        ],
      },
    },
    {
      id: 'l02-10', slug: 'respaldar-recuperar', number: 20, title: 'Respaldar y recuperar información', description: 'Aprender a proteger la información de nómina con respaldos.', durationMinutes: 20,
      objectives: ['Crear respaldos manuales y automáticos', 'Recuperar información desde un respaldo', 'Establecer una política de respaldos'],
      sections: [
        { id: 'l02-10-s1', type: 'concept', title: '¿Por qué respaldar?', content: 'La información de nómina es CRÍTICA:\n\n- Contiene datos personales de trabajadores (RFC, CURP, NSS)\n- Es necesaria para declaraciones anuales y auditorías\n- Se usa como evidencia en demandas laborales\n- Es la base para el timbrado de CFDI\n\nPerder esta información puede significar multas, demandas y la imposibilidad de comprobar pagos. Los respaldos no son opcionales.' },
        { id: 'l02-10-s2', type: 'explanation', title: 'Tipos de respaldo en NOI', content: '- **Manual**: tú decides cuándo respaldar. Recomendado: antes y después de cada cierre de nómina.\n- **Automático**: NOI puede programar respaldos automáticos (diarios, semanales).\n- **Ubicación**: idealmente en disco externo, nube o servidor de red. NUNCA solo en el mismo disco donde está NOI.\n\nNOI 11 incluye respaldos automáticos como función destacada.' },
        { id: 'l02-10-s3', type: 'numeric-example', title: 'Política de respaldos recomendada', content: '| Cuándo | Tipo | Dónde |\n|---|---|---|\n| Antes de cerrar nómina | Manual | Disco externo |\n| Después de cerrar nómina | Manual | Nube |\n| Diario (automático) | Automático | Servidor de red |\n| Mensual | Manual | Disco externo + nube |\n| Anual (cierre fiscal) | Manual | Múltiples ubicaciones |' },
        { id: 'l02-10-s4', type: 'noi-procedure', title: 'Respaldo en NOI', content: 'Crear un respaldo:', steps: ['Ve a Utilerías → Respaldar información.', 'Selecciona la empresa a respaldar.', 'Elige la ubicación del respaldo.', 'Asigna un nombre descriptivo (ejemplo: Horizonte_Bkp_20260901).', 'Ejecuta el respaldo.', 'Verifica que el archivo se creó correctamente.'] },
        { id: 'l02-10-s5', type: 'guided-exercise', title: 'Ejercicio guiado', content: 'Crea un respaldo de Comercializadora Horizonte. Luego, simula una recuperación abriendo el respaldo en una empresa de prueba diferente.' },
        { id: 'l02-10-s6', type: 'practice-exercise', title: 'Ejercicio para ti', content: 'Configura los respaldos automáticos de NOI para que se ejecuten diariamente. ¿Dónde guardarías los respaldos si trabajas en una laptop sin disco externo?', solution: 'Si se trabaja en una laptop sin disco duro externo, la mejor opción es **configurar la ruta de respaldos automáticos hacia una carpeta sincronizada en la nube** (como una carpeta de Google Drive, OneDrive o Dropbox). De esta forma, cada vez que NOI genere el archivo ZIP, el cliente de la nube lo subirá a internet automáticamente, protegiendo la información ante robo o falla de la laptop.' },
        { id: 'l02-10-s7', type: 'common-errors', title: 'Errores frecuentes', content: '**❌ No respaldar NUNCA.**\nEsto es negligencia profesional. Si pierdes la información de nómina, las consecuencias legales y fiscales son graves.\n\n**❌ Respaldar en el mismo disco.**\nSi el disco falla, pierdes NOI Y el respaldo. Siempre usa una ubicación externa.\n\n**❌ No probar la recuperación.**\nUn respaldo que no se puede restaurar no sirve. Prueba la recuperación al menos una vez al año.' },
      ],
      quiz: {
        id: 'q02-10', title: 'Mini examen — Lección 20 (Examen del Nivel 2)', description: 'Examen integrador del Nivel 2.', passingScore: 80,
        questions: [
          { id: 'q02-10-1', question: '¿Cuándo se recomienda hacer respaldo manual OBLIGATORIAMENTE?', options: ['Cada hora', 'Antes y después de cerrar nómina', 'Solo al final del año', 'No es necesario si hay respaldo automático'], correctAnswer: 1, explanation: 'Antes y después de cerrar nómina es el momento crítico. Si algo sale mal en el cierre, puedes restaurar.' },
          { id: 'q02-10-2', question: '¿Dónde NO se deben guardar los respaldos?', options: ['Disco externo', 'Nube', 'En el mismo disco donde está instalado NOI', 'Servidor de red'], correctAnswer: 2, explanation: 'Si el disco falla, pierdes NOI y el respaldo al mismo tiempo.' },
          { id: 'q02-10-3', question: 'Para crear Comercializadora Horizonte, ¿qué datos ingresamos PRIMERO?', options: ['Trabajadores', 'Percepciones', 'Datos fiscales de la empresa', 'Periodos de nómina'], correctAnswer: 2, explanation: 'El flujo empieza con la empresa y sus datos fiscales. Sin empresa, no hay nada más.' },
        ],
      },
    },
  ],
};
