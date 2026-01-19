// function breakTheText() {
//     var h1 = document.querySelector("h1")
//     var h1Text = h1.textContent

//     // in the animation i want to break every word of Konnichiwa islie apn .split ka use karenge

//     var splittedText = h1Text.split("") // pura word ek ek array me tut jaega

//     // console.log(splittedText);
//     var clutter = ""

//     splittedText.forEach(function (e,idx) {
//         // console.log("hii");
//         clutter += `<span class="a">${e}</span>`
//     })
//     // console.log(clutter);

//     h1.innerHTML = clutter
// }

// breakTheText()

// gsap.from("h1 span", {
//     // y: 100, //ye kaam nahi karega kyoki isme laga h transform-translate:y:100 jo ki inline elements p kaam nhi karega islie apn css me jaenge aur "h1 span {display: inline-block;}" iske baad kaam karega
//     y:55,
//     opacity:0,
//     duration:0.5,
//     delay:0.5,
//     stagger:0.15,
// })

// Dubara same code liha h aadha aadha chalane animate krne k liye

function breakTheText() {
    var h1 = document.querySelector("h1")
    var h1Text = h1.textContent

    var splittedText = h1Text.split("")
    var halfValue = splittedText.length / 2

    var clutter = ""

    splittedText.forEach(function (e, idx) {
        if (idx < halfValue) {
            clutter += `<span class="a">${e}</span>`
        } else {
            clutter += `<span class="b">${e}</span>`
        }
    })

    h1.innerHTML = clutter

}

breakTheText()

gsap.from("h1 .a", {
    y: 100,
    duration: 0.5,
    delay: 0.5,
    stagger: 0.15,
})

gsap.from("h1 .b", {
    y: 100,
    opacity: 0,
    duration: 0.5,
    delay: 0.5,
    stagger: -0.15,
})