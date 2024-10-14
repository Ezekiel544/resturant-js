let cartLocal = localStorage.getItem('allCart');
let allCart = cartLocal ? JSON.parse(cartLocal) : [];
let show = document.getElementById("show");
let tote = document.getElementById("tote");

let cartLi = '';
let cal = 0;
allCart.forEach((cartItem, index) => {
    cartLi += ` <li class="cart-item">
        <span class="item-name">${cartItem.title}</span>
        <span class="item-price">$${cartItem.price}</span>
        <span class="item-quantity">Quantity: ${cartItem.quantity}</span>
        <span class="item-total">Total: $${cartItem.price * cartItem.quantity}</span>
        <button class="delete-btn" data-index="${index}">remove item</button>
    </li>`;
    cal += (cartItem.price * cartItem.quantity);
});

show.innerHTML = cartLi;
tote.innerHTML = `The total price of all your goods is $${cal}`;


document.querySelectorAll('.delete-btn').forEach(button => {
    button.addEventListener('click', function() {
        const indexToDelete = this.getAttribute('data-index'); 
        allCart.splice(indexToDelete, 1);
        
    
        updateCart();
    });
});

function updateCart() {
    let cartLi = '';
    let cal = 0;
    
    allCart.forEach((cartItem, index) => { // Use `allCart` instead of `array`
        cartLi += ` <li class="cart-item">
            <span class="item-name">${cartItem.title}</span>
            <span class="item-price">$${cartItem.price}</span>
            <span class="item-quantity">Quantity: ${cartItem.quantity}</span>
            <span class="item-total">Total: $${cartItem.price * cartItem.quantity}</span>
            <button class="delete-btn" data-index="${index}">remove item</button>
        </li>`;
        cal += (cartItem.price * cartItem.quantity);
    });

    show.innerHTML = cartLi;
    tote.innerHTML = `The total price of all your goods is $${cal}`;

   
    document.querySelectorAll('.delete-btn').forEach(button => {
        button.addEventListener('click', function() {
            const indexToDelete = this.getAttribute('data-index');
            allCart.splice(indexToDelete, 1);
            updateCart();
        });
    });

   
 
    localStorage.setItem('allCart', JSON.stringify(allCart));
}
let check = document.getElementById("check") ;
check.addEventListener("click",()=>{
    alert("you have successfully placed an order, kindly check your email for payment option")
})