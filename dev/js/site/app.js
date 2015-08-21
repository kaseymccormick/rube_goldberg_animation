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
  
  //------------------------------------------
  //    Animations
  //--------------------------------------------
  //handle and water droplet change repeats to -1
  TweenMax.to(fHandle, 5, { repeat: 10, rotationY: 360, transformOrigin: "50% 50%", onComplete: console.log("Handle moved") });
  TweenMax.to(droplet, 1.5, { delay:5, y: 320, x:20, ease: Power1.easeInOut, repeat: 10, fill:"blue", onComplete: console.log("complete") });
  
 //burner and steam
  TweenMax.to(burner, 3, {delay:6,repeat:3, fill:"red", yoyo: true, onComplete: startParachute});
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
  // var graphic = document.getElementsByClassName('the_machine')[0];
  //
  // var graphicDoc = graphic.contentDocument;
  // var bsGear = graphicDoc.getElementById("bsgear")
 TweenMax.to(bsGear, 2, {rotation:360, transformOrigin:"50% 50%", x: 100, ease: Power0.easeNone});
  
  
}