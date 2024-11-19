// Top 5 rows
for(let i=0; i<5; i++){
    const rowEl = document.createElement('h1');
    rowEl.innerText = `Rad ${i+1}`;
    document.body.append(rowEl)

    // Styling
    rowEl.classList.add('row-el');
    const hue = 120+i*20; 
    const fontSize = 10+i*10;

    rowEl.style.backgroundColor = `hsl(${hue}, 90%, 85%)`;
    rowEl.style.fontSize = `${fontSize}px`; 
}

// Bottom half of page
const flexContainer = document.createElement('div');
document.body.append(flexContainer);
flexContainer.classList.add('flex-container');

// First column
const columnEl1 = document.createElement('div');
columnEl1.classList.add('column');
flexContainer.append(columnEl1)

for(let i=0; i<10; i++){
    const numberEl = document.createElement('p');
    numberEl.innerText = i;
    columnEl1.append(numberEl);

    // Set the background color
    let bgClass;
    if(i==4) bgClass = 'violet-bg';
    else if( i%2 == 0 ) bgClass = 'black-bg';
    numberEl.classList.add(bgClass);
}

// Second column
const columnEl2 = document.createElement('div');
columnEl2.classList.add('column');
flexContainer.append(columnEl2)

for(i=9; i>=0; i--){
    const numberEl = document.createElement('p');
    numberEl.innerText = i;
    columnEl2.append(numberEl);

    // Set the background color
    let bgClass;
    if(i==8) bgClass = 'violet-bg';
    else if( i%2 == 0 ) bgClass = 'black-bg';
    numberEl.classList.add(bgClass);
}

// Third column
const columnEl3 = document.createElement('div');
columnEl3.classList.add('column');
flexContainer.append(columnEl3)

const thirdColumnContent = ['ett', 'två', 'tre', 'fyra', 'fem', 'sex', 'sju', 'åtta', 'nio', 'tio'];

for(let i=0; i<thirdColumnContent.length; i++){
    const numberEl = document.createElement('p');
    numberEl.innerText = thirdColumnContent[i];
    columnEl3.append(numberEl);

    // Set the background color
    let bgClass;
    if(i==5) bgClass = 'violet-bg';
    else if( i%2 == 0 ) bgClass = 'black-bg';
    numberEl.classList.add(bgClass);
}