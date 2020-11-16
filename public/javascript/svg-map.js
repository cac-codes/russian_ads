// variable to select all states (path elements)
let svgStates = document.querySelectorAll("#states > *");
let dcCircle = document.querySelector("#DC");

// entire map
let svgMap = document.querySelector("#states");

// state/country title below map
let mapHeader = document.querySelector(".location-info-name");

// target group table data fields
let whitePrideData = document.querySelector(".white-pride-result");
let blackPrideData = document.querySelector(".black-pride-result");
let antiMuslimData = document.querySelector(".anti-muslim-result");
let hispanicData = document.querySelector(".hispanic-result");
let lgbtqData = document.querySelector(".lgbtq-result");
let firstNationsData = document.querySelector(".first-nations-result");
let farRightData = document.querySelector(".far-right-result");
let muslimsData = document.querySelector(".muslims-result");
let incarceratedData = document.querySelector(".incarcerated-result");
let gunOwnersData = document.querySelector(".gun-owners-result");
let libertariansData = document.querySelector(".libertarians-result");
let policeData = document.querySelector(".police-result");
let veteransData = document.querySelector(".veterans-result");
let christiansData = document.querySelector(".christians-result");


function adsByTarget(state) {
    axios.get(`/api/ads/${state}/whiteNationalist`).then(res => {
        whitePrideData.textContent = res.data.length
    })
    axios.get(`/api/ads/${state}/blackPower`).then(res => {
        blackPrideData.textContent = res.data.length
    })
    axios.get(`/api/ads/${state}/antiMuslim`).then(res => {
        antiMuslimData.textContent = res.data.length
    })
    axios.get(`/api/ads/${state}/Hispanic`).then(res => {
        hispanicData.textContent = res.data.length
    })
    axios.get(`/api/ads/${state}/whiteNationalist`).then(res => {
        whitePrideData.textContent = res.data.length
    })
    axios.get(`/api/ads/${state}/lgbtq`).then(res => {
        lgbtqData.textContent = res.data.length
    })
    axios.get(`/api/ads/${state}/muslim`).then(res => {
        muslimsData.textContent = res.data.length
    })
    axios.get(`/api/ads/${state}/prisoners`).then(res => {
        incarceratedData.textContent = res.data.length
    })
    axios.get(`/api/ads/${state}/concervativeGunOwners`).then(res => {
        gunOwnersData.textContent = res.data.length
    })
    axios.get(`/api/ads/${state}/libertarians`).then(res => {
        libertariansData.textContent = res.data.length
    })
    axios.get(`/api/ads/${state}/policeForce`).then(res => {
        policeData.textContent = res.data.length
    })
    
}

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

    mapHeader.textContent = el.getAttribute("data-state")
    let state = el.getAttribute("data-state");
    adsByTarget(state);
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
    dcCircle.classList.add("faded-state");
    let state = el.getAttribute("data-state");
    adsByTarget(state);
}

function resetAdsByTarget() {
    whitePrideData.textContent = "-"
    blackPrideData.textContent = "-"
    antiMuslimData.textContent = "-"
    hispanicData.textContent = "-"
    lgbtqData.textContent = "-"
    firstNationsData.textContent = "-"
    farRightData.textContent = "-"
    muslimsData.textContent = "-"
    incarceratedData.textContent = "-"
    gunOwnersData.textContent = "-"
    libertariansData.textContent = "-"
    policeData.textContent = "-"
    veteransData.textContent = "-"
    christiansData.textContent = "-"
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


svgMap.addEventListener("mouseleave", () => {
    mapHeader.textContent = "USA";
    resetAdsByTarget();
})

