// Iteration #1: Find the maximum
function maxOfTwoNumbers(n1, n2) {
  return Math.max(n1, n2);
}
console.log(maxOfTwoNumbers(2, 4));


// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(words) {

  if (words.length === 0) {
    return null;
  }

  let palabraVacia = ' ';
  for (let i = 0; i < words.length; i++) {

    if (words[i].length > palabraVacia.length) {
      palabraVacia = words[i];
    }
  }
  return palabraVacia;
}
console.log(findLongestWord(words));



// Iteration #3: Calculate the avg
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
  let total = 0;
  if (numbers === 0) {
    return null;
  }
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];

  }
  return total;
}
console.log(sumNumbers(numbers));


// Iteration #3.1 Bonus:
const arr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];

function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {

    if (typeof arr[i] === 'number') {
      total += arr[i];

    } else if (typeof arr[i] === 'string') {
      total += arr[i].length;

    } else if (typeof arr[i] === 'boolean') {
      total += + arr[i];

    } else if (typeof arr[i] === 'object' || Array.isArray(arr[i])) {

      throw new Error('Unsupported data type sir or ma\'am');
    }

  }
  return total;
}
console.log(sum(arr));
// should return: 57


// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersavg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbersavg) {
  let total = 0;

  if (numbersavg.length === 0) {
    console.log(numbersavg);
    return null;
  }

  for (let i = 0; i < numbersavg.length; i++) {
    total += numbersavg[i];
  }
  return total / numbersavg.length;
}
console.log(averageNumbers(numbersavg));


// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(wordsArr) {
  if (wordsArr.length === 0) {
    return null;
  }

  let totalLength = 0;

  for (let i = 0; i < wordsArr.length; i++) {
    totalLength += wordsArr[i].length;
  }

  // Calculamos el promedio de la longitud de las palabras en la matriz
  let averageLength = totalLength / wordsArr.length;

  return averageLength;
}

console.log(averageWordLength(words)); // Output: 5.3


// Bonus - Iteration #4.1
// should return: 5.7

function avg(arr) {
  let total = 0;
  let media = arr.length;
  if (arr.length === 0) {
    return null;

  }
  for (let i = 0; i < arr.length; i++) {

    if (typeof arr[i] === 'number') {
      total += arr[i];

    } else if (typeof arr[i] === 'string') {
      total += arr[i].length;

    } else if (typeof arr[i] === 'boolean') {
      total += + arr[i];
    }

  }
  return total / media;
}
console.log(avg(arr));


// Iteration #5: Unique arrays
const wordsUnique = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];

function uniquifyArray(arr) {

  if (arr.length === 0) {
    return null;
  }
  return arr.filter((element, index) => {
    return arr.indexOf(element) === index;
  });
}

let arraySinDuplicados = uniquifyArray(wordsUnique);
console.log(arraySinDuplicados);



// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
let palabra = "subset";

function doesWordExist(wordsFind, palabra) {
  if (wordsFind.length === 0) {
    return null;
  }

  for (let i = 0; i < wordsFind.length; i++) {


    if (wordsFind[i] === palabra) {
      return true;
    }
  }
  return false;
}
console.log(doesWordExist(wordsFind, palabra));


// Iteration #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];
let palabras = "matter";
function howManyTimes(wordsCount, palabras) {

  let contador = 0;

  for (let i = 0; i < wordsCount.length; i++) {

    if (wordsCount[i] === palabras) {
      contador++; // contador = contador +1;
    }
  }
  return contador;
}
console.log(howManyTimes(wordsCount, palabras));





// Iteration #8: Bonus
const matrix = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62, 0],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36, 65],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
  [24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
  [67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94, 21],
  [24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85, 57],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55, 40],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
  [4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76, 36],
  [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36, 16],
  [20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5, 54],
  [1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67, 48]
];

function greatestProduct(matrix) {
  let test = 0;
  for (let i = 0; i < matrix.length - 3; i++) {

    for (let j = 0; j < matrix[i].length - 3; j++) {

      let productHorizontal = matrix[i][j] * matrix[i][j + 1] * matrix[i][j + 2] * matrix[i][j + 3];
      test = Math.max(test, productHorizontal);

      if (i < matrix.length - 3) {
        let productVertical = matrix[i][j] * matrix[i + 1][j] * matrix[i + 2][j] * matrix[i + 3][j];
        test = Math.max(test, productVertical);

      }
    }
  }
  return test;
}
console.log(greatestProduct(matrix));


// Bono-Iteracion #8.1: Producto de diagonales

function greatestProductOfDiagonals(matrix) {
  let test = 0;
  const rows = matrix.length;
  const cols = matrix[0].length;

  for (let i = 0; i < rows - 3; i++) {
    for (let j = 0; j < cols - 3; j++) {
      // Diagonal hacia abajo y a la derecha
      let productDiagonal1 = matrix[i][j] * matrix[i + 1][j + 1] * matrix[i + 2][j + 2] * matrix[i + 3][j + 3];
      test = Math.max(test, productDiagonal1);

      // Diagonal hacia arriba y a la derecha
      if (i >= 3) {
        let productDiagonal2 = matrix[i][j] * matrix[i - 1][j + 1] * matrix[i - 2][j + 2] * matrix[i - 3][j + 3];
        test = Math.max(test, productDiagonal2);
      }
    }
  }

  return test;
}

console.log(greatestProductOfDiagonals(matrix));

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    maxOfTwoNumbers,
    findLongestWord,
    sumNumbers,
    sum,
    averageNumbers,
    averageWordLength,
    avg,
    uniquifyArray,
    doesWordExist,
    howManyTimes,
    greatestProduct
  };
}
