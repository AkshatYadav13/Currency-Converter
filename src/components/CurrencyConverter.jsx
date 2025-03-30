import { useState } from "react";
import { COUNTRYLIST } from "../Codes";
import Dropdown from "./DropDown";
import { TbArrowsExchange } from "react-icons/tb";

const CurrencyConverter = () => {
  const countryList = COUNTRYLIST;

  const [fromCurrency, setFromCurrency] = useState("INR");
  const [toCurrency, setToCurrency] = useState("USD");
  const [amount, setAmount] = useState(1);
  const [result, setResult] = useState(null);
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || ["INR", "USD"]
  );
  const [loading, setLoading] = useState(false);

  function handleCurrencyConversion() {
    if (!amount || !fromCurrency || !toCurrency) return;

    setLoading(true);
    fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`
    )
      .then((res) => res.json())
      .then((res) => {
        setResult(res.rates[toCurrency]);
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        alert("something went wrong");
      });
  }

  function handleFavorite(currency) {
    const newFavorites = favorites.includes(currency)
      ? favorites.filter((c) => c !== currency)
      : [...favorites, currency];

    localStorage.setItem("favorites", JSON.stringify(newFavorites));
    setFavorites(newFavorites);
  }

  function handleCurrencySwap() {
    const toCurr = toCurrency;
    setToCurrency(fromCurrency);
    setFromCurrency(toCurr);
    setResult(null);
  }

  function handleAmountChange(e) {
    setAmount(e.target.value);
    setResult(null);
  }

  function handleFromCurrencyChange(currency) {
    setFromCurrency(currency);
    setResult(null);
  }

  function handleToCurrencyChange(currency) {
    setToCurrency(currency);
    setResult(null);
  }

  return (
    <div className="currency-converter">
      <h2>Currency Converter</h2>

      <div className="dropdown-wrap">
        <Dropdown
          currency={fromCurrency}
          countryList={countryList}
          title="From: "
          onchange={(currency) => handleFromCurrencyChange(currency)}
          favorites={favorites}
          favoriteOnclick={handleFavorite}
        />

        <div className="swap-btn-wrap">
          <button id="swap-currency-btn" onClick={handleCurrencySwap}>
            <TbArrowsExchange />
          </button>
        </div>

        <Dropdown
          currency={toCurrency}
          countryList={countryList}
          title="To: "
          onchange={(currency) => handleToCurrencyChange(currency)}
          favorites={favorites}
          favoriteOnclick={handleFavorite}
        />
      </div>

      <div className="field-wrap">
        <label htmlFor="amount">Amount: </label>
        <input
          className="input"
          type="number"
          min={0}
          id="amount"
          name="amount"
          value={amount}
          onChange={handleAmountChange}
        />
      </div>

      <div className="result-wrap">
        <button onClick={handleCurrencyConversion}>Convert</button>
        {result && <span>{`Converted Amount:   ${result} ${toCurrency}`}</span>}
      </div>

      {loading && <span>Loading...</span>}
    </div>
  );
};

export default CurrencyConverter;
