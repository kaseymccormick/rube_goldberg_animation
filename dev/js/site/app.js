window.onload = function (){


var graphic = document.getElementsByClassName('the_machine')[0];
    graphicDoc = graphic.contentDocument;

    // get the object for greensock to target
    fHandle = graphicDoc.getElementById("faucet_x5F_handle");
    droplet = graphicDoc.getElementById("droplet");

    burner = graphicDoc.getElementById("ovenburner");
    steam = graphicDoc.getElementById("steam_x5F_cloud");

    parachute = graphicDoc.getElementById("parachute");
    bsGear = graphicDoc.getElementById("bsgear")
    
    bookOne = graphicDoc.getElementById("bookone")
    bookTwo = graphicDoc.getElementById("booktwo")
    
    bowlingPin = graphicDoc.getElementById("bowling_pin")
    
    magnet = graphicDoc.getElementById("magnet")
    
    hook =graphicDoc.getElementById("hook")
    bag = graphicDoc.getElementById("bag")
    
    bball = graphicDoc.getElementById("ball")
    fJacks = graphicDoc.querySelectorAll("#jacks")
    sJacks = graphicDoc.querySelectorAll("#morej")
    tJacks = graphicDoc.querySelectorAll("#lastj")
    
  //------------------------------------------
  //    Animations
  //--------------------------------------------
  //handle and water droplet change repeats to -1
    TweenLite.to(bag, 1, {y:-440});
    TweenLite.to(hook, 1, {y:-440});

    
  TweenMax.to(fHandle, 5, { repeat: 10, rotationY: 360, transformOrigin: "50% 50%", onComplete: console.log("Handle moved") });
  TweenMax.to(droplet, 1.5, { delay:5, y: 320, x:20, ease: Power1.easeInOut, repeat: 10, fill:"blue", onComplete: console.log("complete") });

  
  
  TweenMax.to(magnet, 1, {repeat:10, x:5})
 //burner and steam
  TweenMax.to(burner, 3, {delay:6,repeat:3, fill:"red", yoyo: true, onComplete: startParachute});
  
  TweenMax.to(bowlingPin, 1,{rotation:3, transoformOrigin: "100% 100%"});
}
function startParachute(){
  // //parachute\    delay:15,
  TweenMax.to(parachute, 10, {  y: -208, x:245, ease: Power1.easeInOut, onComplete: startGear });
 }  
  // TweenMax.from(bsGear, 5, {rotation:-360, transformOrigin:"50% 50%", x:60});
  
  //            variable, time, {what to do}
  // arm animation
  // TweenMax.from(wheel, .7, {transformOrigin: '100% 100%', rotation: 45});
  // TweenMax.to(wheel, .5, {transformOrigin: '50% 50%', scale:1.2, delay:.9});
  // TweenMax.from(wheel, 1, {rotation:-30, scale:1, transformOrigin:"200px 200px"});
 //  // car animation
 //  TweenMax.from(car, 1, {x: 200});

function startGear(){
   TweenMax.to(bsGear, 2, {rotation:360, transformOrigin:"50% 50%", x: 100, ease: Power0.easeNone,  onComplete: startBook});
}

function startBook(){
  TweenMax.to(bookOne, 2, {rotation:70, transformOrigin:"100% 100%", x: 1, ease: Power0.easeNone, onComplete: startBook2});
}

function startBook2(){
  var tl = new TimelineLite();
  tl.to(bookTwo, 2, {rotation: 55,x:-1, transformOrigin:"100% 100%"});
}

// function startPin(){
//   var tl = new TimlineMax();
//   tl.from(bowlingPin, 2,{rotation:40, transformOrigin:"100% 100%", yoyo: false });
// }
function bagLift(){
  TwweenLight.to(bag, 1, {y:-100})
}
function jacksGame(){
    TweenLite.to(bball, 2, { fill:"red", ease: Bounce.easeOut, y: 100 });
    TweenLite.to(fJacks, .5, { fill:"blue", y:100,ease: Power0.easeInOut});
    TweenLite.to(sJacks, .5, { fill:"blue", y:100, x:25, ease: Power0.easeInOut});
    TweenLite.to(tJacks, .5, { fill:"blue", y:100, x:-100, ease: Power0.easeInOut});
  }