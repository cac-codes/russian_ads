const express = require('express');
const app = express();
const axios = require('axios')

const {adsWithState} = require("./adsWithState.js")
app.use(express.static('public'))

app.get('/api/ads/:state', (req, res) => {
    var array = []

    let data = Object.entries(adsWithState)
    for (let i = 0; i < data.length; i++){
        const isState = data[i][1].state
        if (isState && isState === req.params.state) {
            array.push(data[i])
        }
    }

    res.send(array.flat())

})


app.listen(4567, () => {
    console.log('listening on port 4567')
});

// module.exports = {array}
