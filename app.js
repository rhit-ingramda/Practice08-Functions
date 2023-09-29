//question 1
function multiply(x, y){
    return x * y;
}

//question 2
function isEven(num){
    return num%2 == 0;
}

//question 3
const difference = function subtract(a, b){
    return a - b;
}

//question 4
const greeting = function(name){
    return `Hello ${name}`;
}

//question 5
function calculate(x,y){
    const squaredSum = function(){
        return (x+y)**2;
    }
    return squaredSum(x, y);
}
console.log(calculate(2,4))

//question 6
function average(num1, num2, num3){
    const mean = function(num1, num2, num3){
        return (num1 + num2 + num3)/3;
    }
    return mean(num1, num2, num3);
}
console.log(average(2,4, 6))

//question 7
multiply = (a, b) => a*b;

//question 8
greet = (name) => `Hello ${name}!`;

//question 9
square = (x) => x**2;

//question 10
isEven = (num) => num%2 ==0;

//question 11
findMax = (numbers) => Math.max(...numbers);
const array = [1,2,3,4,6];
console.log(findMax(array));

//question 12
addTwoNumbers = (a, b) => a+b;