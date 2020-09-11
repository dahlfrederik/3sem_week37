//Asynchronous Callbacks
var msgPrinter = function(msg, delay){
    setTimeout(function(){
        console.log(msg);
    }, delay);
};

console.log("aaaa");
msgPrinter("bbbb", 2000);
console.log("dddddd");
msgPrinter("eeeeeeee", 1000);
console.log("ffffffff");


//a d f and then e b 
//There is a timeout on these



//Asynchronous => NOT RUN IN A GIVEN ORDER BUT USES DELAYES ETC
//Synchronous => RUN IN A GIVEN ORDER 