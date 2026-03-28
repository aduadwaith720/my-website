let count = 0

let total = 0



function addToCart(product,price){

count++

total += price



document.getElementById("count").innerText = count

document.getElementById("total").innerText = total



let list = document.getElementById("cartList")



let item = document.createElement("li")



item.innerHTML = product + " - ₹"+price+

" <button onclick='removeItem(this,"+price+")'>❌</button>"



list.appendChild(item)

}



function removeItem(button,price){

button.parentElement.remove()



count--

total -= price



document.getElementById("count").innerText = count

document.getElementById("total").innerText = total

}



function searchProduct(){

let input = document.getElementById("search").value.toLowerCase()

let cards = document.getElementsByClassName("card")



for(let i=0;i<cards.length;i++){



let product = cards[i].innerText.toLowerCase()



if(product.includes(input)){

cards[i].style.display="block"

}

else{

cards[i].style.display="none"

}



}

}



function filterCategory(category){

let cards = document.getElementsByClassName("card")



for(let i=0;i<cards.length;i++){



if(category=="all"){

cards[i].style.display="block"

}



else if(cards[i].classList.contains(category)){

cards[i].style.display="block"

}



else{

cards[i].style.display="none"

}



}

}