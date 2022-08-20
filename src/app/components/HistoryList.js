import { useEffect, useState } from 'react';
import BeatLoader from 'react-spinners/BeatLoader';

import { HistoryItem } from './HistoryItem';
import userApi from '../../api/userApi';

import './HistoryList.scss';

export const HistoryList = () => {
  const [history, setHistory] = useState([]);
  const [loadingHistory, setLoadingHistory] = useState(true);

  useEffect(() => {
    try {
      const getHistoryData = async () => {
        await userApi.getHistory().then(({ data }) => {
          const sortedData = sortData(data);
          setHistory(sortedData);
        });
        setLoadingHistory(false);
      };
      getHistoryData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const sortData = (data) => {
    const newData = [...data];
    return newData.sort((a, b) => {
      return new Date(b.createDate) - new Date(a.createDate);
    });
  };

  return (
    <>
      <h2>History</h2>
      {loadingHistory ? (
        <div className="history__loader">
          <BeatLoader color={'#FF7800'} />
        </div>
      ) : (
        history.map((eachHistory) => {
          return (
            <HistoryItem key={eachHistory.createDate} item={eachHistory} />
          );
        })
      )}
      {/* {} */}
    </>
  );
};
