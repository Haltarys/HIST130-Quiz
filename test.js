'use strict';

const chapters = require('./data/chapters.json');
const definitions = require('./data/definitions.json');

function testData() {
  const assert = require('assert');

  chapters.forEach((chapter, i) => {
    assert.strictEqual(chapter.id, i);
  });

  const chapter_titles = chapters.map((chapter) => chapter.title);
  assert.strictEqual(chapter_titles.length, new Set(chapter_titles).size);

  const chapter_subtitles = chapters.map((chapter) => chapter.subtitle);
  assert.strictEqual(chapter_subtitles.length, new Set(chapter_subtitles).size);

  definitions.forEach((definition, i) => {
    assert.strictEqual(definition.id, i);
  });

  const definition_terms = chapters.map((definition) => definition.subtitle);
  assert.strictEqual(definition_terms.length, new Set(definition_terms).size);
}
// testData();

// function* range(start, end, step = 1) {
//   while (start <= end) {
//     yield start;
//     start += step;
//   }
// }
// const array = Array.from(range(84, 96));
// console.log(JSON.stringify(array));

chapters.forEach((chapter) => {
  chapter.definitions.forEach((definition_id) => {
    const definition = definitions.find(
      (definition) => definition.id === definition_id,
    );
    definition.chapterId = chapter.id;
  });
  delete chapter.definitions;
});

console.log(JSON.stringify(definitions, null, 2));
