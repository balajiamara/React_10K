import React, { Component } from 'react';
import "./Categories.css"
// import axios from "axios";

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      filteredProducts: [],
      selectedCategory: 'all',
    };
  }

  componentDidMount() {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          products: data, filteredProducts: data, // initially show all
        });
      })
      .catch((error) => console.error('Error fetching data:', error));
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.selectedCategory !== this.state.selectedCategory) {
      this.filterProducts();
    }
  }

  filterProducts = () => {
    const { products, selectedCategory } = this.state;

    if (selectedCategory === 'All') {
      this.setState({ filteredProducts: products });
    }
    else {
      const filtered = products.filter(
        (product) => product.category === selectedCategory
      );
      this.setState({ filteredProducts: filtered });
    }
  };

  handleCategoryChange = (event) => {
    this.setState({ selectedCategory: event.target.value });
  };

  render() {
    const { filteredProducts, selectedCategory } = this.state;

    return (
      <div style={{ padding: '20px', fontFamily: 'Arial' }}>
        <h2> Product List</h2>

    <div className="categories-container">
      <h2>Product List</h2>

    <div className="filter-section">
      <label htmlFor="category">Filter by Category:</label>
        <select
          id="category"
          value={selectedCategory}
          onChange={this.handleCategoryChange}
        >
          <option value="All">All</option>
          <option value="men's clothing">men’s clothing</option>
          <option value="women's clothing">women’s clothing</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelery</option>
        </select>
      </div>

      <ul className="product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <li key={product.id} className="product-item">
              <h4>{product.title}</h4> Category  — {product.category}
            </li>
          ))
        ) : (
          <p className="no-products">No products found.</p>
        )}
      </ul>
    </div>

        {/* <div
          style={{
            display: "flex",
            width: "100%",
            flexDirection: "row",
            flexWrap: "wrap",
            marginTop:'20px'
          }}
        >
          {this.state.filteredProducts.map((item) => (
            <div key={item.id} style={{ width: "15rem", border:'1px solid grey', paddingLeft:'30px', paddingTop:'30px', paddingRight:'10px' }}>
              <img src={item.image} width="120px" height="100px" />
              <p>category {item.category}</p>
              <p>{item.title}</p> */}
            {/* </div>
          ))} */}
        {/* </div> */}
      </div>
    );
  }
}

export default Categories;