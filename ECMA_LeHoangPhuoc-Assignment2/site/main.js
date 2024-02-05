import { productp } from "../app/module.js";

const menu = document.getElementById("menu-starters-content");
const menu2 = document.getElementById("menu2");

productp.fetchData("http://localhost:3000/products?_limit=5").then((data) => {
  data.forEach((item) => {
    menu.innerHTML += `
      <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
        <div class="single-popular-items mb-50 text-center">
          <div class="popular-img">
            <img src="${item.image}" width="100px" height="350px" alt="">
            <div class="img-cap">
            <button data-id="${item.id}"class="buy-cart">Add to cart</button>
            </div>
            <div class="favorit-items">
              <span class="flaticon-heart"></span>
            </div>
          </div>
          <div class="popular-caption">
            <h3><a href="product_details.html">${item.name}</a></h3>
            <span>${item.price}</span>
          </div>
        </div>
      </div>
    `;
  });
});
productp.fetchData("http://localhost:3000/categories?_limit=4").then((data) => {
  data.forEach((category) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = "shop.html";
    a.textContent = category.name;
    li.appendChild(a);
    menu2.appendChild(li);
  });
});
// them sp vao gio
document.addEventListener('click', async (e) => {
  if (e.target.classList.contains('buy-cart')) {
    const id = e.target.getAttribute('data-id');
    console.log(id);
    const product = await productp.getDataById2(id);
    console.log(product);
    // kiem tra co cart co trong localstoge hay khong co thi lay ra khog co thi rong
    let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
    const index = cart.findIndex(item => item.id == product.id);
    if (index == -1) {
      product.qty = 1;
      cart.push(product);
    } else {
      cart[index].qty += 1;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log(JSON.parse(localStorage.getItem('cart')));
  }
});
