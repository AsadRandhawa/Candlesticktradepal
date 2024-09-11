import React from "react";
import { useLocation } from "react-router-dom";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const location = useLocation();

  const sidebarStyle = {
    padding: "0 20px",
    backgroundColor: "#1A1A2E", // Dark background color
    color: "#FFFFFF", // Default text color
    width: "300px",
    height: "100vh",
    fontFamily: "Arial, sans-serif",
    transform: isOpen ? "translateX(0)" : "translateX(-100%)",
    transition: "transform 0.3s ease",
    position: "fixed",
    top: "0",
    left: "0",
    zIndex: 1000,
  };

  const closeButtonStyle = {
    position: "absolute",
    top: "10px",
    right: "10px",
    backgroundColor: "#27283A",
    color: "#FFFFFF",
    border: "none",
    padding: "10px",
    cursor: "pointer",
    fontSize: "16px",
    borderRadius: "5px",
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

  const menuTitleStyle = {
    fontSize: "24px",
    marginBottom: "20px",
    textAlign: "center",
    color: "#FFFFFF", // White color for title
  };

  // Define fields based on the route
  const fields =
    location.pathname === "/strategy_simulator"
      ? [
          {
            title: "Share / contracts Quantity",
            color: "#1EC2EC",
            value: "0",
            centered: true,
            marginBottom: "0px",
          },
          { title: "Projected Loss", value: "0", color: "#FF0000" },
          {
            title: "Stop Loss",
            value: "0",
            color: "#FF0000",
            marginBottom: "0px",
          },
          { title: "Projected Profit", value: "0", color: "#67C839" },
          {
            title: "Take Profit",
            value: "0",
            color: "#67C839",
            marginBottom: "0px",
          },
          { title: "Actual Capital", value: "0", color: "#ED8638" },
          { title: "Maximum Capital", value: "0", color: "#ED8638" },
          { title: "Risk-Reward Ratio", value: "0", color: "#9191A6" },
          {
            title: "Investment Return",
            value: "0",
            color: "#6FD738",
            marginBottom: "0px",
          },
          { title: "Stop Loss Range", value: "0", color: "#FFFFFF" },
          { title: "Profit Taking Range", value: "0", color: "#FFFFFF" },
          {
            title: "Trade Range",
            value: "0",
            color: "#FFFFFF",
            marginBottom: "20px",
          },
        ]
      : [
          {
            title: "Share / contracts Quantity",
            color: "#1EC2EC",
            value: "0",
            centered: true,
            marginBottom: "0px",
          },
          { title: "Projected Loss", value: "0", color: "#FF0000" },
          {
            title: "Stop Loss",
            value: "0",
            color: "#FF0000",
            marginBottom: "0px",
          },
          { title: "Projected Profit", value: "0", color: "#67C839" },
          {
            title: "Take Profit",
            value: "0",
            color: "#67C839",
            marginBottom: "0px",
          },
          { title: "Actual Capital", value: "0", color: "#ED8638" },
        ];

  // Function to render fields grouped into cards
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
            textAlign: field.centered ? "center" : "left",
            marginBottom: field.marginBottom || "0",
          }}
        >
          <div
            style={{
              textAlign: field.centered ? "center" : "left",
              width: field.centered ? "100%" : "auto",
            }}
          >
            {field.title}
          </div>
          <div
            style={{
              textAlign: field.centered ? "center" : "right",
              width: field.centered ? "100%" : "auto",
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

  return (
    <div style={sidebarStyle}>
      <h2 style={{ ...menuTitleStyle, paddingTop: "80px" }}>Trade Metrics</h2>
      {renderFieldsInCards()}
    </div>
  );
};

export default Sidebar;
