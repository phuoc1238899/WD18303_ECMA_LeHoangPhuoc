import { productp } from "../../app/module.js";

function showCategories() {
  const tbody = document.getElementById("categoriesTableBody");
  tbody.innerHTML = "";

  productp.fetchData("http://localhost:3000/categories").then((data) => {
    data.forEach((category) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
              <td>${category.id}</td>
              <td>${category.name}</td>
              <td><button class="deleteButton" data-id="${category.id}">Xóa</button>
              <button class="editButton" data-id="${category.id}" data-type="product">Sửa</button></td>
          `;
      tbody.appendChild(tr);
    });
  });
}
showCategories();
// them id
const addModal = document.querySelector("#addModal");
const closeAdd = document.querySelector(".close");
document.querySelector("#addcategories").onclick = function () {
  addModal.style.display = "block";
};
closeAdd.onclick = function () {
  addModal.style.display = "none";
};
document.querySelector("#addpro").onclick = function () {
  const id = document.querySelector("#id");
  const name = document.querySelector("#name").value;

  productp.getlastId("http://localhost:3000/categories").then((lastId) => {
    const pro = {
      id: (Number(lastId) + 1).toString(),
      name: name,
    };
    productp.addData(pro);
    addModal.style.display = "none";
    showCategories();
  });
};
// xoa id
document.querySelector("tbody").addEventListener("click", function (e) {
  if (e.target.classList.contains("deleteButton")) {
    const id = e.target.dataset.id;
    console.log(id);
    productp.deleteData(id).then(() => {
      showCategories();
    });
  }
});
// sửa id
const editModal = document.querySelector("#editModal");

document.querySelector("tbody").addEventListener("click", function (e) {
  if (e.target.classList.contains("editButton")) {
    const id = e.target.dataset.id;
    productp.getDataById(id).then((category) => {
      // Hiển thị form edit giữa màn hình
      editModal.style.display = "block";
      // Cập nhật nội dung của form edit
      editModal.innerHTML = `
        <div class="modal-content">
          <span class="close">&times;</span>
          <div class="form">
            <input type="hidden" id="editCategoryId" value="${category.id}">
            <label for="editCategoryName">Tên loại:</label>
            <input type="text" id="editCategoryName" value="${category.name}">
            <button id="saveEditCategory">Lưu</button>
          </div>
        </div>
      `;

      // Xử lý sự kiện khi nhấn nút "Lưu"
      const saveButton = editModal.querySelector("#saveEditCategory");
      saveButton.addEventListener("click", function () {
        const categoryId = document.querySelector("#editCategoryId").value;
        const categoryName = document.querySelector("#editCategoryName").value;
        const updatedCategory = {
          id: categoryId,
          name: categoryName,
        };
        productp.updateData(categoryId, updatedCategory).then(() => {
          // Đóng form edit và cập nhật lại danh sách
          editModal.style.display = "none";
          showCategories();
        });
      });
      // Xử lý sự kiện khi nhấn nút đóng
      const closeButton = editModal.querySelector(".close");
      closeButton.addEventListener("click", function () {
        // Đóng form edit
        editModal.style.display = "none";
      });
    });
  }
});