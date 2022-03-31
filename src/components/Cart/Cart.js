import React, { useEffect } from 'react'
import "./Cart.css";

const Cart = ({ cartItems, productItem, handleAddProduct, handleRemoveProduct }) => {
  const localCartItems = (localStorage.getItem("cart")) ? JSON.parse(localStorage.getItem("cart")) : []
  //  
  useEffect(() => {
    console.log(
      `123`, productItem
    );
  }, [])

  useEffect(() => {
    console.log(
      `cartItams`, localCartItems
    );
    localCartItems.forEach(element => {
      console.log("abc", Number(element.price) * 100)
      console.log("quantity", Number(element.quantity))
    });
  }, [localCartItems])
  var total = 0;
  // const totalPrice = localCartItems.forEach((item) => total += Number(item.quantity) * Number(item.price)
  // );
  // console.log("total", total)

  const totalPrice = localCartItems.reduce((total,item) => total += Number(item.quantity) * Number(item.price),
  0);


  return (
    <div className="cart-items">
      <div className="cart-items-header">Cart Items</div>



      {localCartItems.length === 0 && (
        <div className="cart-items-empty">No items are added.</div>
      )}

      <div className="cart-items-handle">
        {localCartItems.map((item) => ((item.id === productItem.id),
          <div key={item.id} className="cart-items-list">
            <img className="cart-items-image"
              src={`http://localhost:3000/pics/${item.id}.jpg`}
              alt={item.name}
            />
            <div className="cart-items-name">
              {item.name}

            </div>

            <div className="cart-items.function">
              <button className="cart-items-add"
                onClick={() => handleAddProduct(item)}
              >
                +</button>
              <button className="cart-items-remove"
                onClick={() => handleRemoveProduct(item)}
              >
                -</button>

            </div>

            <div className="cart-items-price">
              {item.quantity} * ${item.price}

            </div>
          </div>
        ))}
        <div className="cart-items-total-price-name">
          Total price
          <div className="cart-items-total-price"> ${totalPrice}

          </div>
        </div>
      </div>


    </div>
  )
}



export default Cart 
