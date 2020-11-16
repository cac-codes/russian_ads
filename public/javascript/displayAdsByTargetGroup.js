var advertContainerGreatGrandad = document.querySelector(".advert-container")
var whitePrideLink = document.querySelector('.white-pride .demographic a')
var blackPrideLink = document.querySelector('.black-pride .demographic a')

function displayAd(res) {
    for(let index = 0; index < res.data.length; index++){
        if (index%2 != 0 && res.data[index].image != null) {
            
            let adSpend = res.data[index].ad_spend
            let impressions = res.data[index].impressions
            
            img_url = res.data[index].image
            let img = document.createElement("img")
            
            img.src = img_url
            img.classList.add("advert")
            
            
            numberstring = index.toString()
            
            adContainer1 = document.createElement("div")
            adContainer1.classList.add("scene") 
            adContainer1.classList.add("scene--card")
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

    axios.get('/api/whiteNationalist').then(res => {
        displayAd(res)
    })
})

blackPrideLink.addEventListener('click', (event) => {
    event.preventDefault()
    advertContainerGreatGrandad.innerHTML = "";

    axios.get('/api/blackPower').then(res => {
        displayAd(res)
    })
})