const divs = document.querySelectorAll('div');

divs[0].addEventListener('click', event => {
    alert('Div 1')
    // console.log()
})

divs[1].addEventListener('click', event => {
    alert('Div 2')
    // console.log()
})

divs[2].addEventListener('click', event => {
    event.stopPropagation();
    alert('Div 3')
    // console.log()
})

divs[3].addEventListener('click', event => {
    alert('Div 4')
    // console.log()
})

divs[4].addEventListener('click', event => {
    alert('Div 5')
})