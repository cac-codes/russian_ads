var advertContainerGreatGrandad = document.querySelector(".advert-container")
var whitePrideLink = document.querySelector('.white-pride .demographic a')
var blackPrideLink = document.querySelector('.black-pride .demographic a')
var antiMuslim = document.querySelector('.anti-muslim .demographic a')
var hispanic = document.querySelector('.hispanic .demographic a')
var lgbtq = document.querySelector('.lgbtq .demographic a')
var firstNation = document.querySelector('.first-nation .demographic a')
var rightWing = document.querySelector('.far-right .demographic a')
var muslims = document.querySelector('.muslims .demographic a')
var incarcerated = document.querySelector('.incarcerated .demographic a')
var libertarians = document.querySelector('.libertarians .demographic a')
var veterans = document.querySelector('.veterans .demographic a')
var christians = document.querySelector('.christians .demographic a')
var gunOwners = document.querySelector('.gun-owners .demographic a')
var policeOfficers = document.querySelector('.police-officers .demographic a')

whitePrideLink.addEventListener('click', (event) => {
    event.preventDefault()
    advertContainerGreatGrandad.innerHTML = "";

    axios.get('/api/whitePride').then(res => {
        for(let i = 0; i < res.data.length; i++){
            createAdverts(res.data[i][1], i)
        }
    })
})

blackPrideLink.addEventListener('click', (event) => {
    event.preventDefault()
    advertContainerGreatGrandad.innerHTML = "";

    axios.get('/api/blackPride').then(res => {
        for(let i = 0; i < res.data.length; i++){
            createAdverts(res.data[i][1], i)
        }
    })
})

antiMuslim.addEventListener('click', (event) => {
    event.preventDefault()
    advertContainerGreatGrandad.innerHTML = "";

    axios.get('/api/antiMuslim').then(res => {
        for(let i = 0; i < res.data.length; i++){
            createAdverts(res.data[i][1], i)
        }
    })
})

hispanic.addEventListener('click', (event) => {
    event.preventDefault()
    advertContainerGreatGrandad.innerHTML = "";

    axios.get('/api/hispanics').then(res => {
        for(let i = 0; i < res.data.length; i++){
            createAdverts(res.data[i][1], i)
        }
    })
})

lgbtq.addEventListener('click', (event) => {
    event.preventDefault()
    advertContainerGreatGrandad.innerHTML = "";

    axios.get('/api/lgbtq').then(res => {
        for(let i = 0; i < res.data.length; i++){
            createAdverts(res.data[i][1], i)
        }
    })
})

firstNation.addEventListener('click', (event) => {
    event.preventDefault()
    advertContainerGreatGrandad.innerHTML = "";

    axios.get('/api/firstNations').then(res => {
        for(let i = 0; i < res.data.length; i++){
            createAdverts(res.data[i][1], i)
        }
    })
})

rightWing.addEventListener('click', (event) => {
    event.preventDefault()
    advertContainerGreatGrandad.innerHTML = "";

    axios.get('/api/rightWing').then(res => {
        for(let i = 0; i < res.data.length; i++){
            createAdverts(res.data[i][1], i)
        }
    })
})

muslims.addEventListener('click', (event) => {
    event.preventDefault()
    advertContainerGreatGrandad.innerHTML = "";

    axios.get('/api/muslims').then(res => {
        for(let i = 0; i < res.data.length; i++){
            createAdverts(res.data[i][1], i)
        }
    })
})

incarcerated.addEventListener('click', (event) => {
    event.preventDefault()
    advertContainerGreatGrandad.innerHTML = "";

    axios.get('/api/incarcerated').then(res => {
        for(let i = 0; i < res.data.length; i++){
            createAdverts(res.data[i][1], i)
        }
    })
})

libertarians.addEventListener('click', (event) => {
    event.preventDefault()
    advertContainerGreatGrandad.innerHTML = "";

    axios.get('/api/libertarians').then(res => {
        for(let i = 0; i < res.data.length; i++){
            createAdverts(res.data[i][1], i)
        }
    })
})

veterans.addEventListener('click', (event) => {
    event.preventDefault()
    advertContainerGreatGrandad.innerHTML = "";

    axios.get('/api/veterans').then(res => {
        for(let i = 0; i < res.data.length; i++){
            createAdverts(res.data[i][1], i)
        }
    })
})

christians.addEventListener('click', (event) => {
    event.preventDefault()
    advertContainerGreatGrandad.innerHTML = "";

    axios.get('/api/christians').then(res => {
        for(let i = 0; i < res.data.length; i++){
            createAdverts(res.data[i][1], i)
        }
    })
})

gunOwners.addEventListener('click', (event) => {
    event.preventDefault()
    advertContainerGreatGrandad.innerHTML = "";

    axios.get('/api/gunOwners').then(res => {
        for(let i = 0; i < res.data.length; i++){
            createAdverts(res.data[i][1], i)
        }
    })
})

policeOfficers.addEventListener('click', (event) => {
    event.preventDefault()
    advertContainerGreatGrandad.innerHTML = "";

    axios.get('/api/policeOfficers').then(res => {
        for(let i = 0; i < res.data.length; i++){
            createAdverts(res.data[i][1], i)
        }
    })
})



