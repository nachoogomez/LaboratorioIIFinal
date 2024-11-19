import { Container, Typography, Button } from '@mui/material';
import ProductForm from '../components/ProductForm';
import ProductTable from '../components/ProductTable';
import { fetchProducts, createProduct, updateProduct, deleteProduct } from '../axios/products';
import { useState, useEffect } from 'react';
import Footer from '../components/Footer';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);

  useEffect(() => {
    fetchProductsData();
  }, []);

  const fetchProductsData = async () => {
    const data = await fetchProducts();
    setProducts(data);
  };

  const handleOpen = (product = null) => {
    setCurrentProduct(product);
    setOpen(true);
  };

  const handleClose = () => {
    setCurrentProduct(null);
    setOpen(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const productData = {
      name: formData.get('name'),
      price: parseFloat(formData.get('price')),
      description: formData.get('description'),
    };

    if (currentProduct) {
      await updateProduct(currentProduct.id, productData);
    } else {
      await createProduct(productData);
    }

    fetchProductsData();
    handleClose();
  };

  const handleDelete = async (id) => {
    await deleteProduct(id);
    fetchProductsData();
  };

  return (
    <>
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Gestión de Productos
      </Typography>
      <Button variant="contained" color="primary" onClick={() => handleOpen()}>
        Crear Producto
      </Button>
      <ProductTable products={products} handleOpen={handleOpen} handleDelete={handleDelete} />
      <ProductForm open={open} handleClose={handleClose} handleSubmit={handleSubmit} currentProduct={currentProduct} />
    </Container>
    <Footer/>
    </>
  );
};



export default Home