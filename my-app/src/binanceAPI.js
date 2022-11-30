import WebSocket from "ws";

const subscribeKline = (symbol, interval, callback) => {
  const socket = new WebSocket(
    `wss://stream.binance.com:9443/ws/${symbol.toLowerCase()}@kline_${interval}`
  );

  socket.onmessage = (event) => {
    const klineData = JSON.parse(event.data).k;

    const data = {
      timestamp: klineData.t,
      open: parseFloat(klineData.o),
      high: parseFloat(klineData.h),
      low: parseFloat(klineData.l),
      close: parseFloat(klineData.c),
      volume: parseFloat(klineData.v),
    };

    callback(data);
  };

  socket.onerror = (error) => {
    console.error("WebSocket error:", error);
  };

  socket.onclose = () => {
    console.log("WebSocket closed");
  };
};

export { subscribeKline };
