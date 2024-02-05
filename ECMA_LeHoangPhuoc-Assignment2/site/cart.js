// Lấy giỏ hàng từ local storage, nếu không có thì tạo giỏ hàng rỗng
let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
// xoas gio hang cu
document.querySelector('#cartItems').innerHTML = '';
// Tạo HTML cho mỗi sản phẩm trong giỏ hàng
cart.forEach((item) => {
  document.querySelector('#cartItems').innerHTML += `
  <tr>
  <td>
    <div class="media">
      <div class="d-flex">
        <img src="${item.image}" alt="" width="100px" height="150px"/>
      </div>
      <div class="media-body">
        <p>${item.name}</p>
      </div>
    </div>
  </td>
  <td>
    <h5>${item.price}</h5>
  </td>
  <td>
    <div class="product_count">
      <span class="input-number-decrement"> <i class="ti-minus"></i></span>
      <input value="${item.qty}" disabled />
      <span class="input-number-increment"> <i class="ti-plus"></i></span>
    </div>
    </td>
  <td>
<h5>${item.qty * item.price}</h5>
  </td>
  </td>
  </td>
</tr>
  `;
});
let sum = 0;
cart.forEach(item => {
  sum += item.qty * item.price;
});


