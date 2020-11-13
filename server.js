const express = require('express');
const app = express();
const axios = require('axios')

app.use(express.static('views'))

app.get('/api/ads/:state', (req, res) => {
    var adsByState = {}
    axios.get('http://45.33.3.76/api/ads').then(apiRes =>{
        apiRes.data.data.forEach(ad => {
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
})


app.listen(4567, () => {
    console.log('listening on port 4567')
});
