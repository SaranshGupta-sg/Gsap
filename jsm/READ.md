









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