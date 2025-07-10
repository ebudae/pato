import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../ProductContext';
import { ThemeContext } from '../ThemeContext';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const ProductDetail = () => {
  const { id } = useParams();
  const { products, addToCart } = useContext(ProductContext);
  const { theme } = useContext(ThemeContext);

  const product = products.find((p) => p.id === id);

  if (!product) {
    return <h2 style={{ color: theme === 'day' ? 'var(--day-text)' : 'var(--night-text)' }}>Product not found</h2>;
  }

  return (
    <Container className="my-4">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card
            style={{
              backgroundColor: theme === 'day' ? 'var(--day-background)' : 'var(--night-background)',
              borderColor: theme === 'day' ? 'var(--day-text)' : 'var(--night-text)',
              color: theme === 'day' ? 'var(--day-text)' : 'var(--night-text)',
            }}
          >
            <Card.Img variant="top" src={product.imageUrl} />
            <Card.Body>
              <Card.Title style={{ color: theme === 'day' ? 'var(--day-primary-accent)' : 'var(--night-primary-accent)' }}>{product.name}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <Card.Text>
                <strong>
                  Price: {product.price === 0 ? 'Free' : `${product.price.toFixed(2)}`}
                </strong>
              </Card.Text>
              {product.audioUrl && (
                <div className="my-3">
                  <h6 style={{ color: theme === 'day' ? 'var(--day-text)' : 'var(--night-text)' }}>Listen to a Demo:</h6>
                  <audio controls src={product.audioUrl} style={{ width: '100%' }}>
                    Your browser does not support the audio element.
                  </audio>
                </div>
              )}
              <Button
                onClick={() => addToCart(product.id)}
                style={{
                  backgroundColor: theme === 'day' ? 'var(--day-secondary-accent)' : 'var(--night-secondary-accent)',
                  borderColor: theme === 'day' ? 'var(--day-secondary-accent)' : 'var(--night-secondary-accent)',
                  color: 'white',
                }}
              >
                Add to Cart
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
