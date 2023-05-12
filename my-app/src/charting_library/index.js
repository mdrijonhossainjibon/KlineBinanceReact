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

  //console.log(useParams().symbol.split("=")[1].split("_"));
  const [update, setupdate] = useState([
    {
      open: 0.0273,
      close: 0.0275,
      high: 0.0266,
      low: 0.02,
      timestamp: Date.now() - 9 * 1000,
      volume: 395126699.1,
    },
    {
      open: 0.06825,
      close: 0.06825,
      high: 0.06826,
      low: 0.0682,
      timestamp: Date.now() - 18 * 1000,
      volume: 345126699.1,
    },
  ]);
  const [timeFrame, setTimeFrame] = useState("1s");

  useEffect(() => {
    chart.current = init("indicator-k-line");
    paneId.current = chart.current?.createIndicator("VOL");
    chart.current?.createIndicator("MA", false, {
      id: "candle_pane",
    });
    chart.current?.applyNewData(update);

    fetchKline("TRXUSDT", "1s").then((data) => {
      // setupdate(data);
    });
    return () => {
      dispose(chart.current);
    };
  }, []);

  const handleTabChange = (key) => {
    setTimePeriod(key);
  };

  const handleWs = (symbol, time) => {
    subscribeKline(symbol, time, (data) => {
      chart.current?.updateData(data);
      console.log(data);
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
        <Button
          name="1"
          onClick={() => handleWs(TRADESYMBOL[0] + TRADESYMBOL[1], "1s")}
        >
          1s
        </Button>{" "}
        <Button onClick={() => alert("d")}>1s</Button>{" "}
        <Button onClick={() => alert("d")}>1s</Button>{" "}
        <Button onClick={() => alert("d")}>1s</Button>
        <Button onClick={() => alert("d")}>1s</Button>
        <Button onClick={() => alert("d")}>1s</Button>
      </div>
    </>
  );
};
