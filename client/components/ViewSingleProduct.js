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
    <div>
      <span>
        <h2 className="singleProductTitle">
          {product.name} - ${product.price}
        </h2>
        <form>
          <input value={qty} onChange={handleChange}></input>
          <button type="submit">Add to Cart</button>
        </form>
      </span>
      <img className="singleProductImg" src={product.imageUrl} />
      <p>{product.description}</p>
    </div>
  );
};

export default ViewSingleProduct;
