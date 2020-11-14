const express = require('express');
const app = express();
const axios = require('axios')

const {adsWithState} = require("./adsWithState.js")
app.use(express.static('public'))

app.get('/api/ads/:state/:profile', (req, res) => {
    var array = [];
    var blackPower = ["Understanding racial segregation in the united states",
    "American Black Film Festival",
    "Cop Block",
    "HuffPost Black Voices", "Pan-Africanism", "Black Panther Party", "Black panther", "Black (Color)"];

    let data = Object.entries(adsWithState)
    for (let i = 0; i < data.length; i++){
        const isState = data[i][1].state
        const profile = req.params.profile
        if (isState && isState === req.params.state) {
            array.push(data[i])
        }
    }
    // console.log(array[0][1])
    var newArray = []
    array.forEach(ad => {
        if(ad[1].interests != null){
            blackPower.forEach(interest => {
                if(ad[1].interests.includes(interest)){
                    if(!newArray.includes(ad)){
                    newArray.push(ad)}
                }

            })
        }})
    res.send(newArray.flat())
})

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
