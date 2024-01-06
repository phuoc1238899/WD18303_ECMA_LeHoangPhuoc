fetch("https://65929f4fbb129707198fe18e.mockapi.io/tinhpv10/students")
    .then(function(response) {
        response.json().then(function(data2) {
            let array = data2;
            // Lấy tham chiếu đến phần tử <tbody> trong bảng có lớp CSS là "table"
            let tableBody = document.querySelector(".table tbody");
            // Duyệt qua từng phần tử trong mảng array
            array.forEach((element, index) => {
                // Tạo một phần tử <tr> mới
                let row = document.createElement("tr");

                row.innerHTML = `
          <th scope="row">${index}</th> 
          <td>${element.avatar}</td> 
          <td>${element.name}</td> 
          <td>${element.createdAt}</td> 
        `;
// Thêm phần tử <tr> vào phần tử <tbody> trong bảng
                tableBody.appendChild(row);
            });
        });
    });