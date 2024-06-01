let table=document.querySelector("table");

let basketStr=localStorage.getItem("basket");

if (basketStr!=null) {
    basketArray=JSON.parse(basketStr);
}
else{
    console.log("Emtpy basket...");
}
basketArray.forEach(product => {
    let tr=document.createElement("tr");
    let tdimage=document.createElement("td");
    let img=document.createElement("img");
    img.setAttribute("src", product.imageUrl);
    img.style.width="150px";
    img.style.height="150px";
    tdimage.append(img);
    let tdName=document.createElement("td");
    tdName.innerText=product.productName;
    let tdPrice=document.createElement("td");
    tdPrice.innerText=product.price;
    let tdCount=document.createElement("td");
    tdCount.innerText=product.count;
    let tdSetting=document.createElement("td");
    tdSetting.innerHTML='<i class="fa-solid fa-trash"></i>';
    tr.append(tdimage,tdName,tdPrice,tdCount,tdSetting);
    table.lastElementChild.append(tr);
    const removeIcon=tdSetting.querySelector(".fa-trash");
    removeIcon.addEventListener("click", function(){
        console.log("Product silindi");
        const row = this.closest("tr");
        row.remove();
    })
});