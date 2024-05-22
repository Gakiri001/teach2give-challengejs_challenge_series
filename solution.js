console.log('Question 1')
//Sum of two numbers

// Create a function called sum that takes in two numbers as arguments and returns their sum.
// Examples:

//     sum(3, 2) returns 5
//     sum(-4, -8) returns -12
//     sum(-3, 5) returns 2


function sum(num1,num2){
  return num1+num2;
}
console.log(sum(3,2));
console.log(sum(-4,-8));
console.log(sum(-3,5));

console.log('*********')
console.log('Question 2')

// Return the next number from the number passed

// Write a function called nextNumber that takes in a number as an argument, increments it by 1 to find the next number, and then returns the next number.
// Examples:

//     nextNumber(1) returns 2
//     nextNumber(0) returns 1
//     nextNumber(-2) returns -1


function nextNumber(previosnum){
  return previosnum + 1;
}
console.log(nextNumber(1))
console.log(nextNumber(0))
console.log(nextNumber(-2))



console.log('*********')
console.log("Question 3")

// Find perimeter of a rectangle

// Write a function called rectanglePerimeter that takes in the length and width as arguments and returns the perimeter of the rectangle.
// Examples:

//     rectanglePerimeter(2, 5) returns 14
//     rectanglePerimeter(3, 5) returns 16
//     rectanglePerimeter(10, 20) returns 60


function rectanglePerimeter(length, width){
  return (2*(length+width))
}
console.log(rectanglePerimeter(2,5)) //returns 14
console.log(rectanglePerimeter(3, 5)) //returns 16
console.log(rectanglePerimeter(10, 20)) //returns 60

console.log('*********')
console.log('Question 4')
// Return something to me

// Write a function called returnSomethingToMe that returns the string "something" followed by a space " " followed by the string that was passed into the function. Examples:

//     returnSomethingToMe("is better than nothing") returns "something is better than nothing"
//     returnSomethingToMe("jack daniels") returns "something jack daniels"
//     returnSomethingToMe("pinocchio") returns "something pinocchio"

function returnSomethingToMe(sometext){
  return 'something ' + sometext;
}
console.log(returnSomethingToMe('is better than nothing'));
console.log(returnSomethingToMe('jack daniels'));
console.log(returnSomethingToMe('pinocchio'));

console.log('*********')
console.log('Question 5')
// Bob's BMI vs Jane's BMI

// Bob and Jane want to know who has a bigger BMI than the other. Write a function called greaterBMI that will take in as the first arguement the BMI of Bob and as the second Argument the BMI of Jane. If Bob has a bigger BMI than jane, your function should return the string "Bob", if Jane has a bigger BMI than Bob, it should return the string "Jane", if they have the same BMI, it should return the string "Equal".
// Examples:

//     greaterBMI(30, 25) returns the string "Bob"
//     greaterBMI(35, 40) returns the string "Jane"
//     greaterBMI(35, 35) returns the string "Equal"

function greaterBMI(bobBMI,janeBMI) {
  if(bobBMI > janeBMI){
    console.log('Bob')
  }
  else if(janeBMI > bobBMI){
    console.log('Jane')
  }
  else if(janeBMI === bobBMI){
    console.log('Equal')
  }
  else{
    console.log('wrong input, please rectify')
  }
}

greaterBMI(30,25)
greaterBMI(35, 40) 
greaterBMI(35, 35) 

console.log('*********')
console.log('Question 6')
// Basketball points

// You are counting points for a basketball game, 2 points are awarded for every 2 pointer and 3 points for every 3 pointer. Write a function called basketBallPoints, the first argument should be the number of two pointers scored by the team and the second argument the number of three pointers scored by the team. This function returns the final points for the team.
// Examples:

//     basketBallPoints(1, 1) returns 5
//     basketBallPoints(7, 5) returns 29
//     basketBallPoints(0, 5) returns 15


function basketBallPoints(points2,point3) {
  return ((points2*2)+(point3*3))  
}
console.log(basketBallPoints(1,1));
console.log(basketBallPoints(7, 5));
console.log(basketBallPoints(0, 5));


console.log('*********')
console.log('Question 7')
// Less than 100

// Given two numbers, write a function called isSumMoreThan100 return true if their sum is greater than 100 and false if their sum is less than 100.
// Examples:

//     isSumLessThan100(25, 55) returns false
//     isSumLessThan100(72, 38) returns true


function isSumMoreThan100(num1,num2){
  if ((num1+num2) < 100){
    return false;
  }
  else if((num1 + num2) > 100){
    return true
  }
}

console.log(isSumMoreThan100(25,55))
console.log(isSumMoreThan100(72,38))

console.log('*********')
console.log('Question 8')

// Convert minutes to second

// Given that 1 minute is equal to 60 seconds. Write a function called convertToSeconds that takes in the number of minutes as an arguments and returns the seconds equivalent in the format x seconds e.g 120 seconds, 300 seconds. e.t.c. If the seconds equivalent is 0, then it should just return 0, if the seconds equivalent is 1, then it should return 1, if the seconds equivalent is more than 1, then it should return with the string "seconds"
// Examples:

//     convertToSeconds(5) returns 300 seconds
//     convertToSeconds(0) returns 0
//     convertToSeconds(1) returns 1 second (singular)


function convertToSeconds(minutes){
  let seconds = minutes * 60;
  if(minutes === 1){
    return seconds + ' second';
  }
  else if(minutes === 0){
    return seconds
  }
  else if(minutes > 1){
    return seconds + ' seconds'
  }
}

console.log(convertToSeconds(5))
console.log(convertToSeconds(0))
console.log(convertToSeconds(1))

console.log('*********')
console.log('Question 9')

// Greater among the three

// Write a function called greater that takes in three numbers as arguments and returns the greatest number among the three. If they are all equal, it should return any of them.
// Examples:

//     greater(2, 35, 9) returns 35
//     greater(23, 23, 23) returns 23

function greater(number1,number2,number3){
  if(number1 > number2 && number1 > number3){
    return number1
  }
  else if(number2 > number1 && number2 > number3){
    return number2
  }
  else if(number3 > number2 && number3 > number1){
    return number3
  }
  else if(number3 === number2 && number3 === number1){
    return number3
  }
}
console.log(greater(2, 35, 9))
console.log(greater(23, 23, 23))

console.log('*********')
console.log('Question 10')

// Less among the three

// Write a function called least that takes in three numbers as arguments and returns the least among the three. If they are all equal, it should return any of them.
// Examples:

//     least(2, 35, 9) returns 9
//     least(23, 23, 23) returns 23
function least(number1,number2,number3){
  if(number1 < number2 && number1 < number3){
    return number1
  }
  else if(number2 < number1 && number2 < number3){
    return number2
  }
  else if(number3 < number2 && number3 < number1){
    return number3
  }
  else if(number3 === number2 && number3 === number1){
    return number3
  }
}
console.log(least(2, 35, 9))
console.log(least(23, 23, 23))

console.log('*********')
console.log('Question 11')


// Football points

// Write a function called footballPoints that returns the number of points a football team has obtained so far, the first argument for this function is the number of games a team has won, the second argument is the number of games the team has drawn and the third arguement is the number of times the team has lost. 3 points are awarded for every game won, 1 point for every game draw and 0 points for every game lost.
// Examples:

//     footballPoints(5, 0, 2) returns 15
//     footballPoints(0, 0, 2) returns 0
//     footballPoints(5, 2, 0) returns 17


function footballPoints(win,draw,loss) {
  return ((win*3)+(draw*1)+(loss*0))
}
console.log(footballPoints(5, 0, 2))
console.log(footballPoints(0, 0, 2))
console.log(footballPoints(5, 2, 0))

console.log('*********')
console.log('Question 12')
// Even numbers
// Write a function called isEven that takes in a number as an argument, the function returns true if a number is even and returns false if a number is odd. Use this function to log to the console all the even numbers between 0 and 101.

function isEven(number){
  return number % 2 === 0
}
for(let numEven = 0; numEven <=101; numEven++){
  if(isEven(numEven)){
    console.log(numEven)
  }
}
