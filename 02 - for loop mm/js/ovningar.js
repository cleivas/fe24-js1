// Konsolen #5
for(let i=1; i<=128; i*=2){
    console.log(i);
}

// Utmaningar #1
for(let i=0; i<5; i++){
    const ol = document.createElement('ol');
    document.body.append(ol);

    for(let j=0; j<3; j++){
        const li = document.createElement('li');
        ol.append(li);
    }
}