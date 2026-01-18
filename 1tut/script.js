// gsap.
// gsap.to("#box1", {
//     x:1000,
//     duration:2,
//     delay:1, //hamara element 1 second khatam hone k baad shuru hoga fir jitna duration h utni der chalega

//     rotate: 360,
    
//     backgroundColor: "#fff", //apn css me ese likhte background-color lekin isme apn camelCase ka use krte hai "-c" ko hata k "C" ko likhenge direct fir box crimson se rotate hoga 360 and after reaching the destination it turns out to be "#fff" , aur strings ko "" me likhna hamesha

//     borderRadius: "50%",
    
//     scale: 0.5, //small size
//     scale: 2, // large size
//     scale: 1, //same size

// })

// gsap.to("#box2", {
//     x:500,
//     y:500,
//     duration:2,
//     delay:1
// })

// .to -> goes left to right
// .from -> goes right to left 

// gsap.from("#box2", {
//     x:500,
//     duration:2,
//     delay:1
// })

gsap.from("h1", {
    opacity:0,
    // color: "red", //color red se white hoga
    duration: 2,
    y:30,
    delay:1,
    //ese to sare h1 ek sath hi kaam karenge lekin apn chahte h ki ek-ek krke kaam kre to stagger ka use hota hai
    // stagger: 0.5, // isme to pehle 1 aaega fir 2 fir 3
    stagger: -0.5, // isme ulta hoga pehle 3 aaega fir 2 fir 1 

}) 