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

// demographics table categories
let demographicList = document.querySelectorAll(".demographic")
let demographicTarget = document.querySelector("td.demographic-result")


// 'targeted posts deployed' field
let totalTargeted = document.querySelector(".location-deployed-result");

function usaTotal() {
    axios.get('/api/whitePride').then(res => {
        whitePrideData.textContent = res.data.length
    })
    axios.get(`/api/blackPride`).then(res => {
        blackPrideData.textContent = res.data.length
    })
    axios.get(`/api/antiMuslim`).then(res => {
        antiMuslimData.textContent = res.data.length
    })
    axios.get(`/api/hispanics`).then(res => {
        hispanicData.textContent = res.data.length
    })
    axios.get(`/api/lgbtq`).then(res => {
        lgbtqData.textContent = res.data.length
    })
    axios.get(`/api/muslims`).then(res => {
        muslimsData.textContent = res.data.length
    })
    axios.get(`/api/incarcerated`).then(res => {
        incarceratedData.textContent = res.data.length
    })
    axios.get(`/api/gunOwners`).then(res => {
        gunOwnersData.textContent = res.data.length
    })
    axios.get(`/api/libertarians`).then(res => {
        libertariansData.textContent = res.data.length
    })
    axios.get(`/api/policeOfficers`).then(res => {
        policeData.textContent = res.data.length
    })
    axios.get(`/api/veterans`).then(res => {
        veteransData.textContent = res.data.length
    })
    axios.get(`/api/leftWing`).then(res => {
        leftWingData.textContent = res.data.length
    })
    axios.get(`/api/rightWing`).then(res => {
        farRightData.textContent = res.data.length
    })
    axios.get(`/api/christians`).then(res => {
        christiansData.textContent = res.data.length
    })
    axios.get(`/api/firstNations`).then(res => {
        firstNationsData.textContent = res.data.length
    })

}


function adsByTarget(state) {
    axios.get(`/api/ads/${state}/whitePride`).then(res => {
        whitePrideData.textContent = res.data.length
    })
    axios.get(`/api/ads/${state}/blackPride`).then(res => {
        blackPrideData.textContent = res.data.length
    })
    axios.get(`/api/ads/${state}/antiMuslim`).then(res => {
        antiMuslimData.textContent = res.data.length
    })
    axios.get(`/api/ads/${state}/hispanics`).then(res => {
        hispanicData.textContent = res.data.length
    })
    axios.get(`/api/ads/${state}/lgbtq`).then(res => {
        lgbtqData.textContent = res.data.length
    })
    axios.get(`/api/ads/${state}/muslims`).then(res => {
        muslimsData.textContent = res.data.length
    })
    axios.get(`/api/ads/${state}/incarcerated`).then(res => {
        incarceratedData.textContent = res.data.length
    })
    axios.get(`/api/ads/${state}/gunOwners`).then(res => {
        gunOwnersData.textContent = res.data.length
    })
    axios.get(`/api/ads/${state}/libertarians`).then(res => {
        libertariansData.textContent = res.data.length
    })
    axios.get(`/api/ads/${state}/policeOfficers`).then(res => {
        policeData.textContent = res.data.length
    })
    axios.get(`/api/ads/${state}/veterans`).then(res => {
        veteransData.textContent = res.data.length
    })
    axios.get(`/api/ads/${state}/leftWing`).then(res => {
        leftWingData.textContent = res.data.length
    })
    axios.get(`/api/ads/${state}/rightWing`).then(res => {
        farRightData.textContent = res.data.length
    })
    axios.get(`/api/ads/${state}/christians`).then(res => {
        christiansData.textContent = res.data.length
    })
    axios.get(`/api/ads/${state}/firstNations`).then(res => {
        firstNationsData.textContent = res.data.length
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
    // adsByTarget(state);

    // update target/spend/impression info field
    axios.get(`/api/totals/${state}`).then(res => {
        let adCount = res.data[2].ad_count;
        let totalSpent = res.data[0].total_spent;
        let impressions = res.data[1].impression_total;
        let countryWideAds = 3476;
        let usaSpend = 5848355;
        let usaImpressions = 39601632;
        let stateTargetedAds = 771;
        let stateTargetedSpend = 1428202;
        totalTargeted.textContent = `${(countryWideAds - stateTargetedAds) + adCount}`;
        document.querySelector(".location-spent-result").parentElement.classList.add("hidden-table");        
        document.querySelector(".location-impressions-result").parentElement.classList.add("hidden-table");
    })
}

// fade rest of states and highlight state when state is clicked
function fadeStates(el) {
    if (el.classList.contains("highlight-state")) {
        el.classList.remove("highlight-state")
        svgStates.forEach((el => {
            el.classList.remove("faded-state");
        }))
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

// reset USA/state header and total ad/rub/impressions when mouse leaves map
svgMap.addEventListener("mouseleave", () => {
    mapHeader.textContent = "USA";
    totalTargeted.textContent = '3476';
    document.querySelector(".location-spent-result").textContent = '5848355';
    document.querySelector(".location-impressions-result").textContent = '39601632';

    document.querySelector(".location-spent-result").parentElement.classList.remove("hidden-table");        
    document.querySelector(".location-impressions-result").parentElement.classList.remove("hidden-table");


    svgStates.forEach((el => {
            el.classList.remove("highlight-state");
        }))

    usaTotal();
})

// click listener on demographic list items to change "targeting" header
demographicList.forEach((el) => {
    el.addEventListener("click", () => {

        demographicTarget.textContent = `${el.textContent.slice(0, -1)}`
    })
})

usaTotal();