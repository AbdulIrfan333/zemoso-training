var fruits = [
    { name: 'Strawberry', quantity: 15, ppu: 10 },
    { name: 'Pineapple', quantity: 10, ppu: 40 },
    { name: 'Apple', quantity: 6, ppu: 20 },
    { name: 'Mango', quantity: 12, ppu: 50 },
    { name: 'Pear', quantity: 10, ppu: 80 }
];

console.log("Fruits: ")
for(var i=0; i<5; i++)
    console.log('\n'+fruits[i].name)

console.log("\n\nFruits whose total price is greater then 250\n")
for(var i=0; i<5; i++)
    if(fruits[i].quantity*fruits[i].ppu > 250)
        console.log('\n'+fruits[i].name)