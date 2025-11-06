import React, { Component } from 'react';
// import products from './data.json'; 

class ProductList extends Component {
  render() {
    // console.log(this.props);
    return (
      <div>
        <h2>Product List</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {this.props.products.map(product => (
            <div
              key={product.id}
              style={{
                border: '1px solid #ccc',
                borderRadius: '8px',
                width: '250px',
                padding: '16px',
                // boxShadow: '2px 2px 8px #eee'
              }}
            >
              <img
                src={product.images && product.images[0]}
                alt={product.title}
                style={{
                  width: '100%',
                  height: '150px',
                  objectFit: 'cover',
                  borderRadius: '4px'
                }}
              />
              <h3>{product.title}</h3>
              <p>Price: ₹{product.price}</p>
              <p>{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ProductList;
