
function createAdverts(adResponse, number){ 
    if (number%2 ==!0 && adResponse.image != null) {
      
      //make a variable to establish full list of interests
      var interests = adResponse.interests
      var alsoInterests = adResponse.interests_also_match
      var finalInterestsString = interestsString(interests, alsoInterests)

      //grab the creation date from data and remove time
      var creationDate = getCreationDay(adResponse.ad_creation_date)
        
      //grab the amount spent, impressionsm and currency
      let adSpend = adResponse.ad_spend
      let impressions = adResponse.impressions
      let currency = adResponse.ad_spend_currency
      
      //remove any dollar denominated data
      if (currency == "USD") {
        adSpend = adSpend * 77
      }

      //grabbing the image and placing in new element
      var adImg = createAdImg(adResponse.image)
      
      //make our new elements divs, to host the image and append to our HTML parent advert-container
      var adContainer1 = createContainer1(impressions, adSpend)
      var adContainer2 = createContainer2()
      var frontOfAdDiv = createFrontOfAdContainer()
      var backOfAdDiv = createBackOfAdDiv()
      
      // creates the info box to be appended to the back of the ad card
      var adInfoBox = createAdInfoBox(adSpend, impressions, creationDate, finalInterestsString)

      apendBoxes(adContainer1, adContainer2, frontOfAdDiv, backOfAdDiv, adImg, adInfoBox)
    }    
}

function displayAdverts(){
  const url = "http://localhost:4567/api/ads"
  axios.get(url).then(response => {
    for (var i = 0; i < 100; i++) {
      var number = Math.floor(Math.random()*3476)
      
      while (number%2 == 0) {
        number = Math.floor(Math.random()*3476)
      }
      createAdverts(response.data[number], number)
    }
  })
}

function interestsString(interests, alsoInterests){
  var interestsString = "";
  var alsoInterestsString = "";
  if (interests !== null) {
    interestsString = interests.join(', ')
  }  
  if (alsoInterests !== null) {
    alsoInterestsString = alsoInterests.join(', ')
  }

  return interestsString + alsoInterestsString
}

function getCreationDay(date){
  var creationDate = date
      if (creationDate !== null && creationDate !== undefined) {
        creationDate = creationDate.slice(0, 10)
      }
  return creationDate
}

function createContainer1(impressions, adSpend){
  adContainer1 = document.createElement("div")
  adContainer1.classList.add("scene") 
  adContainer1.classList.add("scene--card")
  adContainer1.dataset.impressions = impressions
  adContainer1.dataset.spend = adSpend
  return adContainer1
}

function createContainer2(){
  adContainer2 = document.createElement("div")
  adContainer2.classList.add("card")
  adContainer2.addEventListener('click', function(event) {
      event.target.parentNode.parentNode.classList.toggle('is-flipped');
  });
  return adContainer2
}

function createFrontOfAdContainer(){
  frontOfAdDiv = document.createElement("div")
  frontOfAdDiv.classList.add("card__face")
  frontOfAdDiv.classList.add("card__face--front")
  return frontOfAdDiv
}

function createBackOfAdDiv(){
  backOfAdDiv = document.createElement("div")
  backOfAdDiv.classList.add("card__face")
  backOfAdDiv.classList.add("card__face--back")
  backOfAdDiv.addEventListener('mouseleave', function(event) {
    event.target.parentNode.classList.toggle('is-flipped');
  });
  return backOfAdDiv
}

function createAdImg(url){
  let img = document.createElement("img")
  img.src = url
  img.classList.add("card")
  return img
}

function createAdInfoBox(adSpend, impressions, creationDate, finalInterestsString){
  var adInfoBox = document.createElement("div")
  adInfoBox.classList.add("back-card-info")

  var spendParagraph = document.createElement("p")
  spendParagraph.textContent = `Rubles Spent: ${Math.round(adSpend)}`

  var impressionsParagraph = document.createElement("p")
  impressionsParagraph.textContent = `Impressions: ${impressions}`

  var creationDateParagraph = document.createElement("p")
  creationDateParagraph.textContent = `Creation Date: ${creationDate}`;

  var interestsParagraph = document.createElement("p")
  interestsParagraph.textContent = `Interests: ${finalInterestsString}`;
  if (finalInterestsString == "") {
    interestsParagraph.classList.add("hidden")
  }

  adInfoBox.appendChild(spendParagraph)
  adInfoBox.appendChild(impressionsParagraph)
  adInfoBox.appendChild(creationDateParagraph)
  adInfoBox.appendChild(interestsParagraph)

  return adInfoBox
}

function apendBoxes(adContainer1, adContainer2, frontOfAdDiv, backOfAdDiv, adImg, adInfoBox){
  advertContainerGreatGrandad = document.querySelector(".advert-container")
  advertContainerGreatGrandad.appendChild(adContainer1)
  adContainer1.appendChild(adContainer2)
  adContainer2.appendChild(frontOfAdDiv)
  adContainer2.appendChild(backOfAdDiv)
  backOfAdDiv.appendChild(adInfoBox)
  frontOfAdDiv.appendChild(adImg)

}