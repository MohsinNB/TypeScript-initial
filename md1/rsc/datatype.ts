/* Premitive Data Types in TypeScript
string
boolean
number
undefined
null
symbol
bigint
*/
/*
Non premetive Data Types in TypeScript
object
array
function
*/

// string
let firstName: string = "Mohammad";

//number
let roll: number = 123;

// boolean
let dinnerOutside: boolean = true;
// null
let phoneNumber: null = null;

// undefined
let address: undefined = undefined;

let d: number;
d = 123;
// d = "bcd";
// d = true;

// NON PREMETIVE DATATYPES
// Array
// Tuple
// object
let Names: string[] = ["Mohsin", "Ismail", "Soumik"];
console.log(Names);
let Rolls: number[] = [3, 5, 6];
console.log(Rolls);
Names.push("Tawkir");
Rolls.push(38);
console.log(Names);
console.log(Rolls);

// Tuple
// Tuple basically maintains the order of the Element of Array. Let's break it
let ageName = [50, "Mohsin"]; //It's a normal like js Array. let's make it tuple
let NameAge: [string, number] = ["Nahid", 25]; //Now you cannot break the order. You must put name in first and age in second perameter. Even you cannot break this order when you are trying to push any other values
