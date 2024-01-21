fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    let pro_starters = data.products.filter(
      (item) => item.category === "Starters"
    );
    let menu = document.querySelector("#menu-starters-content");

    pro_starters.forEach((item) => {
      menu.innerHTML += `
      <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
      <div class="single-popular-items mb-50 text-center">
          <div class="popular-img">
              <img src="${item.image}" alt="">
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
  })
  .catch((error) => {
    console.error("Error fetching products:", error);
  });
