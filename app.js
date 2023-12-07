 // Important Note - No Built-in functions to be used
// Progression 1: Names and Input

// 1.1 Create a variable `Kalvian-1` with the driver's name.
var kalvian1 = "Shubham";

// 1.2 Print `"The driver's name is XXXX"`.
console.log("Name of driver is ", kalvian1);

// 1.3 Create a variable `Kalvian-2` with the navigator's name.
var navigatorName = "Abhishek";

// 1.4 Print `"The navigator's name is YYYY"`.
console.log("Name of the navigator is ", navigatorName);

// Progression 2: Control Statements - 1
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.
if(kalvian1.length > navigatorName.length){
  console.log("The driver has the longest name, it has " + kalvian1.length + " characters.")
}
else if(kalvian1.length < navigatorName.length){
  console.log("It seems that the navigator has the longest name, it has " + navigatorName.length + " characters.")
}
else {
  console.log("Wow, you both have equally long names, " + kalvian1.length + " characters!.")
}

// 2.2. Check if the string contains vowels or not.
// - If it contains vowels, print the name, and also print the vowel letters along with the vowel index. or
// - print no vowels
// - for example. In String Kalvian - a and i are vowels. Print Kalvian a i a 1 4 5. 
var includeVowels = false;
var vowels = "aeiou";
var vowelIndex = [];
var storeVowel = " ";

// for driver's name
for(var i = 0; i < kalvian1.length; i++){
  if(vowels.includes(kalvian1[i].toLowerCase())){
    includeVowels = true;
    vowelIndex.push(i+1);
    storeVowel += kalvian1[i];
  }
}

if (includeVowels) {
  var final = kalvian1 + " " + storeVowel.split('').join(' ') + " " + vowelIndex.join(' ');
  console.log(final);
}
else {
  console.log("no vowels");
}

// for navigator's name
var index = [];
var storeVowel2 = " ";

for(var i = 0; i < navigatorName.length; i++){
  if(vowels.includes(navigatorName[i].toLowerCase())){
    includeVowels = true;
    index.push(i+1);
    storeVowel2 += navigatorName[i];
  }
}

if (includeVowels) {
  var final = navigatorName + " " + storeVowel2.split('').join(' ') + " " + index.join(' ');
  console.log(final);
}
else {
  console.log("no vowels");
}

// 2.3. Check if the string contains uppercase and lowercase characters Xx
// - Print the number of upper case characters
// - Print the number of lower case characters

// to check letters in driver's name
let uppercaseLetters = 0;
let lowercaseLetters = 0;

for (var i=0; i<kalvian1.length; i++){
  var character = kalvian1[i];

  if(character === character.toUpperCase()){
    uppercaseLetters++;
  }
  else if(character === character.toLowerCase()){
    lowercaseLetters++;
  }
}

console.log("number of upper case characters in shuhbham: ", uppercaseLetters++)
console.log("number of lower case characters in shubham: ", lowercaseLetters++)

// to check letters in navigator's name
let uppercase = 0;
let lowercase = 0;

for (var i=0; i<navigatorName.length; i++){
  var letters = navigatorName[i];

  if(letters === letters.toUpperCase()){
    uppercase++;
  }
  else if(letters === letters.toLowerCase()){
    lowercase++;
  }
}

console.log("number of upper case characters in abhishek: ", uppercase++)
console.log("number of lower case characters in abhishek: ", lowercase++)

// Progression 3: Control Statements - 2
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "Kalvian"
// for driver's name
var result1 = " ";

for(let i=0; i < kalvian1.length; i++){
  result1 += kalvian1[i].toUpperCase()+" ";
}
console.log(result1);

// for navigator's name
var result2 = " ";

for(let i=0; i < navigatorName.length; i++){
  result2 += navigatorName[i].toUpperCase()+" ";
}
console.log(result2);

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. Example "naivlaK"
var reverse1 = " ";

for(let i = kalvian1.length-1; i>=0; i--){
  reverse1 += kalvian1[i];
}
console.log(reverse1);

// 3.3 Merge both the characters such that driver is followed by Navigator like "DriverName NavigatorName"
// - Now bring the NavigatorName to the start and send DriverName to the back like "NavigatorName DriverName"
var add = kalvian1 + " " + navigatorName;
console.log(add)

var initial = navigatorName + " " + kalvian1;
console.log(initial)

// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?

// use of localeCompare to compare the strings in lexocographic order
var order = kalvian1.localeCompare(navigatorName);

if (order < 0) {
  console.log("The driver's name goes first.");
} else if (order > 0) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}

// Bonus Time!
// Bonus 1:
// Go to lorem ipsum generator and:
// Generate 3 paragraphs. Store the text in a variable type of string.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.

let lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit Qui non exercitationem sunt perferendis commodi possimus odio ullm culpa quas impedit, error hic soluta nam assumenda quo adipisci rem aperiam nostrum Lorem ipsum dolor sit, amet consectetur adipisicing elit Saepe, tempora accusamus Autem consequatur corporis numquam magni voluptatibus tempore fugiat harum Lorem ipsum dolor sit amet consectetur adipisicing elit Ipsam, numquam";

let count = 0;
let lettersCount = 1; // number of words are equal to number of spaces+1
for(let i=0; i< lorem.length; i++){
  if(lorem[i]=='e' && lorem[i+1]=='t'){
    count++;
  }
  if(lorem[i]== ' '){
    lettersCount++;
  }
}

console.log(count);
console.log(lettersCount);
// Bonus 2:
// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".

var phraseToCheck = "stack cats";
phraseToCheck = phraseToCheck.toLowerCase();
var palindrome = " "; 

for(let i=0; i<phraseToCheck.length; i++){
  if(phraseToCheck[i]!=" "){
    palindrome += phraseToCheck[i];
  }
}
console.log(palindrome);

let flag = 1;

let k = palindrome.length-1;
for(let i=0; i<palindrome.length; i++){
  if(palindrome[i] = palindrome[k-1]){
    flag = 1;
  }
  else{
    flag = 0;
  }
}
if(flag){
console.log("yes, this word is a palindrome")
}
else{
  console.log("no, this word is not a palindrome")
}

// Hint: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as join(), reverse(), etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using for loop, if-else statements with some break and continue... Just sayin' 
