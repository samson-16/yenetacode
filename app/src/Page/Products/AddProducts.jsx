import React, { useEffect, useState } from "react";
import FormInput from "../../components/Form.Input";

import Container from "react-bootstrap/Container";
import {  Button, Form } from "react-bootstrap";
import {
  addProductService,
  updateProductService,
} from "../../service/ProductService";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddProducts = () => {
  const { state } = useLocation();
  const [products, setProduct] = useState({
    name: "",
    description: "",
    price: 0,
    quantity_in_stock: 0,
    available:false
  });
  const navigate = useNavigate();

  const onChange = ({ currentTarget }) => {
    setProduct({ ...products, [currentTarget.name]: currentTarget.value });
  };

  useEffect(() => {
    if (state) {
      setProduct(state);
    }
  }, [state?.id]);

  const onClick = async (e) => {
    e.preventDefault();
    try {
      const { data } = products?.id
        ? await updateProductService(products)
        : await addProductService(products);

      if (data) {
        toast(data.data,{type:"success"})
        navigate("/")};
    } catch (error) {
      toast("Error Occurred, Please try again!!",{type:"error"})      
    }
  };

  
  return (
    <div className=" d-flex justify-content-center align-items-center mt-5 overflow-hidden">
      <Container className="d-flex justify-content-center align-items-center">
        <Form className="w-50 p-4 round shadow" onSubmit={onClick}>
          <FormInput
            onChange={onChange}
            value={products.name}
            label="Product Name"
            type={"text"}
            name="name"
          />
          <FormInput
            onChange={onChange}
            value={products.description}
            name="description"
            label="Description"
            type={"text"}
          />
          <FormInput
            onChange={onChange}
            value={products.price}
            label="Price"
            name={"price"}
            type={"number"}
          />
          <FormInput
            onChange={onChange}
            value={products.quantity_in_stock}
            name={"quantity_in_stock"}
            label="Quantity in Stock"
            type={"number"}
          />
          
          <Form.Check
            type="switch"
            name="available"
            label="Out of stock"
            onChange={(e)=>setProduct({...products,available:e.currentTarget.checked})}
            checked={products.available}
            
          />

          <Button variant="primary" onClick={onClick} type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default AddProducts;
