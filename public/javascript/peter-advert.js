
// var card = document.querySelector('.card');
// card.addEventListener('click', function() {
//   card.classList.toggle('is-flipped');
// });


function displayAdverts(response) {

  for (var i = 0; i < 2; i++) {
    var number = Math.floor(Math.random()*3476)
    while (number%2 == 0) {
      number = Math.floor(Math.random()*3476)
    }
   
    if (number%2 ==!0 && response.data[number].image != null) {
      
      
      //to grab ad_spend, ad_spend:, ad_spend_currency:, interests:, interests_also_match:, impressions

     
      let adSpend = response.data[number].ad_spend
      let impressions = response.data[number].impressions
      
      

      img_url = response.data[number].image
      let img = document.createElement("img")
      
      img.src = img_url
      img.classList.add("advert")
      
      
      numberstring = number.toString()
      
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

function getAdvertRaw () {
  
  const url = "http://localhost:4567/api/ads"
 
  axios.get(url).then(displayAdverts)

}
