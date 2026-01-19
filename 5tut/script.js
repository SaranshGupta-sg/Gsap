var menu = document.querySelector("#nav i")
var cross = document.querySelector("#full i")

var tl = gsap.timeline()

tl.to("#full", {
    right: 0,
    duration: 0.5,
})

tl.from("#full h4", {
    x: 100,
    duration: 0.5,
    stagger: 0.2,
    opacity: 0,
})

tl.from("#full i", {
    opacity: 0,
})

// var tl = gsap.timeline(paused=true) -> pause wala apn ese bhi likh skte the lekin apn tl.pause banaenge taki apn jb chahe tb animation chale aur ruke

tl.pause()

menu.addEventListener("click", function(){
    tl.play()
})

cross.addEventListener("click", function(){
    tl.reverse()
})