import React, { useEffect, useState } from "react";
import CryptoCurrencyCard from "./components/CryptoCurrencyCard";
import { Menu, Spin } from "antd";
import axios from "axios";

const App = () => {
  const [currencies, setCurrencies] = useState([]);
  const [currencyId, setCurrencyId] = useState(1);
  const [currencyData, setCurrencyData] = useState(null);

  const fetchCurrencies = () => {
    axios.get("http://127.0.0.1:8000/currencies").then((response) => {
      const currenciesResponse = response.data;
      const menuItems = [
        {
          key: "g1",
          label: "Cryptocurrency list",
          type: "group",
          children: currenciesResponse.map((currency) => ({
            key: currency.id,
            label: currency.name,
          })),
        },
      ];
      setCurrencies(menuItems);
    });
  };

  const fetchCurrency = () => {
    axios.get(`http://127.0.0.1:8000/currencies/${currencyId}`).then((r) => {
      setCurrencyData(r.data);
    });
  };

  useEffect(() => {
    fetchCurrencies();
  }, []);

  useEffect(() => {
    setCurrencyData(null);
    fetchCurrency();
  }, [currencyId]);

  const onClick = (e) => {
    setCurrencyId(e.key);
  };
  return (
    <div className="flex ">
      <Menu
        onClick={onClick}
        style={{
          width: 256,
        }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        items={currencies}
        className="h-screen overflow-scroll"
      />
      <div className="mx-auto my-auto">
        {currencyData ? (
          <CryptoCurrencyCard currency={currencyData} />
        ) : (
          <Spin size="large" />
        )}
      </div>
    </div>
  );
};
export default App;
