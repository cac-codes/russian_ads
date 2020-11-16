var getRandomAds = document.querySelector('.randomSample')
var filterByImpressions = document.querySelector('.filter-by-impressions')
var filterBySpend = document.querySelector('.filter-by-spend')

function addSortedAds(sortedAds){
    advertContainerGreatGrandad.innerHTML = "";
    sortedAds.forEach(ad => {
        advertContainerGreatGrandad.appendChild(ad)
    })
}

getRandomAds.addEventListener('click', (event)=> {
    event.preventDefault()
    advertContainerGreatGrandad.innerHTML = "";
    getAdvertRaw()
})

filterByImpressions.addEventListener('click', (event) => {
    event.preventDefault()

    var ads = document.querySelectorAll('.scene--card')
    var sortedAds = [].slice.call(ads).sort(function (a,b) {
        return  b.dataset.impressions -a.dataset.impressions
    })
    addSortedAds(sortedAds)
})

filterBySpend.addEventListener('click', (event) => {
    event.preventDefault()

    var ads = document.querySelectorAll('.scene--card')
    var sortedAds = [].slice.call(ads).sort(function (a,b) {
        return  b.dataset.spend -a.dataset.spend
    })
    addSortedAds(sortedAds)
})