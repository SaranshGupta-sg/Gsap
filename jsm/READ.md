useGsap(() => {
    gsap.to('#blue-box', {
        x: 250, // starting se kaha tk jana h 
        repeat: -1, // animation happens continuosly without reloading
        yoyo: true, // for back and forth, start se end tk aaya aur fr reverse 
        rotation: 360, // rotate karega pura 360 degree
        duration: 2, // 2 seconds - move slower
        ease: 'elastic', // ease is how animation happpen in this elastic means spring
    })
}, [])


useGsap(() => {
    gsap.from('#green-box', {
        x: 250, // starting se kaha tk jana h 
        repeat: -1, // animation happens continuosly without reloading
        yoyo: true, // for back and forth, start se end tk aaya aur fr reverse 
        rotation: 360, // rotate karega pura 360 degree
        duration: 2, // 2 seconds - move slower
        ease: 'power1.inOut', // ease is how animation happpen in this power1.inOut which start with lot of power and then slows down
    })
}, [])



// fromTo - add 2 objects for two properties
useGsap(() => {
    gsap.fromTo('#red-box', {
        x: 0,
        rotation: 0,
        borderRadius: '0%', //remain square
    }, {
        x: 250, // starting se kaha tk jana h 
        repeat: -1, // animation happens continuosly without reloading
        yoyo: true, // for back and forth, start se end tk aaya aur fr reverse. move left and right
        rotation: 360, // rotate karega pura 360 degree
        duration: 2, // 2 seconds - move slower
        ease: 'bounce.out',
        borderRadius: '100%',  // becomes circle
    })
}, []) 
// it will turn from square to circle using borderRadius and then comes back



const timeline = gsap.timeline({
    repeat: -1, repeatDelay: 1, yoyo: true
});

useGSAP(() => {
    timeline.to('#yellow-box', {
        x: 250,
        rotation: 360,
        borderRadius: '100%',
        duration: 2,
        ease: 'back.inOut',
    })

    timeline.to('#yellow-box', {
        y: 250,
        scale: 2,
        rotation: 360,
        borderRadius: '100%',
        duration: 2,
        ease: 'back.inOut',
    })

    timeline.to('#yellow-box', {
        x: 500,
        scale: 1,
        rotation: 360,
        borderRadius: '8px',
        duration: 2,
        ease: 'back.inOut',
    })
}, [])

onClick={() => {
    if(timeline.paused()) {
        timeline.play()
    } else{
        timeline.pause();
    }
 }}>Play/Pause



 useGSAP(() => {
    gsap.to('.stagger-box', {
        y: 250,
        rotation: 360,
        borderRadius: '100%',
        repeat: -1,
        yoyo: true,
        // stagger: 0.5, // help to animate all the div one by one
        stagger: {     // we can make stagger an object to add more properties
          amount: 1.5,  // take time to animate between div
          grid: [2, 1],  // it selects the rows and columns in a grid
          axis: 'y',  // choose along which to stagger the animation
          ease: 'circ.inOut',
          from: 'center',   //starting position of the staggered animation
        }
    })
 }, [])



 gsap.registerPlugin(ScrollTrigger)

 const GsapScrollTrigger = () => {
    const scrollRef = useRef();

    useGSAP
 }