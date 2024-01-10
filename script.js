function generateTableHeader(headerTitles) {
    if (!Array.isArray(headerTitles)) {
        throw new Error("Tiêu đề phải là mảng");
    }
    let html = ``;
    headerTitles.forEach((element) => {
        html += `<th>${element}</th>`;
        //console.log(element);
    });
    return `<thead><tr>${html}</tr></thead>`;
}
function generateTableRowStudent(object) {
    return `<tr>
    <td>${object.id}</td>
    <td>${object.name}</td>
    <td><img src="${object.avata}"height="250px"></td>
    <td>${object.createAt}</td>
    </tr>`;
}
// cho map sua lai foreach
// if (!headers || !data || headers.length ===0 || !data.length ===0){
//     return "";
// }
// headerTitles.forEach(element => {
//     html +=`<th>${element}</th>`;
//     return `<thead><tr>${html}</tr></thead>`;
// });
function generateTable(headers, data) {
    let headerRow = generateTableHeader(headers);

    let html = "";

    data.forEach((element) => {
        html += generateTableRowStudent(element);
    });
    return `<table>${headerRow}<tbody>${html}</tbody></table>`;
}

let list = [
    {
        id: 1,
        name: "nguyen van a",
        avata:
            "https://th.bing.com/th/id/OIP.9OFvFr0BYWWV6wKtS8ze1AHaHa?rs=1&pid=ImgDetMain",
        createAt: "2004/02/06",
    },
    {
        id: 2,
        name: "nguyen van b",
        avata:
            "https://th.bing.com/th/id/OIP.9OFvFr0BYWWV6wKtS8ze1AHaHa?rs=1&pid=ImgDetMain",
        createAt: "2004/07/06",
    },
];
let headers = ["id", "Tên", "Hình ảnh", "Ngày tạo"];

document.write(generateTable(headers, list));