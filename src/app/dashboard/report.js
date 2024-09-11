import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "../../axiosInstance";
import "react-notifications/lib/notifications.css";
import { NotificationManager } from "react-notifications";
import "./card.css";
import { useDispatch, useSelector } from "react-redux";
import { InputAperiod } from "../../reducers/InputSlice";

const Introduction = () => {
  const history = useHistory();

  const dispatch = useDispatch();

  const [Cperiod, setCperiod] = useState("");
  const [open, setOpen] = React.useState(true);

  const getuserperiod = () => {
    axios
      .post("/api/users/getperiod", { email: localStorage.getItem("Email") })
      .then((res) => {
        if (res.data === "success") {
          setOpen(false);
          NotificationManager.success(res.data, "Success");
          // dispatch(InputAperiod(1))
          localStorage.setItem("Aperiod", 1);
        } else if (res.data.period === Infinity) {
          setOpen(false);
        } else {
          NotificationManager.warning(res.data, "Warning");
          console.log(res.data);
          dispatch(InputAperiod(0));
          localStorage.setItem("Aperiod", 0);
          setCperiod(res.data);
        }
      })
      .catch((err) => {
        console.log(err.data);
      });
  };
  useEffect(() => {
    getuserperiod();
  }, [localStorage.getItem("Email")]);

  return (
    <>
      <div
        style={{
          backgroundColor: "#1E1E2D",
          padding: "40px 0",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div className="text-center" style={{ marginTop: "60px" }}>
          <h1
            style={{
              color: "#FFFFFF",
              fontWeight: "bold",
              fontSize: "3rem",
              marginBottom: "40px",
            }}
          >
            MY TRADEPAL TRADING PLAN
          </h1>
          <p
            style={{
              color: "#FF0000",
              fontWeight: "bold",
              fontSize: "1.8rem",
              marginBottom: "30px",
            }}
          >
            I risk <span style={{ color: "#FF0000" }}>($Risk Tolerance)</span>{" "}
            for a <span style={{ color: "#33FF33" }}>($Profit Goal)</span>{" "}
            profit by buying
          </p>
          <p
            style={{
              color: "#FFFF00",
              fontSize: "1.6rem",
              marginBottom: "20px",
            }}
          >
            (Position Size) Shares/Contracts at{" "}
            <span style={{ color: "#FFFF00" }}>($Entry Price)</span>.
          </p>
          <p
            style={{
              color: "#FF0000",
              fontSize: "1.6rem",
              marginBottom: "20px",
            }}
          >
            Sell at <span style={{ color: "#FF0000" }}>($Stop Price)</span> for
            a <span style={{ color: "#FF0000" }}>($Projected Loss)</span> loss,
            or at <span style={{ color: "#33FF33" }}>($Sell Price)</span> for a{" "}
            <span style={{ color: "#33FF33" }}>($Projected Profit)</span>{" "}
            Profit.
          </p>
          <p
            style={{
              color: "#FFFFFF",
              fontSize: "1.6rem",
              marginBottom: "20px",
            }}
          >
            My Total Cost Of Investment Is No More Than{" "}
            <span style={{ color: "#FFFF00" }}>($Cost of Trade)</span>.
          </p>
          <p
            style={{
              color: "#FFFFFF",
              fontSize: "1.6rem",
              marginBottom: "40px",
            }}
          >
            This Trade Has A <span style={{ color: "#33FF33" }}>(ROI%)</span>{" "}
            Return On Investment With A (5)X Risk-Reward Ratio.
          </p>
          <button
            type="button"
            className="btn btn-outline-secondary"
            style={{
              color: "#33FF33",
              borderColor: "#33FF33",
              fontSize: "1.5rem",
              padding: "10px 30px",
              marginTop: "40px",
            }}
            onClick={() => window.history.back()}
          >
            Back
          </button>
        </div>

        <footer
          className="text-center"
          style={{ marginTop: "60px", color: "#CBCBE2", fontSize: "1rem" }}
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
              href="https://www.candlesticktradepal.com/help"
              style={{ color: "#CBCBE2", textDecoration: "underline" }}
            >
              www.candlesticktradepal.com/help
            </a>
          </p>
        </footer>
      </div>
    </>
  );
};

export default Introduction;
