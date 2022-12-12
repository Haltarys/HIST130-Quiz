'use strict';

const chapters = require('./public/chapters.json');
const definitions = require('./public/definitions.json');

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

// chapters.forEach((chapter) => {
//   chapter.definitions.forEach((definition_id) => {
//     const definition = definitions.find(
//       (definition) => definition.id === definition_id,
//     );
//     definition.chapterId = chapter.id;
//   });
//   delete chapter.definitions;
// });

// console.log(JSON.stringify(definitions, null, 2));

function checkDone() {
  const done = definitions.filter((def) => def.text !== '').length;
  const total = definitions.length;

  definitions.forEach((definition) => {
    if (definition.text === '') console.log(definition);
  });

  console.log(
    `${done}/${total} (${Math.round((done / total) * 10000) / 100}%) done.`,
  );
}

checkDone();

function countDefinitions() {
  const counts = {};

  definitions.forEach(
    (definition) =>
      (counts[definition.chapterId] = (counts[definition.chapterId] || 0) + 1),
  );

  console.log(counts);
}

countDefinitions();

function addDefinitions() {
  const data = [
    { term: "Freedmen's Bureau", pageNumber: 405 },
    { term: 'black code', pageNumber: 407 },
    { term: 'Civil Rights Act of 1866', pageNumber: 409 },
    { term: 'Fourteenth Amendment', pageNumber: 409 },
    { term: 'Military Reconstruction', pageNumber: 411 },
    { term: 'Fifteenth Amendment', pageNumber: 413 },
    { term: 'carpetbagger', pageNumber: 414 },
    { term: 'scalawag', pageNumber: 414 },
    { term: 'Ku Klux Klan', pageNumber: 415 },
    { term: 'sharecropping', pageNumber: 417 },
    { term: 'Redeemers', pageNumber: 421 },
    { term: 'Compromise of 1877', pageNumber: 424 },
  ];

  definitions.push(
    ...data.map(({ term, pageNumber }, i) => ({
      id: definitions.length + i,
      term,
      pageNumber,
      text: '',
      chapterId: 15,
    })),
  );

  // console.log(definitions.slice(-data.length));
  console.log(JSON.stringify(definitions, undefined, 2));
}

// addDefinitions();
