
const logTime = document.querySelector("#logTime")
const whiteOut = document.querySelector(".white-out")
const timeBox = document.querySelector(".add-flight-time")
const flightHours = document.querySelector("#add-hours")
const flightMinutes = document.querySelector("#add-minutes")
const flightDate = document.querySelector("#add-date")
const submitFlightText = document.querySelector("#log-flight-btn")
const totalHours = document.querySelector(".total-hours")
const totalMinutes = document.querySelector(".total-minutes")

let fHours = 0
let fMinutes = 0
let fDate = ""

// set the correct flight log values based on local storage data
function init() {
    let initHrs = localStorage.getItem("Hours")
    let initMin = localStorage.getItem("Minutes")
    let lastHour = localStorage.getItem("Last-Hour")
    let lastMinute = localStorage.getItem("Last-Min")
    //only change the html if there is something from the local storage
    if (initHrs > 0 || initMin > 0) {
        totalHours.textContent = localStorage.getItem("Hours")
        totalMinutes.textContent = localStorage.getItem("Minutes")
    }
    if (lastHour > 0 || lastMinute > 0) {
        document.querySelector("#last-time").textContent = lastHour + "hrs " + lastMinute + "min"
        document.querySelector("#last-date").textContent = localStorage.getItem("Date")
    }
}

init()

//FIXME - runs function twice. Used a counter as a temp fix

logTime.addEventListener("click", () => {
    event.preventDefault()
    let counter = 0
    fHours = 0
    fMinutes = 0
    // display modal to log time
    timeBox.style.display = "flex";
    whiteOut.style.display = "block";
    //event listener for submit button on modal
    submitFlightText.addEventListener("click", () => {
        event.preventDefault()
        if (counter < 1) {
            //get previous time and data data from local storage
            storHours = Number(localStorage.getItem("Hours"))
            storMin = Number(localStorage.getItem("Minutes"))
            //sets local storage to zero integer if nothing there
            if (storHours === null) {
                storHours = 0
            }
            if (storMin === null) {
                storMin = 0
            }
            //get inputs and add new and past time together
            fHours = Number(flightHours.value);
            fMinutes = Number(flightMinutes.value);
            newHrs = fHours + storHours
            newMin = fMinutes + storMin
            fDate = flightDate.value;
            console.log("new hours computed: " + newHrs);
            //store in local storage again
            localStorage.setItem("Hours", newHrs)
            localStorage.setItem("Minutes", newMin)
            localStorage.setItem("Date", fDate)
            localStorage.setItem("Last-Hour", fHours)
            localStorage.setItem("Last-Min", fMinutes)
            //hide the modal
            timeBox.style.display = "none";
            whiteOut.style.display = "none";
            //run function to display new time change on profile

            displayTotal(newHrs, newMin, fDate, fHours, fMinutes)
            //run function to rest modal values
            resetValues()
        }
        counter++
    })
})

//function displays changes made to time and date
function displayTotal(hrs, min, date, lastHr, lastMin) {
    console.log("did the display function")
    //update the Total Flight Time values
    totalHours.textContent = hrs
    totalMinutes.textContent = min
    //update Last Flight Logged
    document.querySelector("#last-date").textContent = date
    document.querySelector("#last-time").textContent = lastHr + "hrs " + lastMin + "min"
}

//resets input values to zero
function resetValues() {
    flightHours.value = 0;
    flightMinutes.value = 0;
}

// FIXME not writing pilot level to doc
function pilotLevel() {
    if (Number(localStorage.getItem("Hours") >= 100)) {
        for (let i = 2; i < 6; i++) {
            let dot = $(".dot" + i)
            dot.attr("style", "background-color: rgb(77, 193, 255)")
        }
        $(".height-span2").val("master")
    } else if (Number(localStorage.getItem("Hours") >= 50)) {
        for (let i = 2; i < 5; i++) {
            let dot = $(".dot" + i)
            dot.attr("style", "background-color: rgb(77, 193, 255)")
        }
        $(".height-span2").val("exxcleent")
    } else if (Number(localStorage.getItem("Hours") >= 20)) {
        for (let i = 2; i < 4; i++) {
            let dot = $(".dot" + i)
            dot.attr("style", "background-color: rgb(77, 193, 255)")
        }
        $(".height-span2").val("greart guy")
    } else if (Number(localStorage.getItem("Hours") >= 10)) {
        let i = 2
        $(".height-span2").val("Cool guy")
        let dot = $(".dot" + i)
        dot.attr("style", "background-color: rgb(77, 193, 255)")
    }
}

pilotLevel()

