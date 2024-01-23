fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
        let pro_starters = data.products;
        let menu = document.querySelector("#menu-starters-content");

        pro_starters.forEach((item) => {
            menu.innerHTML += `
      <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
      <div class="single-popular-items mb-50 text-center">
          <div class="popular-img">
              <img src="${item.image}"  width= "100px" height="350px"alt="">
              <div class="img-cap">
                  <span>Add to cart</span>
              </div>
              <div class="favorit-items">
                  <span class="flaticon-heart"></span>
              </div>
          </div>
          <div class="popular-caption">
              <h3><a href="product_details.html">${item.name}</a></h3>
              <span>${item.price}</span>
          </div>
      </div>
  </div>
        `;
        });
    });
fetch("data.json")
    .then((response) => response.json())
    .then((data2) => {
        let pro_categories = data2.categories;
        let menu2 = document.querySelector("#menu2");

        pro_categories.forEach((item2) => {
            let li = document.createElement("li");
            let a = document.createElement("a");
            a.href = "";
            a.textContent = item2.name;
            li.appendChild(a);
            menu2.appendChild(li);
        });
    });
