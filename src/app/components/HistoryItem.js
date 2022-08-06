import './HistoryItem.scss';

export const HistoryItem = ({ data }) => {
  console.log(data);
  let formatedDate = data.createDate.replace('T', ' ').split('.')[0];
  return (
    <div className="history__item">
      <p>{data.name}</p>
      <p>{formatedDate}</p>
    </div>
  );
};
