import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { MainPage } from "./screens";
ReactDOM.render(
  <BrowserRouter>
    <MainPage />
  </BrowserRouter>,
  document.getElementById("root")
);
