fetch("../site/data.json")
  .then((response) => response.json())
  .then((data) => {
    let headers = ["Tên Sản Phẩm","Loại", "Hình", "Giá", "Chức năng"];
    let table = document.getElementById("datatablesSimple");
    table.innerHTML = generateTable(data.products);

    function generateTable(products) {
      if (!products || products.length === 0) {
        return "";
      }

      let tableHTML = `
        <thead>
          <tr>
            ${generateTableHeader(headers)}
          </tr>
        </thead>
        <tbody>
          ${generateTableRows(products)}
        </tbody>
      `;
      return tableHTML;
    }

    function generateTableHeader(headerTitles) {
      if (!headerTitles || headerTitles.length === 0) {
        return "";
      }
      let html = "";
      headerTitles.forEach((element) => {
        html += `<th>${element}</th>`;
      });
      return html;
    }

    function generateTableRows(products) {
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
