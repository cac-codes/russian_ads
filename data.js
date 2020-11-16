var fs = require("fs")

fs.readFile("data.json", function (error, content){
    
    var allAdsUSA = {}

    var stateData = JSON.parse(content)

    stateData.data.forEach( ad => {
        // console.log(ad.location)
        // console.log(ad.location_living)
        if(ad.location_living != null){
            if(ad.location_living[0].country != undefined){
            var id = ad.ad_id
            allAdsUSA[id] = 
            {
                state: ad.location_living[0].state,
                city: ad.location_living[0].city,
                image: ad.cropped_image,
                ad_spend: ad.ad_spend,
                impressions: ad.impressions,
                interests: ad.interests,
                interests_also_match: ad.interests_also_match
            }
            // console.log(ad.location_living[0].state)
            } 
        } else if(ad.location != null){
            if(ad.location[0].country != undefined){
            // console.log(ad.location[0].state)
            var id = ad.ad_id
            allAdsUSA[id] = 
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
    // console.log(allAdsUSA)
    fs.writeFileSync("allAdsUSA.js", JSON.stringify(allAdsUSA))
})