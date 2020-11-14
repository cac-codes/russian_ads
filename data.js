var fs = require("fs")



// fs.readFile("data.json", function (error, content){
//     var stateData = JSON.parse(content)
//     console.log(stateData.data[2].location_living[0].state)
// })


// var data = JSON.parse(fs.readFileSync(filePath));


fs.readFile("data.json", function (error, content){
    
    var allAdsWithState = {}

    var stateData = JSON.parse(content)

    // console.log(stateData.data[5].location_living == null)

    // console.log(stateData.data[7])
   
    var counter = 0

    stateData.data.forEach( ad => {
        if(ad.location_living != null){
            if(ad.location_living[0].state != undefined)
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
        }
    });
    console.log(allAdsWithState)
    fs.writeFileSync("adsWithState.js", JSON.stringify(allAdsWithState))
})

