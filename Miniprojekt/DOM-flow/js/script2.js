// Create top 5 rows
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
        // Set the background color depending on the column and row
        let content;
        let bgClass;

        if (i == 0) {
            content = j;

            if(j==4) bgClass = 'violet-bg';
            else if( j%2 == 0 ) bgClass = 'black-bg';
        }
        else if (i == 1) {
            content = 9 - j;

            if(j==1) bgClass = 'violet-bg';
            else if( j%2 == 1 ) bgClass = 'black-bg';
        }
        else {
            content = thirdColumnContent[j];

            if(j==5) bgClass = 'violet-bg';
            else if( j%2 == 0 ) bgClass = 'black-bg';
        }

        numberEl.innerText = content;
        numberEl.classList.add(bgClass);
    }
}