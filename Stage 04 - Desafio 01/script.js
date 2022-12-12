let number1 = prompt("Favor inserir um numero");
let number2 = prompt("Favor inserir um segundo numero");

number1 = Number(number1);
number2 = Number(number2);

let plus, minus, multiplication, division, remnant;

plus = number1 + number2;
minus = number1 - number2;
multiplication = number1 * number2;
division = (number1 / number2).toFixed(2);
remnant = number1 % number2;

alert("A soma dos números é: " + plus);
alert("A subtração dos números é: " + minus);
alert("A multiplicação dos números é: " + multiplication);
alert("A divisão dos números é: " + division);
alert("A sobra da divisão é: " + remnant);

if(plus % 2 != 0){
  alert("A soma dos números é impar");
}else{
  alert("A soma dos números é par");
}

if(number1 == number2){
  alert("Os números inseridos são iguais");
}else{
  alert("Os números inseridos são diferentes");
}