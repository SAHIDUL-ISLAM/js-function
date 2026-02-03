const market = [
    {name: "Samsung",price: 45000,color: "Black", quantity: 1},
    {name: "Infinix",price: 16000,color: "Golden", quantity: 1},
    {name: "Nokia",price: 1200,color: "Black", quantity: 2},
    {name: "I Phone",price: 105000,color: "Black", quantity: 1}
]

function cart(amount){
    let sum = 0;
    for(const summation of amount){
        const totalProductPrice = summation.price * summation.quantity;
        sum = totalProductPrice+sum;
    }
    return sum;
}
const result = cart(market);
console.log(result);