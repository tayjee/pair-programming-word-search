const transpose = function(matrix) {
  // Put your solution here
  let array = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (i === 0) {
        array[j] = [];
      }
      array[j][i] = matrix[i][j];
    }
  }
  return array;
};
  
const wordSearch = (letters, word) => {
  const transposedLetters = transpose(letters);
  const verticalJoin = transposedLetters.map(ls => ls.join(''));
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (l of horizontalJoin) {
    if (l.includes(word)) return true;
    for (w of verticalJoin) {
      if (w.includes(word)) return true;
    }
  }
  return false;
};

module.exports = wordSearch;