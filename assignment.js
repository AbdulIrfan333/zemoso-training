var fruits = [
    { name: 'Strawberry', quantity: 15, ppu: 10 },
    { name: 'Pineapple', quantity: 10, ppu: 40 },
    { name: 'Apple', quantity: 6, ppu: 20 },
    { name: 'Mango', quantity: 12, ppu: 50 },
    { name: 'Pear', quantity: 10, ppu: 80 }
];

document.write("Fruits: ");
for(var i=0; i<5; i++)
    document.write("<br>"+fruits[i].name);

document.write("<br><br>Fruits whose total price is greater then 250:");
for(var i=0; i<5; i++)
    if(fruits[i].quantity*fruits[i].ppu > 250)
        document.write("<br>"+fruits[i].name+ " ");