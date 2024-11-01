// Ändra innehåll övning 7

const navEl = document.querySelector('nav');
navEl.innerHTML = '<a href="#"> HOME </a>';

// ändra css-stil nummer 7

const allPEl = document.querySelectorAll('p');
console.log(allPEl)
allPEl[0].classList.add('border');
allPEl[1].classList.add('border');
allPEl[2].classList.add('border');
allPEl[3].classList.add('border');