const tl = gsap.timeline()

  tl.to(".fleftelm",{
    scrollTrigger:{
        trigger:"#fimages",
        pin:true,
        start: "top top",
        end: "bottom bottom",
        endTrigger: ".last",
        scrub:1
    },
    y:"-300%",
    ease: Power1
  })


  Shery.mouseFollower({
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: .3,
  });

  // nav 

  Shery.textAnimate(".nav a", {
    style: 2,
    y: 30,
    delay: 0.4,
    duration: 3,
    multiplier: 0.2,
  });

  // page1 h1

  Shery.textAnimate(".homemain h1", {
    style: 1,
    y: -30,
  });

// magnet

  Shery.makeMagnet(".magnet" , {
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
 


  // zooomer

  Shery.imageMasker(".slide img", {
    mouseFollower: true,
    text: "Rohit",
  });

  // hover image

  Shery.hoverWithMediaCircle(".heading h1" , {
    images: ["https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2VifGVufDB8fDB8fHww", "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGFwcHxlbnwwfHwwfHx8MA%3D%3D", "https://images.unsplash.com/photo-1677342073477-3cb56e6201af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwMHxDRHd1d1hKQWJFd3x8ZW58MHx8fHx8"] ,
  });

