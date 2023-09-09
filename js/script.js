// Get the current date
const currentDate = new Date();

// Create an array of day names
const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// Get the current day of the week (0 for Sunday, 1 for Monday, etc.)
const currentDayIndex = currentDate.getDay(6);

// Get the day name for the current day
const currentDayName = dayNames[currentDayIndex];

// Update the HTML element with the current day
document.getElementById('saturday').textContent = currentDayName;

function getCurrentUTCTime(){
    // Get the current UTC time in milliseconds
    const currentUTCTime = Date.now();
    
    // Update the HTML element with the current UTC time
    document.getElementById('time').textContent = currentUTCTime;
}

getCurrentUTCTime();

setInterval(function(){
    getCurrentUTCTime();
}, 1000);

