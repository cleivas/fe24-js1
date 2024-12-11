const animationInfo = {
    //Det som ska animeras
    targets: '#div1', //Elementet
    backgroundColor: 'hsl(330, 100%, 71%)', //css-egenskap
    borderRadius: '50%', //css-egenskap


    //Hur det ska animeras
    duration: 1000, //Animationen ska ta 1000 ms
    direction: 'alternate', //Animationen ska gå fram och tillbaka
    easing: 'easeInOutQuad', //hur snabb animationen är vid olika punkter
    loop: true, //Animationen loopar
}


anime(animationInfo); //Sätter igång animationen

// transforms
anime({
    targets: '#div2',
    rotate: '360deg',
    translate: '70vw 100vh',
    scale: '0.5',

    direction: 'alternate',
    easing: 'easeOutInBack',
    loop: true

})
