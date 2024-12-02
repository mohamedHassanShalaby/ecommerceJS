fetch("js/data.json")
  .then((res) => res.json())
  .then((data) => {
    const products = document.querySelector(".products");
    const other_prod_swip = document.getElementById("other_prod_swip");
    const other_prod_swip2 = document.getElementById("other_prod_swip2");
    all_prod_json = data;
    
    data.forEach((product) => {
      if (product.old_price) {
        const discount = Math.floor(
          ((product.old_price - product.price) / product.old_price) * 100
        );
        products.innerHTML += `
              <div class="product swiper-slide">
              <div class="icons">
                <span><i onclick="addToCart(${product.id}, this)" class="fa-solid fa-cart-plus"></i></span>
                <span><i class="fa-solid fa-heart"></i></span>
                <span><i class="fa-solid fa-share"></i></span>
              </div>
              <span class="sale-present">%${discount}</span>

              <div class="img-prod">
                <img src=${product.img} alt="" />
                <img class="img-hover" src=${product.img_hover} alt="" />
              </div>
              <h3 class="name-prod">
                <a href="#"
                  >${product.name}</a
                >
              </h3>
              <div class="stars">
                <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i
                ><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i
                ><i class="fa-solid fa-star"></i>
              </div>
              <div class="price">
                <p><span>$${product.price}</span></p>
                <p class="old-price">$${product.old_price}</p>
              </div>
            </div>`;
      }
    });

    data.forEach((product) => {
     
        other_prod_swip.innerHTML += `
              <div class="product swiper-slide">
              <div class="icons">
                <span><i onclick="addToCart(${product.id}, this)" class="fa-solid fa-cart-plus"></i></span>
                <span><i class="fa-solid fa-heart"></i></span>
                <span><i class="fa-solid fa-share"></i></span>
              </div>

              <div class="img-prod">
                <img src=${product.img} alt="" />
                <img class="img-hover" src=${product.img_hover} alt="" />
              </div>
              <h3 class="name-prod">
                <a href="#"
                  >${product.name}</a
                >
              </h3>
              <div class="stars">
                <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i
                ><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i
                ><i class="fa-solid fa-star"></i>
              </div>
              <div class="price">
                <p><span>$${product.price}</span></p>
              </div>
            </div>`;
    });

    data.forEach((product) => {
     
        other_prod_swip2.innerHTML += `
              <div class="product swiper-slide">
              <div class="icons">
                <span><i onclick="addToCart(${product.id}, this)" class="fa-solid fa-cart-plus"></i></span>
                <span><i class="fa-solid fa-heart"></i></span>
                <span><i class="fa-solid fa-share"></i></span>
              </div>

              <div class="img-prod">
                <img src=${product.img} alt="" />
                <img class="img-hover" src=${product.img_hover} alt="" />
              </div>
              <h3 class="name-prod">
                <a href="#"
                  >${product.name}</a
                >
              </h3>
              <div class="stars">
                <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i
                ><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i
                ><i class="fa-solid fa-star"></i>
              </div>
              <div class="price">
                <p><span>$${product.price}</span></p>
              </div>
            </div>`;
    });
  });
