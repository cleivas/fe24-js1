// Top 5 rows
for(let i=0; i<5; i++){
    const rowEl = document.createElement('h1');
    rowEl.innerText = `Rad ${i+1}`;
    document.body.append(rowEl)

    rowEl.classList.add('row-el');
    rowEl.style.backgroundColor = `hsl(${120+i*20}, 90%, 85%)`;
    rowEl.style.fontSize = `${10+i*10}px`; 
}

// Bottom half of page
const flexContainer = document.createElement('div');
document.body.append(flexContainer);
flexContainer.classList.add('flex-container');
const thirdColumnContent = ['ett', 'två', 'tre', 'fyra', 'fem', 'sex', 'sju', 'åtta', 'nio', 'tio'];

// Create the three flex item columns
for(let i=0; i<3; i++){
    const columnEl = document.createElement('div');
    columnEl.classList.add('column');
    flexContainer.append(columnEl)

    // Create the number elements in each column
    for(let j=0; j<10; j++){
        const numberEl = document.createElement('p');
        columnEl.append(numberEl);

        // Set the text content depending on the column
        if(i==0)  numberEl.innerText = j;
        else if(i==1) numberEl.innerText = 9-j;
        else numberEl.innerText = thirdColumnContent[j];

        // Set the background color depending on the column and row
        // i is the column and j is the row
        if ( (i==0 && j==4) || (i==1 && j==1) || (i==2 && j==5) ) numberEl.classList.add('violet-bg');
        else if( ((i==0 || i==2) && j%2 == 0) || (i==1 && j%2==1) ) numberEl.classList.add('black-bg');
    }
}