
// this is the variable to show the calculation
let displayInput = document.querySelector(".display-input");

function handleClick(event){
  const buttonValue = event.target.value;
  // perform action based on the button value
  // picks up the value of the button being click using event.


  if (buttonValue === "="){
    //evaluate and display the result
    let result = eval(displayInput.value);
    //eval is the function that allows to run code inside a string, giving the capability of doing our calculation when we press the "=" button,
    displayInput.value = result;
    } else if (buttonValue == "AC"){
      // clear the display
      displayInput.value  = '';
    } else if (buttonValue === 'backspace') {
      // delete only one character
      displayInput.value = displayInput.value.slice(0, -1);
    }else if (buttonValue === "%"){
      const currentValue = parseFloat(displayInput.value);
      const percentageValue = currentValue/100
      displayInput.value = percentageValue;
    }else {
      //append th button value to the display input
      displayInput.value += buttonValue;
    }
 }

// this is the event listener for each button that allows the buttons to be clicked and return a their value.
const buttons = document.querySelectorAll(".button");
buttons.forEach((button) => {
  button.addEventListener("click", handleClick);
});



