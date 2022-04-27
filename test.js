'use strict';

const chapters = require('./public/chapters.json');
const definitions = require('./public/definitions.json');

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

// checkDone();

function countDefinitions() {
  const counts = {};

  definitions.forEach(
    (definition) =>
      (counts[definition.chapterId] = (counts[definition.chapterId] || 0) + 1),
  );

  console.log(counts);
}

// countDefinitions();

function lowerCasifyRegex() {
  const lowerCasedDefinitions = definitions.map((definition) => {
    const newRegex = definition.regex.toLowerCase();

    // if (definition.regex !== newRegex) {
    //   console.log(`${definition.regex} -> ${newRegex}`);
    // }
    definition.regex = newRegex;

    return definition;
  });

  console.log(JSON.stringify(lowerCasedDefinitions, undefined, 2));
}

lowerCasifyRegex();
