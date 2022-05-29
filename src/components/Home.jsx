import React from "react";
import productimg from "../mobile_product.jpg";
import cartimg from "../cart.png"

function Home() {
  return (
    <div>
        <div className="add_to_cart">
          <img src={cartimg} alt="cart"/>
        </div>
      <h1>Shopping Cart</h1>
      <div className="cart_wrapper">
        <div className="img_wrapper item">
          <img src={productimg} alt="product" />
        </div>
      </div>

      <div className="text_wrapper item">
        <span>I-phone</span>
        <span>Price:$1000.00</span>
      </div>
      <div className="btn_wrapper item">
        <button>Add to Cart</button>
      </div>
    </div>
  );
}

export default Home;
