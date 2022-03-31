import React, {useState} from 'react'

const AddProduct = () => {

// const [category,setCategory]=useState("");
const [name,setName]=useState("");
const [file,setFile]=useState("");
const [price,setPrice]=useState("");
const [description, setDescription]=useState("");


   async function addProduct(){

        let item = {name,file,price,description}
        console.warn(item)
        var input = document.querySelector('input[type="file"]');

        var formData = new FormData();
        // formData.append('category_id',item.category);
        formData.append('name',item.name);
        formData.append('price',item.price);
        formData.append('file',input.files[0])
        formData.append('description',item.description);

        const refreshPage = ()=>{
            window.location.reload();
         }

        let result = await fetch('http://localhost:3000/product/add', {
            method:'POST',
            // body:JSON.stringify(item),
            headers: { 
                //'Content-Type':'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: formData
                // new URLSearchParams({
            //     'category_id': item.category,
            //     'name': item.name,
            //     'description': item.description,
            //     'price': item.price,
            //     'file': item.file,
                
            // })
        });
        result = await result.json();
        console.log(result);
        alert("Data has been saved");
        refreshPage();
        window.location.href="/admin/productlist"
    }

  return (
    <div>
      
    <div className="form-add">
        {/* <br/>
        <input type="text" 
        className="form-control" 
        placeholder="category"
        onChange={(e) => setCategory(e.target.value)} 
        />*/}
        <br/>
        <input type="text" 
        className="form-control" 
        placeholder="name"
        onChange={(e) => setName(e.target.value)}
        /><br/>
        <input type="file" 
        className="form-control" 
        placeholder="file"
        onChange={(e) => setFile(e.target.value)}
        /><br/>
        <input type="text" 
        className="form-control" 
        placeholder="price"
        onChange={(e) => setPrice(e.target.value)}
        /><br/>
        <input type="text" 
        className="form-control" 
        placeholder="description"
        onChange={(e) => setDescription(e.target.value)}
        /><br/>
        <button className="btn btn-primary"
        onClick={addProduct}
        >Add Product</button>
    </div>

    </div>
  )
}

export default AddProduct
