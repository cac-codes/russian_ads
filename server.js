const express = require('express');
const app = express();
const axios = require('axios')
const adsWithState = require("./adsWithState.js")
app.use(express.static('public'))

app.get('/api/ads/:state', (req, res) => {
    var adsByState = {}
        
    adsWithState.forEach(ad => {
        let adLocation = ad.location_living
        if(adLocation != null){
            let state = adLocation[0].state
            if(state === req.params.state){
                var id = ad.ad_id
                adsByState[id] = 
                {
                    state: state,
                    city: adLocation[0].city,
                    image: ad.cropped_image,
                    ad_spend: ad.ad_spend,
                    impressions: ad.impressions,
                    interests: ad.interests_also_match,
                }
            }
        }
    })
    res.send(adsByState)
})

adsWithState



app.listen(4567, () => {
    console.log('listening on port 4567')
});
