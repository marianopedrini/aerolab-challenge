import { useContext } from 'react';
import { ProductsContext } from '../contexts/ProductsContext';
import ProductCard from './ProductCard';

import './ProductsContainer.scss';

const ProductsContainer = () => {
  const { products } = useContext(ProductsContext);

  return (
    <>
      <div className="products__container">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </>
  );
};

export default ProductsContainer;
