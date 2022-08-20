import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import userApi from '../../api/userApi';

import { CoinButton } from './CoinButton';

import './UserProfile.scss';
import coin from '../../assets/icons/coin.svg';
import { HistoryList } from './HistoryList';

const amounts = [1000, 5000, 7500];

export const UserProfile = () => {
  const { user, setUser } = useContext(UserContext);

  const handleAddPoints = async (amount) => {
    try {
      await userApi.addPoints(amount);
      const updatedUser = await userApi.getInfo();
      setUser(updatedUser.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="profile__container">
      <div className="profile__user-data">
        <h2>
          Hello, <span>{user.name}</span>!
        </h2>
        <p>
          You have: <span>{user.points}</span>
          <img className="coin-icon" src={coin} alt="coin" />
        </p>
      </div>

      <hr />

      <h2>Add points</h2>
      <div className="coins-container">
        {amounts.map((eachAmount) => (
          <CoinButton
            key={eachAmount}
            amount={eachAmount}
            handleAddPoints={() => handleAddPoints(eachAmount)}
          />
        ))}
      </div>

      <HistoryList />
    </div>
  );
};
