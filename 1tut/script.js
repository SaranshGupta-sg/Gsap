// gsap.
// gsap.to("#box1", {
//     x:1000,
//     duration:2,
//     delay:1, //hamara element 1 second khatam hone k baad shuru hoga fir jitna duration h utni der chalega

//     rotate: 360,
    
//     backgroundColor: "#fff", //apn css me ese likhte background-color lekin isme apn camelCase ka use krte hai "-c" ko hata k "C" ko likhenge direct fir box crimson se rotate hoga 360 and after reaching the destination it turns out to be "#fff" , aur strings ko "" me likhna hamesha

//     // borderRadius: "50%", // isme wo square se circle bn jaega
    
//     // scale: 0.5, //small size
//     // scale: 2, // large size
//     // scale: 1, //same size
    
//     // repeat: 1, //ab wo box 2 baar chalega ek baar to automatically chlta aur dusri baar repeat ki vajah se chalega
//     // repeat: -1, //agar -1 value de denge to wo infinitly chlta hi rahega rukega nahi

//     // ab repeat me to kya h box left se right ja raha h repeatedly lekin isko pehle left se right and thne right to left ese chalana hai to yoyo ka use karenge lekin yoyo use krne k liye repeat property jaror likhna
//     // yoyo: true,
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

// gsap.from("h1", {
//     opacity:0,
//     // color: "red", //color red se white hoga
//     duration: 2,
//     y:30, //niche se uppar 
//     delay:1,
//     //ese to sare h1 ek sath hi kaam karenge lekin apn chahte h ki ek-ek krke kaam kre to stagger ka use hota hai
//     // stagger: 0.5, // isme to pehle 1 aaega fir 2 fir 3
//     stagger: -0.5, // isme ulta hoga pehle 3 aaega fir 2 fir 1 

// }) 





// isme 3 box banaenge aur timeline samjhenge
// gsap.to("#box1", {
//     x:1500,
//     rotate: 360,
//     duration:1.5,
//     delay:1, 
// })
// ab apn isme ye chahte h ki pehle first wala box chale fir dusra wala fir tisra wala to delay uske hisab se dena hoga
// box1 = 1.5 + 1 = 2.5 to next box2 ka delay = 2.5
// gsap.to("#box2", {
//     x:1500,
//     duration:1.5,
//     delay: 2.5, 
// })
// box2 = 2.5 + 1.5 = 4 to next box3 ka delay = 4
// gsap.to("#box3", {
//     x:1500,
//     duration:1.5,
//     delay: 4, 
// })
// ab isme baar baar thodi na calculate krne bethenge islie apan timeline ka use karenge 

// var tl = gsap.timeline()

// tl.to("#box1", {
//     x:1500,
//     duration:1.5,
//     delay: 1, 
// })
// ab delay dene ki jarorat nahi wo ab async me hi chalega
// tl.to("#box2", {
//     x:1500,
//     duration:1.5, 
// })
// tl.to("#box3", {
//     x:1500,
//     duration:1.5, 
// })

// ab timeline ka use nav me karenge

var nav = gsap.timeline()

nav.from("h2", {
    y:-30,//ab ye uppr se niche aaega minus me
    opacity: 0,
    duration:1,
    delay: 0.5,
})

nav.from("h4", {
    y:-30,
    opacity: 0,
    duration:1,
    stagger: 0.5,
})

nav.from("h1", {
    y:20,
    opacity: 0,
    duration: 0.5,
    scale: 0.2,
})