import ProductCard from './ProductCard';

import './ProductsContainer.scss';

const ProductsContainer = ({ products }) => {
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
