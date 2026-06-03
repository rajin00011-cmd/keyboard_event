var fieldjs = document.getElementById("field");
var statusjs = document.getElementById("status");
var keyjs = document.getElementById("key");

var key_actions = {
    w: {
        text: "Moves up",
        img: "up.PNG"
    },
    a: {
        text: "Moves left",
        img: "left.PNG"
    },
    s: {
        text: "Moves down",
        img: "down.PNG"
    },
    d: {
        text: "Moves right",
        img: "right.PNG"
    },
    " ": {
        text: "Shoots",
        img: "hitEnemy.PNG"
    }
};

fieldjs.addEventListener('keyup', (event) => {
    var lastKey = event.key.toLowerCase();

    if (key_actions[lastKey]) {
        statusjs.textContent = key_actions[lastKey].text; 
        keyjs.src = key_actions[lastKey].img;
    }
    else{
        statusjs.textContent = "Does nothing"; 
        keyjs.src = "keyboard.PNG";
    }
});