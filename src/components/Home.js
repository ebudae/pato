import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import ProductList from './ProductList';
import './Home.css';

const Home = () => {
  return (
    <div>
      <div className="hero-section">
        <Container>
          <h1>Discover Your Sound</h1>
          <p>High-quality VST plugins and presets for modern music producers.</p>
          <Button as={Link} to="/products" variant="primary" size="lg">
            Explore Products
          </Button>
        </Container>
      </div>

      <Container className="mt-5">
        <h2>Featured Products</h2>
        <ProductList />
      </Container>
    </div>
  );
};

export default Home;
