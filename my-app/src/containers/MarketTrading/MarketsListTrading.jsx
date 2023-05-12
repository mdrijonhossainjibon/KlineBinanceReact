import { SortAsc, SortDefault, SortDesc } from "../../assets/images/SortIcons";
import { MarketTradingSvg } from "../../assets/images/trading/MarketTradingSvg";
import classnames from "classnames";
//import { Decimal, TableTrading } from 'components';

import find from "lodash/find";
//import { depthFetch, Market, selectCurrentMarket, selectMarketTickers, setCurrentMarket, setCurrentPrice } from 'modules';
import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { TableTrading } from "../../components/TableTrading";
import { MarketsListTradingStyle } from "./styles";

const handleChangeSortIcon = (sortBy, id, reverseOrder) => {
  if (sortBy !== "none" && id === sortBy && !reverseOrder) {
    return <SortDesc />;
  }

  if (sortBy !== "none" && id === sortBy && reverseOrder) {
    return <SortAsc />;
  }

  return <SortDefault />;
};
const MarketsListTrading = (props) => {
  const history = useNavigate();

  const [sortByState, setSortByState] = useState("none");
  const [isHoverFavorite, setIsHoverFavorite] = useState(false);
  const [reverseOrderState, setReverseOrderState] = useState(false);

  const currentMarket = { name: "btc/usdt" };
  const marketTickers = {
    "BTC-USDT": {
      name: "BTC/USD",
      last: "4000.00",
      volume: "28990",
      price_change_percent: "+0.23",
    },
    "DOGE-USDT": {
      id: "eth-usd",
      name: "ETH/USD",
      last: "4000.00",
      volume: "28990",
      price_change_percent: "+0.23",
    },"DOGE-BTC": {
      id: "eth-usd",
      name: "ETH/USD",
      last: "4000.00",
      volume: "28990",
      price_change_percent: "+0.23",
    }
  };

  console.log(marketTickers["DOGE-USDT"]);

  const currencyPairSelectHandler = (key) => {
    const marketToSet = props.data.find((market) => market.name === key);
  };

  const handleHeaderClick = (key) => {
    if (key !== sortByState) {
      setSortByState(key);
      setReverseOrderState(false);
    } else if (key === sortByState && !reverseOrderState) {
      setReverseOrderState(true);
    } else {
      setSortByState("none");
      setReverseOrderState(false);
    }
  };

  const getHeaders = () => {
    const header = [
      { id: "id", translationKey: "Market" },
      { id: "last", translationKey: "Last Price" },
      props.type === "change"
        ? { id: "price_change_percent_num", translationKey: "change" }
        : { id: "volume", translationKey: "volume" },
    ]
      .map((obj) => {
        return {
          ...obj,
          selected: sortByState === obj.id,
          reversed: sortByState === obj.id && reverseOrderState,
        };
      })
      .map((obj) => {
        const classname = classnames({
          "td-markets-trading-list-container__header-selected": obj.selected,
        });

        return (
          <span
            className={classname}
            key={obj.id}
            onClick={() => handleHeaderClick(obj.id)}
          >
            {`${obj.translationKey}`}
            <span className="sort-icon">
              {handleChangeSortIcon(sortByState, obj.id, reverseOrderState)}
            </span>
          </span>
        );
      });

    // custom rowKeyTable
    header.push(<></>);

    return header;
  };

  const handleHoverFavorite = (isHover) => {
    setIsHoverFavorite(isHover);
  };
  console.log(marketTickers["BTC-USD"]);
  const mapMarkets = () => {
    const defaultTicker = {
      last: 0,
      volume: 0,
      price_change_percent: "+0.00%",
    };

    const marketsMapped = props.data.map((market) => {
      return {
        ...market,
        last: (marketTickers[market.name] || defaultTicker).last,
        volume: (marketTickers[market.name] || defaultTicker).volume,
        price_change_percent: (marketTickers[market.name] || defaultTicker)
          .price_change_percent,
      };
    });
    console.log(marketsMapped);
    if (sortByState !== "none") {
      marketsMapped.sort((a, b) =>
        a[sortByState] > b[sortByState]
          ? 1
          : b[sortByState] > a[sortByState]
          ? -1
          : 0
      );
    }

    reverseOrderState && marketsMapped.reverse();

    return marketsMapped.map((market) => {
      const isPositive = /\+/.test(
        (marketTickers[market.name] || defaultTicker).price_change_percent
      );
      const classname = classnames({
        "td-markets-trading-list-container__positive": isPositive,
        "td-markets-trading-list-container__negative": !isPositive,
      });

      return [
        <span>
          <MarketTradingSvg
            active={props.listFavoriteKey.includes(market.name)}
            className="favorite"
            onMouseEnter={() => handleHoverFavorite(true)}
            onMouseLeave={() => handleHoverFavorite(false)}
            onClick={() => props.onSelectFavorite(market.name)}
          />
          <span className="ml-2">{market.name}</span>
        </span>,
        <span className={classname}>{market.last}</span>,
        props.type === "change" ? (
          <span className={classname}>{market.price_change_percent}</span>
        ) : (
          <span className={classname}>{market.volume}</span>
        ),
        market.name,
      ];
    });
  };

  const dataTable = mapMarkets();
  const selectedObject = find(props.data, (market) =>
    currentMarket &&
    currentMarket.name.toLocaleLowerCase() === market.name.toLocaleLowerCase()
      ? true
      : false
  );

  return (
    <MarketsListTradingStyle>
      <div className="td-markets-trading-list-container">
        <TableTrading
          data={dataTable.length > 0 ? dataTable : [[]]}
          header={getHeaders()}
          onSelect={isHoverFavorite ? undefined : currencyPairSelectHandler}
          selectedKey={
            selectedObject === undefined ? undefined : selectedObject.name
          }
          rowKeyIndex={3}
        />
      </div>
    </MarketsListTradingStyle>
  );
};

export { MarketsListTrading };
