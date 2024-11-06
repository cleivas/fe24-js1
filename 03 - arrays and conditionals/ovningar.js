// Utmaningar, Användarnamn
const importantNames = ['Clara', 'Guido', 'Alrik'];

const names = ['Signe', 'Noura', 'Alrik', 'Elias', 'Maja', 'Trung', 'Dalya', 'Clara', 'Sergio', 'Bianca', 'Guido', 'Soraya'];

for(const name of names){
    const p = document.createElement('p');
    p.innerText = name;
    p.style.color = 'gray';

    // for(const importantName of importantNames){
    //     if(importantName == name){
    //         p.style.color = 'black';
    //         p.style.fontWeight = 'bold';
    //         break;
    //     }
    // }
    if(importantNames.includes(name)){
        p.style.color = 'black';
        p.style.fontWeight = 'bold';
    }
    document.body.append(p);
}