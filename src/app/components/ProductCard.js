import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../contexts/UserContext';
import productApi from '../../api/productApi';
import userApi from '../../api/userApi';

import { ReedemButton } from './ReedemButton';

import './ProductCard.scss';
import blueLogo from '../../assets/icons/buy-blue.svg';
import whiteLogo from '../../assets/icons/buy-white.svg';
import coin from '../../assets/icons/coin.svg';

const ProductCard = ({ product }) => {
  const { user, setUser } = useContext(UserContext);
  const [isReedemed, setIsReedemed] = useState({
    buyable: null,
    btnText: '',
  });

  useEffect(() => {
    const canBuyProduct = () => {
      if (user.points >= product.cost) {
        setIsReedemed({
          buyable: true,
          btnText: 'Reedem now',
        });
      } else {
        setIsReedemed({
          buyable: false,
          btnText: 'Insufficient points',
          pointsLeft: product.cost - user.points,
        });
      }
    };
    canBuyProduct();
  }, [user.points]);

  const handleBuy = async () => {
    try {
      await productApi.buyProduct(product._id);
      const updatedUser = await userApi.getInfo();
      setUser(updatedUser.data);
    } catch (error) {
      console.log(error);
    }
  };

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
          {!isReedemed.buyable ? (
            <p className="reedem-data__points-left">
              {isReedemed.pointsLeft} points left
            </p>
          ) : (
            ''
          )}
          <p className="reedem-data__price">
            {product.cost}
            <img className="reedem-data__coin" src={coin} alt="coin" />
          </p>
          <ReedemButton
            text={isReedemed.btnText}
            buyable={isReedemed.buyable}
            handleBuy={isReedemed.buyable ? handleBuy : undefined}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
