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
            return `
      <tr>
      <td>${product.name}</td>
      <td>${product.category}</td>
      <td><img src="../site/${product.image}" width="50" height="50"></td>
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
      `;
        }
    });