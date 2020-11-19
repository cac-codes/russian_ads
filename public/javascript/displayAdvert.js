
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
      var adContainer3 = createContainer3()
      var adContainer4 = createContainer4()
      
      //make an adSpend div to append
      var adSpendBox = createAdSpendBox(adSpend)

      //make an impressions div to append
      var impressionsBox = createImpressionsBox(impressions)
      
      //make a creation-date div to append
      var creationDateBox = createCreateDateBox(creationDate)
      

      //make an interests div to append
      var interestsBox = createInterestsBox(finalInterestsString)
     
      apendBoxes(adContainer1, adContainer2, adContainer3, adContainer4, adSpendBox, impressionsBox, adImg, creationDateBox, interestsBox)
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
    interestsString = interests.join()
  }  
  if (alsoInterests !== null) {
    alsoInterestsString = alsoInterests.join()
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

function createContainer3(){
  adContainer3 = document.createElement("div")
  adContainer3.classList.add("card__face")
  adContainer3.classList.add("card__face--front")
  return adContainer3
}

function createContainer4(){
  adContainer4 = document.createElement("div")
  adContainer4.classList.add("card__face")
  adContainer4.classList.add("card__face--back")
  return adContainer4
}

function createAdSpendBox(){
  adSpendBox = document.createElement("div")
  adSpendBox.classList.add("back-card-info")
  adSpendBox.textContent = `Rubles Spent:\n ${Math.round(adSpend)}`
  return adSpendBox
}

function createAdImg(url){
  let img = document.createElement("img")
  img.src = url
  img.classList.add("card")
  return img
}

function createImpressionsBox(impressions){
  impressionsBox = document.createElement("div")
  impressionsBox.classList.add("back-card-info")
  impressionsBox.textContent = `Impressions: ${impressions}`
  return impressionsBox
}

function createCreateDateBox(creationDate){
  creationDateBox = document.createElement("div")
  creationDateBox.classList.add("back-card-info")
  creationDateBox.textContent = `Creation Date: ${creationDate}`
  return creationDateBox
}

function createInterestsBox(finalInterestsString){
  interestsBox = document.createElement("div")
  interestsBox.classList.add("back-card-info")
  interestsBox.textContent = `Interests: ${finalInterestsString}`
  if (finalInterestsString == "") {
    interestsBox.classList.add("hidden")
  }
  return interestsBox
}

function apendBoxes(adContainer1, adContainer2, adContainer3, adContainer4, adSpendBox, impressionsBox, adImg, creationDateBox, interestsBox){
  advertContainerGreatGrandad = document.querySelector(".advert-container")
  advertContainerGreatGrandad.appendChild(adContainer1)
  adContainer1.appendChild(adContainer2)
  adContainer2.appendChild(adContainer3)
  adContainer2.appendChild(adContainer4)
  adContainer4.appendChild(adSpendBox)
  adContainer4.appendChild(impressionsBox)
  adContainer3.appendChild(adImg)
  adContainer4.appendChild(creationDateBox)
  adContainer4.appendChild(interestsBox)
}
