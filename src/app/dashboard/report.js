import React, { useEffect, useState } from "react";
import axios from "../../axiosInstance";
import "react-notifications/lib/notifications.css";
import { NotificationManager } from "react-notifications";
import "./card.css";
import { useDispatch } from "react-redux";
import { InputAperiod } from "../../reducers/InputSlice";
import { useSelector } from "react-redux";

const Introduction = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState([]);
  useEffect(() => {
    const savedState = localStorage.getItem("myComponentStateArray");
    if (savedState) {
      setState(JSON.parse(savedState)); // Parse the saved JSON string back into an array
    }
  }, []);

  const clearState = () => {
    localStorage.removeItem("myComponentStateArray"); // Clear the saved state from localStorage
    setState([]); // Reset the component state
  };

  // console.log(state)
  const headerStyle = {
    padding: "12px",
    color: "#ffffff",
    backgroundColor: "#3F3F5C",
    border: "1px solid #ddd",
    textAlign: "center",
  };

  const cellStyle = {
    padding: "12px",
    border: "1px solid #ddd",
    textAlign: "center",
    color: "#ffffff",
  };

  const rowStyle = {
    backgroundColor: "#2A2A3D",
  };

  const { HHH01, HHH02, HHH03, GGGO2, FFF01,EEEO3, EEEO2, EEEO1, Currency, GGGO1 } =
    useSelector((state) => state.InputValue);

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
          // console.log(res.data);
          dispatch(InputAperiod(0));
          localStorage.setItem("Aperiod", 0);
        }
      })
      .catch((err) => {
        // console.log(err.data);
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
        <div className="text-center">
          <h1
            style={{
              color: "#FFFFFF",
              fontWeight: "bold",
              fontSize: "2rem",
              marginBottom: "10px",
            }}
          >
            MY TRADEPAL TRADING PLAN
          </h1>
          <div className="" style={{ borderRadius: "8px" }}>
            <div className="card-body">
              <p
                style={{
                  color: "#FFFFFF",
                  textAlign: "center",
                  fontSize: "1.2rem",
                }}
              >
                Buy{" "}
                <span style={{ color: "#FFCC00", fontWeight: "bold" }}>
                  {EEEO2 || 0}
                </span>{" "}
                position size at{" "}
                <span style={{ color: "#FFCC00", fontWeight: "bold" }}>
                  {" " + Currency + (EEEO1 || 0) + " "}
                </span>
              </p>
              <p
                style={{
                  color: "#FFFFFF",
                  textAlign: "center",
                  fontSize: "1.2rem",
                }}
              >
                Close Trade at{" "}
                <span style={{ color: "rgb(255, 62, 29)", fontWeight: "bold" }}>
                  {" " + Currency + (EEEO3 || 0) + " "}
                </span>
                For a
                <span style={{ color: "rgb(255, 62, 29)", fontWeight: "bold" }}>
                  {" " + Currency + (FFF01.toFixed(2) || 0) + " "}
                </span>
                loss
              </p>
              <p
                style={{
                  color: "#FFFFFF",
                  textAlign: "center",
                  fontSize: "1.2rem",
                }}
              >
                Take profit at{" "}
                <span style={{ color: "#00FF00", fontWeight: "bold" }}>
                  {" " + Currency + (GGGO1 || 0) + " "}
                </span>{" "}
                for a{" "}
                <span style={{ color: "#00FF00", fontWeight: "bold" }}>
                  {" " + Currency + (GGGO2.toFixed(2) || 0) + " "}
                </span>{" "}
                gain.
              </p>
              <p
                style={{
                  color: "#FFFFFF",
                  textAlign: "center",
                  fontSize: "1.2rem",
                }}
              >
                Total cost of investment is{" "}
                <span
                  style={{ color: "rgb(30, 194, 236)", fontWeight: "bold" }}
                >
                  {" " + Currency + (HHH02.toFixed(2) || 0) + " "}
                </span>{" "}
              </p>
              <p
                style={{
                  color: "#FFFFFF",
                  textAlign: "center",
                  fontSize: "1.2rem",
                }}
              >
                This plan has a{" "}
                <span
                  style={{ color: "rgb(30, 194, 236)", fontWeight: "bold" }}
                >
                  {" " + (HHH01.toFixed(2) || 0) + "%" + " "}
                </span>{" "}
                return on investment and a{" "}
                <span
                  style={{ color: "rgb(30, 194, 236)", fontWeight: "bold" }}
                >
                  {" " + (HHH03.toFixed(2) || 0) + " "}
                </span>{" "}
                X risk-reward ratio.
              </p>
            </div>
            <div style={{ overflowX: "auto" }}>
              <table
                style={{
                  borderCollapse: "collapse",
                  width: "100%",
                  border: "1px solid #ddd",
                  backgroundColor: "#1E1E2D",
                  borderRadius: "8px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                }}
              >
                <thead>
                  <tr>
                    <th style={headerStyle}>#</th>
                    <th style={headerStyle}>Entry Price</th>
                    <th style={headerStyle}>Position Size</th>
                    <th style={headerStyle}>Stop Price</th>
                    <th style={headerStyle}>Project Loss</th>
                    <th style={headerStyle}>Sell Price</th>
                    <th style={headerStyle}>Projected Profit</th>
                    <th style={headerStyle}>Amount Invested</th>
                    <th style={headerStyle}>Risk Reward Ratio</th>
                    <th style={headerStyle}>Return On Investment</th>
                    <th style={headerStyle}>Trade Range</th>
                  </tr>
                </thead>

                <tbody>
                  {state.reverse().map((val, index) => (
                    <tr key={index} style={rowStyle}>
                      <td style={cellStyle}>{index + 1}</td>
                      <td style={cellStyle}>{Currency + val.C13}</td>
                      <td style={cellStyle}>{val.C14}</td>
                      <td style={cellStyle}>{Currency + val.C15}</td>
                      <td style={cellStyle}>{Currency + val.C16.toFixed(1)}</td>
                      <td style={cellStyle}>{Currency + val.C19}</td>
                      <td style={cellStyle}>{Currency + val.C20.toFixed(2)}</td>
                      <td style={cellStyle}>{Currency + val.C22.toFixed(2)}</td>
                      <td style={cellStyle}>{Currency + val.C23.toFixed(2)}</td>
                      <td style={cellStyle}>{val.C21.toFixed(2)+ ' X'}</td>
                      <td style={cellStyle}>{val.C32 + "%"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
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
          <button
            type="button"
            className="btn btn-outline-secondary"
            style={{
              color: "#33FF33",
              borderColor: "#33FF33",
              fontSize: "1.5rem",
              padding: "10px 30px",
              marginTop: "40px",
              marginLeft: "10px"
            }}
            onClick={() => clearState()}
          >
            Clear Table
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
