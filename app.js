// init scrollmagic controller
var controller = new ScrollMagic.Controller();

// Create two tween animations for animating
// the navbar entrance and exit

var navTweenFrom = TweenMax.from('.nav', 1, {
  y: -100,
  stagger: 0.2
}, 0.25);

var navTweenTo = TweenMax.to('.nav', 1, {
  y: -100,
  stagger: 0.2
}, 0.25);

// Create two scenes to handle where the animations
// will happen in relation to scroll position

var scene1 = new ScrollMagic.Scene({
    triggerElement: '.nav-bar',
    triggerHook: 0.1
})
  .setTween(navTweenFrom)
  .addIndicators()
  .addTo(controller);

var scene2 = new ScrollMagic.Scene({
  triggerElement: '.welcome',
  triggerHook: 0.1
})
  .setTween(navTweenTo)
  .addIndicators()
  .addTo(controller);