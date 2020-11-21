var fs = require("fs")

fs.readFile("data.json", function (error, content){
    
    var allAdsUSA = {}

    var stateData = JSON.parse(content)

    stateData.data.forEach( ad => {
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
            } 
        } else if(ad.location != null){
            if(ad.location[0].country != undefined){
            var id = ad.ad_id
            allAdsUSA[id] = 
            {
                state: ad.location[0].state,
                city: ad.location[0].city,
                image: ad.cropped_image,
                ad_spend: ad.ad_spend,
                ad_spend_currency: ad.ad_spend_currency,
                impressions: ad.impressions,
                interests: ad.interests,
                interests_also_match: ad.interests_also_match,
                likes: ad.likes,
                likes_exclude: ad.likes_exclude,
                multicultural_affinity: ad.multicultural_affinity,
                ad_creation_date: ad.ad_creation_date,
                ad_end_date: ad.ad_end_date
            } 
        }} 

    });
    // console.log(allAdsUSA)
    fs.writeFileSync("allAdsUSA.js", JSON.stringify(allAdsUSA))
})