var path = `M 10 100 Q 500 100 990 100`

var finalPath = `M 10 100 Q 500 100 990 100`

var string = document.querySelector('#string')

string.addEventListener('mousemove', function(dets){
    path = `M 10 100 Q ${dets.x} ${dets.y} 990 100`

    gsap.to("svg path", {
        attr:{d:path}, //attributes
        duration:0.2,
        ease:"power3.out",
    })
})

string.addEventListener('mouseleave', function(){
    gsap.to("svg path", {
        attr:{d:finalPath}, //attributes
        duration:1.5,
        ease:"elastic.out(1,0.2)",
    })
})

// ${ } is called a template literal for string interpolation.

// isme gsap easing ka use hoga jo ye bataega ki jb aap initial se final position pr jaoge to uski speed kitni hogi
// ease:"power3.out",