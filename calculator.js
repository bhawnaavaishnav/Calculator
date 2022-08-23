// five globle variable declare-----------------------
let output = document.getElementById("screen");
var operatorSel = '';
var operatorClicked = false;
var user1 = '';
var user2 = '';

// function for click to numbers-----------------------
function myFunction(num) {
    if (operatorClicked == false) {
        user1 += num;
        console.log("number1--" + user1)
        Opr_enable(Operators)
    }
    else {
        user2 += num;
        console.log("number2---" + user2)
        equal_enable(result)
    }
    output.value += num;
    console.log(num)
}

// function for click to operators-------------------- 
function operator(oper) {
    operatorClicked = true;
    operatorSel = oper;
    console.log("operater: " + operatorSel)
    output.value += oper;
    console.log(oper)
    Opr_disable(Operators)
}

// function for clear all values----------------------------
function ClearDoc() {
    output.value = "";
    Opr_disable(Operators)
    console.log("user1....." + user1)
    user1 = '';
    operatorClicked = false;
}

// function to the equal button and switch case for operation between two numbers--------------
function equal() {
    var num1 = parseFloat(user1)
    var num2 = parseFloat(user2)
    var add = '';
    switch (operatorSel) {
        case "+":
            add = num1 + num2;
            equal_disable(result)
            console.log('total.....' + add);
            break;
        case "-":
            add = num1 - num2;
            equal_disable(result)
            console.log('total.....' + add);
            break;
        case "*":
            add = num1 * num2;
            equal_disable(result)
            console.log('total.....' + add);
            break;
        case "/":
            add = num1 / num2;
            if (num2 == 0) {
                alert("Can't divide by 0")
                add = "";
            }
            equal_disable(result)
            console.log('total.....' + add);
            break;
        default:
            console.log("Not exist");
    }

output.value = add;
user1 = add;
user2 = '';
operatorClicked = false;
Opr_enable(Operators)
console.log('num1....' + num1)
console.log('num2....' + num2)
}

// function for delete button------------------------
function del() {
    let number = document.getElementById("screen");
    let remove = number.value;
    remove = remove.slice(0, -1);
    number.value = remove;
    if (operatorClicked == false) {
        user1 = remove;
        console.log("user1......." + user1)
    }
    else {
        if (user2 == '') {
            operatorClicked = false;
            Opr_enable(Operators)
            console.log("opr....." + operatorSel)
        }
        else {
            user2 = user2.slice(0, -1)
            console.log("user2....." + user2)
        }
    }
}



// function for operators enable disable---------------
var Operators = document.querySelectorAll(".bt")
function Opr_disable(a) {
    for (i of a) {
        i.style.pointerEvents = "none";
    }
}

function Opr_enable(a) {
    for (i of a) {
        i.style.pointerEvents = "auto";
    }
}


// function for equal enable disable----------
var result = document.querySelector(".equal")
function equal_disable() {
    result.disabled = true;
}

function equal_enable() {
    result.disabled = false;
}


