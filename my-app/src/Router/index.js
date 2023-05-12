import { Route, Routes } from "react-router-dom";
import { Screen } from "../screens";
export const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Screen.TradingScreen />} />
        <Route path="/:symbol" element={<Screen.TradingScreen />} />
      </Routes>
    </>
  );
};
