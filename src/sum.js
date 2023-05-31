function sum(a, b) {
  return a + b;
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

function reverseString(string) {
    return string.split('').reverse().join('')
}

const calculator = {
  add(x, y) {
    return x + y
  },
  subtract(x, y) {
    return x - y
  },
  divide(x, y) {
    return x / y
  },
  multiply(x, y) {
    return x * y
  }
}

function ceaserCipher(string) {
  const transformedArray = string.split('').map((char) => {
    const charCode = char.charCodeAt(0)
    const transformedCharCode = charCode + 3
   // Handle wrapping for uppercase letters (ASCII 65-90)
    if (charCode >= 65 && charCode <= 90) {
      return String.fromCharCode(((transformedCharCode - 65) % 26) + 65);
    }

    // Handle wrapping for lowercase letters (ASCII 97-122)
    if (charCode >= 97 && charCode <= 122) {
      return String.fromCharCode(((transformedCharCode - 97) % 26) + 97);
    }

    // Return unchanged for non-alphabetic characters
    return char;
  });
   

    
 
   return transformedArray.join('')
}


function analyzeArrow(array) {
  const length = array.length
  const min = Math.min(...array)
  const max = Math.max(...array)
  const average = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / length;
  
   const object = {
    average: average,
    min: min,
    max: max,
    length: length
  }
  return object
}




module.exports = {
  sum: sum,
  capitalize: capitalize,
  reverseString: reverseString,
  calculator: calculator,
  ceaserCipher: ceaserCipher,
  analyzeArrow: analyzeArrow,
  
};