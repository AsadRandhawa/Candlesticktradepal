import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Link } from "react-router-dom";
import {
  InputAAAO1,
  InputAAAO2,
  InputEEEO1,
  InputMMMO1,
  InputCCCO1,
  InputEEEO3,
  InputEEEO2,
  InputCCCO2,
  InputGGGO1,
  InputIIIO1,
  InputJJJO1,
  InputLLL05,
  InputLLL01,
  InputLLL02,
  InputLLL03,
  InputFFF01,
  InputGGGO2,
  InputHHH01,
  InputHHH02,
  InputHHH03,
} from "../../reducers/InputSlice";
import FormTag from "../Component/FormTag";
import GaugeChart from "react-gauge-chart";
import ButtonTag from "../Component/ButtonTag";
import FormTag4 from "../Component/FormTag4";
import { setCurrency } from "../../reducers/counterSlice";
import { setToggle } from "../../reducers/toggleSlice";

const Dashboard = () => {
  const isSCToggleOn = useSelector((state) => state.toggle.toggle);
  const CurrencySelect = useSelector((state) => state.currency.currency);

  let num = Intl.NumberFormat("en-US");
  const [countI, setCountI] = useState(2);
  const handleKeyPress = (target) => {
    if (target.charCode == 13) {
      if (countI < 14) setCountI(countI + 1);
      else {
        setCountI(1);
      }
      const nextSibling = document.querySelector(`input[name=CIO${countI}]`);
      if (nextSibling !== null) {
        nextSibling.focus();
      }
    }
  };
  const {
    AAAO1,
    AAAO2,
    EEEO1,
    MMMO1,
    CCCO1,
    EEEO3,
    EEEO2,
    CCCO2,
    IIIO1,
    JJJO1,
    GGGO1,
    Currency,
  } = useSelector((state) => state.InputValue);
  const dispatch = useDispatch();
  //BBBO1 AO1*AO2
  let AAAO1temp = AAAO1 === 0 ? "" : AAAO1;
  const [AO1, setAO1] = useState(AAAO1temp);
  let AAAO2temp = AAAO2 === 0 ? "" : AAAO2;
  const [AO2, setAO2] = useState(AAAO2temp);
  const [BO1, setBO1] = useState(0);
  const handleAAAO1 = (evt) => {
    let EAO1 = evt.target.value;
    let MAO1 = Number(EAO1.replace(/,/g, ""));
    // if (MAO1 <= 10000000)
    setAO1(parseFloat(MAO1));
  };
  const handleAAAO2 = (evt) => {
    let EAO2 = evt.target.value;
    let MAO2 = Number(EAO2.replace(/,/g, ""));
    // if (MAO2 <= 100000)
    setAO2(parseFloat(MAO2));
  };
  //BBBO2 BO1/EO1/MO1
  const [BO2, setBO2] = useState(0);
  let EEEO1temp = EEEO1 === 0 ? "" : EEEO1;
  const [EO1, setEO1] = useState(EEEO1temp);
  // let MMMO1temp = (MMMO1 === 1) ? "" : MMMO1;
  const [MO1, setMO1] = useState(MMMO1);
  const handleMMMO1 = (evt) => {
    let EMO1 = evt.target.value;
    let MMO2 = Number(EMO1.replace(/,/g, ""));
    // if (MMO2 <= 1000)
    setMO1(parseFloat(MMO2));
  };
  const handleEEEO1 = (evt) => {
    let EEO1 = evt.target.value;
    let MEO1 = Number(EEO1.replace(/,/g, ""));
    // if (MEO1 <= 100000)
    setEO1(parseFloat(MEO1));
  };
  //DDDO1 (CO1/(EO1-EO3)/MO1)*EO1*MO1
  const [DO1, setDO1] = useState(0);
  let CCCO1temp = CCCO1 === 0 ? "" : CCCO1;
  const [CO1, setCO1] = useState(CCCO1temp);
  let EEEO3temp = EEEO3 === 0 ? "" : EEEO3;
  const [EO3, setEO3] = useState(EEEO3temp);
  const handleCCCO1 = (evt) => {
    let ECO1 = evt.target.value;
    let MCO1 = Number(ECO1.replace(/,/g, ""));
    // if (MCO1 <= 100000)
    setCO1(parseFloat(MCO1));
  };

  //DDDO2 (CO1/(EO1-EO3)/MO1)
  const [DO2, setDO2] = useState(0);
  //HHHO2 EO1*EO2*MO1
  const [HO2, setHO2] = useState(0);
  let EEEO2temp = EEEO2 === 0 ? "" : EEEO2;
  const [EO2, setEO2] = useState(EEEO2temp);
  const handleEEEO2 = (evt) => {
    let EEO2 = evt.target.value;
    let MEO2 = Number(EEO2.replace(/,/g, ""));
    // if (MEO2 <= 100000)
    setEO2(parseFloat(MEO2));
  };
  //FFFO1 HO2-(EO3/EO1*HO2)
  const [FO1, setFO1] = useState(0);
  //Take Profit EO1-(CO1/EO2)/MO1
  const [FO2, setFO2] = useState(0);
  //FFFO3 EO1+(EO1*CO2/HO2)
  const [FO3, setFO3] = useState(0);
  let CCCO2temp = CCCO2 === 0 ? "" : CCCO2;
  const [CO2, setCO2] = useState(CCCO2temp);
  const handleCCCO2 = (evt) => {
    let ECO2 = evt.target.value;
    let MCO2 = Number(ECO2.replace(/,/g, ""));
    // if (MCO2 <= 100000)
    setCO2(parseFloat(MCO2));
  };
  //GGGO2 (EO2*GO1-EO2*EO1)*MO1
  const [GO2, setGO2] = useState(0);
  let GGGO1temp = GGGO1 === 0 ? "" : GGGO1;
  const [GO1, setGO1] = useState(GGGO1temp);
  const handleGGGO1 = (evt) => {
    let EGO1 = evt.target.value;
    let MGO1 = Number(EGO1.replace(/,/g, ""));
    // if (MGO1 <= 100000)
    setGO1(parseFloat(MGO1));
  };
  //HHHO1 GO2/CO1
  const [HO1, setHO1] = useState(0);
  //IIIO2 HO2*IO1*0.01*-1
  const [IO2, setIO2] = useState(0);
  let IIIO1temp = IIIO1 === 0 ? "" : IIIO1;
  const [IO1, setIO1] = useState(IIIO1temp);
  const handleIIIO1 = (evt) => {
    let EIO1 = evt.target.value;
    let MIO1 = Number(EIO1.replace(/,/g, ""));
    // if (MIO1 <= 100000)
    setIO1(parseFloat(MIO1));
  };
  //JJJO2 EO1*EO2*JO1*MO1
  const [JO2, setJO2] = useState(0);
  let JJJO1temp = JJJO1 === 0 ? "" : JJJO1;
  const [JO1, setJO1] = useState(JJJO1temp);
  const handleJJJO1 = (evt) => {
    let EJO1 = evt.target.value;
    let MJO1 = Number(EJO1.replace(/,/g, ""));
    // if (MJO1 <= 100000)
    setJO1(MJO1);
  };
  //KKKO1 EO1-IO1*EO1
  const [KO1, setKO1] = useState(0);
  const [LO5, setLO5] = useState(0);
  const [LO1, setLO1] = useState(0);
  const [LO2, setLO2] = useState(0);
  const [LO3, setLO3] = useState(0);
  //KKKO2 EO1+(EO1*JO2/HO2)
  const [KO2, setKO2] = useState(0);
  console.log(KO2);
  //HHHO3 GO2/CO1
  const [HO3, setHO3] = useState(0);
  useEffect(() => {
    // console.log(localStorage.getItem("username"));
    // Update the document title using the browser API
    dispatch(InputAAAO1(AO1));
    dispatch(InputFFF01(FO1));
    dispatch(InputGGGO2(GO2));
    dispatch(InputHHH01(HO1));
    dispatch(InputHHH02(HO2));
    dispatch(InputHHH03(HO3));
    dispatch(InputAAAO2(AO2));
    dispatch(InputEEEO1(EO1));
    dispatch(InputMMMO1(MO1));
    dispatch(InputLLL05(LO5));
    dispatch(InputLLL01(LO1));
    dispatch(InputLLL02(LO2));
    dispatch(InputLLL03(LO3));
    dispatch(InputCCCO1(CO1));
    dispatch(InputEEEO3(EO3));
    dispatch(InputEEEO2(EO2));
    dispatch(InputCCCO2(CO2));
    dispatch(InputGGGO1(GO1));
    dispatch(InputIIIO1(IO1));
    dispatch(InputJJJO1(JO1));
    !(AO1 * 0.01 * AO2) ||
    AO1 * 0.01 * AO2 === Infinity ||
    AO1 * 0.01 * AO2 === -Infinity
      ? setBO1(0)
      : setBO1((AO1 * AO2) / 100);

    !(AO1 / EO1 / MO1) ||
    AO1 / EO1 / MO1 === Infinity ||
    AO1 / EO1 / MO1 === -Infinity
      ? setBO2(0)
      : setBO2(AO1 / EO1 / MO1);

    !((CO1 / (EO1 - EO3) / MO1) * EO1 * MO1) ||
    (CO1 / (EO1 - EO3) / MO1) * EO1 * MO1 === Infinity ||
    (CO1 / (EO1 - EO3) / MO1) * EO1 * MO1 === -Infinity
      ? setDO1(0)
      : setDO1((CO1 / (EO1 - EO3) / MO1) * EO1 * MO1);

    !(CO1 / (EO1 - EO3) / MO1) ||
    CO1 / (EO1 - EO3) / MO1 === Infinity ||
    CO1 / (EO1 - EO3) / MO1 === -Infinity
      ? setDO2(0)
      : setDO2(CO1 / (EO1 - EO3) / MO1);

    !(EO1 * EO2 * MO1) ||
    EO1 * EO2 * MO1 === Infinity ||
    EO1 * EO2 * MO1 === -Infinity
      ? setHO2(0)
      : setHO2(EO1 * EO2 * MO1);

    !(HO2 - (EO3 / EO1) * HO2) ||
    HO2 - (EO3 / EO1) * HO2 === Infinity ||
    HO2 - (EO3 / EO1) * HO2 === -Infinity
      ? setFO1(0)
      : setFO1(-HO2 - (EO3 / EO1) * HO2);

    !(EO1 - CO1 / EO2 / MO1) ||
    EO1 - CO1 / EO2 / MO1 === Infinity ||
    EO1 - CO1 / EO2 / MO1 === -Infinity
      ? setFO2(0)
      : setFO2(-EO1 - CO1 / EO2 / MO1);

    !(EO1 * 1 + (EO1 * CO2) / HO2) ||
    EO1 * 1 + (EO1 * CO2) / HO2 === Infinity ||
    EO1 * 1 + (EO1 * CO2) / HO2 === -Infinity
      ? setFO3(0)
      : setFO3(EO1 + (EO1 * CO2) / HO2);

    !((EO2 * GO1 - EO2 * EO1) * MO1) ||
    (EO2 * GO1 - EO2 * EO1) * MO1 === Infinity ||
    (EO2 * GO1 - EO2 * EO1) * MO1 === -Infinity
      ? setGO2(0)
      : setGO2((EO2 * GO1 - EO2 * EO1) * MO1);

    !(GO2 / HO2) || GO2 / HO2 === Infinity || GO2 / HO2 === -Infinity
      ? setHO1(0)
      : setHO1((GO2 / HO2) * 100);

    !(HO2 * IO1 * 0.01 * -1) ||
    HO2 * IO1 * 0.01 * -1 === Infinity ||
    HO2 * IO1 * 0.01 * -1 === -Infinity
      ? setIO2(0)
      : setIO2(HO2 * IO1 * 0.01 * -1);

    !(EO1 * EO2 * JO1 * 0.01 * MO1) ||
    EO1 * EO2 * JO1 * 0.01 * MO1 === Infinity ||
    EO1 * EO2 * JO1 * 0.01 * MO1 === -Infinity
      ? setJO2(0)
      : setJO2(Math.ceil(((EO1 * EO2 * JO1 * MO1) / 100) * 10) / 10);

    !(EO1 - IO1 * 0.01 * EO1) ||
    EO1 - IO1 * 0.01 * EO1 === Infinity ||
    EO1 - IO1 * 0.01 * EO1 === -Infinity
      ? setKO1(0)
      : setKO1(EO1 - IO1 * 0.01 * EO1);

    !(EO1 * 1 + (EO1 * JO2) / HO2) ||
    EO1 * 1 + (EO1 * JO2) / HO2 === Infinity ||
    EO1 * 1 + (EO1 * JO2) / HO2 === -Infinity
      ? setKO2(0)
      : setKO2((EO1 + (EO1 * JO2) / HO2).toFixed(1));

    !(GO2 / CO1) || GO2 / CO1 === Infinity || GO2 / CO1 === -Infinity
      ? setHO3(0)
      : setHO3(GO2 / CO1);

    !(GO1 / EO1) || GO1 / EO1 === Infinity || GO2 / EO1 === -Infinity
      ? setLO5(0)
      : setLO5((GO1 - EO1) * MO1);

    !(EO3 - EO1) || EO3 - EO1 === Infinity || EO3 - EO1 === -Infinity
      ? setLO1(0)
      : setLO1(EO3 - EO1);

    !(GO1 - EO1) || GO1 - EO1 === Infinity || GO1 - EO1 === -Infinity
      ? setLO2(0)
      : setLO2(GO1 - EO1);

    !(GO1 - EO3) || GO1 - EO3 === Infinity || GO1 - EO3 === -Infinity
      ? setLO3(0)
      : setLO3(GO1 - EO3);
  });
  const PricePostionDelete = (p) => {
    setEO1("");
    setEO2("");
    setEO3("");
    setGO1("");
  };

  const CurrencyChange = (e) => {
    dispatch(setCurrency(e.target.value));
  };

  const options = [
    "$",
    "£",
    "฿",
    "€",
    "¥",
    "₣",
    "₹",
    "₦",
    "₩",
    "R",
    "₡",
    "د.إ",
  ].map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));
  const handleSCToggle = () => {
    dispatch(setToggle(!isSCToggleOn));
    setMO1(!isSCToggleOn ? "100" : "1"); // Change Ticker value based on toggle state
  };
  const fieldStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 0",
    fontSize: "16px",
  };

  const cardStyle = {
    backgroundColor: "#27283A",
    padding: "10px",
    borderRadius: "8px",
    marginBottom: "10px",
  };
  const fields = [
    {
      title: "Recommended Quantity",
      color: "#1EC2EC",
      value: parseFloat(
        (Math.round(DO2 * 10) / 10).toFixed(2)
      ).toLocaleString(),
      centered: true,
      marginBottom: "0px",
    },
    {
      title: "Projected Loss",
      value:
        Currency +
        (IO2
          ? parseFloat((Math.round(HO2 * IO1 - 1) / 100).toFixed(2))
          : parseFloat((0).toFixed(2))
        ).toLocaleString(),
      color: "#FF0000",
    },
    {
      title: "Stop Loss",
      value:
        Currency +
        parseFloat((EO1 - IO1 * 0.01 * EO1).toFixed(2)).toLocaleString(),
      color: "#FF0000",
      marginBottom: "0px",
    },
    {
      title: "Projected Profit",
      value: Currency + JO2.toFixed(2).toLocaleString(),
      color: "#67C839",
    },
    {
      title: "Take Profit",
      value: Currency + KO2 ? parseFloat(KO2).toFixed(2).toLocaleString() : 0,
      color: "#67C839",
      marginBottom: "0px",
    },
    {
      title: "Actual Capital",
      value: Currency + HO2.toFixed(2).toLocaleString(),
      color: "#ED8638",
    },
  ];
  const renderFieldsInCards = () => {
    let cards = [];
    let currentCard = [];

    fields.forEach((field, index) => {
      currentCard.push(
        <div
          key={index}
          style={{
            ...fieldStyle,
            color: "#FFFFFF",
            textAlign: "left",
            marginBottom: "0",
          }}
        >
          <div
            style={{
              textAlign: "left",
              width: "100%",
            }}
          >
            {field.title}
          </div>
          <div
            style={{
              textAlign: "right",
              width: "auto",
              marginTop: field.centered ? "5px" : "0",
              color: field.color,
            }}
          >
            {field.value}
          </div>
        </div>
      );

      if (field.marginBottom) {
        cards.push(
          <div key={`card-${index}`} style={cardStyle}>
            {currentCard}
          </div>
        );
        currentCard = [];
      }
    });

    // Add remaining fields if any
    if (currentCard.length > 0) {
      cards.push(
        <div key={`card-last`} style={cardStyle}>
          {currentCard}
        </div>
      );
    }

    return cards;
  };
  const [state, setState] = useState(false);

  useEffect(() => {
    setState({
      C13: EO1,
      C14: EO2,
      C15: EO3,
      C16: FO1,
      C19: GO1,
      C20: GO2,
      C22: HO2,
      C23: HO3,
      C21: HO1,
      C32: LO3,
    });
  }, [EO1, EO2, EO3, FO1, GO1, GO2, HO2, HO3, HO1, LO3]);

  const saveStateToLocalStorage = () => {
    // console.log(
    //   EO1 && EO2 && EO3 && FO1 && GO1 && GO2 && HO2 && HO3 && HO1 && LO3
    // );
    if (EO1 && EO2 && EO3 && FO1 && GO1 && GO2 && HO2 && HO3 && HO1 && LO3) {
      // Check if `state` has any properties
      let data = [];
      const savedState = localStorage.getItem("myComponentStateArray");

      if (savedState) {
        data = JSON.parse(savedState); // Parse the saved JSON string back into an array
      }

      // Add the new state to the data array
      data.push(state);

      // Save the updated array to localStorage
      localStorage.setItem("myComponentStateArray", JSON.stringify(data));
    } else {
      alert("Enter Values ");
    }
  };
  return (
    <div>
      <div className="my-4 text-center">
        <h1>PERCENTILE SIMULATION</h1>
      </div>
      <div className="row">
        {/* 1 */}
        <div className="col-12 col-lg-6 col-xl-3  order-1">
          <div style={{ backgroundColor: "#27283a", paddingTop: "15px" }}>
            <h4 className="text-center" style={{ color: "#CBCBE2" }}>
              Trade Metrics
            </h4>
            {renderFieldsInCards()}
          </div>
        </div>

        {/* 2 */}
        <div className="col-12 col-lg-6 col-xl-3  mb-3 order-2">
          <div className="row mb-1">
            <div className="col-sm-12">
              <div className="card" style={{ borderRadius: "8px" }}>
                <div className="card-body">
                  <h4 className="text-center" style={{ color: "#CBCBE2" }}>
                    Suggested Risk Per Trade
                  </h4>
                  <div className="row text-center mt-3 gap-5">
                    <div className="col-sm-6 col-md-4 col-xl-6 col-xxl-6">
                      <FormTag
                        color="green"
                        title="Portfolio Risk "
                        value={Currency + " " + num.format(BO1)}
                      />
                    </div>
                    <div className="col-sm-6 col-md-4 col-xl-6 col-xxl-6 my-3 my-sm-0">
                      <FormTag title="Select Currency " />

                      <select
                        className="form-control"
                        value={CurrencySelect}
                        onChange={CurrencyChange}
                        style={{
                          backgroundColor: "#3B4758", // Background color
                          color: "white", // Text color
                          fontSize: 12, // Smaller font size
                          padding: "8px", // Reduced padding for a smaller dropdown
                          borderRadius: "5px", // Small border radius for rounded corners
                          width: "auto", // Auto width for fitting the content
                          display: "inline-block", // Ensure it doesn't take full width
                        }}
                      >
                        {options}
                      </select>
                    </div>
                    <div className="col-sm-6 col-md-4 col-xl-6 col-xxl-6">
                      <FormTag
                        color="green"
                        title="Portfolio Quantity"
                        value={num.format(BO2.toFixed(2))}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-1">
            <div className="col-sm-12">
              <div className="card" style={{ borderRadius: "8px" }}>
                <div className="card-body">
                  <h4 className="text-center" style={{ color: "#CBCBE2" }}>
                    Portfolio Trade Management
                  </h4>
                  <div className="row mt-3">
                    <div className="col-12 col-sm-6">
                      <FormTag
                        currency={CurrencySelect}
                        disabled={true}
                        onCurrencyChange={CurrencyChange}
                        value={AAAO1}
                        color="input_yellow"
                        title="Portfolio Balance"
                        val="$"
                        onChange={handleAAAO1}
                        onKeyPress={handleKeyPress}
                        name="CIO1"
                      />
                    </div>
                    <div className="col-12 my-3  my-sm-1 col-sm-6">
                      <FormTag
                        onKeyPress={handleKeyPress}
                        value={AAAO2}
                        color="input_yellow"
                        title="Portfolio at Risk"
                        val="%"
                        onChange={handleAAAO2}
                        name="CIO2"
                      />
                    </div>
                    <div className="col-12 col-sm-6">
                      <FormTag
                        currency={CurrencySelect}
                        disabled={true}
                        onCurrencyChange={CurrencyChange}
                        value={CCCO1}
                        onKeyPress={handleKeyPress}
                        color="input_red"
                        title="My Risk Tolerance"
                        val="$"
                        onChange={handleCCCO1}
                        name="CIO3"
                      />
                    </div>
                    <div className="col-12 my-3 my-sm-1 col-sm-6">
                      <FormTag
                        currency={CurrencySelect}
                        disabled={true}
                        onCurrencyChange={CurrencyChange}
                        value={CCCO2}
                        onKeyPress={handleKeyPress}
                        color="input_green"
                        title="Profit Goal"
                        onChange={handleCCCO2}
                        val="$"
                        name="CIO4"
                      />
                    </div>

                    <div className="col-12 col-sm-6 mt-3">
                      <FormTag
                        value={MMMO1}
                        color="input_white"
                        onChange={handleMMMO1}
                        title="Ticker"
                        val="m"
                        onKeyPress={handleKeyPress}
                        name="CIO5"
                      />
                    </div>
                    <div className="col-12 col-sm-6 d-flex align-items-center mt-4 justify-content-center">
                      <div
                        className="toggle-group"
                        style={{ padding: 10, margin: 20 }}
                      >
                        <label
                          className="form-label me-2"
                          style={{ marginRight: "10px" }}
                        >
                          S/C
                        </label>
                        <label
                          className="switch me-3"
                          style={{ marginRight: "20px" }}
                        >
                          <input
                            type="checkbox"
                            checked={isSCToggleOn}
                            onChange={handleSCToggle}
                          />
                          <span className="slider round"></span>
                        </label>
                        <label className="form-label me-2">O/F</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 */}
        <div className="col-12 col-lg-6 col-xl-3  order-3 ">
          <div className="row mb-1">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-body">
                  <h4 className="text-center" style={{ color: "#CBCBE2" }}>
                    Trade Performance
                  </h4>
                  <div className="row">
                    <div className="col-6">
                      <h6 style={{ color: "#7071A4" }}>
                        P/L Per Share{" "}
                        <span style={{ color: "rgb(103, 200, 57)" }}>
                          {Currency + " " + num.format(FO3.toFixed(2))}
                        </span>
                      </h6>

                      <h6 style={{ color: "#7071A4" }}>
                        Rol{" "}
                        <span style={{ color: "#CBCBE2" }}>
                          {HO1.toFixed(2)} %
                        </span>
                      </h6>
                    </div>
                    <div className="col-6">
                      <p style={{ textAlign: "center" }}>
                        {HO2 !== 0 &&
                        HO2 !== null &&
                        DO1 !== 0 &&
                        DO1 !== null ? (
                          <>
                            {HO2 > DO1 ? (
                              <span style={{ color: "#FF4C4C" }}>
                                Risk Overexposure!
                              </span>
                            ) : (
                              ""
                            )}

                            {DO1 >= HO2 ? (
                              <span
                                style={{
                                  color: "#00FF00",
                                  textAlign: "center",
                                }}
                              >
                                Safe to Trade!
                              </span>
                            ) : (
                              ""
                            )}
                          </>
                        ) : (
                          ""
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12">
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <GaugeChart
                          hideText
                          textColor="#FFFF"
                          colors={["#FF0000", "#0A5D00", "#0EFF00"]}
                          percent={HO1 ? Math.min(HO1, 1).toFixed(2) : 0}
                          arcsLength={[0.02, 0.08, 0.09]} // Adjust to cover the whole gauge
                          arcPadding={0.05} // Optional padding between arcs
                        />
                      </div>
                      <h6 className="text-center" style={{ color: "#CBCBE2" }}>
                        {HO3.toFixed(2)}
                        <span style={{ fontSize: "20px" }}> X</span>{" "}
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-sm-12">
              <div className="card" style={{ borderRadius: "8px" }}>
                <div className="card-body">
                  <h4 className="text-center" style={{ color: "#CBCBE2" }}>
                    Percentage Order Simulator
                  </h4>
                  <div className="row mt-3">
                    <div className="col-6">
                      <FormTag
                        disabled={true}
                        currency={CurrencySelect}
                        onCurrencyChange={CurrencyChange}
                        max={100000}
                        value={EEEO1}
                        color="input_yellow"
                        val="$"
                        title="Entry Price"
                        onChange={handleEEEO1}
                        onKeyPress={handleKeyPress}
                        name="CIO10"
                      />
                    </div>
                    <div className="col-6">
                      <FormTag
                        max={100000}
                        value={EEEO2}
                        color="input_blue"
                        title="Position Size"
                        val="m"
                        onChange={handleEEEO2}
                        onKeyPress={handleKeyPress}
                        name="CIO11"
                      />
                    </div>
                    <div className="col-6">
                      <FormTag
                        max={100000}
                        value={IIIO1}
                        color="input_red"
                        val="%"
                        title="Defined Risk "
                        onChange={handleIIIO1}
                        onKeyPress={handleKeyPress}
                        name="CIO12"
                      />
                    </div>
                    <div className="col-6">
                      <FormTag
                        max={100000}
                        value={JJJO1}
                        color="input_green"
                        val="%"
                        title="Profit Target "
                        onChange={handleJJJO1}
                        onKeyPress={handleKeyPress}
                        name="CIO13"
                      />
                    </div>
                  </div>
                  <div className="row mt-2 text-center">
                    <div className="col-6">
                      <ButtonTag
                        color="input_green"
                        title="Price"
                        onClick={() => PricePostionDelete()}
                        value="Clear data"
                      />
                    </div>
                    <div className="col-6">
                      <Link to="report" onClick={saveStateToLocalStorage}>
                        <ButtonTag
                          color="input_green"
                          title="Price"
                          value="Summary Report"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 */}
        <div className="col-12 col-lg-6 col-xl-3   order-4">
          <div className="d-flex">
            {/* Image container taking half the row */}
            <div className="col-sm-6" style={{ position: "relative" }}>
              <div style={{ textAlign: "center", paddingTop: "20px" }}>
                <img
                  src={require("../../assets/images/Group 149.png")}
                  alt="profile"
                  style={{ height: "550px", width: "30%" }}
                  className="profile-pic"
                />
              </div>
            </div>

            {/* FormTag4 components container taking half the row */}
            <div
              className="col-sm-6 d-flex flex-column mt-2 "
              style={{ justifyContent: "space-between" }}
            >
              <div style={{ width: "100%", textAlign: "center" }}>
                <FormTag4
                  value={Currency + KO2 ? parseFloat(KO2).toLocaleString() : 0}
                  color="green"
                  title="Sell Price"
                />
              </div>
              <div style={{ width: "100%", textAlign: "center" }}>
                <FormTag4 value={EO2 || 0} color="blue" title="Quantity" />
              </div>
              <div
                style={{
                  width: "100%",
                  textAlign: "center",
                  marginBottom: "-38px",
                }}
              >
                <FormTag4
                  value={
                    Currency +
                      parseFloat(
                        (EO1 - IO1 * 0.01 * EO1).toFixed(2)
                      ).toLocaleString() || 0
                  }
                  color="red"
                  title="Stop Price"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
