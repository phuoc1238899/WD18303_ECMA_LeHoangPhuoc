// bai 2
let name = "phuoc";

let birthday ="2004/05/27/";

// arrow function
let sayHello = () => {
    console.log(`I'm ${name}, ${birthday}`)
}

sayHello();

let name2 ="phuoc";

let birthday2 = "2004/05/27";

let sayHello2 = () => {
    console.log(`I'm ${name2}, ${birthday2}`)
}

sayHello2();


// bai 3

// fetch("https://api.publicapis.org/entries")
//     .then(function (response){
//         response.json().then(function(data){
//             console.log(data.entries);

// // lay du lieu
//             let array = data.entries;

//             let html = document.getElementById(`pc112`);

//             let child_html =`<ul><li><strong>COUNT:</strong>${data.count}</li>`;


//             array.forEach(element => {
//                 console.log(element.Description);
//                 child_html += `<li> ${element.Description} </li>`;
//             });
//             child_html += `</ul>`;
//             html.innerHTML = child_html;
//         })
//     })

// // bai 4

fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
    .then(function(response) {
        response.json().then(function(data1) {
            let array = data1.data;
            // Lấy tham chiếu đến phần tử <tbody> trong bảng có lớp CSS là "table"
            let tableBody = document.querySelector(".table tbody");
            // Duyệt qua từng phần tử trong mảng array
            array.forEach((element, index) => {
                // Tạo một phần tử <tr> mới
                let row = document.createElement("tr");
                row.innerHTML = `
             <th scope="row">${index + 1}</th>
             <td>${element.Nation}</td>
             <td>${element.Year}</td>
             <td>${element.Population}</td>
           `;
                // Thêm phần tử <tr> vào phần tử <tbody> trong bảng
                tableBody.appendChild(row);
            });
        });
    });
