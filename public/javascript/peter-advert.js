
var card = document.querySelector('.card');
card.addEventListener('click', function() {
  card.classList.toggle('is-flipped');
});



function displayAdverts(response) {

  for (var i = 0; i < 100; i++) {
    var number = Math.floor(Math.random()*20)
    while (number%2 == 0) {
      number = Math.floor(Math.random()*20)
    }
   
    if (number%2 ==!0 && response.data[number].image != null) {
      
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
      adContainer4.textContent = "back"
      console.log(adContainer4)

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
