import './HistoryItem.scss';

export const HistoryItem = ({ item }) => {
  console.log(item);
  let formatedDate = item.createDate.replace('T', ' ').split('.')[0];
  return (
    <div className="history__item">
      <div className="history-item__left-data">
        <div>
          <img src={item.img.url} alt={`Foto de ${item.name}`} />
        </div>
        <div>
          <p>{item.name}</p>
          <p>{formatedDate}</p>
        </div>
      </div>

      <p>
        Cost: <strong>{item.cost}</strong>
      </p>
    </div>
  );
};
