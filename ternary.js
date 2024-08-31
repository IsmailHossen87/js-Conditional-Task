let price = 3000;
const isLeader = false;
 
if (isLeader == true){
    if(price >= 1000){
        price = price / 2 ;
    }
    else{
        price = 0
    }   
}
else {
    price = price;
}
console.log(price )

// use tarnary 

let amount = 3000;
const cr = false;
amount = cr === true ?
        amount >2000 ? amount /2 :
            amount = 0
:amount = amount +1000 ;
console.log (amount)
