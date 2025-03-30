import { useState, useEffect } from "react";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

const Dropdown = ({
  countryList,
  currency,
  onchange,
  title,
  favorites,
  favoriteOnclick,
}) => {
  const [currencyCodes, setCurrencyCodes] = useState(Object.keys(countryList));
  const [flagSrc, setFlagSrc] = useState(null);

  useEffect(() => {
    function updateCountryFlag() {
      const currencyName = countryList[currency];
      setFlagSrc(`https://flagsapi.com/${currencyName}/flat/64.png`);
    }

    updateCountryFlag();
  }, [currency]);

  return (
    <div className=" dropdown-container">
      <div className="select-wrap field-wrap">
        <label htmlFor="">{title}</label>
        <select
          name="currency"
          id="currency"
          value={currency}
          onChange={(e) => onchange(e.target.value)}
          className="input"
        >
          {favorites.map((code) => {
            return (
              <option key={code} value={code} className="favorite">
                {code}
              </option>
            );
          })}
          {currencyCodes
            .filter((code) => !favorites.includes(code))
            .map((code) => {
              return (
                <option key={code} value={code}>
                  {code}
                </option>
              );
            })}
        </select>
      </div>
      <img className="flag-img" src={flagSrc} alt={currency} />
      {favorites.includes(currency) ? (
        <FaStar
          className="icon favorite-btn"
          onClick={() => favoriteOnclick(currency)}
        />
      ) : (
        <CiStar
          className="icon favorite-btn"
          onClick={() => favoriteOnclick(currency)}
        />
      )}
    </div>
  );
};

export default Dropdown;
