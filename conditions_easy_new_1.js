// 1- Write a program to declare two numbers. If both numbers are greater than 10, 
//print "Both numbers are greater than 10". Otherwise, print "At least one number is not greater than 10".
let num1 = 12;
let num2 = 15;
if (num1 > 10 && num2 > 10){
  console.log("Both numbers are greater than 10");
} else {
  console.log("At least one number is not greater than 10");
}//Both numbers are greater than 10


// 2- Write a program to declare a username and a password. 
//If both the username and password are correct, print "Access granted". Otherwise, print "Access denied".
let username = "admin";
let password = "password";
let enterUserName = prompt("Enter your username:");
let enterPassword = prompt("Enter your password:");
if (enterUserName === username && enterPassword === password){
  console.log("Access granted");
} else{
  console.log("Access denied");
}


// 3- Write a program to declare a number. If the number is between 10 and 20 (inclusive), print "The number is between 10 and 20".
// Otherwise, print "The number is not between 10 and 20".

let number = 15;
if (number >= 10 && number <= 20){
  console.log("The number is between 10 and 20");
} else {
  console.log("The number is not between 10 and 20");
}

// 4- Write a program that to declare age and whether they have a driver's license (yes or no). 
//If the user is 18 or older and has a driver's license, print "You can drive". Otherwise, print "You cannot drive".
let age = 18;
let license = "yes";
if(age = 18 && license === "yes"){
  console.log("You can drive");
} else {
  console.log("You cannot drive");
}

// 5- Write a program to declare a number. 
//If the number is greater than 10 or less than 0, print "Invalid number". Otherwise, print "Valid number".
let num = 15;
if(num >10 || num <0 ){
  console.log("Invalid number");
} else {
  console.log("Valid number");
}


// 6- Write a programto declare a number. 
//If the number is between 5 and 10 (inclusive) or between 20 and 25 (inclusive), print "The number is valid". 
//Otherwise, print "The number is not valid".
let num3 = 15;
if(num3 >= 5 && num3 <= 10 || num3 >= 20 && num3 <= 25 ){
  console.log("The number is valid");
} else {
  console.log("The number is not valid");
}



// 7- to declare a password. If the password is "secret" or "password", print "Access granted". 
//Otherwise, print "Access denied".
let password2 = "secret";
if (password2 === "secret" || password2 === "password"){
  console.log("Access granted");
} else {
  console.log("Access denied")
}


// 8- Write a program to declare a number. If the number is between 0 and 100 (inclusive) and is even, 
//print "The number is even and between 0 and 100". Otherwise, print "The number is not even and/or not between 0 and 100".
let num4 = 15;
if (num4 >= 0 && num4 <= 100 && num4 % 2 === 0){
  console.log("The number is even and between 0 and 100");
} else {
  console.log("The number is not even and/or not between 0 and 100");
}


// 9- Write a program to declare two numbers. If either number is negative, print "At least one number is negative". 
//Otherwise, print "Both numbers are positive".
let num5= -15;
let num6 = 15;
if (num5 <0 || num6 <0){
  console.log("At least one number is negative");
} else {
  console.log("Both numbers are positive");
}


// 10- Write a program to declare age and whether they are a student (yes or no). 
//If the user is under 18 or is a student, print "You qualify for a discount". Otherwise, print "You do not qualify for a discount".
let age2 = 18;
let student = "yes";
if (age2 < 18 || student === "yes"){
  console.log("Yes qualify for a discount");
} else {
  console.log("You do not qualify for a discount");
}