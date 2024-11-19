const random = Math.random();
console.log(random);


// const randomTen = 10+random*10; //10 - 20
const randomTen = 10+random*10;
console.log(randomTen);


const randomRounded = Math.round(randomTen);
console.log(randomRounded)



const arr = ['ett', 'två', 'tre', 'fyra'];
const randomIndex = Math.floor( Math.random()*arr.length );
console.log(arr[randomIndex]);