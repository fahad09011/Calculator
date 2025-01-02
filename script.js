let userinput = document.querySelector(".userinput");
let buttonOfNumbers = document.querySelectorAll(".number");
let buttonsOfOperators = document.querySelectorAll(".operator");
let buttonOfClear = document.querySelectorAll(".clear-btns")
let equalButton = document.querySelector(".equal");

// variables to track the value or you can say calculator state
let currentvalue = ""; // cuerrent value is the first vakue that we entered before click on operator button 
let previousvalue = ""; // previous value is the second or last value that we entered after click on operator button 

let currentoperator = ""; // the operator to be selected by user


// ====================================t initail stage show 0 in display and it is alos a function for update display
function updatedisplay(value) {
    if (userinput.textContent === "" || userinput.textContent == "") {
        userinput.textContent = 0;
    }
    else {
        userinput.textContent = value;
    }
};

// =====================function for each button

buttonOfNumbers.forEach((button) => {
    button.addEventListener("click", () => {
        if (currentvalue === "" && currentvalue !== ".") {
            currentvalue = button.textContent;
        }
        else {
            currentvalue = currentvalue + button.textContent;
        }
        updatedisplay(currentvalue);
    });
});

// ================ function for operator button
buttonsOfOperators.forEach((button) => {
    button.addEventListener("click", () => {
        if (currentvalue) {
            if (previousvalue && currentoperator) {
                previousvalue = operate(previousvalue, currentvalue, currentoperator);
                updatedisplay(previousvalue)
            }
            else {
                previousvalue = currentvalue;
            }
        }
        currentvalue = "";
        currentoperator = button.textContent;
    });
});

// function for equal button 
equalButton.addEventListener("click", () => {
    if (currentvalue && previousvalue && currentoperator) {
        let result = operate(previousvalue, currentvalue, currentoperator);
        updatedisplay(result);
        currentvalue = "";
        previousvalue = result;
        currentoperator = "";
    }

});

// function for clear buttons
buttonOfClear.forEach((button) => {
    button.addEventListener("click", () => {
        switch (button.textContent) {
            case "C":
                currentvalue = "";
                updatedisplay("0");
                break;


            case "AC":
                currentvalue="";
                previousvalue="";
                currentoperator="";
                updatedisplay("0");
                break;
                case "DEL":
                    currentvalue=currentvalue.slice(0,-1);
                    updatedisplay(currentvalue);
                    break;
            default:
                break;
        }
    });
});

// function for calculato operations

function operate(num1,num2,operator){
    num1 = parseFloat(num1);
     num2 = parseFloat(num2);

    switch (operator) {
        case "+":
            return num1+num2;
            
        case "-":
            return num1-num2;
            
        case "*":
            return num1*num2;
            
        case "/":
            return num2 !== 0 ? num1/num2 : "Error";
            
        case "%":
            return num1%num2;
        default:
            return num2;
    }
    
}