import React from 'react';

const Filters = ({ categories, companies, onFilterChange }) => {
    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        onFilterChange(name, value);
    };

    return (
        <div className="filters">
            <select name="category" onChange={handleFilterChange}>
                <option value="">All Categories</option>
                {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                ))}
            </select>

            <select name="company" onChange={handleFilterChange}>
                <option value="">All Companies</option>
                {companies.map(company => (
                    <option key={company} value={company}>{company}</option>
                ))}
            </select>

            <input type="number" name="minPrice" placeholder="Min Price" onChange={handleFilterChange} />
            <input type="number" name="maxPrice" placeholder="Max Price" onChange={handleFilterChange} />

            <input type="number" name="top" placeholder="Top N" onChange={handleFilterChange} />

            <select name="sort" onChange={handleFilterChange}>
                <option value="">Sort By</option>
                <option value="price">Price</option>
                <option value="rating">Rating</option>
                <option value="discount">Discount</option>
            </select>
        </div>
    );
};

export default Filters;
