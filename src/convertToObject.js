'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesObject = {};

  sourceString
    .split(';')
    .map((line) => line.trim())
    .filter((line) => line.length > 0)
    .forEach((line) => {
      const colonIndex = line.indexOf(':');
      if (colonIndex === -1) {
        return;
      }

      const key = line.slice(0, colonIndex).trim();
      const value = line.slice(colonIndex + 1).trim();
      stylesObject[key] = value;
    });

  return stylesObject;
}

module.exports = convertToObject;
