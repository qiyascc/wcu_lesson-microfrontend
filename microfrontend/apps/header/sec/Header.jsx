import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">E-Ticaret</div>
      <nav className="nav">
        <a href="/">Ana Sayfa</a>
        <a href="/products">Ürünler</a>
        <a href="/about">Hakkımızda</a>
      </nav>
    </header>
  );
};

// Global scope'a export et
window.header = Header;
export default Header;
