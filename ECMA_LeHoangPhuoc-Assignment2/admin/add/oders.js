import { productp } from "../../app/module.js";

function showOrders() {
  const orderTableBody = document.getElementById("orderTableBody");
  orderTableBody.innerHTML = "";

  productp.fetchData("http://localhost:3000/orders").then((data) => {
    data.forEach((order) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${order.id}</td>
        <td>${order.customer_name}</td>
        <td>${order.customer_address}</td>
        <td>${order.customer_email}</td>
        <td>${order.customer_phone_number}</td>
        <td>${order.created_date}</td>
        <td>${order.status}</td>
        <td><button class="editButton" data-id="${order.id}" data-type="product">Sửa</button></td>
      `;
      orderTableBody.appendChild(tr);
    });
  });
}

// Gọi hàm showOrders để in danh sách đơn hàng ra màn hình
showOrders();

// edit order
// const editModal = document.querySelector("#editModal");

// document.querySelector("tbody").addEventListener("click", function (e) {
//   if (e.target.classList.contains("editButton")) {
//     const id = e.target.dataset.id;
//     const type = e.target.dataset.type;
//     if (type === "order") {
//       productp.getDataById3(id).then((order) => {
//         // Hiển thị modal
//         editModal.style.display = "block";
//         // Tạo HTML cho form sửa đơn hàng
//         const formHTML = `
//           <div class="modal-content">
//             <span class="close">&times;</span>
//             <div class="form">
//               <input type="hidden" id="editOrderId" value="${order.id}">
//               <label for="editCustomerName">Tên khách hàng:</label>
//               <input type="text" id="editCustomerName" value="${order.customer_name}">
//               <label for="editCustomerAddress">Địa chỉ khách hàng:</label>
//               <input type="text" id="editCustomerAddress" value="${order.customer_address}">
//               <label for="editCustomerEmail">Email khách hàng:</label>
//               <input type="email" id="editCustomerEmail" value="${order.customer_email}">
//               <label for="editCustomerPhoneNumber">Số điện thoại khách hàng:</label>
//               <input type="tel" id="editCustomerPhoneNumber" value="${order.customer_phone_number}">
//               <button id="saveEditOrder">Lưu</button>
//             </div>
//           </div>
//         `;
//         // Thiết lập nội dung của modal
//         editModal.innerHTML = formHTML;
//         const closeEdit = document.querySelector("#editModal .close");
//         closeEdit.onclick = function () {
//           // Đóng modal khi nhấn nút close
//           editModal.style.display = "none";
//         };
//       });
//     }
//   }
// });

// editModal.addEventListener("click", function (e) {
//   if (e.target.id === "saveEditOrder") {
//     const orderId = document.querySelector("#editOrderId").value;
//     const customerName = document.querySelector("#editCustomerName").value;
//     const customerAddress = document.querySelector("#editCustomerAddress").value;
//     const customerEmail = document.querySelector("#editCustomerEmail").value;
//     const customerPhoneNumber = document.querySelector("#editCustomerPhoneNumber").value;
//     const updatedOrder = {
//       id: orderId,
//       customer_name: customerName,
//       customer_address: customerAddress,
//       customer_email: customerEmail,
//       customer_phone_number: customerPhoneNumber,
//     };
//     productp.updateData3(orderId, updatedOrder).then(() => {
//       // Đóng modal sau khi cập nhật thành công
//       editModal.style.display = "none";
//       // Cập nhật lại danh sách đơn hàng
//       showOrders();
//     });
//   }
// });