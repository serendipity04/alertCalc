const num1 = parseFloat( prompt('Input first number'));
const num2 = parseFloat( prompt('Input second number'));
var operator = prompt('Enter your preferred operator, +, -, *, /, %');

let result = 0;
if( operator == "+"){
    result = num1 + num2;
}else if(operator == "-"){
    result = num1 - num2;
}else if(operator == "*"){
    result = num1 * num2;
}else if(operator == "/"){
    result = num1 / num2;
}else if(operator == "%"){
    result = num1 % num2;
}
alert("The result is " + result)
