function RamadanMarket(shirtQty,pantQty,shoeQty){
    const shirtPrice = 500;
    const pantPrice = 300;
    const shoePrice = 900;

    const shirtTotalPrice = shirtPrice * shirtQty;
    const pantTotalPrice = pantPrice * pantQty;
    const shoeTotalPrice = shoePrice * shoeQty;

    const totalPrice = shirtTotalPrice + pantTotalPrice + shoeTotalPrice;
    return totalPrice;
}
const price = RamadanMarket(2,1,1);
console.log(price);
