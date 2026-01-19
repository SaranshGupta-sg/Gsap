function marqueAnimation() {

    // ONE animation only
    const marqueeTween = gsap.to(".marque", {
        xPercent: -100,
        repeat: -1,
        duration: 6,
        ease: "linear",
    });

    window.addEventListener("wheel", function (dets) {

        if (dets.deltaY > 0) {
            // scroll down → move left
            marqueeTween.timeScale(1);

            gsap.to(".marque i", {
                rotate: 180,
                duration: 0.3
            });

        } else {
            // scroll up → move right
            marqueeTween.timeScale(-1);

            gsap.to(".marque i", {
                rotate: 0,
                duration: 0.3
            });
        }
    });
}

marqueAnimation();


// function marqueAnimation(){
//     window.addEventListener("wheel", function (dets) {
//     // console.log("Hoo");
//     if (dets.deltaY > 0) {
//         // console.log("Seedha Scrolling");
//         gsap.to(".marque", {
//             transform: "translateX(-200%)",
//             repeat: -1,
//             duration: 4,
//             ease: "none",
//         })

//         gsap.to(".marque i", {
//             rotate:180,
//         })
//     } else {
//         // console.log("Reverse Scrolling");
//         gsap.to(".marque", {
//             transform: "translateX(0)",
//             repeat: -1,
//             duration: 4,
//             ease: "none",
//         })
//         gsap.to(".marque i", {
//             rotate:0,
//         })
//     }
// })
// }

// marqueAnimation()
