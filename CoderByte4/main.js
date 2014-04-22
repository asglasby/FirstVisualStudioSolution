//function LetterChanges(str) {

//    // code goes here 
//    var letterToCheck;
//    var numChars = str.length;
//    var matchfound = false;
//    var alphabetLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
//                    "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", ]

//    for (var i = 0; i < numChars; i ++) { 
//        if (letterToCheck === alphabetLetters[i]) { 
//            matchFound = true;
//            if (matchFound = true) {
//                letterToCheck = alphabetLetter[i + 1]
//            }
//            if (letterToCheck === "a", "e", "i", "o", "u") {
//                letterToCheck = letterToCheck.toUpperCase();
//            }
//            alert(letterToCheck); 
//        }  
//    }

     
//    return str;

//}

//// keep this function call here 
//// to see how to enter arguments in JavaScript scroll down
//LetterChanges(readline());

//var str = prompt("Enter your string");
var str = "The coder school assignment"
var numChars = str.length;
var firstChar = str.slice(0, 1);
var otherChars = str.slice(1);
//alert(otherChars + "\n" + str + firstChar);
var newStr = firstChar;
alert(newStr);

var alphabetLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
                    "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", ]

for (var i = 0; i < numChars; i++) {
    if (newStr === alphabetLetters[i]) {
        matchFound = true;
        if (matchFound = true) {
            letterToCheck = alphabetLetter[i + 1]
        }
    }
}