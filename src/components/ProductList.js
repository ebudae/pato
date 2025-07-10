import React, { useContext } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { ProductContext } from '../ProductContext';
import { ThemeContext } from '../ThemeContext';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const { products } = useContext(ProductContext);
  const { theme } = useContext(ThemeContext);

  return (
    <Container>
      <h2 className="my-4" style={{ color: theme === 'day' ? 'var(--day-text)' : 'var(--night-text)' }}>Our VSTs</h2>
      <Row>
        {products.map((product) => (
          <Col key={product.id} sm={12} md={6} lg={4} className="mb-4">
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
                    {product.price === 0 ? 'Free' : `$${product.price.toFixed(2)}`}
                  </strong>
                </Card.Text>
                <Link to={`/products/${product.id}`}>
                  <Button
                    style={{
                      backgroundColor: theme === 'day' ? 'var(--day-secondary-accent)' : 'var(--night-secondary-accent)',
                      borderColor: theme === 'day' ? 'var(--day-secondary-accent)' : 'var(--night-secondary-accent)',
                      color: 'white',
                    }}
                  >
                    View Details
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
