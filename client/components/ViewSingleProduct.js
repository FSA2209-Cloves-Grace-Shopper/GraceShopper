import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProduct } from '../store/singleProduct';

const ViewSingleProduct = (props) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct(props.match.params.productid));
  }, []);

  const product = useSelector((state) => state.singleProduct);

  const handleChange = (evt) => {
    setQty(evt.target.value);
  };

  return (
    <div className="singleProduct">
      <h2 className="singleProductTitle">
        {product.name} - ${product.price}
      </h2>
      <form>
        <label>Quantity</label>
        <input
          className="quantityInput"
          value={qty}
          onChange={handleChange}
        ></input>

        <button type="submit">Add to Cart</button>
      </form>

      <img className="singleProductImg" src={product.imageUrl} />
      <h3>Product Description</h3>
      <p>{product.description}</p>
    </div>
  );
};

export default ViewSingleProduct;
