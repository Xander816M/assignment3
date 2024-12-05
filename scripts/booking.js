/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let rate=35
let numberOfDays=0


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
const addButton = document.querySelectorAll(".day-selector li");
function addDay(event){
    let button = event.target

    if (button?.classList.contains("clicked")){
        button?.classList.remove("clicked");
        numberOfDays=numberOfDays-1;
    }else{
        button?.classList.add("clicked");
        numberOfDays=numberOfDays+1;
    }
    calculate();
}
addButton.forEach(day => { 
    day.addEventListener("click", addDay);});
/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

let clearButton = document.getElementById("clear-button");
function clear(){
    let dayButtons = document.querySelectorAll(".day-selector li");
    dayButtons.forEach(dayButton =>{
        dayButton?.classList.remove("clicked")
    })
    numberOfDays=0;
    calculate();
}
clearButton.addEventListener("click", clear);
/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
const halfButton =document.getElementById("half");
function half(){
    let fullDays= document.getElementById("full");
    let halfDays= document.getElementById("half");
    fullDays?.classList.remove("clicked");
    halfDays?.classList.add("clicked");
    rate=20
    calculate();
}
halfButton.addEventListener("click", half);


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

const fullButton =document.getElementById("full");
function full(){
    let fullDays= document.getElementById("full");
    let halfDays= document.getElementById("half");
    halfDays?.classList.remove("clicked");
    fullDays?.classList.add("clicked");
    rate=35
    calculate();
}
fullButton.addEventListener("click", full);



/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value


function calculate() {
    let cost=numberOfDays*rate
    const calculatedCost= document.getElementById("calculated-cost");
    calculatedCost.innerHTML=`${cost}`
}