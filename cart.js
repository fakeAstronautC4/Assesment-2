///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE
let price_sum = cart.reduce((prev_value, curr_value) => prev_value + curr_value.price, 0)
console.log(price_sum);

// const summedPrice = cart.reduce(/* CALLBACK HERE */)


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
function calcFinalPrice (cartTotal, couponValue, tax){
    console.log('Subtotal: '+ cartTotal + ' \nTax rate: '+ tax +'%' + ' \nCoupon Discount: '+ couponValue)
    let taxed_amount = cartTotal * (tax / 100);
    console.log('Total taxed: ' + taxed_amount)
    let final_number = cartTotal + taxed_amount - couponValue;
     console.log('Your total is '+ final_number)
}

calcFinalPrice(200, 25, 6)
//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
The restaurant needs from the customer: 
Table #: Just like deliveries, the staff needs an address, in this case... table number X.
Drinks: First thing first. As I read the Menu I like to have a drink, besides, its hot outside and I'm sweating.
Order: What does the customer(s) want. Second most important question right?
Method of payment: And the most important question... how you gon give me my money?
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

let customerOne = {
    table: 5,
    Drinks: ['Water', 'Wine', 'Soda'],
    Order: ['Beef Steak', 'Pork Ribs', 'Chiken Breast'],
    MethodOfPay: 'Zelle'
}
console.log(customerOne)