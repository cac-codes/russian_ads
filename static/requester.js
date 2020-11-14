
// Use express for routing 
// 

// specify state and return all ads for that state
// use axios to make the request 
// use axios link put inside index.html
// need to make cross domain request

// We can download the code and host server ourselves and chagne the rules but it's overkill. 
// most ppl have our own server, on that server we're proxying the request from the server to the API. The front end will make ajax request to our own server. When it gets to the server, the server will make request to the actual api. 
// change response to suit our own client. 
// npm install

console.log("it works")

const adBtn = document.querySelector("button")
const body = document.querySelector("body")
const image = document.querySelector("img")

function requestIt(event){
    event.preventDefault()

    axios
        .get("/api/ad")
        .then(res => {
        // res.data.ad_text
        console.log(res.data.data.page_0)
        image.src = res.data.data.cropped_image
    })
}

adBtn.addEventListener('click', requestIt)


