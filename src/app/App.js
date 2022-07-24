import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { UserContext } from './contexts/UserContext';
import { ProductsContext } from './contexts/ProductsContext';

import Index from './views/Index';
import User from './views/User';
import NavBar from './components/NavBar';
import userApi from '../api/userApi';
import productApi from '../api/productApi';

import PropagateLoader from 'react-spinners/PropagateLoader';

function App() {
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      await userApi.getInfo().then((data) => setUser(data.data));
      await productApi.getInfo().then((data) => setProducts(data.data));

      setTimeout(() => {
        setLoading(false);
      }, 3000);
    };
    getData();
  }, []);

  // const override = {
  //   display: 'block',
  //   margin: '0 auto',
  //   borderColor: 'red',
  // };

  return (
    <>
      {loading ? (
        <div className="loader__container">
          <PropagateLoader
            color={'#FF7800'}
            loading={loading}
            // cssOverride={override}
            size={30}
          />
        </div>
      ) : (
        <div className="App">
          <UserContext.Provider value={{ user, setUser }}>
            <ProductsContext.Provider value={{ products, setProducts }}>
              <NavBar />
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="user" element={<User />} />
              </Routes>
            </ProductsContext.Provider>
          </UserContext.Provider>
        </div>
      )}
    </>
  );
}

export default App;
