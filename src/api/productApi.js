import axios from 'axios';

const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjZjYjhiMjYxNzY1NzAwMWFiYzAzYzQiLCJpYXQiOjE2NTEyOTIzMzh9.c_WT-z32YrBflCBmQjOow5Z1at1LdVLl-ISvDFtGndQ';

const productApi = {
  getInfo: () => {
    const URL = 'https://coding-challenge-api.aerolab.co/products';
    const config = {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    };
    console.log('getting products');
    return axios.get(URL, config);
  },
  buyProduct: (productId) => {
    const URL = 'https://coding-challenge-api.aerolab.co/redeem';
    const data = {
      productId: productId,
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
    console.log(config);
    return axios(config);
  },
  getHistory: () => {
    axios.get();
  },
};

export default productApi;
