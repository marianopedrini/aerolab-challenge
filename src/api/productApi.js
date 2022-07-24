import axios from 'axios';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjZjYjhiMjYxNzY1NzAwMWFiYzAzYzQiLCJpYXQiOjE2NTEyOTIzMzh9.c_WT-z32YrBflCBmQjOow5Z1at1LdVLl-ISvDFtGndQ';

const productApi = {
  getInfo: () => {
    const url = 'https://coding-challenge-api.aerolab.co/products';
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    console.log('getting products');
    return axios.get(url, config);
  },
  addPoints: () => {
    axios.post();
  },
  getHistory: () => {
    axios.get();
  },
};

export default productApi;
