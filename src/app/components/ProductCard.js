import { ReedemButton } from './ReedemButton';

import './ProductCard.scss';

import blueLogo from '../../assets/icons/buy-blue.svg';
import whiteLogo from '../../assets/icons/buy-white.svg';
import coin from '../../assets/icons/coin.svg';

const ProductCard = ({ product }) => {
  console.log(product);
  return (
    <div className="product-card">
      <div className="product-card__image-container">
        <img
          className="product-card__blue-icon"
          src={blueLogo}
          alt="bag-icon"
        />
        <img
          className="product-card__white-icon"
          src={whiteLogo}
          alt="bag-icon"
        />
        <img
          className="product-card__image"
          src={product.img.url}
          alt={product.name}
        />
      </div>
      <hr className="product-card__hr" />
      <div className="product-card__desc">
        <p className="product-card__category">{product.category}</p>
        <h4 className="product-card__name">{product.name}</h4>
      </div>

      <div className="product-layer">
        <div className="product-card__reedem-data">
          <p className="reedem-data__price">
            {product.cost}
            <img className="reedem-data__coin" src={coin} alt="coin" />
          </p>
          <ReedemButton />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
