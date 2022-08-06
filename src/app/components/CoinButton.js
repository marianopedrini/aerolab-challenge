import './CoinButton.scss';

export const CoinButton = ({ amount, handleAddPoints }) => {
  return (
    <div onClick={handleAddPoints} className="amount-button">
      {amount}
    </div>
  );
};
