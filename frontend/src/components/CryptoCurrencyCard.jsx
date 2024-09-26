import { Card } from "antd";

const CryptoCurrencyCard = (props) => {
  const { currency } = props;

  const price = Math.round(currency.quote.USD.price);
  return (
    <Card
      title={
        <div className="flex items-center gap-3">
          <img
            src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${currency.id}.png`}
          />
          <span>{currency.name}</span>
        </div>
      }
      style={{
        width: 300,
      }}
    >
      <p>Current cost: {price}</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  );
};

export default CryptoCurrencyCard;
