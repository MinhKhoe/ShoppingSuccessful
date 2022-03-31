import React from 'react';

import "./Product.css";

const Product = ({productItem, handleAddProduct}) => {
  console.log({productItem});
  return (
    
    <div className="product">
      {productItem.map((item)=> ( (item.id === productItem.id),
        <div key={item.id} className="card">
          <div>
            
            <img className="product-image"
            src={`http://localhost:3000/pics/${item.image}`} 
            alt ={item.name}
            />
          </div>
          <div>
            <h3 className="product-name">
              {item.name}
            </h3>
          </div>
          <div className="product-price"> ${item.price}</div>
        

          <div>
            <button className="product-add-button" onClick={() => handleAddProduct(item)}
            >
              Add to cart</button>
          </div>
        
        </div>
      ))};
      
    </div>
  );
  
};

export default Product
