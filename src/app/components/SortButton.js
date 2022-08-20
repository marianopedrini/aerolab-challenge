import './SortButton.scss';

export const SortButton = ({ text, isActive, handleSort }) => {
  return (
    <div
      className={`sort__button ${isActive ? 'active' : ''}`}
      onClick={() => handleSort(text)}
    >
      <span>{text}</span>
    </div>
  );
};
