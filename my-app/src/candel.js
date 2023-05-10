import { useEffect, useRef, useState } from "react";
import { init, dispose } from "klinecharts";
import { subscribeKline } from "./binanceAPI";

export const Candle = (props) => {
  const chart = useRef(null);
  const paneId = useRef("");
  const [update, setUpdate] = useState({
    open: 0,
    close: 0,
    high: 0,
    low: 0,
    timestamp: Date.now() - 9 * 1000,
    volume: 0,
  });
  const [timeFrame, setTimeFrame] = useState("1s");

  useEffect(() => {
    chart.current = init("indicator-k-line");
    paneId.current = chart.current?.createIndicator("VOL");
    chart.current?.createIndicator("MA", false, {
      id: "candle_pane",
    });

    chart.current?.applyNewData([]);

    return () => {
      dispose(chart.current);
    };
  }, []);

  useEffect(() => {
    chart.current?.updateData(update);
  }, [update]);

  const handleTimeFrameChange = (e) => {
    const newTimeFrame = e.target.value;
    setTimeFrame(newTimeFrame);
    subscribeKline("BTCUSDT", newTimeFrame, (data) => {
      chart.current?.updateData(data);
      console.log(data);
    });
  };

  return (
    <>
      <div className="k-line-chart-container">
        <div id="indicator-k-line" className="k-line-chart" />
        <div className="k-line-chart-menu-container">
          <select value={timeFrame} onChange={handleTimeFrameChange}>
            <option value="1s">1s</option>
            <option value="5m">5m</option>
            <option value="15m">15m</option>
            <option value="30m">30m</option>
            <option value="1d">1d</option>
          </select>
        </div>
      </div>
      <div className="watermark">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Binance_logo.svg/1280px-Binance_logo.svg.png" />
      </div>
    </>
  );
};
