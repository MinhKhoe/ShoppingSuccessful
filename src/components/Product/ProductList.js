import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Product.css";
const ProductList = () => {
  const [data, setData] = useState([]);
  const [show, setShow] = useState("none");

  const [subitem, setSubItem] = useState(null);

  const addproduct = () => {
    window.location.href = "/admin/addproduct"
  };
  
  const [name, setName] = useState("");

  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  useEffect(async () => {
    let result = await fetch("http://localhost:3000/products");
    result = await result.json();
    setData(result);
  }, []);
  console.warn("result", data);

  const deleteProduct = async (id) => {
    const res = await axios.delete(
      `http://localhost:3000/product/delete/${id}`
    );
    console.log("res", res);
    window.location.href = "/admin/productlist";
  };

  const editProduct = async (id) => {
    console.log("id", id)
    const body = {
      "username": name,
      "price": price,
      "description": description,
    };

    const res = await axios.put(
      `http://localhost:3000/product/edit/${id}`,
      body
    );
    console.log("res", res);

    //   window.location.href="/"
  };

  const showModal = (item) => {

    setSubItem(item);

    if (show === "none") return setShow("block");
    if (show === "block") return setShow("none");
  };

  return (
    <div className="product-list">
      <h1>PRODUCTLIST</h1>
      <Table className="content-table">
        <thead>
          <tr>
            <th>ID</th>

            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Images</th>
            <th>Add</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>

              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.description}</td>
              <td>
                <img
                  className="Images"
                  src={`http://localhost:3000/pics/${item.image}`}
                />
              </td>

              <td>
                <Link to="/admin/productlist">
                <button onClick={() => addproduct()} className="btn btn-add">
                  Add
                </button>
                </Link>
              </td>

              <td>
                <button onClick={() => showModal(item)} className="btn btn-edit">
                  Edit
                </button>
              </td>

              <td>
                <button
                  onClick={() => deleteProduct(item.id)}
                  className="btn btn-delete"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div
        style={{
          display: show,
          position: "absolute",
          width: "100%",
          height: "80%",
          backgroundColor: "#052142",
          zIndex: "5",
          Left: "50%",
          
        }}
      >
        <div className="form-edit">
          <br />
          <h1>EDIT PRODUCT</h1>
          <input
            type="text"
            className="form-control"
            placeholder="name"
            onChange={(e) => setName(e.target.value)}
          />
          <br />

          <input
            type="text"
            className="form-control"
            placeholder="price"
            onChange={(e) => setPrice(e.target.value)}
          />
          <br />
          <input
            type="text"
            className="form-control"
            placeholder="description"
            onChange={(e) => setDescription(e.target.value)}
          />
          <br />
          <button className="btn btn-primary" onClick={()=>editProduct(subitem.id)}>
            Edit Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
