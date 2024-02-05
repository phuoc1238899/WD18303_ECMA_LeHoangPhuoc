import { productp } from "../../app/module.js";

function showProducts() {
  const productTableBody = document.getElementById("productTableBody");
  productTableBody.innerHTML = "";

  productp.fetchData("http://localhost:3000/products").then((data) => {
    data.forEach((product) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${product.id}</td>
        <td>${product.name}</td>
        <td>${product.categories}</td>
        <td>${product.price}</td>
        <td><img src="../site/${product.image}" width="20px"></td>
        <td><button class="deleteButton" data-id="${product.id}" data-type="product">Xóa</button>
        <button class="editButton" data-id="${product.id}" data-type="product">Sửa</button></td>
      `;
      productTableBody.appendChild(tr);
    });
  });
}

// Gọi hàm showProducts để in danh sách sản phẩm ra màn hình
showProducts();

const addModal = document.getElementById("addModal1");
const closeAdd = document.querySelector(".close");
const addProductButton = document.getElementById("addproducts");

addProductButton.onclick = function () {
  addModal.style.display = "block";
};

closeAdd.onclick = function () {
  addModal.style.display = "none";
};

document.getElementById("addpro1").onclick = function () {
  const name = document.getElementById("name").value;
  const price = parseFloat(document.getElementById("price").value);
  const image = document.getElementById("image").value.split("\\").pop();
  const categories = document.getElementById("categories").value;

  productp.getlastId("http://localhost:3000/products").then((lastId) => {
    const product = {
      id: (Number(lastId) + 1).toString(),
      name: name,
      price: price,
      image: "assets/img/gallery/" + image.replace(/^.*[\\\/]/, ""),
      categories: categories,
    };
    productp.addData1(product);
    addModal.style.display = "none";
    showProducts();
  });
};
// delete san pham
document.querySelector("tbody").addEventListener("click", function (e) {
  if (e.target.classList.contains("deleteButton")) {
    const id = e.target.dataset.id;
    const type = e.target.dataset.type;
    if (type === "product") {
      productp.deleteData2(id).then(() => {
        showProducts();
      });
    }
  }
});
// sua product
const editModal = document.querySelector("#editModal");
document.querySelector("tbody").addEventListener("click", function (e) {
  if (e.target.classList.contains("editButton")) {
    const id = e.target.dataset.id;
    const type = e.target.dataset.type;
    if (type === "product") {
      productp.getDataById2(id).then((product) => {
        // Hiển thị form edit giữa màn hình
        editModal.style.display = "block";
        editModal.innerHTML = `
        <div class="modal-content">
          <span class="close">&times;</span>
            <div class="form">
              <input type="hidden" id="editProductId" value="${product.id}">
                <label for="editProductName">Tên sản phẩm:</label>
              <input type="text" id="editProductName" value="${product.name}">
                <label for="editProductPrice">Giá:</label>
              <input type="text" id="editProductPrice" value="${product.price}">
                <label for="editProductImage">Ảnh:</label>
              <input type="file" id="editProductImage" value="${product.image}">
                <label for="editProductCategories">Danh mục:</label>
              <input type="text" id="editProductCategories" value="${product.categories}">
                  <button id="saveEditProduct">Lưu</button>
                    </div>
                </form>
              </div>
            </div>
        `;
        const closeEdit = document.querySelector("#editModal .close");
        closeEdit.onclick = function () {
          editModal.style.display = "none";
        }
      });
    }
  }
});

editModal.addEventListener("click", function (e) {
  if (e.target.id === "saveEditProduct") {
    const productId = document.querySelector("#editProductId").value;
    const productName = document.querySelector("#editProductName").value;
    const productPrice = document.querySelector("#editProductPrice").value;
    const productImage = document.querySelector("#editProductImage").value;
    const productCategories = document.querySelector("#editProductCategories").value;

    const updatedProduct = {
      id: productId,
      name: productName,
      price: productPrice,
      image: "assets/img/gallery/" + productImage.replace(/^.*[\\\/]/, ""),
      categories: productCategories,
    };

    productp.updateData2(productId, updatedProduct).then(() => {
      editModal.style.display = "none";
      showProducts();
    });
  }
});