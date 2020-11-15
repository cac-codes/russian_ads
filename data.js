var fs = require("fs")

fs.readFile("data.json", function (error, content){
    
    var allAdsWithState = {}

    var stateData = JSON.parse(content)
   
    var counter = 0

    stateData.data.forEach( ad => {
        if(ad.location_living != null){
            if(ad.location_living[0].state != undefined){
            // console.log(ad.location_living)
            counter++;
            var id = ad.ad_id
            allAdsWithState[id] = 
            {
                state: ad.location_living[0].state,
                city: ad.location_living[0].city,
                image: ad.cropped_image,
                ad_spend: ad.ad_spend,
                impressions: ad.impressions,
                interests: ad.interests,
                interests_also_match: ad.interests_also_match
            }
            console.log(ad.location_living[0].state)
            }
        } else if(ad.location != null){
            if(ad.location[0].state != undefined){
            console.log(ad.location[0].state)
            var id = ad.ad_id
            allAdsWithState[id] = 
            {
                state: ad.location[0].state,
                city: ad.location[0].city,
                image: ad.cropped_image,
                ad_spend: ad.ad_spend,
                impressions: ad.impressions,
                interests: ad.interests,
                interests_also_match: ad.interests_also_match
            }
        }}

    });
    console.log(allAdsWithState)
    fs.writeFileSync("allAdsWithState.js", JSON.stringify(allAdsWithState))
})