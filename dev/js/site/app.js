window.onload = function (){


  var graphic = document.getElementsByClassName('the_machine')[0];
  graphicDoc = graphic.contentDocument;

  // get the object for greensock to target
  fHandle = graphicDoc.getElementById("faucet_x5F_handle");
  droplet = graphicDoc.getElementById("droplet");

  burner = graphicDoc.getElementById("ovenburner");
  steam = graphicDoc.getElementById("steamCloud");

  parachute = graphicDoc.getElementById("parachute");
  bsGear = graphicDoc.getElementById("bsgear")
    
  bookOne = graphicDoc.getElementById("bookone")
  bookTwo = graphicDoc.getElementById("booktwo")
    
  bPin = graphicDoc.getElementById("bowling_pin")
    
  magnet = graphicDoc.getElementById("magnet")
    
  smallGear = graphicDoc.getElementById("small_gear_pully")
  largeGear = graphicDoc.getElementById("large_gear_pully")
    
    
  hook =graphicDoc.getElementById("hook")
  bag = graphicDoc.getElementById("bag")
    
  bball = graphicDoc.getElementById("ball")
  fJacks = graphicDoc.querySelectorAll("#jacks")
  sJacks = graphicDoc.querySelectorAll("#morej")
  tJacks = graphicDoc.querySelectorAll("#lastj")
    
  chair = graphicDoc.getElementById("office_chair")
    
  dolly = graphicDoc.getElementById("dollyBox")
    
  box = graphicDoc.getElementById("box")
  boxFlap = graphicDoc.getElementById("box_flap_open")
  cursor = graphicDoc.getElementById("cursor")
    
  //------------------------------------------
  //    Animations
  //--------------------------------------------
  TweenMax.to(fHandle, 5, { onStart: startSteam, repeat: -1, rotationY: 360, transformOrigin: "50% 50%", onComplete: console.log("Handle moved") });
  TweenMax.to(droplet, 1.5, { delay:5, y: 320, x:20, ease: Power1.easeInOut, repeat: -1, fill:"blue", onComplete: console.log("complete") });


 
  TweenMax.to(burner, 3, {delay:2,repeat:-1, fill:"red", yoyo: true});
  
  // TweenMax.to(bPin, .5,{repeat:2, rotation:2, transoformOrigin: "50% 50%", skewy:45, yoyo: true,ease: Power0.easeNone});
}


function startSteam(){
  //increase repeat?
  var tl = new TimelineMax({repeat: 1, onComplete: startParachute});

  tl.to(steam, 3, { delay:3, y:-160, x:55,opacity:0, scale: 4, ease: Power1.easeInOut});

}

function startParachute(){
  TweenMax.to(parachute, 10, {  y: -208, x:245, ease: Power1.easeInOut, onComplete: startGear });
}  

function startGear(){
  TweenMax.to(bsGear, 2, {rotation:360, transformOrigin:"50% 50%", x: 100, ease: Power0.easeNone,  onComplete: startBook});
}

function startBook(){
  TweenMax.to(bookOne, 1, {rotation:70, transformOrigin:"100% 100%", x: 1, ease: Power0.easeNone, onComplete: startBook2});
}

function startBook2(){
  var tl = new TimelineLite();
  tl.to(bookTwo, 1, {rotation: 55,x:-1, transformOrigin:"100% 100%", onComplete: startPin});
}

function startPin(){
  var tl = new TimelineMax();
  tl.to(bPin, 1, { rotation:20, transformOrigin: "50% 100%"})
  .to(bookTwo, .2, {rotation:75, transformOrigin:"100% 100%"}, '-=0.8')
  .to(bPin, .3, { rotation:35, transformOrigin: "50% 100%", onComplete:bagLift});
}

function bagLift(){
  TweenMax.to(largeGear, 4, {rotation:360, transformOrigin:"50% 50%"})
  TweenMax.to(smallGear, 4, {rotation:-360, transformOrigin:"50% 50%"});

    
  
  
  TweenMax.to(bag, 2, {delay:.8, y:-440})
  TweenMax.to(hook, 2, {delay:.8, y:-440, onComplete: jacksGame})
  TweenMax.to(magnet, 1, {rotation:10,x:100})
  TweenMax.to(magnet, 2, {delay:1,rotation:-40,y:600})
  TweenMax.to(magnet, 1, {delay:1.5, rotation:-90});
}
  
function jacksGame(){
  TweenLite.to(bball, 6, {  ease: Bounce.easeOut, y: 500 });
  TweenLite.to(fJacks, .8, { fill:"blue", y:500,ease: Power0.easeInOut});
  TweenLite.to(sJacks, .8, { fill:"blue", y:500, x:25, ease: Power0.easeInOut});
  TweenLite.to(tJacks, .8, { fill:"blue", y:500, x:-100, ease: Power0.easeInOut, onComplete: chairMove});
}
function chairMove(){
  TweenLite.to(chair, 1, {x:-290, onStart: dollyMove});
}
  

function dollyMove(){
  var tl = new TimelineMax({ onComplete: console.log(" Dolly done")});

  tl.from(dolly, 0.5, {repeat:1 , rotation:30, transformOrigin:"50% 50%", yoyo:true, ease: Power0.easeNone,})
  .to(dolly, .5, {repeat:1 , rotation:-35, transformOrigin:"50% 50%", y:20, yoyo:true, ease: Power0.easeNone})
  .to(dolly, .5, { rotation:50, transformOrigin:"50% 50%", yoyo:true, ease: Power0.easeNone})
  .to(box, 1, {rotation:90, x:80, y:-100, transformOrigin: "50% 50%"})
  .to(boxFlap, 1, {rotation:-30,transformOrigin:"0% 100%"})
  .to(cursor,1, { rotation:180, x:60, y:60})
  .to(cursor,1, { rotation:180, y:260})
  .to(cursor,1, { rotation:280, transfomOrigin:"50% 50%"})
  .to(cursor,1, { x:-260});
  
}