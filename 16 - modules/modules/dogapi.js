import _, { map } from 'https://cdn.jsdelivr.net/npm/underscore@1.13.7/underscore-esm-min.js';

export async function getRandomDogImage(){
    const url = 'https://dog.ceo/api/breeds/image/random';

    const response = await fetch(url);
    const data = await response.json();

    // console.log(data)

    // Fnkar inte men syftet var att visa att underscore är nu tillgängligt i den här filen
    const imgUrl = _.pluck(data, 'message');
    console.log(imgUrl)

    return data.message;
}