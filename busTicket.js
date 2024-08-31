const ticketPrice = 800;
const age = 50;
const students = false;


if(age < 10){
    console.log("  vara free")
}
else if(students){
        // Your vara is discount 50%
        const discount = 50 * ticketPrice / 100;
        const amount = ticketPrice - discount
        console.log(amount );
}
else if( 60 <= age){
    const citizen = 15 * ticketPrice /100;
    const Discount = ticketPrice -citizen
    console.log(Discount );
}
else{
    console.log(ticketPrice);
}
