let price = document.getElementById('price-js');
let discount = document.getElementById('discount-js');
let afterDiscount = document.getElementById('after-discount-js');
let total = document.getElementById('total-price');





let askPrice = prompt('enter the price of the item in $ dollars');
let askDiscount = prompt('enter the discount in %age');



let checkDiscount = (priz,disx) =>{

    let discountValue = (disx*priz)/100;
    return discountValue.toFixed(2);
}

let discountValue = checkDiscount(askPrice,askDiscount);

let afterDiscountValue = askPrice-discountValue;


price.innerHTML = askPrice;
discount.innerHTML = askDiscount;
afterDiscount.innerHTML = afterDiscountValue.toFixed(2);
total.innerHTML = afterDiscountValue.toFixed(2);