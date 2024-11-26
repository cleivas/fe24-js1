const products = [
    {
        name: 'BMW 330',
        price: 700000,
        discount: 0.2,
        getDiscountedPrice(){
            return this.price *(1-this.discount);
        }
    },
    {
        name: 'Loeral schampoo',
        price: 45,
        discount: 0.1,
        getDiscountedPrice(){
            return this.price *(1-this.discount);
        }
    },
    {
        name: 'Coffee lövbergs lila',
        price: 90,
        discount: 0.5,
        getDiscountedPrice(){
            return this.price *(1-this.discount);
        }
    },
    {
        name: 'Hushållsost',
        price: 70,
        discount: 0.05,
        getDiscountedPrice(){
            return this.price *(1-this.discount);
        }
    },
]

// Parametern product ska innehålla ett objekt
function displayProductCard(product){
    // Skapa alla element som behövs för att visa
    // Produktens namn
    // Produktens pris - överstruket
    // produktens rabatterad pris
    // console.log(product.getDiscountedPrice());

    const div = document.createElement('div');
    const h1 = document.createElement('h1');
    const pPrice = document.createElement('p');
    const pDiscount = document.createElement('p');
    document.body.append( div );
    div.append(h1, pPrice, pDiscount);

    h1.innerText = product.name;
    pPrice.innerText = `Pris: ${product.price}`;
    pPrice.style.textDecoration = 'line-through';
    pDiscount.innerText = `Nytt pris: ${product.getDiscountedPrice()}`;

    // Ändrar egenskapn name på alla objekt i arrayen
    // product.name = 'FE24';
}

// displayProductCard(products[0]);

for( const product of products){
    // console.log(product)
    displayProductCard(product);
}
// for( const product of products){
//     // console.log(product)
//     displayProductCard(product);
// }

console.log(products)