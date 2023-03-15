
const logTime = document.querySelector(".height-span1")
const whiteOut = document.querySelector(".white-out")
const timeBox = document.querySelector(".add-flight-time")
const flightHours = document.querySelector("#add-hours")
const flightMinutes = document.querySelector("#add-minutes")
const submitFlightText = document.querySelector("#log-flight-btn")
const totalHours = document.querySelector(".totalHours")
const totalMinutes = document.querySelector(".totalMinutes")

let fHours = 0
let fMinutes = 0

logTime.addEventListener("click", () => {
    timeBox.style.display = "flex";
    whiteOut.style.display = "block";

    submitFlightText.addEventListener("click", () => {
        // debugger;
        fHours = flightHours.value;
        fMinutes = flightMinutes.value;
        console.log(fHours);
        localStorage.setItem("Hours", fHours)
        localStorage.setItem("Minutes", fMinutes)
        timeBox.style.display = "none";
        whiteOut.style.display = "none";
    })
    addTotal()

})

// finish this func
function addTotal() {
    let hours = totalHours.value
    let minutes = totalMinutes.value
    // hours = hours + 

}