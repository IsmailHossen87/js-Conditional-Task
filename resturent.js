const age = 52;
const amout = 500;
if(age <=16){
    console.log("You can eat free food")
}
else if(age >=50){
    const discount = 5 * amout /100;
    const price = amout - discount;
    console.log(price)
}
else{
    console.log(amout)
}