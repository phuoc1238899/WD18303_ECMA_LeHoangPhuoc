fetch("https://65929f4fbb129707198fe18e.mockapi.io/tinhpv10/students")
    .then(function(response) {
        return response.json();
    })
    .then(function(data2) {
        let array = data2;
        // querySelector Lấy tham chiếu đến phần tử <tbody> trong bảng có lớp CSS là "table"
        let tableBody = document.querySelector(".table tbody");

        let html = "";

        array.forEach((element, index) => {
            html += `
        <tr>
          <th scope="row">${index}</th>
          <td>${element.avatar}</td>
          <td>${element.name}</td>
          <td>${element.createdAt}</td>
        </tr>
      `;
        });

        tableBody.innerHTML = html;
    });