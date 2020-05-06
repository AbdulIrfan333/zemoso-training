const fruits = ['Strawberry', 'Pineapple', 'Apple', 'Mango', 'Pear'];
let price = [10,40,20,50,80]
let quantity = [15,10,6,12,10]
            
const fruit = fruits.map((f, i) => ({name: f, Price: price[i]}));
            
console.log(fruit);

function calculatePrice(fp, q){
                return fp * q
}

let total = []
for(var i=0;i<5;i++)
    total[i] = calculatePrice(price[i],quantity[i]);

console.log('Fruits whose price is greater then 250')
for(var i=0; i<5; i++)
    if(total[i] > 250)
        console.log(fruits[i])