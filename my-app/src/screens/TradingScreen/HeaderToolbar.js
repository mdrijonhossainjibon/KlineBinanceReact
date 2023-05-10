import "./style.css";
import playSvg from "../../assets/images/trading/play.svg";
export const HeaderToolbar = () => {
  return (
    <div className="HeaderToolbarStyle">
      <div className="td-header__toolbar--left">
        <div className="td-header__toolbar-item">
          <p className="td-header__toolbar-item-title">BTC/USD</p>
          <p className={`td-header__toolbar-item-value`}>BTC</p>
        </div>
        <div className="td-header__toolbar-item td-header__toolbar-item--hightlight">
          <p
            className={`td-header__toolbar-item-value td-header__toolbar-item-value-{cls}`}
          >
            0.000000
          </p>
          <p className={`td-header__toolbar-item-value`}>$ 0.000000 BTC</p>
        </div>
        <div className="td-header__toolbar-item">
          <p className="td-header__toolbar-item-text">change</p>
          <p
            className={`td-header__toolbar-item-value td-header__toolbar-item-value-{cls}`}
          >
            + 0.00%
          </p>
        </div>
        <div className="td-header__toolbar-item">
          <p className="td-header__toolbar-item-text">lowest</p>
          <p className="td-header__toolbar-item-value td-header__toolbar-item-value-data">
            0.000000
          </p>
        </div>
        <div className="td-header__toolbar-item">
          <p className="td-header__toolbar-item-text">highest</p>
          <p className="td-header__toolbar-item-value td-header__toolbar-item-value-data">
            0.000000
          </p>
        </div>

        <div className="td-header__toolbar-item">
          <p className="td-header__toolbar-item-text">volume (USDT)</p>
          <p
            className={`td-header__toolbar-item-value td-header__toolbar-item-value-{cls}`}
          >
            0.000000
          </p>
        </div>
      </div>
      <div className="td-header__toolbar--right">
        <img src={playSvg} />
        <a className="link-tutorial" href="/">
          sport
        </a>
      </div>
    </div>
  );
};
