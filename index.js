// Write a program that allow to user enter number then printitlet 
q1 = prompt("enter number")
console.log(q1)

// Write a program that take number from user then print yes if that number can divide by 3
// and 4 otherwise print no

q2 = prompt('can divide by 3 and 4 \n enter number')
if(q2 %3 ==0 && q2 % 4 ==0 ){
    console.log('yes')
}else {
    console.log('no')
}

// Write a program that allows the user to insert 2 integers then print the max
let number1 , number2
number1 = parseInt(prompt('enter the first number')) 
number2 = parseInt(prompt('enter the seconed number'))
if(number1>number2){
    console.log(number1)

}else {
    console.log(number2)
}

// Write a program that allows the user to insert an integer then print negative if it is
// negative number otherwise print positive.
let checkNegative = prompt('enter number to see if negative')
if(checkNegative < 0){
    console.log('-')
}else{
    console.log('+')
}

// Write a program that take 3 integers from user then print the max element
// and the min element.

number1 =parseInt(prompt('enter the first number')) 
number2 = parseInt(prompt('enter the second number'))
let number3 = parseInt(prompt('enter the third number'))
if (number1 > number2){
    if(number1>number3){
        console.log('max: '+number1)

    }else{
        console.log('max: '+number3)

    } 
}else {
    if (number2 > number3){
        console.log('max: '+number2)

    }else{
        console.log('max: '+number3)
    }
}

if (number1 < number2){
    if(number1<number3){
        console.log('min: '+number1)

    }else{
        console.log('min: '+number3)

    } 
}else {
    if (number2 < number3){
        console.log('min: '+number2)

    }else{
        console.log('min: '+number3)
    }
}

// Write a program that allows the user to insert integer number then
// check If a number is oven or odd
let evenOrOdd = prompt('enter number to see if even or odd?')
if (evenOrOdd %2 ==0){
    console.log('even')
}else{
    console.log('odd')
}

// Write a program that take character from user then if it is vowel chars (a,e,I,o,u)
// then print vowel otherwise print consonant
let char = prompt('enter character to see if is vowel?').toLowerCase

if(char[0] == 'a' && char[0] == 'e' && char[0] == 'i' && char[0] == 'o' && char[0] == 'u'){
    console.log('vowel')
}else{
    console.log('consonant')
}

// count form 1 to n
let counter = prompt('enter number to count from 1 to it')
    let print=''
for(let i = 1 ; i <=counter ; i++){
    if(print==''){
        print+=i;
        continue;
    }
    print+=`,${i}`
}
console.log(print)

// Write a program that allows userto insert integerthen print a multiplication table up to 12.
counter = prompt('enter number to print the mult taple')
print=''
for(let i = 1 ; i <=12 ; i++){
    if(print==''){
        print+=i*counter;
        continue;
    }
    print+=` ${i*counter}`
}
console.log(print)

// Writeaprogramthatallowstousertoinsertnumberthenprintallevennumbers
// between 1 to this number

counter = prompt('enter number to see even numbers between 1 and it')
print=''
for(let i = 1 ; i <=counter ; i++){
    if(i%2==0){
        if(print==''){
            print+=i;
            continue;
        }
        print+=` ${i}`
    }
}
console.log(print)


// Write a program that take two integers then print the power
let number = prompt('enter number ')
let power = prompt('enter the power to')
let result =1;
for(let i =1 ;i <=power ; i++ ){
    result*=number
}
console.log(result)


// Write a program to enter marks of five subjects and calculate total, average and
// percentage.
let sum =0
for(let i =0 ; i <5 ; i++){
    sum+= parseInt(prompt(`enter the mark of the ${i} subject `));
}
console.log(`the total mark: ${sum}`)
console.log(`the average of marks: ${parseInt(sum/5)}`)
console.log(`the percentage of total marks: ${parseInt((sum/500)*100)}%`)

// Write a program to input month number and print number of days in that
// month.

let month = prompt('enter the month from 1 to 12')
if(month == '1' || month == '3' || month == '5' || month == '7' || month == '8' || month == '10' || month == '12'){
    console.log(31)
}else if (month == '4' || month == '6' || month == '9' || month == '11'){
    console.log(30)
}else if (month == '2'){
    console.log(28)
}else {
    console.log('enter a valid month')
}

// Write a program to input marks of five subjects
// Physics, Chemistry, Biology, Mathematics and Computer
// , Find percentage and grade
sum =0
for(let i =0 ; i <5 ; i++){
    sum+= parseInt(prompt(`enter the mark of the ${i} subject `));
}
sum=parseInt(sum/5)
if(sum>=90){
    console.log('grade A')
}else if(sum>=80){
    console.log('grade B')
}else if(sum>=70){
    console.log('grade C')
}else if(sum>=60){
    console.log('grade D')
}else if(sum>=40){
    console.log('grade E')
}else {
    console.log('grade F')
}
// ************************switch Case*********************

// Write a program to print total number of days in month

month = prompt('enter the month from 1 to 12')
switch(parseInt(month)){
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log(31)
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log(30)
        break;
    case 2:
        console.log(28)
        break;
    default:
        console.log('enter a valid month')
}

// Write a program to check whether an alphabet is vowel or consonant
char = prompt('enter character to see if is vowel?').toLowerCase
switch(char[0]){
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        console.log('vowel')
        break;
    default:
        console.log('consonant')
}

// 17- Write a program to find maximum between two numbers
number1 = parseInt(prompt('enter the first number')) 
number2 = parseInt(prompt('enter the seconed number'))
switch(true){
    case number1>number2:
        console.log(number1)
        break;
    default:
        console.log(number2)
}

// Write a program to check whether a number is even or odd
evenOrOdd = prompt('enter number to see if even or odd?');

switch (true){
    case evenOrOdd%2==0:
        console.log('even')
        break;
    default:
        console.log('odd')
}

// 19- Write a program to check whether a number is positive or negative or zero

checkNegative = prompt('enter number to see if negative')

switch(true){
    case checkNegative>0:
        console.log('Positive')
        break;
    case checkNegative<0:
        console.log('Negative')
        break;
    default:
        console.logI('Zero')

}

// 20- Write a program to create Simple Calculator
let method
do{
    method=prompt('chose method \n 1- sum \n 2- sub \n 3- mult \n 4- divide \n 0- Exit')
    switch(parseInt(method)){
        case 1:
            number1 = parseInt(prompt('enter the first number')) 
            number2 = parseInt(prompt('enter the second number'))
            console.log(number1+number2)
            break;
        case 2: 
            number1 = parseInt(prompt('enter the first number')) 
            number2 = parseInt(prompt('enter the second number'))
            console.log(number1-number2)
            break;
        case 3:
            number1 = parseInt(prompt('enter the first number')) 
            number2 = parseInt(prompt('enter the second number'))
            console.log(number1*number2)
            break;
        case 4: 
        number1 = parseInt(prompt('enter the first number')) 
        number2 = parseInt(prompt('enter the second number'))
        console.log(number1/number2)
        break;
        case 0:
            break;
        default:
            console.log('enter a valid method')

    }
}while(parseInt(method))