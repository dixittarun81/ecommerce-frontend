import React, { useEffect, useState } from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../actions/product";
import Layout from "../components/Layout";
import Input from "../components/Ui/Input";
import NewModal from "../components/Ui/NewModal";
import { generalPublicUrl } from "../urlConfig";
import "./Products.css";

export default function Products(props) {
  const Category = useSelector((state) => state.category);
  const Product = useSelector((state) => state.product);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [productPictures, setProductPictures] = useState([]);
  const [productDetailModal, setProductDetailModal] = useState(false);
  const [productDetails, setProductDetails] = useState(null);
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();

  const handleClose = () => {
    const form = new FormData();

    form.append("name", name);
    form.append("quantity", quantity);
    form.append("price", price);
    form.append("description", description);
    form.append("category", category);

    for (let productPicture of productPictures) {
      form.append("productPicture", productPicture);
    }

    dispatch(addProduct(form));
    setShow(false);
  };

  const handleShow = () => setShow(true);

  const createCategoryList = (categories, options = []) => {
    for (let cat of categories) {
      options.push({ value: cat._id, name: cat.name });
      if (cat.children.length > 0) {
        createCategoryList(cat.children, options);
      }
    }

    return options;
  };

  const handleProductPictures = (e) => {
    setProductPictures([...productPictures, e.target.files[0]]);
  };

  const renderProducts = () => {
    return (
      <Table style={{ fontSize: 14 }} responsive="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {Product.products.length > 0
            ? Product.products.map((product) => (
                <tr
                  key={product._id}
                  onClick={() => showProductDetailsModal(product)}
                >
                  <td>1</td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.quantity}</td>

                  <td>{product.category.name}</td>
                </tr>
              ))
            : null}
        </tbody>
      </Table>
    );
  };

  const renderAddProductModal = () => { 
    return (<NewModal
      show={show}
      handleClose={handleClose}
      modalTitle={"Add New Product"}
    >
      <Input
        label="Name"
        value={name}
        placeholder={"Product Name"}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        label="Quantity"
        value={quantity}
        placeholder={"Quantity"}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <Input
        label="Price"
        value={price}
        placeholder={"Price"}
        onChange={(e) => setPrice(e.target.value)}
      />
      <Input
        label="Description"
        value={description}
        placeholder={"Description"}
        onChange={(e) => setDescription(e.target.value)}
      />

      <select
        className="form-control"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option>Select Category</option>
        {createCategoryList(Category.categories).map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>

      {productPictures.length > 0
        ? productPictures.map((pic, index) => (
            <div key={index}>{pic.name})</div>
          ))
        : ""}

      <input
        type="file"
        name="productPicture"
        onChange={handleProductPictures}
      />
    </NewModal>)
    ;
  };

  const handleCloseProductDetailsModal = () => {
    setProductDetailModal(false);
  };

  const showProductDetailsModal = (product) => {
    setProductDetails(product);
    setProductDetailModal(true);
  };

  const renderProductDetailsModal = () => {
    if (!productDetails) {
      return null;
    }

    return (
      <NewModal
        size="lg"
        show={productDetailModal}
        handleClose={handleCloseProductDetailsModal}
        modalTitle={"Product Details"}
      >
        <Row>
          <Col md="6">
            <label className="key">Name</label>
            <p className="value">{productDetails.name}</p>
          </Col>
          <Col md="6">
            <label className="key">Price</label>
            <p className="value">{productDetails.price}</p>
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <label className="key">Quantity</label>
            <p className="value">{productDetails.quantity}</p>
          </Col>
          <Col md="6">
            <label className="key">Category</label>
            <p className="value">{productDetails.category.name}</p>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <label className="key">Description</label>
            <p className="value">{productDetails.description}</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <label className="key">Product Pictures</label>
            <div style={{ display: "flex" }}>
              {productDetails.productPictures.map((picture) => (
                <div className="productImgContainer">
                  <img src={generalPublicUrl(picture.img)} />
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </NewModal>
    );
  };

  return (
    <Layout sidebar>
      <Container>
        <Row>
          <Col md={12}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h3>Products</h3>
              <button onClick={handleShow}>Add</button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>{renderProducts()}</Col>
        </Row>
      </Container>
      {renderAddProductModal()}
      {renderProductDetailsModal()}
    </Layout>
  );
};
