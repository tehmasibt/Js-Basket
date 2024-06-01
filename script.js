// todo Basket

let btns = document.querySelectorAll(".addBasket");
let basketCount=document.getElementById("basketCount");
checkBasket();
btns.forEach(btn=>{
    btn.onclick = function(e){
        e.preventDefault();
        checkBasket();
        let basketArray=JSON.parse(localStorage.getItem("basket"));
        let id= this.parentElement.parentElement.getAttribute("data-id");
        let existProduct=basketArray.find(p=>p.id==id);
        if (existProduct==undefined) {
            let product = {
                id,
                productName: this.parentElement.firstElementChild.innerText,
                price: this.previousElementSibling.innerText,
                imageUrl: this.parentElement.previousElementSibling.getAttribute("src"),
                count: 1
            }
            basketArray.push(product);
        }
        else{
            existProduct.count++;
        }
        
        localStorage.setItem("basket", JSON.stringify(basketArray));
        setBasketCount();
    }
});
function checkBasket(params) {
    let basketStr=localStorage.getItem("basket");
    if (basketStr==null) {
        localStorage.setItem("basket", JSON.stringify([]))
    }
}

function setBasketCount() {
    let basketStr=localStorage.getItem("basket");
    if (basketStr!=null) {
        basketCount.innerText=JSON.parse(localStorage.getItem("basket")).reduce((total,value)=>total+value.count,0);
    }
}
setBasketCount();