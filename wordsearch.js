const wordSearch = (letters, word) => {
  //join the rows of the 2D array to make it easy to search for words
  //the arrays are pre oriented in the suitable orientation.
  
  const horizontalJoin = letters.map(ls => ls.join(''));
  const verticalJoin = vertical(letters).map(ls => ls.join(''));
  const hJoinReverse = reverseArray(horizontalJoin);
  const vJoinReverse = reverseArray(verticalJoin);
  const diagonalJoin = diagonal(letters);
  // join all the lists so they can be searched at the same time.
  const allLists = [horizontalJoin, verticalJoin, hJoinReverse, vJoinReverse, diagonalJoin];
  const megaJoin = allLists.map(ls => ls.join(''));
    
  // look for the specified word
  for (let el of megaJoin) {
    if (el.includes(word)) return true;
  }

  return false;
};

//returns the diagonal values as an array
const diagonal = function(arr) {
  const x = arr[0].length;
  const y = arr.length;
  let result = [];
  
  // main diagonal values
  let element1 = '';
  for (let i = 0; i < y; i++) {
    element1 += arr[i][i];
  }
  result.push(element1);
  
  //values for the other diagonals
  for (let j = 1; j <= y; j++) {
    let element2 = '';
    let element3 = '';
    for (let i = 0; i < x; i++) {
      if (i + j < x) element2 += arr[i][i + j];
      if (i + j < y) element3 += arr[i + j][i];
    }
    if (element2) result.push(element2);
    if (element3) result.push(element3);
  }

  return result;
};

// returns the array in reverse without changing original
const reverseArray = function(arr) {
  let result = [];
  for (const el of arr) {
    let newOrder = '';
    for (let i = el.length - 1; i >= 0; i--) {
      newOrder += el[i];
    }
    result.push(newOrder);
  }
  return result;
};


// flips array to vertical orientation
const vertical = function(matrix) {
  let result = [];
  for (let i = 0; i < matrix[0].length; i++) {
    result.push([]);
    for (let j = 0; j < matrix.length; j++) {
      result[i].push(0);
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      result[j][i] = matrix[i][j];
    }
  }
  return result;
};

module.exports = wordSearch;