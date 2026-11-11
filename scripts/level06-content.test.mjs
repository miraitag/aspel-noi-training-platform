import assert from 'node:assert/strict';
import test from 'node:test';
import { level06 } from '../src/domain/content/levels/level-06-isr-imss-infonavit.ts';

const sectionTypes = ['concept', 'explanation', 'numeric-example', 'noi-procedure', 'guided-exercise', 'practice-exercise', 'common-errors'];

test('nivel 6 conserva identidad y usa rutas y etiquetas legibles', () => {
  assert.equal(level06.id, 'level-06');
  assert.equal(level06.difficulty, 'intermediate');
  assert.equal(level06.slug, 'isr-imss-infonavit');
  assert.equal(level06.lessons.length, 10);
  const ids = new Set();
  for (const [index, lesson] of level06.lessons.entries()) {
    assert.equal(lesson.id, `l06-${String(index + 1).padStart(2, '0')}`);
    assert.equal(lesson.number, 51 + index);
    assert.match(lesson.slug, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
    for (const label of [level06.title, lesson.title, ...lesson.objectives]) assert.doesNotMatch(label, /\]\(https?:/);
    for (const id of [lesson.id, lesson.quiz.id, ...lesson.sections.map(s => s.id), ...lesson.quiz.questions.map(q => q.id)]) {
      assert.ok(!ids.has(id), `ID duplicado: ${id}`);
      ids.add(id);
    }
  }
});

for (const lesson of level06.lessons) {
  test(`lección ${lesson.number}: contenido específico, práctica resuelta y evaluación`, () => {
    assert.deepEqual(lesson.sections.map(s => s.type), sectionTypes);
    assert.ok(lesson.objectives.length >= 3);
    const text = JSON.stringify(lesson);
    assert.doesNotMatch(text, /En esta lección exploraremos a fondo|Ingresa al módulo correspondiente|Te guiaré por las pantallas/);
    assert.match(text, /didáctic[oa]/i, 'Debe distinguir datos de práctica de parámetros fiscales vigentes');
    assert.match(text, /https:\/\//, 'Debe incluir fuentes verificables');
    const section = type => lesson.sections.find(s => s.type === type);
    assert.match(section('numeric-example').content, /\$[\d,]+/);
    assert.ok(section('noi-procedure').steps?.length >= 4);
    for (const type of ['guided-exercise', 'practice-exercise']) {
      assert.ok(section(type).solution?.length > 80, `${type}: falta una solución razonada`);
    }
    assert.ok(lesson.quiz.questions.length >= 3);
    assert.equal(lesson.quiz.passingScore, 70);
    for (const question of lesson.quiz.questions) {
      assert.equal(question.options.length, 4);
      assert.equal(new Set(question.options).size, 4);
      assert.ok(Number.isInteger(question.correctAnswer) && question.correctAnswer >= 0 && question.correctAnswer < 4);
      assert.ok(question.explanation.length > 40);
    }
  });
}
