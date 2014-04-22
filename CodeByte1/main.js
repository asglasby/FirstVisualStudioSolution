function firstReverse(str) {
    var str= "Hello My Name is Aisha";
    
    return str.split("").reverse().join("");

}
alert(firstReverse());

var firstFactorial= function(num) {

    if (num === 1)
    {
        return 1;
    }
     return num * firstFactorial( num - 1);
} 
alert(firstFactorial(5));
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
//FirstFactorial(readline());


function LongestWord(sen) {

    // code goes here  
    return sen;

}

// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LongestWord(readline());


function LetterChanges(str) {

    // code goes here 
    var letterElements = str.length;
    var matchfound = "no";
    var alphabetLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
                    "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", ]

    for (var i = 0; i <= lengthOfString; i + +) { 
        if (letterToCheck = = = alphabetLetters[ i]) { 
            matchFound = "yes";  
            alert(" It's one of the cleanest cities"); 
        }  
    }

     
    return str;

}

// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LetterChanges(readline());