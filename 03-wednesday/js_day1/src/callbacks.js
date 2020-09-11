//1) Declare a JavaScript array and initialize it with some names (Lars, Jan, Peter, Bo, Frederik etc.). 
//Use the filter method to create a new array with only names of length <=3.
//Use the forEach method to iterate and print (console.log) both the original and the new array.

let names = ["Lars", "Jan", "Peter", "Bo", "Frederik"];

let shortNames = names.filter(n => n.length <= 3); 
console.log("SHORTNAMES");
shortNames.forEach(console.log); 
console.log("NAMES");
names.forEach(console.log); 

//2) Use the names-array created above, and, using its map method, create a new array with all names uppercased.

let allNamesUpperCased = names.map(n => n.toUpperCase()); 
console.log("NAMES UPPERCASED");
console.log(allNamesUpperCased);


//3) Use map, join + just a little bit more to create a function, which given the array of names, 
//for example: ["Lars", "Peter", "Jan", "Ian"] 
//returns a string with the HTML for the names in an <ul> as sketched below:

function htmlNames(){
    //return "<ul><li>" +names.join("</li><li>") + "</li></ul>"; --> DEN ER HER FORDI DET OGSÅ KUNNE GØRES UDEN MAP 
    return names.map(n => n ), "<ul><li>" +names.join("</li><li>") + "</li></ul>"; 
    } 
console.log("Supposed to look like HTML"); 
console.log(htmlNames()); 

