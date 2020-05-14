function splitScroll(){
    const controller = new ScrollMagic.Controller();
    // console.log(controller);


    new ScrollMagic.Scene(
        {
            duration:'200%',
            triggerElement:'.about-title',
            triggerHook: 0
        }
    )
    .setPin('.about-title')
    // .addIndicators()
    .addTo(controller);
}

splitScroll();