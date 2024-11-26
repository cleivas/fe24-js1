// Mouseenter/mouseleave #1
const h1 = document.querySelector('h1');
const popupEl = document.querySelector('#popup');

h1.addEventListener('mouseenter', ()=>{
    popupEl.classList.remove('hidden');
})
h1.addEventListener('mouseleave', ()=>{
    popupEl.classList.add('hidden');
})

// Form #2 - lägg till lista
const listForm = document.getElementById('listForm');
listForm.addEventListener('submit',  event =>{
    event.preventDefault();

    // Hämta värdena från inputsen
    const listItemText = document.querySelector('#listText').value;
    const nmbrOfItems = document.querySelector('#listNumber').value;

    // console.log(listItemText, nmbrOfItems);
    const ol = document.createElement('ol');
    document.querySelector('#listContainer').append(ol);

    // Skapa lika många li-element som värdet av nmbrOfItems
    for(let i=0; i<nmbrOfItems; i++ ){
        const li = document.createElement('li');
        li.innerText = listItemText;
        ol.append(li);
    }
})

// Random och event #6
const colors = ['hotpink', 'skyblue', 'violet', 'lightgreen', 'orange', 'red'];

const colorBtn = document.querySelector('#randomColor>button');

colorBtn.addEventListener('click', ()=>{
    const randomIndex = Math.floor(Math.random() *colors.length);
    const color  = colors[randomIndex]

    console.log(color);

    document.querySelector('#randomColor>h1').innerText = color;
})