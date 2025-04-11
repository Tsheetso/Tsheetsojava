var temperature = 20 ;

if (temperature < 0){
    console.log ("it's freezing.");
}else if  (temperature >= 0 && temperature <= 15){
    console.log("it's cold.");
}else if (temperature >= 16 && temperature >= 16 && temperature <=25){
    console.log("it's mild.");
}else{
    console.log("it's warm.");
}

function
checkTemperature(temperature){
    if (temperature< 0 ) return 
    "it's freezing.";
    if (temperature <= 15 ) return 
    "it's cold.";
    if (temperature <= 25) return 
    "it's mild.";
    return "its warm.";
}

var temperature = 20
console.log(checkTemperature(temperature));

var number = 12;

if (number %  2  === 0 && number % 3 === 0){
    console.log("Divisible by both.");
}else if (number %  2 === 0){
    console.logo("Divisible by 2.");
}else if (number % 3 === 0){
    console.log("Divisible by 3.");
}else{
    console.log("not divisible by 2 or 3.");
}

//switch statement

var number =  12;
var remainder2 = number % 2;
var remainder3 = number % 3;

switch (true ){
    case remainder2 === 0 &&
    remainder3 === 0:
    console.log("Divisible by both.");
    break;
    case remainder2 === 0:
        console.log("Divisible by 2.");
        break;
        case remainder3 === 0:
            console.log("Divisible by 3.");
            break;
            default:
                console.log("not divisible by 2 or 3.");
}

function checkDivisibilty(number)
{
    if (number % 2  === 0 && number % 3 === 0)return 
      "Divisible by both.";
    if (number % 2 === 0 ) return 
      "Divisible by 2.";
    if (number % 3 === 0) return 
       "Divisible by 3" ;
    return "not divisible by 2 or 3."

}
let number = 12 ;
console.log(checkDivisibilty(number))

// print number from 1 to 10 
for (let i = 1 ; i <= 10; i++){
    console.log(i);
    
}
//print all even number between 1 and 20 
for (let i = 1 ; i <=20; i++){
    if (i % 2 === 0 ){
        console.log(i);
    }
}
//calculate the sum of all number 1 from 100

let sum = 0
for (let i = 1 ; i <= 100; i++){
    sum += i;

}
console.log(sum);

//array

var number= [1, 2, 3, 4,5];
for (let i = 0 ; i <
    number.length; i++){
    console.log(nembers[i]);
    }

    //largest number
var numbers = [3, 7, 2, 510, 6];
    let largest = numbers [0]
    for (let i = 1; i<
        numbers.length; i++){
            if (numbers[i] > largest){
                largest= numbers[i];
            }
        }
     console.log(largest);
        
var numbers = [3, 7, 2, 510, 6]
console.log(Math.max(...numbers));
    
var i = 1;
while (i <= 10){
    console.log(i);
    i++;
}

var number = 0 ;
var i =1;
while (i <= 100) {
    sum += i ;
    i++;
}
console.log(sum);

var i = 1 
while (i < 50 ){
    if (i % 5 === 0){
        console.logo(i);
    }
    i++;
}
let i = 5;
while (i <50 ){
    console.log(i)
    i += 5;

}

let i = 1;
do{
    console.logo(i);
    i++;
}while (i <= 100);
console.log(sum);

//prompt 

let number ;
do{
    number = parseInt(prompt("Enter a number greater than 10:"));
}while(number <= 10);
console.log("valid number entered",number);

let secretNumber =math.floor(math.random()*10) + 1;
let guess;
do{
    guess = parseInt(prompt("guess a number between 1 and 10 :"));
if (guess < secretNumber) {
    console.logo("Too low!"); 
}else if (guess >secretNumber)

{
    console.log("Too high!");
}
     
}while (guess !== secretNumber);
console.log ("Congratulations! You guessed the correct number:",secretNumber);




