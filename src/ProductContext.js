import React, { createContext, useState } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products] = useState([
    {
      id: 'flamebird',
      name: 'Flamebird',
      description: 'A fiery synth with scorching leads and pads.',
      price: 0, // Free
      imageUrl: 'https://via.placeholder.com/300x200?text=Flamebird',
      audioUrl: '/resources/vst_demo_audio.mp3',
    },
    {
      id: 'monomoonny',
      name: 'Monomoonny',
      description: 'A deep, analog monophonic synthesizer for bass and leads.',
      price: 99.99,
      imageUrl: 'https://via.placeholder.com/300x200?text=Monomoonny',
      audioUrl: '/resources/vst_demo_audio.mp3',
    },
    {
      id: 'vst3',
      name: 'VST3',
      description: 'Versatile virtual instrument for modern productions.',
      price: 149.99,
      imageUrl: 'https://via.placeholder.com/300x200?text=VST3',
      audioUrl: '/resources/vst_demo_audio.mp3',
    },
    {
      id: 'vst4',
      name: 'VST4',
      description: 'Experimental sound design tool with unique modulation.',
      price: 249.99,
      imageUrl: 'https://via.placeholder.com/300x200?text=VST4',
      audioUrl: '/resources/vst_demo_audio.mp3',
    },
    {
      id: 'vst5',
      name: 'VST5',
      description: 'Premium orchestral library for cinematic scores.',
      price: 299.99,
      imageUrl: 'https://via.placeholder.com/300x200?text=VST5',
      audioUrl: '/resources/vst_demo_audio.mp3',
    },
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (productId) => {
    const productToAdd = products.find((p) => p.id === productId);
    if (productToAdd) {
      setCart((prevCart) => {
        const existingItem = prevCart.find((item) => item.id === productId);
        if (existingItem) {
          return prevCart.map((item) =>
            item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
          );
        } else {
          return [...prevCart, { ...productToAdd, quantity: 1 }];
        }
      });
    }
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: quantity } : item
      )
    );
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
