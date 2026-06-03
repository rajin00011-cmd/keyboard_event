var fieldjs = document.getElementById("field");
var statusjs = document.getElementById("status");
var keyjs = document.getElementById("key");

// This variable will hold our invisible 5-second countdown timer
var idleTimer; 

var key_actions = {
    w: { text: "Moves up", img: "up.PNG" },
    a: { text: "Moves left", img: "left.PNG" },
    s: { text: "Moves down", img: "down.PNG" },
    d: { text: "Moves right", img: "right.PNG" },
    " ": { text: "Shoots", img: "hitEnemy.PNG" }
};

fieldjs.addEventListener('keyup', (event) => {
    var lastKey = event.key.toLowerCase();

    // 1. CLEAR THE PREVIOUS TIMER: Stop any old countdowns currently ticking
    clearTimeout(idleTimer);

    // 2. RUN NORMAL GAME LOGIC
    if (key_actions[lastKey]) {
        statusjs.textContent = key_actions[lastKey].text; 
        keyjs.src = key_actions[lastKey].img;
    } else {
        statusjs.textContent = "Does nothing"; 
        keyjs.src = "keyboard.PNG";
    }

    // 3. START A FRESH COUNTDOWN: Reset to default after 5000 milliseconds (5 seconds)
    idleTimer = setTimeout(() => {
        statusjs.textContent = "Waiting for input...";
        keyjs.src = "keyboard.PNG";
    }, 5000); 
});
