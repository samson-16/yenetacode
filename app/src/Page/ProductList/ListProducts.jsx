import React, { useEffect, useState } from "react";
import {
  deleteProductService,
  getAllProductService,
} from "../../service/ProductService";
import { Button, Card, CardFooter, Col, Container, Row, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ListProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getAll();
  }, []);
  const getAll = async () => {
    setLoading(true);
    try {
      const { data } = await getAllProductService();
      if (data.data) setProducts(data.data);
    } catch (error) {
      toast("Error Occurred, Please try again!!",{type:"error"})      
    }
    setLoading(false);
  };

  const onDelete = async (id) => {
    setLoading(true);
    try {
      const { data } = await deleteProductService(id);
      if (data) {getAll()
        toast("Product deleted successfully!!",{type:"success"})};
    } catch (error) {
      toast("Error Occurred, Please try again!!",{type:"error"})      
    }
    setLoading(false);
  };
  
  return (
    <div>
      <Container>
        {!products.length && <p className="text-danger"> No Product Found</p> }
        {loading ? <Spinner />:
        <Row>
          {products?.map((product) => (
            <Col key={product?.id} style={{ marginTop: "10px" }} sm={12} md={6} lg={4}>
              <Card>
                <Card.Body>
                  <Card.Title>{product?.name}</Card.Title>
                  <Card.Text>{product?.description}</Card.Text>
                  <Card.Text>ETB:{product?.price}</Card.Text>
                  <Card.Text
                    className={`bg-${
                      product?.quantity_in_stock > 10 ? "success" : "warning"
                    } rounded p-2 text-white`}
                  >
                     {product?.quantity_in_stock}
                  </Card.Text>
                </Card.Body>
                <CardFooter className="d-flex justify-content-between">
                  <Button
                    onClick={() => navigate("/register", { state: product })}
                    className="btn btn-info text-white"
                  >
                    Edit
                  </Button>
                  <Button
                    onClick={() => onDelete(product.id)}
                    className="btn btn-danger text-white"
                  >
                    Delete
                  </Button>
                </CardFooter>
              </Card>
            </Col>
          ))}
        </Row>}
      </Container>
    </div>
  );
};

export default ListProducts;
