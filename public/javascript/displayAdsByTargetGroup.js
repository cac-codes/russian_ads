var whitePrideLink = document.querySelector('.white-pride .demographic a')
var advertContainerGreatGrandad = document.querySelector(".advert-container")

whitePrideLink.addEventListener('click', (event) => {
    event.preventDefault()
    
    advertContainerGreatGrandad.innerHTML = "";

    axios.get('/api/whiteNationalist').then(res => {
        console.log(res.data.length)
        for(let index = 0; index > res.data.length; index++){
            if (index%2 ==!0 && response.data[index].image != null) {
                
                img_url = response.data[index].image
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
                adContainer4.textContent = "back"
        
                advertContainerGreatGrandad = document.querySelector(".advert-container")
                
                advertContainerGreatGrandad.appendChild(adContainer1)
                adContainer1.appendChild(adContainer2)
                adContainer2.appendChild(adContainer3)
                adContainer2.appendChild(adContainer4)
                adContainer3.appendChild(img)
            }    
                
        
            
            }
        }
        }
    })

    console.log('helloo')

})