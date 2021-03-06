/* Testing Objects for Properties */
var myObj = { gift: "pony", pet: "kitten", bed: "sleigh" };
function checkObj(checkProp) {
  var x;
  if (myObj.hasOwnProperty(checkProp)) { x = myObj[checkProp]; }
  else { x = "Not Found"; }
  return x;
}
checkObj("gift");

/* Accessing Nested Arrays */
var myPlants = [
  { 
    type: "flowers",
    list: [
      "rose",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }  
];
var secondTree = myPlants[1].list[1];
console.log(secondTree); //Pine

/* Record Collection */
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
var collectionCopy = JSON.parse(JSON.stringify(collection));  // Keep this line for tests
function updateRecords(id, prop, value) {
  if (value != "") {
    if (prop == "tracks") {
      if (collection[id].hasOwnProperty(prop) == false) {
        collection[id][prop] = [];
      }
      collection[id][prop].push(value);
    }
    else {
      collection[id][prop] = value;
    }
  }
  else {
    delete collection[id][prop];
  }
  return collection;
}
updateRecords(2548, "artist", "");  // Alter these values to test the code

/* While Loop */
var ourArray = [];
for (var i = 0; i < 5; i++) {
  ourArray.push(i);
}

/* For Loop */
var myArray = [];
for (var i=1; i<6; i++) {
    myArray.push(i);
}
console.log(myArray); //1,2,3,4,5

/* Nested For Loops (multi-dimentional arrays) */
function multiplyAll(arr) {
  var product = 1;
  for (var i=0; i<arr.length; i++) {
    for (var j=0; j<arr[i].length; j++) {
      product *= arr[i][j];
      console.log(product)
    }
  }
  return product;
}
multiplyAll([[1,2],[3,4],[5,6,7]]); //5040

/* Profile Lookup */
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    }
];
function lookUpProfile(name, prop) {
  for (var i=0; i<contacts.length; i++) {
    if (name == contacts[i].firstName) {
      if (contacts[i].hasOwnProperty(prop)) {
        return contacts[i][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact"; 
}
lookUpProfile("Harry", "likes"); // Change these values to test the function

/* Random Number Generator within a Range */
function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
}
var myRandom = randomRange(5, 15); //Change values to test

/* Multiple Conditional (Ternary) Operators */
function checkSign(num) {
  return (num === 0) ? "zero" : (num < 0) ? "negative" : "positive";
}
checkSign(10); // Change this value to test the function

/* Recursion */
function rangeOfNumbers(startNum, endNum) {
  if (startNum == endNum) {
    return [startNum];
  }
  else {
    var numbers = rangeOfNumbers(startNum, endNum-1);
    numbers.push(endNum);
    return numbers;
  }
};

/* Recursion II */
function countdown(myArray, n) {
	if (n > 0) {
		myArray.push(n);
    countdown(myArray, n-1);
  }
  return myArray;
};
console.log(countdown(['sock','nine'],7));  //Output: ['sock','nine',7,6,5,4,3,2,1]
console.log(countdown(['minus','hi'],-3));  //Output: ['minus','hi']
console.log(countdown(['zero','nine'],0));  //Output: ['zero','nine']

//END
