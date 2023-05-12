import { MarketTradingSvg } from "../../assets/images/trading/MarketTradingSvg";
import searchSvg from "../../assets/images/trading/search.svg";
import classnames from "classnames";
import cloneDeep from "lodash/cloneDeep";
import get from "lodash/get";

import { MarketsListTrading } from "./MarketsListTrading";
import { MarketTradingStyle, SearchBlockStyle, StarBlockStyle } from "./styles";
//import { useNavigate } from 'react-router-dom';
import React, { useState } from "react";
const LIST_KEY_FIAT_DROPDOWN = ["BUSD", "USDC", "TUSD"];

///import { useDispatch, useSelector } from 'react-redux';

export const MarketTrading = () => {
  ///const history = useNavigate();
  //const dispatch = useDispatch();

  //const markets = useSelector(selectMarkets);
  const markets = [
    {
      name: "BTC-USDT",
    },
    {
      name: "ETH-USDT",
    },
    {
      name: "ADA-USDT",
    },
    {
      name: "BNB-USDT",
    },
    {
      name: "XRP-USDT",
    },
    {
      name: "DOGE-USDT",
    },{
      name : "DOGE-BTC"
    }
  ];
  const currentMarket = "USDT";
  const rangerState = "";
  const userLoggedIn = "";
  const tickers = "";

  const [searchFieldState, setSearchFieldState] = useState("");
  const [starSelectedState, setStarSelectedState] = useState("ALL");
  const [checkedDropdownState, setCheckedDropdownState] = useState({});
  const [favoriteKeyState, setFavoriteKeyState] = useState([]);
  const [radioSelectedState, setRadioSelectedState] = useState("change");

  const STAR_LIST_INFO = [
    {
      key: "FAVORITE",
    },
    {
      key: "ALL",
    },
    {
      key: "BTC",
    },
    {
      key: "ETH",
    },
    {
      key: "BNB",
    },
    {
      key: "USDT",
    },
    {
      key: "OTHER",
      listKeyDropDown: LIST_KEY_FIAT_DROPDOWN,
    },
  ];

  const getData = () => {
    let data = cloneDeep(markets);
    if (starSelectedState === "ALL") {
      return data.filter((market) =>
        market.name.toLowerCase().includes(searchFieldState.toLowerCase())
      );
    }
    if (starSelectedState === "FAVORITE") {
      data = data.filter((market) => favoriteKeyState.includes(market.name));
    } else {
      const itemStart = STAR_LIST_INFO.find(
        (item) => item.key === starSelectedState
      );
      // tslint:disable-next-line: prefer-conditional-expression
      if (itemStart && itemStart.listKeyDropDown) {
        const searchDropDown = get(
          checkedDropdownState,
          `${starSelectedState}.childActiveKey`,
          ""
        );

        // tslint:disable-next-line: prefer-conditional-expression
        if (searchDropDown) {
          data = data.filter(
            (market) => market.name.split("-")[1] === searchDropDown
          );
        } else {
          data = data.filter((market) =>
            (itemStart.listKeyDropDown || []).includes(
              market.name.split("-")[1]
            )
          );
        }
      } else {
        data = data.filter(
          (market) =>
            market.name.toLowerCase().split("-")[1] ===
            starSelectedState.toLowerCase()
        );
      }
    }

    return data.filter((market) =>
      market.name.toLowerCase().includes(searchFieldState.toLowerCase())
    );
  };

  const handleSelectedStar = (key) => {
    if (starSelectedState !== key) {
      setStarSelectedState(key);
    }
  };

  const handleSelectFavorite = (id) => {
    if (favoriteKeyState.includes(id)) {
      setFavoriteKeyState(favoriteKeyState.filter((item) => item !== id));
    } else {
      setFavoriteKeyState([...favoriteKeyState].concat([id]));
    }
  };

  const handleCheckDropdown = (key, chillKey) => {
    setCheckedDropdownState((prev) => ({
      ...prev,
      [key]: {
        childActiveKey: chillKey,
      },
    }));
  };

  const renderStarList = () => {
    return (
      <StarBlockStyle>
        {STAR_LIST_INFO.map((item, i) => {
          const { key } = item;
          const isFavorite = key === "FAVORITE";

          const getContent = () => {
            if (item.listKeyDropDown) {
              const dropdownContentElm = (
                <div className="td-markets-trading-list-dropdown-wrapper">
                  <div className="td-markets-trading-list-dropdown">
                    <div
                      className="td-markets-trading-list-dropdown__item"
                      style={{ color: "#54B489" }}
                      onClick={() => {
                        handleCheckDropdown(key, "");
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M19.5 4.5h-15v2h15v-2zM19.5 17.5h-15v2h15v-2zM19.5 11h-15v2h15v-2z"
                          fill="currentColor"
                        ></path>
                      </svg>
                      OTHER
                    </div>
                    {item.listKeyDropDown.map((keyDropdown, j) => (
                      <div
                        className="td-markets-trading-list-dropdown__item"
                        onClick={() => {
                          handleCheckDropdown(key, keyDropdown);
                        }}
                        key={j}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path fill="currentColor" d="M4 11h16v2H4z"></path>
                        </svg>
                        <span>{keyDropdown}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );

              return (
                <React.Fragment>
                  {get(checkedDropdownState, `${key}.childActiveKey`, null) ||
                    "OTHER"}{" "}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M16 9v1.2L12 15l-4-4.8V9h8z"></path>
                  </svg>
                  {dropdownContentElm}
                </React.Fragment>
              );
            }

            return key === "ALL" ? "ALL" : key;
          };

          return (
            <button
              className={classnames({
                active: starSelectedState === key,
                favorite: isFavorite,
              })}
              onClick={() => handleSelectedStar(key)}
              key={i}
            >
              {isFavorite ? MarketTradingSvg : getContent()}
            </button>
          );
        })}
      </StarBlockStyle>
    );
  };

  const searchFieldChangeHandler = (e) => {
    setSearchFieldState(e.target.value);
  };

  const handleChangeRadio = (key) => {
    if (key === radioSelectedState) {
      return;
    }
    setRadioSelectedState(key);
  };

  const renderSearch = () => {
    return (
      <SearchBlockStyle className="d-flex">
        <div className="search-wrapper w-50">
          <img className="search-icon" src={searchSvg} />
          <input
            className="search-input"
            type="text"
            placeholder="Search"
            value={searchFieldState}
            onChange={searchFieldChangeHandler}
          />
        </div>
        <div className="select-wrapper flex-fill d-flex align-items-center justify-content-center">
          <div
            className="select-item d-flex align-items-center justify-content-center h-100"
            onClick={() => handleChangeRadio("change")}
          >
            <i
              className={classnames({
                active: radioSelectedState === "change",
              })}
            />
            <label className="d-flex align-items-center mb-0 mr-2">
              Change
            </label>
          </div>
          <div
            className="select-item d-flex align-items-center justify-content-center h-100"
            onClick={() => handleChangeRadio("volume")}
          >
            <i
              className={classnames({
                active: radioSelectedState === "volume",
              })}
            />
            <label className="d-flex align-items-center mb-0" color="gold">
              Volume
            </label>
          </div>
        </div>
      </SearchBlockStyle>
    );
  };

  const dataTable = getData();
  return (
    <MarketTradingStyle>
      {renderStarList()}
      {renderSearch()}
      <MarketsListTrading
        listFavoriteKey={favoriteKeyState}
        onSelectFavorite={handleSelectFavorite}
        type={radioSelectedState}
        data={dataTable}
      />
    </MarketTradingStyle>
  );
};
