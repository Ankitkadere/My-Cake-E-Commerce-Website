import React from "react";
import "../Productlist/sample.css";
 

const products = [
  {
    image:
      "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?fm=jpg&q=60&w=3000",
    title: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    category: "Snack",
    price: "28.85",
    oldPrice: "32.8",
    rating: 4,
    brand: "NestFood",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScHyw180jWMmjk4JXSNrMuwZUUvaJBkED0bg&s",
    title: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    category: "Snack",
    price: "24.95",
    oldPrice: "29.99",
    rating: 4.5,
    brand: "HealthyBites",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScHyw180jWMmjk4JXSNrMuwZUUvaJBkED0bg&s",
    title: "Seeds of Change Organic Quinoa, Brown, & Red Ricee",
    category: "Snack",
    price: "24.95",
    oldPrice: "29.99",
    rating: 4.5,
    brand: "HealthyBites",
  }, {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScHyw180jWMmjk4JXSNrMuwZUUvaJBkED0bg&s",
    title: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    category: "Snack",
    price: "24.95",
    oldPrice: "29.99",
    rating: 4.5,
    brand: "HealthyBites",
  },
  {
    image:
      "https://img.freepik.com/free-photo/assortment-pieces-cake_114579-79825.jpg?semt=ais_hybrid",
    title: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    category: "Dessert",
    price: "19.99",
    oldPrice: "22.50",
    rating: 4.3,
    brand: "SweetDelights",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2bjdjwJkFBsoJS3AdaB6b0lL8TR_Zz8GlHg&s",
    title: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    category: "Snack",
    price: "18.85",
    oldPrice: "22.00",
    rating: 4.2,
    brand: "NestFood",
  },
  {
    image: "https://img.lovepik.com/photo/50007/3966.jpg_wh860.jpg",
    title: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    category: "Snack",
    price: "28.85",
    oldPrice: "32.8",
    rating: 4.0,
    brand: "NestFood",
  },
  {
    image:
      "https://img.freepik.com/free-photo/assortment-pieces-cake_114579-79825.jpg?semt=ais_hybrid",
    title: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    category: "Dessert",
    price: "19.99",
    oldPrice: "22.50",
    rating: 4.3,
    brand: "SweetDelights",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2bjdjwJkFBsoJS3AdaB6b0lL8TR_Zz8GlHg&s",
    title: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    category: "Snack",
    price: "18.85",
    oldPrice: "22.00",
    rating: 4.2,
    brand: "NestFood",
  },
  {
    image: "https://img.lovepik.com/photo/50007/3966.jpg_wh860.jpg",
    title: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    category: "Snack",
    price: "28.85",
    oldPrice: "32.8",
    rating: 4.0,
    brand: "NestFood",
  },
];

const PopularProducts = () => {
  return (
    <>
      <div className="gridbox">
        <div className="grid">
          {products.map((product, index) => (
            <div className="card" key={index}>
              <span className="badge badge-hot">Hot</span>
              <img
                src={product.image}
                alt={product.title}
                className="product-image"
              />
              <div className="text-sm text-gray-500">{product.category}</div>
              <h2 className="text-lg font-semibold">{product.title}</h2>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, index) => (
                  <span
                    key={index}
                    className={
                      index < product.rating
                        ? "text-yellow-500"
                        : "text-gray-300"
                    }
                  >
                    ★
                  </span>
                ))}
                <span className="ml-2 text-gray-600">({product.rating})</span>
              </div>
              <div className="text-sm text-gray-500 mb-[-5px] mt-[-5px] additional">
                By {product.brand}
              </div>
              <div className="flex items-center justify-between adddown">
                <div className="flex">
                  <div className="text-lg font-bold text-green-600">
                    ${product.price}
                  </div>
                  <div className="text-sm text-gray-500 line-through">
                    ${product.oldPrice}
                  </div>
                </div>
                <button className="button">Add</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="containergrid">
        <div className="gridbox">
          <div className="grid">
            {/* Product Card 1 */}
            <div className="card">
              <span className="badge badge-hot">Hot</span>
              <img
                alt="Seeds of Change Organic Quinoa, Brown, & Red Rice"
                src="https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hvY29sYXRlJTIwY2FrZXxlbnwwfHwwfHx8MA%3D%3D"
              />
              <div className="text-sm text-gray-500">Snack</div>
              <h2 className="text-lg font-semibold">
                Seeds of Change Organic Quinoa, Brown, & Red Rice
              </h2>
              <div className="flex items-center mb-2">
                <span className="text-yellow-500">★</span>
                <span className="text-yellow-500">★</span>
                <span className="text-yellow-500">★</span>
                <span className="text-yellow-500">★</span>
                <span className="text-gray-300">★</span>
                <span className="ml-2 text-gray-600">(4.0)</span>
              </div>
              <div className="text-sm text-gray-500 mb-2 additional">
                By NestFood
              </div>
              <div className="flex items-center justify-between">
                <div className="flex">
                  <div className="text-lg font-bold text-green-600 ">
                    $28.85
                  </div>
                  <div className="text-sm text-gray-500 line-through ">
                    $32.8
                  </div>
                </div>
                <button className="button">Add</button>
              </div>
            </div>

            {/* Repeat for other products */}
            {/* Product Card 2, Product Card 3, etc. */}
          </div>{" "}
          <div className="grid">
            {/* Product Card 1 */}
            <div className="card">
              <span className="badge badge-hot">Hot</span>
              <img
                alt="Seeds of Change Organic Quinoa, Brown, & Red Rice"
                src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScHyw180jWMmjk4JXSNrMuwZUUvaJBkED0bg&s"
              />
              <div className="text-sm text-gray-500">Snack</div>
              <h2 className="text-lg font-semibold">
                Seeds of Change Organic Quinoa, Brown, & Red Rice
              </h2>
              <div className="flex items-center mb-2">
                <span className="text-yellow-500">★</span>
                <span className="text-yellow-500">★</span>
                <span className="text-yellow-500">★</span>
                <span className="text-yellow-500">★</span>
                <span className="text-gray-300">★</span>
                <span className="ml-2 text-gray-600">(4.0)</span>
              </div>
              <div className="text-sm text-gray-500 mb-2 additional">
                By NestFood
              </div>
              <div className="flex items-center justify-between">
                <div className="flex">
                  <div className="text-lg font-bold text-green-600 ">
                    $28.85
                  </div>
                  <div className="text-sm text-gray-500 line-through ">
                    $32.8
                  </div>
                </div>
                <button className="button">Add</button>
              </div>
            </div>

            {/* Repeat for other products */}
            {/* Product Card 2, Product Card 3, etc. */}
          </div>{" "}
          <div className="grid">
            {/* Product Card 1 */}
            <div className="card">
              <span className="badge badge-hot">Hot</span>
              <img
                alt="Seeds of Change Organic Quinoa, Brown, & Red Rice"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu7xq4WtfZhOnA-Ei0luwb-jS4rBOTW-qccg&s"
              />
              <div className="text-sm text-gray-500">Snack</div>
              <h2 className="text-lg font-semibold">
                Seeds of Change Organic Quinoa, Brown, & Red Rice
              </h2>
              <div className="flex items-center mb-2">
                <span className="text-yellow-500">★</span>
                <span className="text-yellow-500">★</span>
                <span className="text-yellow-500">★</span>
                <span className="text-yellow-500">★</span>
                <span className="text-gray-300">★</span>
                <span className="ml-2 text-gray-600">(4.0)</span>
              </div>
              <div className="text-sm text-gray-500 mb-2 additional">
                By NestFood
              </div>
              <div className="flex items-center justify-between">
                <div className="flex">
                  <div className="text-lg font-bold text-green-600 ">
                    $28.85
                  </div>
                  <div className="text-sm text-gray-500 line-through ">
                    $32.8
                  </div>
                </div>
                <button className="button">Add</button>
              </div>
            </div>

            {/* Repeat for other products */}
            {/* Product Card 2, Product Card 3, etc. */}
          </div>{" "}
          <div className="grid">
            {/* Product Card 1 */}
            <div className="card">
              <span className="badge badge-hot">Hot</span>
              <img
                alt="Seeds of Change Organic Quinoa, Brown, & Red Rice"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjeZja6rwo-FWhIu7L0RPJXm8i5K3HLC_yhQ&sg"
              />
              <div className="text-sm text-gray-500">Snack</div>
              <h2 className="text-lg font-semibold">
                Seeds of Change Organic Quinoa, Brown, & Red Rice
              </h2>
              <div className="flex items-center mb-2">
                <span className="text-yellow-500">★</span>
                <span className="text-yellow-500">★</span>
                <span className="text-yellow-500">★</span>
                <span className="text-yellow-500">★</span>
                <span className="text-gray-300">★</span>
                <span className="ml-2 text-gray-600">(4.0)</span>
              </div>
              <div className="text-sm text-gray-500 mb-2 additional">
                By NestFood
              </div>
              <div className="flex items-center justify-between">
                <div className="flex">
                  <div className="text-lg font-bold text-green-600 ">
                    $28.85
                  </div>
                  <div className="text-sm text-gray-500 line-through ">
                    $32.8
                  </div>
                </div>
                <button className="button">Add</button>
              </div>
            </div>

            {/* Repeat for other products */}
            {/* Product Card 2, Product Card 3, etc. */}
          </div>{" "}
          <div className="grid">
            {/* Product Card 1 */}
            <div className="card">
              <span className="badge badge-hot">Hot</span>
              <img
                alt="Seeds of Change Organic Quinoa, Brown, & Red Rice"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfTgKotkWVRyjyy_wvR9b4_wOgz0-nZ18t5w&s"
              />
              <div className="text-sm text-gray-500">Snack</div>
              <h2 className="text-lg font-semibold">
                Seeds of Change Organic Quinoa, Brown, & Red Rice
              </h2>
              <div className="flex items-center mb-2">
                <span className="text-yellow-500">★</span>
                <span className="text-yellow-500">★</span>
                <span className="text-yellow-500">★</span>
                <span className="text-yellow-500">★</span>
                <span className="text-gray-300">★</span>
                <span className="ml-2 text-gray-600">(4.0)</span>
              </div>
              <div className="text-sm text-gray-500 mb-2 additional">
                By NestFood
              </div>
              <div className="flex items-center justify-between">
                <div className="flex">
                  <div className="text-lg font-bold text-green-600 ">
                    $28.85
                  </div>
                  <div className="text-sm text-gray-500 line-through ">
                    $32.8
                  </div>
                </div>
                <button className="button">Add</button>
              </div>
            </div>

            {/* Repeat for other products */}
            {/* Product Card 2, Product Card 3, etc. */}
          </div>{" "}
          <div className="grid">
            {/* Product Card 1 */}
            <div className="card">
              <span className="badge badge-hot">Hot</span>
              <img
                alt="Seeds of Change Organic Quinoa, Brown, & Red Rice"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1SmIvMumrWCnSAVBxj6fU4bQJksbqW12ttPi5oD_MsI4oqaFBqkBUJu0-Xgd8dCqqiWc&usqp=CAU"
              />
              <div className="text-sm text-gray-500">Snack</div>
              <h2 className="text-lg font-semibold">
                Seeds of Change Organic Quinoa, Brown, & Red Rice
              </h2>
              <div className="flex items-center mb-2">
                <span className="text-yellow-500">★</span>
                <span className="text-yellow-500">★</span>
                <span className="text-yellow-500">★</span>
                <span className="text-yellow-500">★</span>
                <span className="text-gray-300">★</span>
                <span className="ml-2 text-gray-600">(4.0)</span>
              </div>
              <div className="text-sm text-gray-500 mb-2 additional">
                By NestFood
              </div>
              <div className="flex items-center justify-between">
                <div className="flex">
                  <div className="text-lg font-bold text-green-600 ">
                    $28.85
                  </div>
                  <div className="text-sm text-gray-500 line-through ">
                    $32.8
                  </div>
                </div>
                <button className="button">Add</button>
              </div>
            </div>

            {/* Repeat for other products */}
            {/* Product Card 2, Product Card 3, etc. */}
          </div>{" "}
          <div className="grid">
            {/* Product Card 1 */}
            <div className="card">
              <span className="badge badge-hot">Hot</span>
              <img
                alt="Seeds of Change Organic Quinoa, Brown, & Red Rice"
                src="https://i.pinimg.com/736x/2c/8f/8b/2c8f8b004b0ecff51112f14d47b95b3e.jpg"
              />
              <div className="text-sm text-gray-500">Snack</div>
              <h2 className="text-lg font-semibold">
                Seeds of Change Organic Quinoa, Brown, & Red Rice
              </h2>
              <div className="flex items-center mb-2">
                <span className="text-yellow-500">★</span>
                <span className="text-yellow-500">★</span>
                <span className="text-yellow-500">★</span>
                <span className="text-yellow-500">★</span>
                <span className="text-gray-300">★</span>
                <span className="ml-2 text-gray-600">(4.0)</span>
              </div>
              <div className="text-sm text-gray-500 mb-2 additional">
                By NestFood
              </div>
              <div className="flex items-center justify-between">
                <div className="flex">
                  <div className="text-lg font-bold text-green-600 ">
                    $28.85
                  </div>
                  <div className="text-sm text-gray-500 line-through ">
                    $32.8
                  </div>
                </div>
                <button className="button">Add</button>
              </div>
            </div>

            {/* Repeat for other products */}
            {/* Product Card 2, Product Card 3, etc. */}
          </div>{" "}
          <div className="grid">
            {/* Product Card 1 */}
            <div className="card">
              <span className="badge badge-hot">Hot</span>
              <img
                alt="Seeds of Change Organic Quinoa, Brown, & Red Rice"
                src="https://www.engineerscakeandcafe.in/wp-content/uploads/2023/04/BF.jpg"
              />
              <div className="text-sm text-gray-500">Snack</div>
              <h2 className="text-lg font-semibold">
                Seeds of Change Organic Quinoa, Brown, & Red Rice
              </h2>
              <div className="flex items-center mb-2">
                <span className="text-yellow-500">★</span>
                <span className="text-yellow-500">★</span>
                <span className="text-yellow-500">★</span>
                <span className="text-yellow-500">★</span>
                <span className="text-gray-300">★</span>
                <span className="ml-2 text-gray-600">(4.0)</span>
              </div>
              <div className="text-sm text-gray-500 mb-2 additional">
                By NestFood
              </div>
              <div className="flex items-center justify-between">
                <div className="flex">
                  <div className="text-lg font-bold text-green-600 ">
                    $28.85
                  </div>
                  <div className="text-sm text-gray-500 line-through ">
                    $32.8
                  </div>
                </div>
                <button className="button">Add</button>
              </div>
            </div>

            {/* Repeat for other products */}
            {/* Product Card 2, Product Card 3, etc. */}
          </div>{" "}
          <div className="grid">
            {/* Product Card 1 */}
            <div className="card">
              <span className="badge badge-hot">Hot</span>
              <img
                alt="Seeds of Change Organic Quinoa, Brown, & Red Rice"
                src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZPz6JDTtF-o3YvBticopE1qUlvP9KwOuh9g&s"
              />
              <div className="text-sm text-gray-500">Snack</div>
              <h2 className="text-lg font-semibold">
                Seeds of Change Organic Quinoa, Brown, & Red Rice
              </h2>
              <div className="flex items-center mb-2">
                <span className="text-yellow-500">★</span>
                <span className="text-yellow-500">★</span>
                <span className="text-yellow-500">★</span>
                <span className="text-yellow-500">★</span>
                <span className="text-gray-300">★</span>
                <span className="ml-2 text-gray-600">(4.0)</span>
              </div>
              <div className="text-sm text-gray-500 mb-2 additional">
                By NestFood
              </div>
              <div className="flex items-center justify-between">
                <div className="flex">
                  <div className="text-lg font-bold text-green-600 ">
                    $28.85
                  </div>
                  <div className="text-sm text-gray-500 line-through ">
                    $32.8
                  </div>
                </div>
                <button className="button">Add</button>
              </div>
            </div>

            {/* Repeat for other products */}
            {/* Product Card 2, Product Card 3, etc. */}
          </div>{" "}
          <div className="grid">
            {/* Product Card 1 */}
            <div className="card">
              <span className="badge badge-hot">Hot</span>
              <img
                alt="Seeds of Change Organic Quinoa, Brown, & Red Rice"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTON51ZB_r8vBu25f-zlJebQVN582lzO33lXA&s"
              />
              <div className="text-sm text-gray-500">Snack</div>
              <h2 className="text-lg font-semibold">
                Seeds of Change Organic Quinoa, Brown, & Red Rice
              </h2>
              <div className="flex items-center mb-2">
                <span className="text-yellow-500">★</span>
                <span className="text-yellow-500">★</span>
                <span className="text-yellow-500">★</span>
                <span className="text-yellow-500">★</span>
                <span className="text-gray-300">★</span>
                <span className="ml-2 text-gray-600">(4.0)</span>
              </div>
              <div className="text-sm text-gray-500 mb-2 additional">
                By NestFood
              </div>
              <div className="flex items-center justify-between">
                <div className="flex">
                  <div className="text-lg font-bold text-green-600 ">
                    $28.85
                  </div>
                  <div className="text-sm text-gray-500 line-through ">
                    $32.8
                  </div>
                </div>
                <button className="button">Add</button>
              </div>
            </div>

            {/* Repeat for other products */}
            {/* Product Card 2, Product Card 3, etc. */}
          </div>{" "}
          <div className="grid">
            {/* Product Card 1 */}
            <div className="card">
              <span className="badge badge-hot">Hot</span>
              <img
                alt="Seeds of Change Organic Quinoa, Brown, & Red Rice"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXq-yZk8IMzoonAPWx4ja9ppWQdcyQ5u3t3A&s"
              />
              <div className="text-sm text-gray-500">Snack</div>
              <h2 className="text-lg font-semibold">
                Seeds of Change Organic Quinoa, Brown, & Red Rice
              </h2>
              <div className="flex items-center mb-2">
                <span className="text-yellow-500">★</span>
                <span className="text-yellow-500">★</span>
                <span className="text-yellow-500">★</span>
                <span className="text-yellow-500">★</span>
                <span className="text-gray-300">★</span>
                <span className="ml-2 text-gray-600">(4.0)</span>
              </div>
              <div className="text-sm text-gray-500 mb-2 additional">
                By NestFood
              </div>
              <div className="flex items-center justify-between">
                <div className="flex">
                  <div className="text-lg font-bold text-green-600 ">
                    $28.85
                  </div>
                  <div className="text-sm text-gray-500 line-through ">
                    $32.8
                  </div>
                </div>
                <button className="button">Add</button>
              </div>
            </div>

            {/* Repeat for other products */}
            {/* Product Card 2, Product Card 3, etc. */}
          </div>{" "}
          <div className="grid">
            {/* Product Card 1 */}
            <div className="card">
              <span className="badge badge-hot">Hot</span>
              <img
                alt="Seeds of Change Organic Quinoa, Brown, & Red Rice"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3nsyYPzXCbG8FPF1SflD0kxhGWpohIvl5dw&s"
              />
              <div className="text-sm text-gray-500">Snack</div>
              <h2 className="text-lg font-semibold">
                Seeds of Change Organic Quinoa, Brown, & Red Rice
              </h2>
              <div className="flex items-center mb-2">
                <span className="text-yellow-500">★</span>
                <span className="text-yellow-500">★</span>
                <span className="text-yellow-500">★</span>
                <span className="text-yellow-500">★</span>
                <span className="text-gray-300">★</span>
                <span className="ml-2 text-gray-600">(4.0)</span>
              </div>
              <div className="text-sm text-gray-500 mb-2 additional">
                By NestFood
              </div>
              <div className="flex items-center justify-between">
                <div className="flex">
                  <div className="text-lg font-bold text-green-600 ">
                    $28.85
                  </div>
                  <div className="text-sm text-gray-500 line-through ">
                    $32.8
                  </div>
                </div>
                <button className="button">Add</button>
              </div>
            </div>

            {/* Repeat for other products */}
            {/* Product Card 2, Product Card 3, etc. */}
          </div>{" "}
          <div className="grid">
            {/* Product Card 1 */}
            <div className="card">
              <span className="badge badge-hot">Hot</span>
              <img
                alt="Seeds of Change Organic Quinoa, Brown, & Red Rice"
                src="https://media.istockphoto.com/id/1370520449/photo/slice-of-chocolate-cake-with-glaze.jpg?s=612x612&w=0&k=20&c=KK-h7w4l0FNA0YMWvkr1X8UrAAB77z0f5tTByBYgReM="
              />
              <div className="text-sm text-gray-500">Snack</div>
              <h2 className="text-lg font-semibold">
                Seeds of Change Organic Quinoa, Brown, & Red Rice
              </h2>
              <div className="flex items-center mb-2">
                <span className="text-yellow-500">★</span>
                <span className="text-yellow-500">★</span>
                <span className="text-yellow-500">★</span>
                <span className="text-yellow-500">★</span>
                <span className="text-gray-300">★</span>
                <span className="ml-2 text-gray-600">(4.0)</span>
              </div>
              <div className="text-sm text-gray-500 mb-2 additional">
                By NestFood
              </div>
              <div className="flex items-center justify-between">
                <div className="flex">
                  <div className="text-lg font-bold text-green-600 ">
                    $28.85
                  </div>
                  <div className="text-sm text-gray-500 line-through ">
                    $32.8
                  </div>
                </div>
                <button className="button">Add</button>
              </div>
            </div>

            {/* Repeat for other products */}
            {/* Product Card 2, Product Card 3, etc. */}
          </div>{" "}
          <div className="grid">
            {/* Product Card 1 */}
            <div className="card">
              <span className="badge badge-hot">Hot</span>
              <img
                alt="Seeds of Change Organic Quinoa, Brown, & Red Rice"
                src=" https://i0.wp.com/cakefizz.com/wp-content/uploads/2023/12/CKBF01-1.webp"
              />
              <div className="text-sm text-gray-500">Snack</div>
              <h2 className="text-lg font-semibold">
                Seeds of Change Organic Quinoa, Brown, & Red Rice
              </h2>
              <div className="flex items-center mb-2">
                <span className="text-yellow-500">★</span>
                <span className="text-yellow-500">★</span>
                <span className="text-yellow-500">★</span>
                <span className="text-yellow-500">★</span>
                <span className="text-gray-300">★</span>
                <span className="ml-2 text-gray-600">(4.0)</span>
              </div>
              <div className="text-sm text-gray-500 mb-2 additional">
                By NestFood
              </div>
              <div className="flex items-center justify-between">
                <div className="flex">
                  <div className="text-lg font-bold text-green-600 ">
                    $28.85
                  </div>
                  <div className="text-sm text-gray-500 line-through ">
                    $32.8
                  </div>
                </div>
                <button className="button">Add</button>
              </div>
            </div>

            {/* Repeat for other products */}
            {/* Product Card 2, Product Card 3, etc. */}
          </div>{" "}
          <div className="grid">
            {/* Product Card 1 */}
            <div className="card">
              <span className="badge badge-hot">Hot</span>
              <img
                alt="Seeds of Change Organic Quinoa, Brown, & Red Rice"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkPHN7XscGo6sNbVVKgNkV6sDO7LTYj6Nklw&s"
              />
              <div className="text-sm text-gray-500">Snack</div>
              <h2 className="text-lg font-semibold">
                Seeds of Change Organic Quinoa, Brown, & Red Rice
              </h2>
              <div className="flex items-center mb-2">
                <span className="text-yellow-500">★</span>
                <span className="text-yellow-500">★</span>
                <span className="text-yellow-500">★</span>
                <span className="text-yellow-500">★</span>
                <span className="text-gray-300">★</span>
                <span className="ml-2 text-gray-600">(4.0)</span>
              </div>
              <div className="text-sm text-gray-500 mb-2 additional">
                By NestFood
              </div>
              <div className="flex items-center justify-between">
                <div className="flex">
                  <div className="text-lg font-bold text-green-600 ">
                    $28.85
                  </div>
                  <div className="text-sm text-gray-500 line-through ">
                    $32.8
                  </div>
                </div>
                <button className="button">Add</button>
              </div>
            </div>

            {/* Repeat for other products */}
            {/* Product Card 2, Product Card 3, etc. */}
          </div>{" "}
          <div className="grid">
            {/* Product Card 1 */}
            <div className="card">
              <span className="badge badge-hot">Hot</span>
              <img
                alt="Seeds of Change Organic Quinoa, Brown, & Red Rice"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScOoOttqXLY9uQu49vEbbgk8y-4Y6OfgxalQ&s"
              />
              <div className="text-sm text-gray-500">Snack</div>
              <h2 className="text-lg font-semibold">
                Seeds of Change Organic Quinoa, Brown, & Red Rice
              </h2>
              <div className="flex items-center mb-2">
                <span className="text-yellow-500">★</span>
                <span className="text-yellow-500">★</span>
                <span className="text-yellow-500">★</span>
                <span className="text-yellow-500">★</span>
                <span className="text-gray-300">★</span>
                <span className="ml-2 text-gray-600">(4.0)</span>
              </div>
              <div className="text-sm text-gray-500 mb-2 additional">
                By NestFood
              </div>
              <div className="flex items-center justify-between">
                <div className="flex">
                  <div className="text-lg font-bold text-green-600 ">
                    $28.85
                  </div>
                  <div className="text-sm text-gray-500 line-through ">
                    $32.8
                  </div>
                </div>
                <button className="button">Add</button>
              </div>
            </div>

            {/* Repeat for other products */}
            {/* Product Card 2, Product Card 3, etc. */}
          </div>{" "}
          <div className="grid">
            {/* Product Card 1 */}
            <div className="card">
              <span className="badge badge-hot">Hot</span>
              <img
                alt="Seeds of Change Organic Quinoa, Brown, & Red Rice"
                src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0tKZsdhIfIEKvl4iGo-dqY1GJSNxVZw-hLQ&s"
              />
              <div className="text-sm text-gray-500">Snack</div>
              <h2 className="text-lg font-semibold">
                Seeds of Change Organic Quinoa, Brown, & Red Rice
              </h2>
              <div className="flex items-center mb-2">
                <span className="text-yellow-500">★</span>
                <span className="text-yellow-500">★</span>
                <span className="text-yellow-500">★</span>
                <span className="text-yellow-500">★</span>
                <span className="text-gray-300">★</span>
                <span className="ml-2 text-gray-600">(4.0)</span>
              </div>
              <div className="text-sm text-gray-500 mb-2 additional">
                By NestFood
              </div>
              <div className="flex items-center justify-between">
                <div className="flex">
                  <div className="text-lg font-bold text-green-600 ">
                    $28.85
                  </div>
                  <div className="text-sm text-gray-500 line-through ">
                    $32.8
                  </div>
                </div>
                <button className="button">Add</button>
              </div>
            </div>

            {/* Repeat for other products */}
            {/* Product Card 2, Product Card 3, etc. */}
          </div>{" "}
          <div className="grid">
            {/* Product Card 1 */}
            <div className="card">
              <span className="badge badge-hot">Hot</span>
              <img
                alt="Seeds of Change Organic Quinoa, Brown, & Red Rice"
                src="https://img.freepik.com/free-photo/assortment-pieces-cake_114579-79825.jpg?semt=ais_hybrid"
              />
              <div className="text-sm text-gray-500">Snack</div>
              <h2 className="text-lg font-semibold">
                Seeds of Change Organic Quinoa, Brown, & Red Rice
              </h2>
              <div className="flex items-center mb-2">
                <span className="text-yellow-500">★</span>
                <span className="text-yellow-500">★</span>
                <span className="text-yellow-500">★</span>
                <span className="text-yellow-500">★</span>
                <span className="text-gray-300">★</span>
                <span className="ml-2 text-gray-600">(4.0)</span>
              </div>
              <div className="text-sm text-gray-500 mb-2 additional">
                By NestFood
              </div>
              <div className="flex items-center justify-between">
                <div className="flex">
                  <div className="text-lg font-bold text-green-600 ">
                    $28.85
                  </div>
                  <div className="text-sm text-gray-500 line-through ">
                    $32.8
                  </div>
                </div>
                <button className="button">Add</button>
              </div>
            </div>

            {/* Repeat for other products */}
            {/* Product Card 2, Product Card 3, etc. */}
          </div>{" "}
          <div className="grid">
            {/* Product Card 1 */}
            <div className="card">
              <span className="badge badge-hot">Hot</span>
              <img
                alt="Seeds of Change Organic Quinoa, Brown, & Red Rice"
                src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2bjdjwJkFBsoJS3AdaB6b0lL8TR_Zz8GlHg&s"
              />
              <div className="text-sm text-gray-500">Snack</div>
              <h2 className="text-lg font-semibold">
                Seeds of Change Organic Quinoa, Brown, & Red Rice
              </h2>
              <div className="flex items-center mb-2">
                <span className="text-yellow-500">★</span>
                <span className="text-yellow-500">★</span>
                <span className="text-yellow-500">★</span>
                <span className="text-yellow-500">★</span>
                <span className="text-gray-300">★</span>
                <span className="ml-2 text-gray-600">(4.0)</span>
              </div>
              <div className="text-sm text-gray-500 mb-2 additional">
                By NestFood
              </div>
              <div className="flex items-center justify-between">
                <div className="flex">
                  <div className="text-lg font-bold text-green-600 ">
                    $28.85
                  </div>
                  <div className="text-sm text-gray-500 line-through ">
                    $32.8
                  </div>
                </div>
                <button className="button">Add</button>
              </div>
            </div>

            {/* Repeat for other products */}
            {/* Product Card 2, Product Card 3, etc. */}
          </div>{" "}
          <div className="grid">
            {/* Product Card 1 */}
            <div className="card">
              <span className="badge badge-hot">Hot</span>
              <img
                alt="Seeds of Change Organic Quinoa, Brown, & Red Rice"
                src="https://img.lovepik.com/photo/50007/3966.jpg_wh860.jpg"
              />
              <div className="text-sm text-gray-500">Snack</div>
              <h2 className="text-lg font-semibold">
                Seeds of Change Organic Quinoa, Brown, & Red Rice
              </h2>
              <div className="flex items-center mb-2">
                <span className="text-yellow-500">★</span>
                <span className="text-yellow-500">★</span>
                <span className="text-yellow-500">★</span>
                <span className="text-yellow-500">★</span>
                <span className="text-gray-300">★</span>
                <span className="ml-2 text-gray-600">(4.0)</span>
              </div>
              <div className="text-sm text-gray-500 mb-2 additional">
                By NestFood
              </div>
              <div className="flex items-center justify-between">
                <div className="flex">
                  <div className="text-lg font-bold text-green-600 ">
                    $28.85
                  </div>
                  <div className="text-sm text-gray-500 line-through ">
                    $32.8
                  </div>
                </div>
                <button className="button">Add</button>
              </div>
            </div>

            {/* Repeat for other products */}
            {/* Product Card 2, Product Card 3, etc. */}
          </div>{" "}
        </div>
      </div>
    </>
  );
};

export default PopularProducts;
