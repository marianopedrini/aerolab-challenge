import { useContext, useState } from 'react';
import { ProductsContext } from '../contexts/ProductsContext';
import ProductsContainer from './ProductsContainer';
import './Catalog.scss';
import { SortBar } from './SortBar';

const Catalog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  // const [sortedProducts, setSortedProducts] = useState(1);
  const { products } = useContext(ProductsContext);

  // Pagination
  const totalProducts = products.length;
  const totalPages = Math.ceil(totalProducts / 16);

  // Set current products to display
  const indexOfLastProduct = currentPage * 16;
  const indexOfFirstProduct = indexOfLastProduct - 16;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handleChangePage = (pageNumber) => {
    if (pageNumber > totalPages) {
      return;
    }
    setCurrentPage(pageNumber);
  };

  const handleSort = (sortType) => {
    console.log(sortType);
  };

  return (
    <div className="catalog">
      <SortBar
        currentPage={currentPage}
        totalPages={totalPages}
        totalProducts={totalProducts}
        handleChangePage={handleChangePage}
        handleSort={handleSort}
      />
      <ProductsContainer products={currentProducts} />
      {/* <Barra inferior /> */}
    </div>
  );
};

export default Catalog;
