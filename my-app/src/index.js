import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Store } from "./Store";
//import "bootstrap/dist/css/bootstrap.min.css";

//import './assets/bootstrap/css/bootstrap.min.css';
//import 'antd/dist/';
//import "slick-carousel/slick/slick-theme.css";
//import "slick-carousel/slick/slick.css";

import "./App.css";
import { MainPage } from "./screens";

//const root = ReactDOM.createRoot(document.getElementById('root'));
ReactDOM.render(
  <BrowserRouter>
    <Provider store={Store}>
      <MainPage />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
