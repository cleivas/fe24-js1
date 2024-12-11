const staggerAnimation = anime({
    targets: 'div',
    translateX: '80vw',
    backgroundColor: 'hsl(300, 80%, 80%)',

    delay: anime.stagger(200),
    direction: 'alternate',
    loop: true
});
//Ett objekt skapat av biblioteket
// console.log(staggerAnimation);
// staggerAnimation.pause();
// staggerAnimation.play();

const playBtn = document.querySelector("#play")
const pauseBtn = document.querySelector("#pause")

pauseBtn.addEventListener('click', staggerAnimation.pause)
playBtn.addEventListener('click', staggerAnimation.play)