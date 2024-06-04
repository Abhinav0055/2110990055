import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AllProductsPage from './pages/AllProductsPage';
import ProductPage from './pages/ProductPage';

const App = () => {
    return (
        <Router>
            <div className="app">
                <Routes>
                    <Route path="/" element={<AllProductsPage />} />
                    <Route path="/product/:id" element={<ProductPage />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
