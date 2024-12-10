const arr = [1, 2, 3];
const num = 4;
arr.push(num);
console.log(arr)

// splice
const shuffledArray = [];

while(arr.length > 0){
    const randomIndex = Math.floor(Math.random()*arr.length);

    console.log(randomIndex);

    const splicedItem = arr.splice(randomIndex, 1);
    console.log(arr, splicedItem)

    shuffledArray.push(splicedItem[0])
}
console.log(shuffledArray)

// Sort med numbers
const sortedArray = shuffledArray.sort((a, b) => a-b);
console.log(sortedArray)

const sortShuffledArray = sortedArray.sort(()=> Math.random()-0.5);
console.log(sortShuffledArray);

