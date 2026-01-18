// gsap.from("#page1 #box", {
//     scale: 0,
//     duration: 2,
//     delay: 1,
// })

// gsap.from("#page2 #box", {
//     scale: 0,
//     duration: 2,
//     delay: 1,
// })

// gsap.from("#page3 #box", {
//     scale: 0,
//     duration: 2,
//     delay: 1,
// })

// ab isme to kya hoga jaise user 1 page p h to waha ye chlta hua dikh gya lekin yahi apn ne 2 aur 3 page pe bhi laga rakhi h lekin apn ko thodi pata h user kb scroll krke next page p jaega kyoki ye to ek sath hi chl gaya aur apn timeline ka bhi use nahi kr skte kyoki usme bhi wahi jaise hi pehle ka time khatam dusra chl jaega islie ye bhi use nhi karenge iske lie apn scrolltrigger ka use karernge
// ScrollTrigger use krne ke liye cdnjs website p jaenge waha se script ko copy paste karenge html m

// gsap.from("#page1 #box", {
//     scale: 0,
//     duration: 2,
//     delay: 1,
// })
// // pehle me to chl hi jaega apn scrollTrigger 2page pe lagaenge
// gsap.from("#page2 #box", {
//     scale: 0,
//     duration: 2,
//     // scrollTrigger:"#page2 #box", //ye to normal ese work krta hai
//     scrollTrigger:{ //isme properties hai
//         trigger:"#page2 #box", // ye h starting ese hi likhte hai
//         scroller:"body",
//         markers:true, //iski help se start aur end mark hote hai
//         start:"top 60%", //isme kya h jaise hi user top se 60% hit kr jaega vaise hi scrollTrigger kaam krke lg jaega, properties can change
//     }
// })

// gsap.from("#page3 #box", {
//     scale: 0,
//     duration: 2,
//     delay: 1,
// })

// Part - 1 



// gsap.from("#page2 h1", {
//     opacity: 0,
//     duration: 2,
//     x: 500,
//     scrollTrigger:{
//         trigger:"#page2 h1",
//         scroller:"body",
//         markers:true,
//         start:"top 70%",
//     }
// })

// gsap.from("#page2 h2", {
//     opacity: 0,
//     duration: 2,
//     x: -500,
//     scrollTrigger:{
//         trigger:"#page2 h1",
//         scroller:"body",
//         markers:true,
//         start:"top 50%",
//     }
// })

// Part - 2

gsap.from("#page2 #box", {
    scale: 0,
    opacity: 0,
    duration: 1,
    rotate:720,
    scrollTrigger: {
        trigger:"#page2 #box",
        scroller:"body",
        markers:true,
        start:"top 60%",
        end:"top 30%", //ab isme to kya hua ek baar chl gaya fr kitna bhi scroll karo upar ya niche kuch nahi hoga lekin apn kya chah rahe h ki jaise jaise scroll ho animation work kare islie apn scrub ka use karenge
        scrub: true, // iska mtlb start aur end k bich me animation hoga 
    } 
})