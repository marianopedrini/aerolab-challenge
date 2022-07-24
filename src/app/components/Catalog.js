import './Catalog.scss';
import ProductsContainer from './ProductsContainer';

const Catalog = () => {
  return (
    <div className="catalog">
      {/* <Barra superior /> */}
      <ProductsContainer />
      {/* <Barra inferior /> */}
    </div>
  );
};

export default Catalog;
