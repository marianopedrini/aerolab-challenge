import Banner from '../components/Banner';
import Catalog from '../components/Catalog';

const Index = () => {
  return (
    <div>
      <Banner />
      <div className="container">
        <Catalog />
      </div>
    </div>
  );
};

export default Index;
