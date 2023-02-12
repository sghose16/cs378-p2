
let macNum = document.getElementById("macNum");
let tacoNum = document.getElementById("tacoNum");
let pastaNum = document.getElementById("pastaNum");
let enchNum = document.getElementById("enchNum");


let macPrice = document.getElementById("macPrice");
let tacoPrice = document.getElementById("tacoPrice");
let pastaPrice = document.getElementById("pastaPrice");
let enchPrice = document.getElementById("enchPrice");


let totalPrice = document.getElementById("totalPrice");


// let incrButton = document.getElementById("incr-button");
// let decrButton = document.getElementById("decr-button");

// incrButton.addEventListener('click', incrCount); 

let clear = document.querySelector(".btn-clear");
clear.addEventListener("click", clearAll);

let order = document.querySelector(".btn-order");
order.addEventListener("click", placeOrder);

let decrButtons = document.querySelectorAll(".btn-decr");
for (let i = 0; i < decrButtons.length; i++) {
    decrButtons[i].addEventListener("click", decrementing);
}

let incrButtons = document.querySelectorAll(".btn-incr");
for (let i = 0; i < decrButtons.length; i++) {
    incrButtons[i].addEventListener("click", incrementing);
}

//const itemCount = document.getElementById("count");


function placeOrder(){
    let message = "";
    if (parseInt(macNum.innerHTML) === 0 && parseInt(pastaNum.innerHTML) == 0 && parseInt(tacoNum.innerHTML) === 0 && parseInt(enchNum.innerHTML) === 0){
        message = "No items in cart";
    }else{
        message = "Order Placed! You got ";
        if (parseInt(macNum.innerHTML) > 0){
            message += macNum.innerHTML + " mac & cheese \n";
        }
        if (parseInt(pastaNum.innerHTML) > 0){
            message += pastaNum.innerHTML + " pasta \n";
        }
        if (parseInt(tacoNum.innerHTML) > 0){
            message += tacoNum.innerHTML + " taco \n";
        }
        if (parseInt(enchNum.innerHTML) > 0){
            message += enchNum.innerHTML + " enchiladas \n";
        }
    
    }
    alert(message);
}

function clearAll(){
    totalPrice.innerHTML = 0;
    macNum.innerHTML = 0;
    tacoNum.innerHTML = 0;
    pastaNum.innerHTML = 0;
    enchNum.innerHTML = 0;
}

function incrementing(){
    const foodType = this.id; 
    if (foodType === "macIncr"){
        macNum.innerHTML++;
        totalPrice.innerHTML = parseInt(totalPrice.innerHTML) + parseInt(macPrice.innerHTML);
    }
    if (foodType === "pastaIncr"){
        pastaNum.innerHTML++;
        totalPrice.innerHTML = parseInt(totalPrice.innerHTML) + parseInt(pastaPrice.innerHTML);

    }
    if (foodType === "tacoIncr"){
        tacoNum.innerHTML++;
        totalPrice.innerHTML = parseInt(totalPrice.innerHTML) + parseInt(tacoPrice.innerHTML);

    }
    if (foodType === "enchIncr"){
        enchNum.innerHTML++;
        totalPrice.innerHTML = parseInt(totalPrice.innerHTML) + parseInt(enchPrice.innerHTML);

    }
 }

function decrementing() {
    const foodType = this.id; 
    if (foodType === "macDecr" && parseInt(macNum.innerHTML) > 0){
        macNum.innerHTML--;
        totalPrice.innerHTML = parseInt(totalPrice.innerHTML) - parseInt(macPrice.innerHTML);

    }
    if (foodType === "pastaDecr" && pastaNum.innerHTML > 0){
        pastaNum.innerHTML--;
        totalPrice.innerHTML = parseInt(totalPrice.innerHTML) - parseInt(pastaPrice.innerHTML);

    }
    if (foodType === "tacoDecr" && tacoNum.innerHTML > 0){
        tacoNum.innerHTML--;
        totalPrice.innerHTML = parseInt(totalPrice.innerHTML) - parseInt(tacoPrice.innerHTML);

    }
    if (foodType === "enchDecr" && enchNum.innerHTML > 0){
        enchNum.innerHTML--;
        totalPrice.innerHTML = parseInt(totalPrice.innerHTML) - parseInt(enchPrice.innerHTML);

    }
 }
 
