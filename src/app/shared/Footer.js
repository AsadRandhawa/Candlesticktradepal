import { Link } from '@mui/material';
import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="footer border-top border-black mt-3" style={{ marginTop: '-30px' }}>
        <div className="container-fluid">
          <div className='row px-5'>
            <div className="col">
              <div className="float-left text-muted">
                <h5>
                  ©2024 Candlestick TradePal. All Rights Reserved
                </h5>
              </div>
              <div className="float-right">
                <a href="https://www.candlesticktradepal.com/">www.candlesticktradepal.com </a>
              </div>

            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
