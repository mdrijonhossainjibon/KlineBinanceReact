import { useEffect, useRef, useState } from "react";
import { init, dispose } from "klinecharts";
import { fetchKline, subscribeKline } from "../binanceAPI";
import { Button } from "antd";
import "./style.css";

export const Trading_CHART = (props) => {
  const chart = useRef(null);
  const paneId = useRef("");
  const [update, setupdate] = useState([
    {
      open: 0,
      close: 0,
      high: 0,
      low: 0,
      timestamp: Date.now() - 9 * 1000,
      volume: 0,
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
        {" "}
        <Button
          name="1"
          onClick={() =>
            subscribeKline("TRXUSDT", "1s", (data) => {
              chart.current?.updateData(data);
              console.log(data);
            })
          }
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
