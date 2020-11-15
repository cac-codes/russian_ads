

function displayAdverts(response) {
  
  for (var i = 0; i < 10; i++) {
    var number = Math.floor(Math.random()*3110)
    while (number%2 == 0) {
      number = Math.floor(Math.random()*3110)
    }
    if (number%2 ==!0 && response.data[number].image != null) {
      
      img_url = response.data[number].image
      let img = document.createElement("img")
      img.src = img_url
      img.classList.add("advert")
      img.classList.add("advert:hover")
      
      
      
      adContainer1 = document.createElement("div")
      adContainer1.classList.add("flip-card")
      adContainer2 = document.createElement("div")
      adContainer2.classList.add("flip-card-inner")
      img.addEventListener('click', function() {
        adContainer2.classList.toggle('is-flipped');
      });
      adContainer3 = document.createElement("div")
      adContainer3.classList.add("flip-card-front")
      adContainer4 = document.createElement("div")
      adContainer4.classList.add("flip-card-back")
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
