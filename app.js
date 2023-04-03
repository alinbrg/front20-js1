/* 
  console.log("text from js file");
  var studentName = "nika";
*/

let someText = `alina's book "`;
// console.log(typeof someText, someText);
const studentName3 = "giorgi";
someText = 30; //comment
// console.log(typeof someText, someText);

const studentNAME = "lela";
console.log(typeof studentNAME, studentNAME); //string
const stundetNumber = 20;
console.log(typeof stundetNumber, stundetNumber); //number
const isEveryonePresent = false; //true
console.log(typeof isEveryonePresent, isEveryonePresent); //boolean
const myUndefined = undefined;
let myUndefined2;
console.log(typeof myUndefined2, myUndefined2); //undefined
let myNull = null; //null
console.log(typeof myNull, myNull); //object

let num1 = "10";
let num2 = 20;
let num3 = 30;
let num4 = 45;
let text1 = "some ";
let text2 = "text";

const add = num1 + num2;

const text3 = num2 + 10 + "text1 " + text1 + "text2 " + text2;
const text4 = `${num2 + 10} ${text1} text1 ${text2} text2`;
console.log(text4, text3);
console.log(add, "num1 + num2");
const sum2 = 16 + 4 + "text";
const sum3 = "text" + 16 + 4;
console.log(sum2, sum3);

const substr = num3 - num1;
console.log(substr, "num3 - num1"); //NaN not a number
const mult = num1 * num2;
console.log(mult, "num1 * num2");
const div = num3 / num1;
console.log(div, "num3 / num1");
const modulo = num4 % num1;
console.log(modulo, "num4 % num1");
const power = num1 ** 3;
console.log(power, "num1 ** 3");

// const userName = prompt("write your name");
// alert(userName);
// console.error("error");
