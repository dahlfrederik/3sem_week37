

function add(n1, n2){
   return n1 +n2;
}


var sub = function(n1,n2){
  return n1 - n2;
} 

function mul(n1, n2){
   return n1 * n2;
}


var cb = function(n1,n2, callback){
    try{
    typeof n1 === "number"; //Will fail if n1 is undefined, or is not a number
    typeof n2 === "number"; //Will fail if n2 is undefined, or is not a number
    typeof callback === "function" //Will fail if callback is undefined or is not a function

    return "Result from the two numbers: "+n1+"+"+n2+"="+callback(n1,n2);
    } catch(err) {
        //DEN PRINTER OGSÅ UNDEFINED HVIS VI NÅR HER TIL 
        console.log("Åååh nej, der er gået noget galt med metodekaldet"); 
    }
};

console.log( add(1,2) );     // What will this print? -> Result of the method aka 3 

console.log( add );          // What will it print and what does add represent? -> Method name as a string 

console.log( add(1,2,3) ) ; // What will it print -> Result of method: 3, and ignores the extra parameter. 

console.log( add(1) );	  // What will it print -> NaN, error for not having enough input parameters. 

console.log( cb(3,3,add) ); // What will it print -> Result from the two numbers: 3+3=6. Prints from method cb, right in this situation.  

console.log( cb(4,3,sub) ); // What will it print -> Result from the two numbers: 4+3=1. aka prints the string (should be - though) it does the right thing.

console.log(cb(3,3,add())); // What will it print (and what was the problem)-> it writes callback is not a function since there isnt a add method that takes 0 parameters. 

console.log(cb(3,"hh",add));// What will it print -> Result from the two numbers: 3+hh=3hh

console.log(cb(4,2,mul)); //What will it print -> Result from mul aka 8, still prints a + though. 

console.log(cb(2,2,function(n1,n2){return n1/n2;})); //What will it print -> the two numbers divided, but still with a +. 
