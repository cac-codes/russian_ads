// variable to select all states (path elements)
let svgStates = document.querySelectorAll("#states > *");

// remove hover highlight as mouse leaves state, fade all states back in when mouse leaves 'clicked' state
function hoverOff() {
    svgStates.forEach((el) => {
        el.classList.remove("on");
        el.classList.remove("faded-state");
    });
}

// state highlighted on hover/mouseenter
function hoverHighlight(el) {
    el.classList.add("on");
}

// fade rest of states and highlight state when state is clicked
function fadeStates(el) {
    if (el.classList.contains("highlight-state")) {
        el.classList.remove("highlight-state")
    } else {
        svgStates.forEach((el => {
            el.classList.remove("highlight-state");
            el.classList.add("faded-state");
        }))
    
        el.classList.remove("faded-state");
        el.classList.add("highlight-state");
    }
}

// add event listeners to state elements
svgStates.forEach((el) => {
    el.addEventListener("mouseenter", ()=> {
        hoverHighlight(el);
    });
    el.addEventListener("mouseleave", () => {
        hoverOff();
    })
    el.addEventListener("click", () => {
        fadeStates(el);
    })
});

