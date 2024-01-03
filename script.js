let timeout;

const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function circleSmallWhenMove(){
 
  let xscale = 1;
  let yscale = 1;

  let xprev = 0;
  let yprev = 0;

  window.addEventListener('mousemove', function(dets){
     clearTimeout(timeout);

    xscale = gsap.utils.clamp(.8 , 1.2,dets.clientX - xprev);
    yscale = gsap.utils.clamp(.8 , 1.2,dets.clientY - yprev);
    
    xprev = dets.clientX;
    yprev = dets.clientY;
 
    circleMoveMouse(xscale , yscale);
    
    timeout = setTimeout(()=>{
      document.querySelector("#minicircle").style.transform = `translate(${delt.clientX}px, ${delt.clientY}px) scale(1,1)`;
    },100)  
  })
}



function animationElement(){
  let tl = gsap.timeline();
  
  tl.from('#nav',{
    y: '-10',
    opacity: 0,
    duration: 1.5,
    ease:Expo.easeInOut,
  }).to('.hideBox',{
    y: '0',
    duration: 2,
    ease:Expo.easeInOut,
  })
}

function circleMoveMouse(){
  window.addEventListener("mousemove", function(delt){
    document.querySelector("#minicircle").style.transform = `translate(${delt.clientX}px, ${delt.clientY}px)`;
  })
}

document.querySelectorAll(".headingtext").forEach((elem)=>{
  let rotate = 0;
  let diffrot = 0;
    elem.addEventListener("mousemove", function(details){
      let diff = details.clientY - elem.getBoundingClientRect().top;
      diffrot = details.clientX - rotate;
      rotate = details.clientX; 
        gsap.to(elem.querySelector("img"),{
            opacity: 1,
            ease: Power3,
            top: diff,
            left: details.clientX,
            rotate: gsap.utils.clamp(-20, 20 ,diffrot)
        })      
    })

    elem.addEventListener("mouseleave", function(details){
        gsap.to(elem.querySelector("img"),{
            opacity: 0,
            ease: Power1,
        })      
    })
})

circleMoveMouse();
animationElement();
circleSmallWhenMove();