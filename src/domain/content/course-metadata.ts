/**
 * Course Metadata — Aspel NOI 11: Curso Maestro.
 *
 * Top-level course information and level registry.
 * Individual level content is imported from separate files.
 */

import type { Course } from '@/domain/models/course.model';

import { level01 } from './levels/level-01-fundamentos';
import { level02 } from './levels/level-02-primeros-pasos';
import { level03 } from './levels/level-03-trabajadores';
import { level04 } from './levels/level-04-percepciones-deducciones';
import { level05 } from './levels/level-05-nomina-real';
import { level06 } from './levels/level-06-isr-imss-infonavit';
import { level07 } from './levels/level-07-incidencias';
import { level08 } from './levels/level-08-cfdi-nomina';
import { level09 } from './levels/level-09-nominas-especiales';
import { level10 } from './levels/level-10-experto';

export const noiCourse: Course = {
  id: 'aspel-noi-11-master',
  title: 'Curso Maestro de Aspel NOI 11',
  subtitle: 'De cero a experto — Ruta 0 → 100',
  description:
    'Formación profesional completa en Aspel NOI 11. Pasa de no conocer el sistema a ser capaz de configurar, operar, revisar, corregir y auditar una nómina completa. Actualizado con cambios 2026: subsidio al empleo y nuevas claves SAT.',
  totalHours: '70–90',
  totalLessons: 100,
  totalLevels: 10,
  levels: [
    level01,
    level02,
    level03,
    level04,
    level05,
    level06,
    level07,
    level08,
    level09,
    level10,
  ],
};
