const age = 32;
const amount = 2000;
if (age <= 17 ){
    console.log("Free food is available")
}
else if(age <= 30 ){
    // 2 % discount 
    const discount = 2 * amount /100;
    const taka = amount - discount;
    console.log("You have to pay ",taka, "taka rupees for it");
}
else if(age >= 50){
    // 20% discount
    const discount = 20 *amount /100;
    const taka = amount- discount ;
    console.log("As you are senior citizen you have to pay 20% discount of",taka,"taka")
}
else{
    console.log("You pament full taka :",amount)
}