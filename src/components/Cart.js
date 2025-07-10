import React, { useContext } from 'react';
import { ProductContext } from '../ProductContext';
import { ThemeContext } from '../ThemeContext';
import { Container, Row, Col, Button, ListGroup, Form } from 'react-bootstrap';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(ProductContext);
  const { theme } = useContext(ThemeContext);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    // In a real application, you would generate a Gumroad/Stripe checkout URL
    // based on the cart contents and redirect the user.
    // For now, we'll use a placeholder.
    alert('Proceeding to checkout! (Integration with Gumroad/Stripe would happen here)');
    window.open('https://example.com/checkout-placeholder', '_blank'); // Placeholder URL
  };

  return (
    <Container className="my-4">
      <h2 className="mb-4" style={{ color: theme === 'day' ? 'var(--day-text)' : 'var(--night-text)' }}>Your Cart</h2>
      {cart.length === 0 ? (
        <p style={{ color: theme === 'day' ? 'var(--day-text)' : 'var(--night-text)' }}>Your cart is empty.</p>
      ) : (
        <ListGroup>
          {cart.map((item) => (
            <ListGroup.Item
              key={item.id}
              className="d-flex justify-content-between align-items-center"
              style={{
                backgroundColor: theme === 'day' ? 'var(--day-background)' : 'var(--night-background)',
                borderColor: theme === 'day' ? 'var(--day-text)' : 'var(--night-text)',
                color: theme === 'day' ? 'var(--day-text)' : 'var(--night-text)',
              }}
            >
              <div>
                <h5 style={{ color: theme === 'day' ? 'var(--day-primary-accent)' : 'var(--night-primary-accent)' }}>{item.name}</h5>
                <p>Price: ${item.price.toFixed(2)}</p>
                <Form.Group controlId={`quantity-${item.id}`}>
                  <Form.Label>Quantity:</Form.Label>
                  <Form.Control
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                    style={{
                      backgroundColor: theme === 'day' ? 'var(--day-background)' : 'var(--night-background)',
                      color: theme === 'day' ? 'var(--day-text)' : 'var(--night-text)',
                      borderColor: theme === 'day' ? 'var(--day-text)' : 'var(--night-text)',
                    }}
                  />
                </Form.Group>
              </div>
              <div>
                <Button
                  variant="danger"
                  onClick={() => removeFromCart(item.id)}
                  style={{
                    backgroundColor: theme === 'day' ? 'var(--day-highlight-warning)' : 'var(--night-highlight-warning)',
                    borderColor: theme === 'day' ? 'var(--day-highlight-warning)' : 'var(--night-highlight-warning)',
                    color: 'white',
                  }}
                >
                  Remove
                </Button>
              </div>
            </ListGroup.Item>
          ))}
          <ListGroup.Item
            className="d-flex justify-content-between align-items-center"
            style={{
              backgroundColor: theme === 'day' ? 'var(--day-background)' : 'var(--night-background)',
              borderColor: theme === 'day' ? 'var(--day-text)' : 'var(--night-text)',
              color: theme === 'day' ? 'var(--day-text)' : 'var(--night-text)',
              fontWeight: 'bold',
            }}
          >
            <h4>Total: ${total.toFixed(2)}</h4>
            <Button
              onClick={handleCheckout}
              style={{
                backgroundColor: theme === 'day' ? 'var(--day-tertiary-accent)' : 'var(--night-tertiary-accent)',
                borderColor: theme === 'day' ? 'var(--day-tertiary-accent)' : 'var(--night-tertiary-accent)',
                color: 'white',
              }}
            >
              Proceed to Checkout
            </Button>
          </ListGroup.Item>
        </ListGroup>
      )}
    </Container>
  );
};

export default Cart;