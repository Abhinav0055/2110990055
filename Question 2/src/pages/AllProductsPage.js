import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../services/api';
import ProductList from '../components/ProductList';
import Filters from '../components/Filters';

const AllProductsPage = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [categories, setCategories] = useState([
        "Phere", "Computer", "TV", "Earphone", "Tablet", "Charger", "Mouse", "Keypad", "Bluetooth",
        "Pendrive", "Remote", "Speaker", "Headset", "Laptop", "PC"
    ]);
    const [companies, setCompanies] = useState([
        "AMZ", "FLP", "SNP", "MYN", "AZO"
    ]);
    const [filters, setFilters] = useState({
        category: 'Laptop', // default category
        company: 'AMZ', // default company
        minPrice: 1,
        maxPrice: 10000,
        top: 10
    });

    useEffect(() => {
        const getProducts = async () => {
            const data = await fetchProducts(filters.company, filters.category, filters.top, filters.minPrice, filters.maxPrice);
            setProducts(data);
            setFilteredProducts(data);
        };

        getProducts();
    }, [filters]);

    const handleFilterChange = (name, value) => {
        setFilters(prevFilters => ({
            ...prevFilters,
            [name]: value
        }));
    };

    return (
        <div className="all-products-page">
            <Filters
                categories={categories}
                companies={companies}
                onFilterChange={handleFilterChange}
            />
            <ProductList products={filteredProducts} />
        </div>
    );
};

export default AllProductsPage;
