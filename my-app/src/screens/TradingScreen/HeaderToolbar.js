import React from "react";
import get from "lodash/get";
import { ConvertUsd } from "../../components/ConvertUsd";
import playSvg from "../../assets/images/trading/play.svg";
//import './toolbar.css';

import styled from "styled-components";

const HeaderToolbarStyle = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60%;
  padding: 15px 30px;
  border-radius: 5px;
  background-color: #ffffff;

  .td-header__toolbar {
    &--left {
      display: flex;
      height: 100%;
    }
    &--right {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      .link-tutorial {
        font-size: 11px;
        line-height: 19px;
        color: #848e9c;
      }
    }
    &-item,
    &-item--hightlight {
      display: flex;
      flex-flow: column;
      justify-content: space-between;

      p {
        padding: 0;
        margin: 0;
      }

      &:not(:first-child) {
        margin-left: 15px;
      }

      &:last-child {
        margin-right: 5px;
      }

      &-title {
        font-size: 18px;
        line-height: 25px;
        color: rgb(129, 109, 109));
        margin: 0;
      }

      &-text {
        color: #848e9c;
        font-size: 11px;
        line-height: 19px;
      }

      &-value {
        margin: 0;
        font-size: calc(var(--font-size) * 1);
        font-weight: 400;
        line-height: 22px;

        &-positive {
          color: var(--header-positive-text-color);
          font-weight: 500;
        }

        &-negative {
          color: var(--header-negative-text-color);
          font-weight: 500;
        }

        &-data {
          color: wheat;
          font-weight: 400;
        }
      }
    }
    &-item--hightlight {
      p:first-child {
        font-size: calc(var(--font-size) * 1.2);
      }
    }
  }
`;

export const HeaderToolbar = () => {
  const currentMarket = {
    id: "btc",
    quote_unit: "USDT",
    base_unit: "BTC",
    amount_precision: "000",
    name: "BTC/USDT",
    price_precision: "00",
  };
  const marketTickers = "";

  const defaultTicker = {
    amount: 0,
    low: 0,
    last: 0,
    high: 0,
    volume: 0,
    price_change_percent: "+0.00%",
  };

  const getTickerValue = (value) => {
    return (
      currentMarket && (marketTickers[currentMarket.id] || defaultTicker)[value]
    );
  };

  const isPositive =
    currentMarket && /\+/.test(getTickerValue("price_change_percent"));
  const cls = isPositive ? "positive" : "negative";

  const bidUnit = currentMarket && currentMarket.quote_unit;
  const askUnit = currentMarket && currentMarket.base_unit;
  const amountPrecision =
    (currentMarket && currentMarket.amount_precision) || 6;
  const pricePrecision = (currentMarket && currentMarket.price_precision) || 4;

  return (
    <HeaderToolbarStyle>
      <div className="td-header__toolbar--left">
        <div className="td-header__toolbar-item">
          <p className="td-header__toolbar-item-title">
            {(currentMarket && currentMarket.name) || "NONE"}
          </p>
          <p className={`td-header__toolbar-item-value`}>{askUnit}</p>
        </div>
        <div className="td-header__toolbar-item td-header__toolbar-item--hightlight">
          <p
            className={`td-header__toolbar-item-value td-header__toolbar-item-value-${cls}`}
          >
            {(Number(getTickerValue("last")), pricePrecision)}
          </p>
          <p className={`td-header__toolbar-item-value`}>
            ${" "}
            <ConvertUsd
              value={Number(getTickerValue("last"))}
              symbol={get(currentMarket, "quote_unit", "")}
            />
          </p>
        </div>
        <div className="td-header__toolbar-item">
          <p className="td-header__toolbar-item-text">Change</p>
          <p
            className={`td-header__toolbar-item-value td-header__toolbar-item-value-${cls}`}
          >
            {getTickerValue("price_change_percent")}
          </p>
        </div>
        <div className="td-header__toolbar-item">
          <p className="td-header__toolbar-item-text">Lowest 24h</p>
          <p className="td-header__toolbar-item-value td-header__toolbar-item-value-data">
            {(Number(getTickerValue("low")), pricePrecision)}
          </p>
        </div>
        <div className="td-header__toolbar-item">
          <p className="td-header__toolbar-item-text">Highest 24h</p>
          <p className="td-header__toolbar-item-value td-header__toolbar-item-value-data">
            {(Number(getTickerValue("high")), pricePrecision)}
          </p>
        </div>

        <div className="td-header__toolbar-item">
          <p className="td-header__toolbar-item-text">
            {" 24h Volume "}({bidUnit})
          </p>
          <p
            className={`td-header__toolbar-item-value td-header__toolbar-item-value-${cls}`}
          >
            {(Number(getTickerValue("volume")), amountPrecision)}
          </p>
        </div>
      </div>
      <div className="td-header__toolbar--right">
        <img src={playSvg} />
        <a className="link-tutorial" href="/">
          Spot Tutorial
        </a>
      </div>
    </HeaderToolbarStyle>
  );
};
