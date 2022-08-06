import './ReedemButton.scss';

export const ReedemButton = ({ text, buyable, handleBuy }) => {
  return (
    <div
      className={`reedem-button ${buyable ? '' : 'disabledBtn'}`}
      onClick={handleBuy}
    >
      {text}
    </div>
  );
};
