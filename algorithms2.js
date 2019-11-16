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
    if (num === 1) {
      //do nothing | returns: fibArr[1,1]
    } else {
      fibNext = fibArr[index] + fibArr[index-1];
      if (num >= fibNext) {
				fibArr.push(fibNext);
			}
      index++;
    }
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


