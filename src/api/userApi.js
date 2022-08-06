import axios from 'axios';

const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjZjYjhiMjYxNzY1NzAwMWFiYzAzYzQiLCJpYXQiOjE2NTEyOTIzMzh9.c_WT-z32YrBflCBmQjOow5Z1at1LdVLl-ISvDFtGndQ';

const userApi = {
  getInfo: () => {
    const URL = 'https://coding-challenge-api.aerolab.co/user/me';
    const config = {
      method: 'get',
      url: URL,
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        'Content-Type': 'application/json',
      },
    };
    return axios(URL, config);
  },
  addPoints: (amount) => {
    const URL = 'https://coding-challenge-api.aerolab.co/user/points';
    const data = {
      amount: amount,
    };

    const config = {
      method: 'post',
      url: URL,
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        'Content-Type': 'application/json',
      },
      data: data,
    };
    return axios(config);
  },
  getHistory: () => {
    const URL = 'https://coding-challenge-api.aerolab.co/user/history';

    const config = {
      method: 'get',
      url: URL,
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        'Content-Type': 'application/json',
      },
    };
    return axios(config);
  },
};

export default userApi;
