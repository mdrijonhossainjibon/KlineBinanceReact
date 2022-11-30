import { useEffect, useRef, useState } from "react";
import { init, dispose } from "klinecharts";
import { subscribeKline } from "./binanceAPI";

export const Candle = (props) => {
  const chart = useRef(null);
  const paneId = useRef("");
  const [update, setUpdate] = useState({
    open: Math.random(),
    close: Math.random(),
    high: Math.random(),
    low: Math.random(),
    timestamp: Date.now() - 9 * 1000,
    volume: Math.floor(Math.random() * 10),
  });

  useEffect(() => {
    chart.current = init("indicator-k-line");
    paneId.current = chart.current?.createIndicator("VOL");
    chart.current?.createIndicator("MA", false, {
      id: "candle_pane",
    });

    chart.current?.applyNewData([]);

    setInterval(() => {
      setUpdate({
        open: Math.random(),
        close: Math.random(),
        high: Math.random(),
        low: Math.random(),
        timestamp: Date.now() - 9 * 1000,
        volume: Math.floor(Math.random() * 10),
      });
    }, 5000);

    return () => {
      dispose(chart.current);
    };
  }, []);

  useEffect(() => {
    chart.current?.updateData(update);
  }, [update]);

  return (
    <>
      <div className="k-line-chart-container">
        <div id="indicator-k-line" className="k-line-chart" />
        <div className="k-line-chart-menu-container"></div>
      </div>
      <div className="watermark">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Binance_logo.svg/1280px-Binance_logo.svg.png" />
      </div>
    </>
  );
};
