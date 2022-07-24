import banner from '../../assets/header-x2.png';
import './Banner.scss';

const Banner = () => {
  const bannerUrl = `url('${banner}')`;
  return (
    <div className="banner" style={{ backgroundImage: bannerUrl }}>
      <div className="container banner__body">
        <h1 className=" banner__title">Electronics</h1>
      </div>
    </div>
  );
};

export default Banner;
