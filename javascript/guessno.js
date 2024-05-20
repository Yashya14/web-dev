const max = prompt("Enter the maximum number : ");
const random = Math.floor(Math.random() * max) + 1;
const guess = prompt("Enter the number : ");

while(true){
    if(guess == "quit"){
        console.log("user quit");
        break;
    }

    if(guess == random){
        console.log("Your guess is right! Congrats!");
        break;
    }else if(guess < random){
       console.log("Hint : Your guess was to small!");
       
    }else{
        guess = prompt("Your guess was to large!");
    }
}