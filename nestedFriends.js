const mark = 90 ;
const friendsScore = 84;
if(mark > 80){
    if(80 < friendsScore){
        console.log ("Go to a launch ")
    }
    else if(80 > friendsScore && 60 <= friendsScore ){
        console.log("Good Luck")
    }
    else if(60 > friendsScore && 40 < friendsScore){
        console.log("Keep Your message Unseen")
    }
    else{
        console.log("i Block You")
    }

}
else{
    console.log("Now i am sad mode ")
}