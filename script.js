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

fetch("https://api.publicapis.org/entries")
    .then(function (response){
        response.json().then(function(data){
            console.log(data.entries);

// lay du lieu
            let array = data.entries;

            let html = document.getElementById(`pc112`);

            let child_html =`<ul><li><strong>COUNT:</strong>${data.count}</li>`;


            array.forEach(element => {
                console.log(data.Description);
                child_html += `<li> ${element.Description} </li>`;
            });
            child_html += `</ul>`;
            html.innerHTML = child_html;
        })
    })