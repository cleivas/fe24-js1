const product1 = {
    name: 'BMW 330',
    price: 700000,
    discount: 0.2,
    getDiscountedPrice(){
        return this.price *(1-this.discount);
    }
}
const product2 = {
    name: 'Loeral schampoo',
    price: 45,
    discount: 0.1,
    getDiscountedPrice(){
        return this.price *(1-this.discount);
    }
}

const discountedPrice1 = product1.price * (1-product1.discount);

console.log( discountedPrice1 )

product2.price = 100;
console.log(product2.getDiscountedPrice())