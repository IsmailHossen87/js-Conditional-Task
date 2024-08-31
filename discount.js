const amount = 7000;
if( amount >= 4000){
    const discount = 5*amount /100;
    const price = amount - discount;
    console.log(price);
}
else{
    console.log(amount)
}

// use ternary 
const amount = 3000;
const price = amount >= 4000 ? amount - (5 * amount / 100) : amount;
console.log(price);
