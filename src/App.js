import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ThemeProvider, ThemeContext } from './ThemeContext';
import { LanguageProvider, LanguageContext } from './LanguageContext';
import { ProductProvider } from './ProductContext';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Home from './components/Home';
import Cart from './components/Cart';
import FreePresets from './components/FreePresets';
import './App.css';

function AppContent() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { language, changeLanguage } = useContext(LanguageContext);

  return (
    <div className="App">
      <Navbar expand="lg" variant={theme === 'day' ? 'light' : 'dark'} style={{ backgroundColor: theme === 'day' ? 'var(--day-primary-accent)' : 'var(--night-primary-accent)' }}>
        <Container>
          <Navbar.Brand as={Link} to="/" style={{ color: theme === 'day' ? 'var(--day-text)' : 'var(--night-text)' }}>Sunkeet VST Store</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/products" style={{ color: theme === 'day' ? 'var(--day-text)' : 'var(--night-text)' }}>Products</Nav.Link>
              <Nav.Link as={Link} to="/cart" style={{ color: theme === 'day' ? 'var(--day-text)' : 'var(--night-text)' }}>Cart</Nav.Link>
              <Nav.Link as={Link} to="/free-presets" style={{ color: theme === 'day' ? 'var(--day-text)' : 'var(--night-text)' }}>Free Presets</Nav.Link>
            </Nav>
            <Nav>
              <Button variant="outline-light" onClick={toggleTheme} className="me-2">
                {theme === 'day' ? 'Night Mode' : 'Day Mode'}
              </Button>
              <select
                className="form-select"
                value={language}
                onChange={(e) => changeLanguage(e.target.value)}
                style={{
                  backgroundColor: theme === 'day' ? 'var(--day-background)' : 'var(--night-background)',
                  color: theme === 'day' ? 'var(--day-text)' : 'var(--night-text)',
                  borderColor: theme === 'day' ? 'var(--day-text)' : 'var(--night-text)'
                }}
              >
                <option value="en">English</option>
                <option value="es">Español</option>
              </select>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/free-presets" element={<FreePresets />} />
        </Routes>
      </Container>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <ProductProvider>
          <Router>
            <AppContent />
          </Router>
        </ProductProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
