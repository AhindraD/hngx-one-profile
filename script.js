const timeElem = document.querySelector(".utc");
const dateElem = document.querySelector(".weekday");
const Day_Names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

init();

function init() {
    let perSecInterval = setInterval(() => {
        const utcTimeInMillisecond = Date.now();
        const day = (new Date(utcTimeInMillisecond)).getDay();
        timeElem.textContent =`UTC: ${ utcTimeInMillisecond}`;
        dateElem.textContent = Day_Names[day].toUpperCase();
    }, 1000);

    // clearInterval(perSecInterval);
}