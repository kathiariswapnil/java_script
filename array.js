//declaration of an array
let myarray =[];
let number = [1,2,3,4,5,6];
let string = ["a","b","c","d","e","f"];

let lang = ["java","python","c","c++","javascript"];

// 1 push method add element in array

lang.push("ruby");
console.log(lang);

// 2 pop method remove last element

lang.pop();
console.log(lang);


// 3 shift method 
//first element remove and return 

let stringa = ["a","b","c","d","e","f"];
let firststring = stringa.shift();
console.log(firststring);

// 4 unshift method
//add element in first position amd return length
let colour = ["blue", "pink"]
colour.unshift("red","white");
console.log(colour);  
console.log(colour.length);

// 5 splice method 
// allow you to add or remove element in array
// first argument is index number
// second argument is how many element you want to remove
// third argument is element you want to add

let animal = ["dog", "cat", "lion", "tiger", "elephant"];
animal.splice(1, 1, "rabbit");
console.log(animal);
animal.splice(2, 4, "monkey");
console.log(animal);

// 6 slice method
// return a new array
// first argument is index number
// second argument is index number

let  pop = [1,2,3,4,5];
let newpop = pop.slice(1, 3);//(]  ] it will remove 3rd index
console.log(newpop);

// 7 concat method
// merge two array
let arr1 = [1,2,3];
let fruits = ["apple", "banana", "cherry"];

let mixarr = arr1.concat(fruits);
console.log(mixarr);
 
// 8 index 0ff
//return 

let colours  = ["red", "yellow", "blue","red"];
let indexred = colours.indexOf("yellow");
console.log(indexred);

// 2nd red index
let redSecondIndex = colours.indexOf("red",colours.indexOf("red"+1));
console.log(redSecondIndex);


// 9 include function 
// return true if element is present 
let test = ["admin","customer","vendor","seller"];
let check = test.includes("s","swapnil");
console.log(check);

// 10 for each method 

let n = [1,2,3,4,5];
n.forEach((e)=>{
  console.log(e);
})