import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "../../axiosInstance";
import "react-notifications/lib/notifications.css";
import {
  NotificationManager,
} from "react-notifications";
import "./card.css";
import { useDispatch } from "react-redux";
import { InputAperiod } from "../../reducers/InputSlice";

const Introduction = () => {
  const history = useHistory();

  const dispatch = useDispatch();
  // const [Cperiod, setCperiod] = useState("");
  // const [Rdata, setRdata] = useState(false);
  // const iN2 = [
  //   "Set Predetermined Risks",
  //   "Accurately Predict Stop Loss",
  //   "Maximize Profit Potential",
  //   "Determine Risk-Optimized Quantity",
  //   "User Friendly Interface",
  // ];
  // const iN3 = [
  //   "Simplify Complex Analysis",
  //   "Analyze different Market Commodities",
  //   "Back-Test Trading Scenarios",
  //   "Customized Risk Parameters",
  //   "Customized To Trade in 6 Major Currencies",
  // ];
  // const [open, setOpen] = React.useState(true);
  // const [selectedDiv, setSelectedDiv] = useState(null);

  // const Handle = () => {
  //   localStorage.removeItem("Auth");
  //   localStorage.removeItem("userId");
  //   localStorage.removeItem("level");
  //   localStorage.removeItem("Username");
  //   localStorage.removeItem("Email");
  //   localStorage.removeItem("UserId");
  //   localStorage.removeItem("FirstName");
  //   localStorage.removeItem("Lastname");
  //   localStorage.removeItem("Aperiod");
  //   window.location = "/login";
  // };

  const getuserperiod = () => {
    axios
      .post("/api/users/getperiod", { email: localStorage.getItem("Email") })
      .then((res) => {
        if (res.data === "success") {
          NotificationManager.success(res.data, "Success");
          // dispatch(InputAperiod(1))
          localStorage.setItem("Aperiod", 1);
        } else if (res.data.period === Infinity) {
        } else {
          NotificationManager.warning(res.data, "Warning");
          console.log(res.data);
          dispatch(InputAperiod(0));
          localStorage.setItem("Aperiod", 0);
          // setCperiod(res.data);
        }
      })
      .catch((err) => {
        console.log(err.data);
      });
  };

  // const SetPeriod = () => {
  //   var period;
  //   if (selectedDiv == 0) {
  //     period = 7;
  //   } else if (selectedDiv == 1) {
  //     period = 30;
  //   } else if (selectedDiv == 2) {
  //     period = 365;
  //   } else if (selectedDiv == 3) {
  //     period = 99999999999;
  //   } else if (!selectedDiv) {
  //     NotificationManager.warning("Please choose period", "warning");
  //   }

  //   axios
  //     .post("/api/users/requestperiod", {
  //       email: localStorage.getItem("Email"),
  //       Rperiod: period,
  //     })
  //     .then((res) => {
  //       console.log(res.data);
  //       // setRdata(true);
  //       // setOpen(false);
  //       // setRdata()
  //       NotificationManager.success(res.data, "Success");
  //     })
  //     .catch((err) => {
  //       console.log(err.data);
  //     });
  // };

  // const handleClick = (divIndex) => {
  //   setSelectedDiv(divIndex);
  // };

  // const divStyle = {};

  // const selectedDivStyle = {
  //   ...divStyle,
  //   border: "1px solid var(--col)",
  //   backgroundColor: "#26262680",
  //   boxShadow: "0 0 32px #171717",
  //   transform: "translateY(-16px) scale(1.02)",
  //   transition: "all 0.5s ease",
  // };

  useEffect(() => {
    getuserperiod();
  }, [localStorage.getItem("Email")]);

  const navigateToSimulator = () => {
    history.push("/strategy_simulator");
  };
  const navigateToPercent = () => {
    history.push("/percent");
  };
  const navigateToSummary = () => {
    history.push("/report");
  };

  return (
    <>
      <div style={{ backgroundColor: "#1E1E2D", padding: "20px 0" }}>
        <div className="text-center">
          <h1
            style={{ color: "#E7EAEA", fontWeight: "bold", fontSize: "2.5rem" }}
          >
            "Master Your Trades with Confidence"
          </h1>
          <p
            style={{
              color: "#E7EAEA",
              fontWeight: "bold",
              fontSize: "1.5rem",
              marginTop: "15px",
            }}
          >
            Plan your trade...Trade your plan!
          </p>
          <div
            style={{
              marginTop: "10px",
              backgroundColor: "#FFFFFF",
              padding: "20px",
              display: "inline-block",
            }}
          >
            <img
              src={require("../../assets/vid.gif")}
              alt="Demo GIF"
              style={{
                width: "100%",
                maxWidth: "600px",
                height: "auto",
                margin: "0 auto",
              }}
            />

            <h2
              style={{
                color: "#000000",
                fontWeight: "bold",
                fontSize: "2rem",
                marginTop: "30px",
              }}
            >
              CANDLESTICK TRADEPAL
            </h2>
          </div>
        </div>

        <div className="text-center" style={{ marginTop: "30px" }}>
          <div className="btn-group" role="group">
            <button
              type="button"
              className="btn btn-outline-secondary"
              style={{ color: "#CBCBE2", borderColor: "#CBCBE2" }}
              onClick={navigateToSimulator}
            >
              Price Back-Test
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary"
              style={{ color: "#CBCBE2", borderColor: "#CBCBE2" }}
              onClick={navigateToPercent}
            >
              {" "}
              Percentile Back-Test
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary"
              style={{ color: "#CBCBE2", borderColor: "#CBCBE2" }}
              onClick={navigateToSummary}
            >
              Summary Trade Plan
            </button>
          </div>
        </div>

        <footer
          className="text-center"
          style={{ marginTop: "30px", color: "#CBCBE2", fontSize: "0.9rem" }}
        >
          <p>©2024 Candlestick TradePal. All Rights Reserved</p>
          <p>
            By using Candlestick TradePal, you agree to our{" "}
            <a
              href="/terms"
              style={{ color: "#CBCBE2", textDecoration: "underline" }}
            >
              Terms and Conditions
            </a>
          </p>
          <p>
            <a
              href="www.candlesticktradepal.com/help"
              style={{ color: "#CBCBE2", textDecoration: "underline" }}
            >
              www.candlesticktradepal.com/help
            </a>
          </p>
        </footer>
      </div>

      {/* <div className="row">
                <div className="col-12 text-center" style={{ marginTop: '50px', marginBottom: '70px' }}>
                    <text className="py-5 px-5" style={{ fontFamily: 'Abhaya Libre', fontSize: '18px' }}>
                        Unlock Your Trading Potential... Streamline Your Strategy with Our Innovative and Intelligent Analyst. A Risk Management  Tool for Trade Optimization!<br />

                        Candlestick TradePal is a powerful tool designed to assist traders in calculating key trade parameters such as stop loss, optimum quantity, and profit taking price. Its advance <br /> features provides traders with valuable insights for effective decision making in risk management and profit optimization. Please visit www.candlesticktradepal.com to view our<br /> user guide and learn more about the its features
                    </text>
                </div>
            </div >
            <div className="row" style={{ fontFamily: 'Abhaya Libre', fontSize: '18px', marginBottom: '60px' }}>
                <div className="col-2" ></div>
                <div className="col-3" style={{ display: "flex", alignContent: 'center', justifyContent: 'center' }}>
                    <ul >
                        {iN2.map((itm, i) => {
                            return <li style={{ paddingBottom: '18px' }} key={i}>{itm}</li>;
                        })}
                    </ul>
                </div>
                <div className="col-2" style={{ display: "flex", alignContent: 'center', justifyContent: 'center' }}>
                    <img src={require('../../assets/images/intrologo.png')} className="gradient-corona-img img-fluid" alt="banner" />
                </div>
                <div className="col-3" style={{ display: "flex", alignContent: 'center', justifyContent: 'center' }}>
                    <ul >
                        {iN3.map((itm, i) => {
                            return <li style={{ paddingBottom: '18px' }} key={i}>{itm}</li>;
                        })}
                    </ul>
                </div>
                <div className="col-2"></div>
            </div>
            <div className="row" style={{ fontFamily: 'Abhaya Libre', fontSize: '18px', textAlign: 'center', marginBottom: '80px' }}>
                <div className="col-12">
                    <ul className="mb-5" style={{ fontSize: '18px', display: "flex", alignContent: 'center', justifyContent: 'center' }}>
                        <li>Gain The Peace Of Mind To Make Quick Decisions As You Analyze Pre-Trades and Post-Trades of Stocks, Options, Futures, Cryptos and Forex Candlesticks!</li>
                    </ul>
                    <text style={{ color: '#12FB1B', fontSize: '21px' }}>Candlestick TradePal… The Trader’s Best Risk Management Tool and Intelligent Strategist.</text>
                </div>
            </div>
            <div className='px-5' style={{ display: "flex", justifyContent: 'space-between', alignItems: "center" }} >
                <div >
                    <Link style={{ color: 'white', textDecoration: 'underline' }} to="">Share with a Friend</Link>
                </div>
                <div >
                    <Link style={{ color: 'white', textDecoration: 'underline' }} to="">Terms of Use</Link>
                </div>
                <div style={{ color: "#00D25B" }}>
                    Click <Link style={{ color: 'white', textDecoration: 'underline' }} to="">here</Link> for Support
                </div>
            </div>
            <hr style={{ backgroundColor: "white" }} /> */}
    </>
  );
};

export default Introduction;
