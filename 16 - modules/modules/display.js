import anime from "../lib/anime.es.js";

export function displayImage(imgUrl){

    const img = document.createElement('img');
    img.src = imgUrl;
    document.body.append(img);

    anime({
        targets: 'img',
        rotate: '360deg'
    })
}