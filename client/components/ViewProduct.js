import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItemThunk } from '../store/cart';
import { Link } from 'react-router-dom';

const ViewProduct = (props) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  const product = props.product;
  const user = useSelector((state) => state.auth);

  const handleChange = (evt) => {
    setQty(+evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const orderProduct = {
      userId: user.id,
      unitPrice: product.price,
      quantity: qty,
      productSubtotal: product.price * qty,
      productId: product.id,
    };
    dispatch(addItemThunk(orderProduct));
  };

  return (
    <div className="each-product-box">
      <div className="all-products-name" key={product.id}>
        <h2>{product.name}</h2>
        <div className="all-product-text">
          {product.style} {product.type}
        </div>
        <div className="all-product-text">${product.price}</div>
        <Link to={`/products/${product.id}`}>
          <img className="all-product-img" src={product.imageUrl} />
        </Link>
        <form onSubmit={handleSubmit}>
          <label>Quantity</label>
          <input
            className="quantityInput"
            value={qty}
            onChange={handleChange}
          ></input>

          <button type="submit">Add to Cart</button>
        </form>
      </div>
    </div>
  );
};

export default ViewProduct;
