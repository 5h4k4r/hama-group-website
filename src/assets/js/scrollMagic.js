setTimeout(() => {

  var controller = new ScrollMagic.Controller();


  new ScrollMagic.Scene({
    triggerElement: ".about-section",
    triggerHook: "onLeave",
    duration: "300%"
  })
    .setPin(".about-section")
    .addTo(controller);
}, 1000);
