const userName = 'waka';
const dbUserName = 'waka';

if(userName == dbUserName){
    console.log('user exists');
}
else{
    console.log('Wrong user name');
}

// Antingen eller
// Om age är över 20: logga "välkommen till systembolaget"
// Om age är över 65: logga "grattis till pensioneringen"
// Om age är mindre än 7: logga "Snart får du börja skolan"
// I annat fall logga: 'Hur gammal är du'?

const age = 30;

if(age>65){
    console.log('pensioneringen');
}
else if(age>20){
    console.log('systemet');
}
else if(age<7){
    console.log('snart skola!')
}
else{
    console.log("hur gammal är du")
}

// 10%2 -> 0
// Logga jämnt eller udda beroende på om i är jämnt eller udda
for(let i=0; i<10; i++){
    console.log(i, i%2);

    // 0 tolkas som false, alla andra nummer som true
    if(i%2){
        console.log('udda');
    }
    else{
        console.log('jämnt')
    }
}

// Undefined tolkas som false, allt annat innehåll (förutom false) tolkas som true
let user;
console.log(user);
if(user){
    console.log('User exists')
}
else {
    console.log('user is undefined')
}
