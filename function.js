let market = [
    { image: 'one.jpg', title: 'all fruit', price: 10 , quantity: 1},
    { image: 'two.jpg', title: 'pizza', price: 12 , quantity: 1},
    { image: 'three.jpg', title: 'hot dog', price: 8 , quantity: 1},
    { image: 'four.jpg', title: 'french fries', price: 2 , quantity: 1},
    { image: 'five.jpg', title: 'seed chop', price: 5 , quantity: 1},
    { image: 'six.jpg', title: 'grape bread', price: 33 , quantity: 1},
    { image: 'seven.jpg', title: 'bugguy', price: 50 , quantity: 1},
    { image: 'eight.jpg', title: 'pounded cas', price: 45 , quantity: 1},
];

let cartLocal = localStorage.getItem('allCart');
let allCart = cartLocal ? JSON.parse(cartLocal) : [];

function updateCart() {
    localStorage.setItem('allCart', JSON.stringify(allCart));  
    let cart = document.getElementById("basket");
    cart.innerHTML = allCart.length; // Display the cart item count
}

// Function to display menu items
function display() {
    let menuItems = '';
    market.forEach((m, index) => {
        menuItems += `<div class="menu-item">
                <img src="./img/gallery/${m.image}" alt="${m.title}">
                <h3>${m.title}</h3>
                <p>$${m.price}</p>
                <button class="add-btn" data-index="${index}">Add to Cart</button>
            </div>`;
    });
    document.getElementById('menu-section').innerHTML = menuItems;
}

// Function to display cart count from localStorage on page load
function loadCart() {
    if (allCart.length > 0) {
        let cart = document.getElementById("basket");
        cart.innerHTML = allCart.length; // Show the number of items in the cart
    }
}

// Initialize the page by displaying the menu and cart count
display();
loadCart();

// Event listener for "Add to Cart" buttons
let addBtn = document.getElementsByClassName("add-btn");
for (let index = 0; index < addBtn.length; index++) {
    addBtn[index].addEventListener("click", () => {
        let menuItem = market[index];
        // Check if the item is already in the cart
        let cartSearch = allCart.find((cartItem) => cartItem.title === menuItem.title);
        
        if (cartSearch === undefined) {
          
            allCart.push({
                title: menuItem.title,
                price: menuItem.price,
                quantity: 1,
            });
            updateCart();
            alert(`1 ${menuItem.title} has been added successfully`);
        } else {
           
            cartSearch.quantity += 1;
            updateCart();
            alert(`You added ${menuItem.title} with a quantity of ${cartSearch.quantity}`);
        }   

        
    });
}
let search = document.getElementById("search");
search.addEventListener("click", () => {
    let enter = document.getElementById("enter").value.trim().toLowerCase();
    let menuItems = document.querySelectorAll   (".menu-item");
 

    menuItems.forEach(item => {
        let title = item.querySelector("h3").textContent.trim().toLowerCase(); 

        if (title.includes(enter)) { 
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
});

