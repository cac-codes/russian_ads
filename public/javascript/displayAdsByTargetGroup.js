var advertContainerGreatGrandad = document.querySelector(".advert-container")
var whitePrideLink = document.querySelector('.white-pride .demographic a')
var blackPrideLink = document.querySelector('.black-pride .demographic a')
var antiMuslim = document.querySelector('.anti-muslim .demographic a')
var hispanic = document.querySelector('.hispanic .demographic a')
var lgbtq = document.querySelector('.lgbtq .demographic a')
var firstNation = document.querySelector('.first-nation .demographic a')
var rightWing = document.querySelector('.far-right .demographic a')
var muslims = document.querySelector('.muslims .demographic a')
var incarcerated = document.querySelector('.incarcerated .demographic a')
var libertarians = document.querySelector('.libertarians .demographic a')
var veterans = document.querySelector('.veterans .demographic a')
var christians = document.querySelector('.christians .demographic a')
var gunOwners = document.querySelector('.gun-owners .demographic a')
var policeOfficers = document.querySelector('.police-officers .demographic a')

function displayAd(res) {
    for(let index = 0; index < res.data.length; index++){
        if (index%2 != 0 && res.data[index][1].image != null) {
            
            let adSpend = res.data[index][1].ad_spend
            let impressions = res.data[index][1].impressions
            img_url = res.data[index][1].image
            let img = document.createElement("img")
            
            img.src = img_url
            img.classList.add("advert")
        
            numberstring = index.toString()
            
            adContainer1 = document.createElement("div")
            adContainer1.classList.add("scene") 
            adContainer1.classList.add("scene--card")
            adContainer1.dataset.impressions = res.data[index][1].impressions
            adContainer1.dataset.spend = res.data[index][1].ad_spend
            adContainer2 = document.createElement("div")
            adContainer2.classList.add("card")
            
            adContainer2.addEventListener('click', function(event) {
                event.target.parentNode.parentNode.classList.toggle('is-flipped');
            });

            adContainer3 = document.createElement("div")
            adContainer3.classList.add("card__face")
            adContainer3.classList.add("card__face--front")
            adContainer4 = document.createElement("div")
            adContainer4.classList.add("card__face")
            adContainer4.classList.add("card__face--back")
            adSpendBox = document.createElement("div")
            adSpendBox.classList.add("back-card-info")
            adSpendBox.textContent = `Dollars Spent: ${Math.round(adSpend)}`
            adContainer4.appendChild(adSpendBox)
            impressionsBox = document.createElement("div")
            impressionsBox.classList.add("back-card-info")
            impressionsBox.textContent= `Impressions: ${impressions}`
            adContainer4.appendChild(impressionsBox)

            advertContainerGreatGrandad = document.querySelector(".advert-container")
            
            advertContainerGreatGrandad.appendChild(adContainer1)
            adContainer1.appendChild(adContainer2)
            adContainer2.appendChild(adContainer3)
            adContainer2.appendChild(adContainer4)
            adContainer3.appendChild(img)

        }    
    } 
}

whitePrideLink.addEventListener('click', (event) => {
    event.preventDefault()
    advertContainerGreatGrandad.innerHTML = "";

    axios.get('/api/whitePride').then(res => {
        displayAd(res)
    })
})

blackPrideLink.addEventListener('click', (event) => {
    event.preventDefault()
    advertContainerGreatGrandad.innerHTML = "";

    axios.get('/api/blackPride').then(res => {
        displayAd(res)
    })
})

antiMuslim.addEventListener('click', (event) => {
    event.preventDefault()
    advertContainerGreatGrandad.innerHTML = "";

    axios.get('/api/antiMuslim').then(res => {
        displayAd(res)
    })
})

hispanic.addEventListener('click', (event) => {
    event.preventDefault()
    advertContainerGreatGrandad.innerHTML = "";

    axios.get('/api/hispanics').then(res => {
        displayAd(res)
    })
})

lgbtq.addEventListener('click', (event) => {
    event.preventDefault()
    advertContainerGreatGrandad.innerHTML = "";

    axios.get('/api/lgbtq').then(res => {
        displayAd(res)
    })
})

firstNation.addEventListener('click', (event) => {
    event.preventDefault()
    advertContainerGreatGrandad.innerHTML = "";

    axios.get('/api/firstNations').then(res => {
        displayAd(res)
    })
})

rightWing.addEventListener('click', (event) => {
    event.preventDefault()
    advertContainerGreatGrandad.innerHTML = "";

    axios.get('/api/rightWing').then(res => {
        displayAd(res)
    })
})

muslims.addEventListener('click', (event) => {
    event.preventDefault()
    advertContainerGreatGrandad.innerHTML = "";

    axios.get('/api/muslims').then(res => {
        displayAd(res)
    })
})

incarcerated.addEventListener('click', (event) => {
    event.preventDefault()
    advertContainerGreatGrandad.innerHTML = "";

    axios.get('/api/incarcerated').then(res => {
        displayAd(res)
    })
})

libertarians.addEventListener('click', (event) => {
    event.preventDefault()
    advertContainerGreatGrandad.innerHTML = "";

    axios.get('/api/libertarians').then(res => {
        displayAd(res)
    })
})

veterans.addEventListener('click', (event) => {
    event.preventDefault()
    advertContainerGreatGrandad.innerHTML = "";

    axios.get('/api/veterans').then(res => {
        displayAd(res)
    })
})

christians.addEventListener('click', (event) => {
    event.preventDefault()
    advertContainerGreatGrandad.innerHTML = "";

    axios.get('/api/christians').then(res => {
        displayAd(res)
    })
})

gunOwners.addEventListener('click', (event) => {
    event.preventDefault()
    advertContainerGreatGrandad.innerHTML = "";

    axios.get('/api/gunOwners').then(res => {
        displayAd(res)
    })
})

policeOfficers.addEventListener('click', (event) => {
    event.preventDefault()
    advertContainerGreatGrandad.innerHTML = "";

    axios.get('/api/policeOfficers').then(res => {
        displayAd(res)
    })
})

// "leftWing"

