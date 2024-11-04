let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');


openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'T-Shirt',
        image: "product1.png",
        price: 990
    },
    {
        id: 2,
        name: 'Hand Bag',
        image: 'product2.png',
        price: 650
    },
    {
        id: 3,
        name: 'Mug',
        image: 'product3.png',
        price: 500
    },
    {
        id: 4,
        name: 'Bottle',
        image: 'product4.png',
        price: 690
    },
    {
        id: 5,
        name: 'Flask',
        image: 'product5.png',
        price: 720
    },
    {
        id: 6,
        name: 'Wrist band',
        image: 'product6.jpg',
        price: 250   
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Cart</button>`;
        list.appendChild(newDiv);
    })
}

initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1; 
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}
document.addEventListener("DOMContentLoaded", function() {
    const openFormBtn = document.getElementById("openFormBtn");
    const myForm = document.getElementById("myForm");

    openFormBtn.addEventListener("click", function() {
        myForm.classList.toggle("hidden");
    });
});
document.getElementById('showFormBtn').addEventListener('click', function() {
    var formContainer = document.getElementById('formContainer');
    formContainer.style.display = 'block';
  });