window.onload = setupDom;

function setupDom(){
 
  
  var graphic = document.getElementsByClassName('the_machine')[0];
  
  var graphicDoc = graphic.contentDocument;
  
  // get the object for greensock to target
  var droplet = graphicDoc.getElementById("droplet");
  var fHanlde = graphicDoc.getElementById("faucet_x5F_handle");
    
  // TweenMax.to(fHandle, 1, {
 //  skewX:300
 //  });
  TweenMax.to(droplet, 1, {
   y: 320,
    x:20,
   ease: Power1.easeInOut,

   repeat: 10,
   onComplete: console.log("complete"),

  });
  
  
  //            variable, time, {what to do}
  // arm animation
  // TweenMax.from(wheel, .7, {transformOrigin: '100% 100%', rotation: 45});
  // TweenMax.to(wheel, .5, {transformOrigin: '50% 50%', scale:1.2, delay:.9});
  TweenMax.from(wheel, 1, {rotation:-30, scale:1, transformOrigin:"200px 200px"});
  // car animation
  TweenMax.from(car, 1, {x: 200});
}