 import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [components, setComponents] = useState({});

  useEffect(() => {
    // Microfrontend'leri dinamik olarak yükle
    const loadMicrofrontend = (name, url) => {
      const script = document.createElement('script');
      script.src = url;
      script.onload = () => {
        setComponents(prev => ({ ...prev, [name]: window[name] }));
      };
      document.head.appendChild(script);
    };

    // Her bileşenin URL'sini environment variables'dan al
    loadMicrofrontend('header', process.env.REACT_APP_HEADER_URL);
    loadMicrofrontend('productList', process.env.REACT_APP_PRODUCT_LIST_URL);
    loadMicrofrontend('userProfile', process.env.REACT_APP_USER_PROFILE_URL);
    loadMicrofrontend('cart', process.env.REACT_APP_CART_URL);
  }, []);

  const Header = components.header;
  const ProductList = components.productList;
  const UserProfile = components.userProfile;
  const Cart = components.cart;

  return (
    <div className="app">
      <div className="header-section">
        {Header ? <Header /> : <div>Loading Header...</div>}
      </div>
      
      <div className="main-content">
        <div className="sidebar">
          {UserProfile ? <UserProfile /> : <div>Loading Profile...</div>}
          {Cart ? <Cart /> : <div>Loading Cart...</div>}
        </div>
        
        <div className="content">
          {ProductList ? <ProductList /> : <div>Loading Products...</div>}
        </div>
      </div>
    </div>
  );
};

export default App;
