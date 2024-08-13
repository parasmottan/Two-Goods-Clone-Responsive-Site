function locomotiveAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });






  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();



}

locomotiveAnimation();

function NavBarAnimation() {
  gsap.to("#nav-part1 svg", {

    transform: "translateY(-100%)",

    scrollTrigger: {
      trigger: "#page1",
      scroller: "#main",
      start: "top 0 ",
      end: "top -5%",
      scrub: 2,

    }

  })

  gsap.to("#nav-part2 #links", {

    transform: "translateY(-100%)",
    opacity: 0,
    scrollTrigger: {
      trigger: "#page1",
      scroller: "#main",
      start: "top 0 ",
      end: "top -5%",
      scrub: 2,

    }

  })
}

NavBarAnimation();




function videoofbg() {

  var videocon = document.querySelector("#video-container");



  var playbtn = document.querySelector("#play");


  videocon.addEventListener("mouseenter", function () {
    gsap.to(playbtn, {
      scale: 1,
      opacity: 1,



    })
  })


  videocon.addEventListener("mouseleave", function () {
    gsap.to(playbtn, {
      scale: 0,
      opacity: 0,



    })
  })


  videocon.addEventListener("mousemove", function (dets) {

    gsap.to(playbtn, {
      left: dets.x - 70,
      top: dets.y - 80,


    })


  })

}

videoofbg();


function headloading() {
  gsap.from("#page1 h1", {
    y: 100,
    opacity: 0,
    delay: 0.5,
    duration: 0.9,
    stagger: 0.3

  })
  gsap.from("#page1 #video-container", {
    scale: 0.5,
    opacity: 0,
    delay: 1.3,
    duration: 0.4,
    // stagger:0.3

  })
};


headloading();




function cursorAnimation() {
  document.addEventListener("mousemove", function (dets) {

    gsap.to("#cursor", {
      left: dets.x,
      top: dets.y,
    })
  })


  document.querySelector("#child1").addEventListener("mouseenter", function () {

    gsap.to("#cursor", {
      transform: 'translate(-50%, -50%) scale(1)',

    })

  })

  document.querySelector("#child1").addEventListener("mouseleave", function () {

    gsap.to("#cursor", {
      transform: 'translate(-50%, -50%) scale(0)',

    })

  })

  document.querySelector("#child2").addEventListener("mouseenter", function () {

    gsap.to("#cursor", {
      transform: 'translate(-50%, -50%) scale(1)',

    })

  })

  document.querySelector("#child2").addEventListener("mouseleave", function () {

    gsap.to("#cursor", {
      transform: 'translate(-50%, -50%) scale(0)',

    })

  })

  document.querySelector("#child3").addEventListener("mouseenter", function () {

    gsap.to("#cursor", {
      transform: 'translate(-50%, -50%) scale(1)',

    })

  })

  document.querySelector("#child3").addEventListener("mouseleave", function () {

    gsap.to("#cursor", {
      transform: 'translate(-50%, -50%) scale(0)',

    })

  })

  document.querySelector("#child4").addEventListener("mouseenter", function () {

    gsap.to("#cursor", {
      transform: 'translate(-50%, -50%) scale(1)',

    })

  })

  document.querySelector("#child4").addEventListener("mouseleave", function () {

    gsap.to("#cursor", {
      transform: 'translate(-50%, -50%) scale(0)',

    })

  })
};


cursorAnimation();




gsap.from(".child img", {
  transform: "translateY(20%)",
  // delay: 4,
  duration: 3,
  opacity: 0,
  stagger: 2,
  scrollTrigger: {
    trigger: "#page3",
    scroller: "#main",
    start: "top 200%",
    end: "top -5%",
    markers: true,
    scrub: 2,
  }
});


gsap.from("#nav", {
  opacity: 0,
  transform: "translateY(-50%)",
  duration:1,
scrub:2,



})




let timeline = gsap.timeline({ paused: true, reversed: true });

let Menu = document.querySelector("#nav-part2 #icons #NEWPG");

timeline.to("#onclickpage", {
  top: 0,
  duration: 0.3,
});

timeline.from("#onclickpage #Onclickcomponents a", {
  opacity: 0,
  transform: "translateY(20%)",
  duration: 0.11,
  stagger: 0.11,
});

timeline.to("#icons", {
  backgroundColor: "transparent",
  duration: 0,
  
},"-=2")

timeline.to("#icons i", {
  backgroundColor: "transparent",
  duration: 0.1,
  color: "white"
})

timeline.to("#nav-part2 #links a", {
  // backgroundColor: "transparent",
  duration: 0.1,
  color: "white"
},"-=2")

timeline.to("#nav-part1 #twogood", {
  // backgroundColor: "transparent",
  duration: 0.1,
  color: "white"
},"-=2")

Menu.addEventListener("click", function () {
  if (timeline.reversed()) {
    timeline.play();
  } else {
    timeline.reverse();
  }
});