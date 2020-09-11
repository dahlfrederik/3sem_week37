

//a) Create the two arrays below, spelled exactly as they are given. This will form the start for all the following questions.

let boys = ["Peter", "lars", "Ole"];
let girls = ["Janne", "Hanne", "Sanne"];

//b) Create a new array called all, which should be a concatenation of the two arrays given above, 
//starting with the boys and ending with the girls.

let all = boys.concat(girls);  
console.log(all);

//c) The array type has a cool method to reduce an array into a single string join() (you will love this method)
//·         Create a comma separated string containing all the names from the all-array, separated by commas.
let alljoin = all.join(); 
console.log(alljoin); 

//·         Create a hyphen (-) separated string containing all the names from the all-array, separated by hyphens.
let allJoinHyphen = all.join(' - '); 
console.log(allJoinHyphen); 

//d)  Add the names Lone and Gitte to the end of the array (remember, all can be done in one-liners)
all.push("Lone","Gitte"); 

//e)  Add the names Hans and Kurt to the start of the array
all.unshift("Hans", "Kurt"); 
console.log(all);

//f)  Remove the first name in the array (Hans)
all.shift(); 

//g)  Remove the last name from the array (Gitte)
all.pop(); 
console.log(all); 

//h) Remove Ole and Janne from the middle of the array
all.splice(3,2); 
console.log(all); 

//i) Sanne thinks it’s unfair that the boys have to come first, reverse the all array, so that the girls come first.
all.reverse(); 
console.log(all); 

//j) Peter thinks that this is just as unfair and suggests that the array should be sorted. Sort the array.
all.sort(); 
console.log(all); 

//K make your own sorting algorithm 
var lowerCaseArray = all.map((x)=>x.toLowerCase()).sort(); 
console.log(lowerCaseArray.map(x=>x.charAt(0).toUpperCase().concat(x.slice(1,x.length)))); 

//l) Convert all the names in the array to uppercase.
let allToUpper = all.map(n => n.toUpperCase()); 
console.log(allToUpper); 

//m) Create a new array containing all the names that start with either "l” or “L (hint: use the filter function with a sufficient callback). 
let allWithlorL = all.filter(all => all.includes("L")|| all.includes("l"));
console.log(allWithlorL); 