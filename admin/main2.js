fetch("../site/data.json")
    .then((response) => response.json())
    .then((data) => {
        let table = document.getElementById("datatableproduct");
        table.innerHTML = generateTable(data.products);

        function generateTable(products) {
            if (!products || products.length === 0) {
                return "";
            }
            let rowsHTML = "";
            products.forEach((product) => {
                rowsHTML += generateTableRow(product);
            });
            return rowsHTML;
        }

        function generateTableRow(product) {
            return ` <tr>
     <table>
  <tr>
    <th>Tên</th>
    <th>Loại</th>
    <th>Ảnh</th>
    <th>Giá</th>
    <th>Chức năng</th>
  </tr>
      <td>${product.name}</td>
      <td>${product.categories}</td>
      <td><img src="../site/${product.image}" width="50" height="50" /></td>
      <td>${product.price}đ</td>
      <td>
        <button class="btn btn-danger" onclick="deleteProduct(${product.id})">
          Xóa
        </button>
        <button class="btn btn-primary" onclick="editProduct(${product.id})">
          Sửa
        </button>
      </td>
    </tr>
    </table>
      `;
        }
    });
fetch("../site/data.json")
    .then((response) => response.json())
    .then((data) => {
        let tableBody = document.querySelector("#datatablecategoris");
        tableBody.innerHTML = generateTableRows(data.categories);

        function generateTableRows(categories) {
            if (!categories || categories.length === 0) {
                return "<tr><td colspan='2'>No categories found</td></tr>";
            }

            let rows = "";
            categories.forEach((category) => {
                rows += `
        <table>
  <tr>
    <th>Id</th>
    <th>Tên</th>
  </tr>
  <tr>
    <td>${category.id}</td>
    <td>${category.name}</td>
  </tr>
  <tr>
</table>
        `;
            });

            return rows;
        }
    });
fetch("../site/data.json")
    .then((response) => response.json())
    .then((data) => {
        let table = document.getElementById("datatableoderss");
        table.innerHTML = generateTable(data.orders);

        function generateTable(orders) {
            if (!orders || orders.length === 0) {
                return "";
            }
            let rowsHTML = "";
            orders.forEach((order) => {
                rowsHTML += generateTableRow(order);
            });
            return rowsHTML;
        }

        function generateTableRow(order) {
            return `
        <tr>
          <td>${order.customer_name}</td>
          <td>${order.customer_address}</td>
          <td>${order.customer_email}</td>
          <td>${order.customer_phone_number}</td>
          <td>${order.created_date}</td>
          <td>${order.status}</td>
        </tr>
      `;
        }
    });
fetch("../site/data.json")
    .then((response) => response.json())
    .then((data) => {
        let orderDetailTable = document.getElementById("datatableoder_detail");
        orderDetailTable.innerHTML = generateOrderDetailTable(data.order_detail);

        function generateOrderDetailTable(orderDetail) {
            if (!orderDetail || orderDetail.length === 0) {
                return "";
            }
            let rowsHTML = "";
            orderDetail.forEach((detail) => {
                rowsHTML += generateOrderDetailRow(detail);
            });
            return rowsHTML;
        }

        function generateOrderDetailRow(detail) {
            return `
        <tr>
          <td>${detail.order_id}</td>
          <td>${detail.product_id}</td>
          <td>${detail.quantity}</td>
          <td>${detail.unit_price}</td>
        </tr>
      `;
        }
    });
