
function func(arr){
    // const arr = [21,2,23, 432];
}

func([4, 3, 64, 34]);
func('hej');

function getDiscountedPrice(originalPrice){
    const discount = 0.2;
    // console.log(originalPrice*(1-discount));
    return originalPrice*(1-discount);
}


function displayDiscount(discountedPrice){
    const pEl = document.createElement('p');
    pEl.innerText = discountedPrice;
    document.body.appendChild(pEl);
}   

const num = 800;
// de två raderna nedan innebär båda 800, bara det att vi inte använder datan till någonting
num;
getDiscountedPrice(1000);


//Båda alternativen har samma resultat
const discountedPrice = getDiscountedPrice(1500);
displayDiscount(discountedPrice);

displayDiscount( getDiscountedPrice(1500) );