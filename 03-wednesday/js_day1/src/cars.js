var cars = [
  { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
  { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
  { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
  { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
  { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];

//Cars newer than 1999
let newerThan1999 = cars.filter(c => c.year > 1999);
console.log("All cars newer than 1999:");
console.log(newerThan1999); 


//All  Volvo’s
let volvos = cars.filter(c => c.make === "Volvo");
console.log("All the volvos:");
console.log(volvos); 

//All cars with a price below 5000
let cheap = cars.filter(c => c.price < "5000");
console.log("All the cheap cars:");
console.log(cheap); 


//INSERT INTO cars (id,year,make,model,price) VALUES ( 1, 1997 'Ford','E350', 3000 );
function sqlQuery(){
    return cars.map(c => "INSERT INTO cars (id,year,make,model,price) VALUES (" + [c.id, c.year, c.make, c.model,c.price] + ")", cars.join(","));  
    } 
console.log("Supposed to look like SQL"); 
console.log(sqlQuery()); 

