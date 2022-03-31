import React, { useState, useEffect } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Product from "./components/Product/Product";
import Cart from "./components/Cart/Cart";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import AddProduct from "./components/Product/AddProduct";
// import DeleteProduct from "./components/Product/DeleteProduct";
import ProductList from "./components/Product/ProductList";
import "./App.css";





const App = () => {

  const [productItem, setProductItem] = useState([]);

  const [cartItems, setCartItems] = useState([]);

  const [postLists, setPostList] = useState([]);

  const [token, setToken] = useState();

  if (!token) {
    <Login setToken={setToken} />
  }

  useEffect(() => {
    console.log(
      `App.js : cartItems`, cartItems
    );

    // Luu vo localStorage
  }, [cartItems])

  useEffect(() => {
    async function fetchPostList() {

      let responseJSON = null;
      let response = null;
      const requestUrl = 'http://localhost:3000/products';

      response = await fetch(requestUrl, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      responseJSON = await response.json();
      console.log(responseJSON);




      setProductItem(responseJSON);


    }

    fetchPostList();
  }, []);

  console.log(productItem);

  const handleAddProduct = (productItem) => {
    
    const localCart = (localStorage.getItem("cart")) ? JSON.parse(localStorage.getItem("cart")) : []
    console.log("localCart", localCart)
    const index = localCart.findIndex((item) => item.id === productItem.id);
    const ProductExist = localCart.find((item) => item.id === productItem.id);
    if (ProductExist) {
     
      // setCartItems(cartItems.map((item) => item.id === productItem.id ?
      //   { ...ProductExist } : item)
      // );
      // localStorage.setItem("cart", JSON.stringify(cartItems.map((item) => item.id === productItem.id ?
      //   { ...ProductExist } : item)))
      
      localCart[index].quantity+=1
      // console.log("productItem : ", productItem);
      console.log("productExist : ", ProductExist.id)
      // localCart.push(productItem)
      console.log("localcart : ",localCart)
      localStorage.setItem("cart", JSON.stringify(localCart))

    }
    else {
      
      // setCartItems([...cartItems, { ...productItem, product_quantity: 1 }]);
      // localStorage.setItem("cart", JSON.stringify([...cartItems, { ...productItem, product_quantity: 1 }]))
      console.log("productItem : ", productItem);
      productItem["quantity"]=1
      localCart.push(productItem)
      localStorage.setItem("cart",JSON.stringify(localCart))


    }

  };

  // const handleRemoveProduct = (productItem) => {
  //   const ProductExist = cartItems.find((item) => item.id === productItem.id);
  //   if(ProductExist.available_quantity === 1){
  //     setCartItems(cartItems.filter((item) => item.id !== productItem.id));
  //   } else {
  //     setCartItems(
  //       cartItems.map((item) => 
  //         item.id === productItem.id 
  //           ? {...ProductExist, available_quantity: ProductExist.available_quantity - 1}
  //           : item
  //       )
  //     );
  //   }
  // };

  // const handleAddProduct = (productItem,cartItems)=>{

  //   const ProductExist = productItem.find((item) => item.id === productItem.id);
  //   if(ProductExist){
  //     setCartItems(cartItems.map((item) => item.id === productItem.id ?
  //     {...ProductExist, product_quantity: item.product_quantity + 1}: item)
  //     );
  //     console.log(ProductExist);
  //   }
  //   else{
  //     setCartItems([...productItem, {...productItem,available_quantity: 1}]);
  //     console.log(ProductExist);
  //   }


  // };

  let handleRemoveProduct = (item) => {
    const ProductExist = productItem.find((item) => item.id === productItem.id);
    if (ProductExist.available_quantity !== 1) {
      setProductItem(productItem.filter((item) => item.id !== productItem.id));
    } else {
      setProductItem(
        productItem.map((item) => item.id
          ? { ...ProductExist, available_quantity: ProductExist.available_quantity - 1 }
          : item
        )
      );
    }
  };





  return (
    <Router>

      <Navbar />

      {/* <Routez /> */}
      <Routes
        productItem={productItem}
        cartItems={cartItems}
        handleAddProduct={handleAddProduct}
        handleRemoveProduct={handleRemoveProduct}
      >
        <Route exact path='/' element={<Home />} />

        <Route exact path='/product' element={<Product productItem={productItem} handleAddProduct={handleAddProduct} />} />

        <Route exact path='/cart' element={<Cart cartItems={cartItems} productItem={productItem}
          handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} />} />

        <Route exact path='/login' element={<Login />} />

        <Route exact path='/signup' element={<Signup />} />

        <Route path='/admin'
        // element={<Admin/>} 
        />

        <Route exact path='/admin/addproduct' element={<AddProduct />}
        />

        

        <Route exact path='/admin/productlist' element={<ProductList />}
        />

      </Routes>

    </Router>
  );
};

export default App;
