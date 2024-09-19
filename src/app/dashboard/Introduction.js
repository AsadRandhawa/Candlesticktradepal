import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "../../axiosInstance";
import "react-notifications/lib/notifications.css";
import { NotificationManager } from "react-notifications";
import "./card.css";
import { useDispatch } from "react-redux";
import { InputAperiod } from "../../reducers/InputSlice";

const Introduction = () => {
  const history = useHistory();

  const dispatch = useDispatch();

  const getuserperiod = () => {
    axios
      .post("/api/users/getperiod", { email: localStorage.getItem("Email") })
      .then((res) => {
        if (res.data === "success") {
          NotificationManager.success(res.data, "Success");
          localStorage.setItem("Aperiod", 1);
        } else if (res.data.period === Infinity) {
        } else {
          NotificationManager.warning(res.data, "Warning");
          dispatch(InputAperiod(0));
          localStorage.setItem("Aperiod", 0);
        }
      })
      .catch((err) => {
        console.log(err.data);
      });
  };

  useEffect(() => {
    getuserperiod();
    // eslint-disable-next-line
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
          <p>
            ©2024{" "}
            <a href="https://www.candlesticktradepal.com/">
              Candlestick TradePal
            </a>
            . All Rights Reserved
          </p>{" "}
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
              href="https://www.candlesticktradepal.com/user-guide/"
              style={{ color: "#CBCBE2", textDecoration: "underline" }}
            >
              https://www.candlesticktradepal.com/user-guide/
            </a>
          </p>
        </footer>
      </div>
    </>
  );
};

export default Introduction;
