import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../contexts/UserContext';
import userApi from '../../api/userApi';

import { CoinButton } from './CoinButton';

import './UserProfile.scss';
import coin from '../../assets/icons/coin.svg';
import { HistoryItem } from './HistoryItem';

const amounts = [1000, 5000, 7500];

export const UserProfile = () => {
  const { user, setUser } = useContext(UserContext);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    try {
      const getHistoryData = async () => {
        await userApi.getHistory().then((data) => setHistory(data.data));
      };
      getHistoryData();
    } catch (error) {
      console.log(error);
    }
  }, []);

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

      <h2>History</h2>
      {history.map((eachHistory) => {
        return <HistoryItem data={eachHistory} />;
      })}
    </div>
  );
};
