import React from "react";

const Footer = () => {
  return (
    <footer
      className="footer border-top border-black mt-3"
      style={{ marginTop: "-30px" }}
    >
      <div className="container-fluid">
        <div className="row  align-items-center">
          <div className="col text-left">
            <h5 className="text-muted">
              <span role="img" aria-labelledby='©️'>©️</span>2024 Candlestick TradePal. All Rights Reserved
            </h5>
          </div>

          <div className="col text-center">
            <a
              className="text-muted mx-2"
              href="https://www.candlesticktradepal.com/help"
            >
              Leave a feedback
            </a>
            <a
              className="text-muted mx-2"
              href="https://www.candlesticktradepal.com/help"
            >
              Share with a friend
            </a>
          </div>
          <div className="col text-right">
            <a
              className="text-muted"
              href="https://www.candlesticktradepal.com/help"
            >
              www.candlesticktradepal.com/help
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
