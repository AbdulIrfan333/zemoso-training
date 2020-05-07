class Fruit { 
   constructor(name, price, quantity) { 
      this.name = name; 
      this.price = price;
      this.quantity = quantity; 
   }
   get getTotal(){
    return this.price*this.quantity
   } 
} 

const fruits = [new Fruit('Strawberry',10,15), new Fruit('Pineapple',40,10), new Fruit('Apple',20,6), new Fruit('Mango',50,12), new Fruit('Pear',80,10)];

console.log("Fruits:")
for(let f of fruits) {
   console.log(f.name) 
 }

console.log("\nFruits whose total is greater 250:")
for(let f of fruits) { 
    if(f.getTotal>250)
      console.log(f.name) 
 }