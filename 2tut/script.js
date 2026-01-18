gsap.from("#page1 #box", {
    scale: 0,
    duration: 2,
    delay: 1,
})

gsap.from("#page2 #box", {
    scale: 0,
    duration: 2,
    delay: 1,
})

gsap.from("#page3 #box", {
    scale: 0,
    duration: 2,
    delay: 1,
})

// ab isme to kya hoga jaise user 1 page p h to waha ye chlta hua dikh gya lekin yahi apn ne 2 aur 3 page pe bhi laga rakhi h lekin apn ko thodi pata h user kb scroll krke next page p jaega kyoki ye to ek sath hi chl gaya aur apn timeline ka bhi use nahi kr skte kyoki usme bhi wahi jaise hi pehle ka time khatam dusra chl jaega islie ye bhi use nhi karenge iske lie apn scrolltrigger ka use karernge
// ScrollTrigger use krne ke liye cdnjs website p jaenge waha se script ko copy paste karenge html m