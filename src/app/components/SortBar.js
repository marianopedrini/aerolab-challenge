import { SortButton } from './SortButton';
import arrowLeft from '../../assets/icons/arrow-left.svg';
import arrowRight from '../../assets/icons/arrow-right.svg';

import './SortBar.scss';

const sortOptions = [
  { text: 'Most recent', isActive: true },
  { text: 'Lowest price', isActive: false },
  { text: 'Highest price', isActive: false },
];
export const SortBar = ({
  currentPage,
  totalPages,
  totalProducts,
  handleChangePage,
  handleSort,
}) => {
  return (
    <div className="sortbar__container">
      <div>{`${currentPage * 16} of ${totalProducts} products`}</div>
      <div className="sortbar__buttons">
        <p>Sort by:</p>
        {sortOptions.map((option) => (
          <SortButton
            key={option.text}
            text={option.text}
            isActive={option.isActive}
            handleSort={handleSort}
          />
        ))}
      </div>
      <div className="sortbar__arrows">
        {currentPage === totalPages ? (
          <img
            src={arrowLeft}
            onClick={() => handleChangePage(currentPage - 1)}
            alt="arrow-left"
          />
        ) : (
          ''
        )}

        <img
          src={arrowRight}
          onClick={() => handleChangePage(currentPage + 1)}
          alt="arrow-right"
        />
      </div>
    </div>
  );
};
