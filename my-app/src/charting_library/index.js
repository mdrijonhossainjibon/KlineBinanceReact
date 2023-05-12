import { useEffect, useRef, useState } from "react";
import { init, dispose } from "klinecharts";
import { fetchKline, subscribeKline } from "../binanceAPI";
import { Button } from "antd";

import "./style.css";
import { Tabs } from "antd";
import { useParams } from "react-router-dom";

export const Trading_CHART = (props) => {
  const chart = useRef(null);
  const paneId = useRef("");
  const [timePeriod, setTimePeriod] = useState("1d");
  const Symbol = useParams().symbol;
  const TRADESYMBOL =
    Symbol === undefined ? ["BTC", "USDT"] : Symbol.split("=")[1].split("_");

  const [timeFrame, setTimeFrame] = useState("1s");

  useEffect(() => {
    chart.current = init("indicator-k-line");
    paneId.current = chart.current?.createIndicator("VOL");
    chart.current?.createIndicator("MA", false, {
      id: "candle_pane",
    });
    chart.current?.applyNewData(props.klineData ? props.klineData : []);

    return () => {
      dispose(chart.current);
    };
  }, []);

  useEffect(() => {
    handleWs(TRADESYMBOL.join(""), timeFrame);
  }, []);

  const handleTabChange = (key) => {
    setTimePeriod(key);
  };

  const handleWs = (symbol, time) => {
    subscribeKline(symbol, time, (data) => {
      //chart.current?.updateData(data);
      //console.log(data);
    });
  };

  return (
    <>
      <div className="k-line-chart-container">
        <div id="indicator-k-line" className="k-line-chart" />
        <div className="k-line-chart-menu-container"></div>
      </div>
      <div className="watermark">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Binance_logo.svg/1280px-Binance_logo.svg.png" />
      </div>
      <div className="time_period">
        <Button name="1" onClick={() => setTimeFrame("1s")}>
          1s
        </Button>{" "}
        <Button name="3" onClick={() => setTimeFrame("3s")}>
          3s
        </Button>{" "}
        <Button name="5" onClick={() => setTimeFrame("5s")}>
          5s
        </Button>{" "}
        <Button name="15" onClick={() => setTimeFrame("15s")}>
          15s
        </Button>{" "}
        <Button name="30" onClick={() => setTimeFrame("30s")}>
          30s
        </Button>{" "}
        <Button name="1m" onClick={() => setTimeFrame("1m")}>
          1m
        </Button>{" "}
        <Button name="5m" onClick={() => setTimeFrame("5m")}>
          5m
        </Button>{" "}
        <Button name="15m" onClick={() => setTimeFrame("15m")}>
          15m
        </Button>{" "}
        <Button name="30m" onClick={() => setTimeFrame("30m")}>
          30m
        </Button>{" "}
      </div>
    </>
  );
};
