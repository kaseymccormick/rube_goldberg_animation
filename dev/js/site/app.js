window.onload = setupDom;

function setupDom(){
 
  
  var graphic = document.getElementsByClassName('the_machine')[0];
  
  var graphicDoc = graphic.contentDocument;
  
  // get the object for greensock to target
  var fHandle = graphicDoc.getElementById("faucet_x5F_handle");
  var droplet = graphicDoc.getElementById("droplet");
  
  var burner = graphicDoc.getElementById("ovenburner");
  var steam = graphicDoc.getElementById("");
  
  var parachute = graphicDoc.getElementById("parachute");
  
    console.log(burner)
  
  //------------------------------------------
  //    Animations
  //--------------------------------------------
  //handle and water droplet change repeats to -1
  TweenMax.to(fHandle, 5, { repeat: 10, rotationY: 360, transformOrigin: "50% 50%", onComplete: console.log("Handle moved") }); 
  TweenMax.to(droplet, 1.5, { delay:2, y: 320, x:20, ease: Power1.easeInOut, repeat: 10, onComplete: console.log("complete") });
  TweenMax.to(droplet, 3, {fill:"blue"})
  //burner and steam
  // TweenMax.to(burner,1,{opacity:1});
  
  //parachute
  TweenMax.to(parachute, 10, { y: -220, x:260, ease: Power1.easeInOut, repeat: 10, onComplete: console.log("complete") });
  
  
  //            variable, time, {what to do}
  // arm animation
  // TweenMax.from(wheel, .7, {transformOrigin: '100% 100%', rotation: 45});
  // TweenMax.to(wheel, .5, {transformOrigin: '50% 50%', scale:1.2, delay:.9});
  // TweenMax.from(wheel, 1, {rotation:-30, scale:1, transformOrigin:"200px 200px"});
 //  // car animation
 //  TweenMax.from(car, 1, {x: 200});
}