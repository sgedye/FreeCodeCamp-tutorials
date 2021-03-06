// Sum all the number between the two elements in a given array
function sumAll(arr) {
  let x = 0;
  let y = 0;
  let result = 0;
  if (arr[0] <= arr[1]) {
    x = arr[0];
    y = arr[1];
  } else {
    x = arr[1];
    y = arr[0];
  } //x <= y
  for (let i=x; i<=y; i++) {
    result += i;
  }
  return result;
}
sumAll([1, 4]);

// OR //
function sumAll(arr) {
  var sum = 0;
  for (var i = Math.min(...arr); i <= Math.max(...arr); i++) {
    sum += i;
  }
  return sum;
}
sumAll([1, 4]);


// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

function destroyer(arr) {
  let killerArr = [];
  for (let i=1; i<arguments.length; i++) {
    killerArr.push(arguments[i]);
  }
  return arr.filter(item => !killerArr.includes(item));
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);


// Change a given string to spinal case (all-lowercase-with-hyphens)
function spinalCase(str) {
	let myArr = str.match(/[A-Z][a-z]+|[a-z]+/g);
	let myStr = "";
	for (let i = 0; i < myArr.length; i++) {
		myStr += myArr[i];
		if (i != myArr.length-1) {
			myStr += "-";
		}
	}
	return myStr.toLowerCase();
}
spinalCase('AllThe-small Things');

//Pig Latin - modifying stings - my solution:
function translatePigLatin(str) {
  let vowelArr = ['a','e','i','o','u'];
  let constStr = "";	
  let index = 0;
  while ((vowelArr.indexOf(str.charAt(index)) < 0) && (index<str.length)) {
    constStr += str.charAt(index);
    index++;
  }
  return (constStr === "") ? str += "way" : str = str.slice(constStr.length) + constStr + "ay";
}
translatePigLatin("rythym");

//Or - a different solution using regex
function translatePigLatin(str) {
  let consonantRegex = /^[^aeiou]+/;
  let myConsonants = str.match(consonantRegex);
  return myConsonants !== null
    ? str
        .replace(consonantRegex, "")
        .concat(myConsonants)
        .concat("ay")
    : str.concat("way");
}
translatePigLatin("consonant");

// Matching a object (source) with the obects in an array (collection)
function whatIsInAName(collection, source) {
  var arr = [];	
	let coLen = Object.keys(collection).length;
	let searchLen = Object.entries(source).length;
	for (let i=0; i<coLen; i++) {
		let tempObj = collection[i];
		let allMatch = true;
		for (let j=0; j<searchLen; j++) {
			let x = Object.entries(source)[j][0];
			if (source[x] != tempObj[x]) {
				allMatch = false;				
			}		
		}
		if (allMatch) { 
			arr.push(tempObj); 
		}
	}
	return arr;
}
whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 });
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3});


//Find and replace a string
function myReplace(str, before, after) {
  let capsArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
	let tempStr = "";
	if (capsArr.includes(before.charAt(0))) { 
		tempStr = after.charAt(0).toUpperCase() + after.slice(1);
	} else {
		tempStr = after;
	}
	let outStr = str.replace(before, tempStr);
  return outStr;
}
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");


// Missing Letter
function fearNotLetter(str) {
  let missingChar;
	for (let i=1; i<str.length; i++) {
		if ((str.charCodeAt(i-1) + 1) != str.charCodeAt(i)) {
			missingChar = String.fromCharCode(str.charCodeAt(i-1)+1);
		}
  }
  return missingChar;
}
fearNotLetter("abce"); //Returns 'd'
fearNotLetter("abcde"); //Returns undefined


// Merge two or more arrays into a single array showing each number only once, and in the order given.
function uniteUnique(arr) {
	let inArr = [...arguments].flat();
  let outArr = [];
	for (let i=0; i<inArr.length; i++) {
		if (outArr.indexOf(inArr[i]) === -1) {
			outArr.push(inArr[i]);
		}
	}
  return outArr;
}
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);


// Convert basic symbols to their HTML entities
function convertHTML(str) {
    return String(str)
	.replace(/&/g, '&amp;')
	.replace(/</g, '&lt;')
	.replace(/>/g, '&gt;')
	.replace(/"/g, '&quot;')
	.replace(/'/g, '&apos;');
}
convertHTML("Dolce & Gabbana"); //Returns: Dolce &amp; Gabbana


//Sum odd fibonacci numbers
function sumFibs(num) {
  let index = 1;
  let fibNext = 0;
  let fibArr = [1,1];
  while (num > fibNext) {
    fibNext = fibArr[index] + fibArr[index-1];
    if (num >= fibNext) {
      fibArr.push(fibNext);
    }
    index++;
  }
  let result = 0;
  for (let i=0; i<fibArr.length; i++) {
    if (fibArr[i] % 2 == 1) {
      result += fibArr[i];
    }
  }
  return result;
}
sumFibs(100); //Returns: 188 (1+1+3+5+13+21+55+89)


//Sum All Primes
function sumPrimes(num) {
  //Find all primes upto and including num
  let primeArr = [];
  for (let i=2; i<=num; i++) {
    let isPrime = true;
    for (let j=2; j<i; j++) {
      if (i % j === 0) {
	isPrime = false;
      }
    }
    if (isPrime === true) {
      primeArr.push(i);
    }
  }
  console.log(primeArr);
  let result = 0;
  for (let i=0; i<primeArr.length; i++) {
    result += primeArr[i];
  }
  console.log(result);
  return result;
}
sumPrimes(3); //Result 5 (2+3)
sumPrimes(10); //Result 17 (2+3+5+7)



//Finding the Smallest Common Multiple
function smallestCommons(arr) {
  let minVal = arr[0];
  let maxVal = arr[0];
  if (arr[0] > arr[1]) {
    minVal = arr[1];
  } else {
    maxVal = arr[1];
  }
  let counter = maxVal;
  let result = 0;
  let isCommonMultiple = false;
  while (isCommonMultiple === false) {
    let isSCM = true;
    for (let i=minVal; i<=maxVal; i++) {
      if (counter % i != 0) {
        isSCM = false;
      }
    }
    if (isSCM === true) {
      isCommonMultiple = true;
      result = counter;
    }
    counter++;
  }
  return result;
}
smallestCommons([1,5]);

// A cleaner faster way
const smallestCommons = arr => {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  // Initially the solution is assigned to the highest value of the array
  let solution = max;

  for (let i = max - 1; i >= min; i--) {
    // Each time the solution checks (i.e. sol%i===0) it won't be necessary
    // to increment 'max' to our solution and restart the loop
    if (solution % i) {
      solution += max;
      i = max;
    }
  }
  return solution;
};

// test here
smallestCommons([1, 5]);


//Flatten Array
function steamrollArray(arr) {
  return arr.flat(Infinity);
}
steamrollArray([1, [2], [3, [[4]]]]); //Returns: [1,2,3,4]


//Convert a string of binary numbers into a secret text
function binaryAgent(str) {
  let inArr = str.split(" ");
  let outArr = [];
  for (let i=0; i<inArr.length; i++) {    
    let tempCC = parseInt(Number(inArr[i]), 2);
    outArr.push(String.fromCharCode(tempCC));
  }
  return outArr.join('');
}
binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
//Returns: "Aren't bonfires fun!?"

// Checking for truthy values
function truthCheck(collection, pre) {
  // Is everyone being true?
  let isTrue = true;
  for (let i=0; i<collection.length; i++) {
    console.log(collection[i][pre]);
    if (collection[i][pre]) {
      //do nothing
    } else {
      isTrue = false;
      console.log(collection[i][pre] + " is a falsy value");
    }
  }
  return isTrue;
}
truthCheck([{"single": "double"}, {"single": NaN}], "single"); //Returns: False

// Arguments Optional
function addTogether() {
  if (arguments.length === 2) {
    if (typeof(arguments[0]) === "number") {
      if (typeof(arguments[1]) === "number") {
        return arguments[0] + arguments[1];
      }
    }
  } else if (arguments.length === 1) {
    if (typeof(arguments[0]) === "number") {
      const initArg = arguments[0];
      return function addMe(n) { 
        if (typeof(n) === "number") {
          return n + initArg;
        } else {
          return undefined;
        }
      }
    }
  }
  return undefined;
}
addTogether(2)(3); //Return 5


// Create a person -- Using Getters and Setters:
var Person = function(firstAndLast) {
  let fullName = arguments[0];
  let firstName = arguments[0].split(" ")[0];
  let lastName = arguments[0].split(" ")[1];

  this.getFullName = function() { 
    return firstName.concat(" ").concat(lastName);
  },
  this.getFirstName = () => { return firstName; },
  this.getLastName = () => { return lastName; },
  this.setFirstName = function(first) {
    firstName = first;
  },
  this.setLastName = (last) => {
    lastName = last;
  },
  this.setFullName = (firstAndLast) => {
    firstName = firstAndLast.split(" ")[0];
    lastName = firstAndLast.split(" ")[1];
    fullName = firstName.concat(" ").concat(lastName);
  }
};
var bob = new Person('Bob Ross');
console.log(bob.getFirstName()); //Bob
console.log(bob.getLastName()); //Ross
bob.setFirstName('Ricky');
console.log(bob.getFullName()); //Ricky Ross
bob.setFullName('John Doe')
console.log(bob.getFullName()); //John Doe
console.log(bob.getFirstName()); //John


//Maths | Calculating the Orbital Periods of Objects
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  let outArr = [];
  for (let i=0; i<arr.length; i++) {
    let combinedRadius = earthRadius + arr[i]["avgAlt"];
    let orbPeriod = Math.PI * 2 * (Math.sqrt(Math.pow(combinedRadius,3) / GM));
    let obj = {name, orbitalPeriod};
    obj.name = arr[i].name;
    obj.orbitalPeriod = Math.round(orbPeriod);
    outArr.push(obj);
  }
  return outArr;
}
orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}])); //[{"name":"sputnik","orbitalPeriod":86400}]
