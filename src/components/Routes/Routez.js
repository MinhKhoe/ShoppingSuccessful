import React from 'react';
import Product from "../Product/Product";
import { Route, Routes } from "react-router-dom";
 
const Routez = ({productItems}) => {
  return (
    <div>
      <Routes>
        <Route>
          <Product productItems={productItems}/>
        </Route>
      </Routes>
    </div>
  );
};

export default Routez;
