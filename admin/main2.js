fetch("../site/data.json")
  .then((response) => response.json())
  .then((data) => {
    let table = document.getElementById("datatable");
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
    let tableBody = document.querySelector("#categoris2");
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
