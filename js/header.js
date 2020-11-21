document.addEventListener("mousemove" , parallax); 
function parallax(e){
    this.querySelectorAll('.layerhand').forEach(layerhand => {
    const speed = layerhand.getAttribute("data-speed")
    const x = (window.innerWidth - e.pageX*speed)/100
    const y = (window.innerWidth - e.pageY*speed)/100

    layerhand.style.transform = `translateX(${x}px) translateY(${y}px) rotate(-30deg)`
})
}
