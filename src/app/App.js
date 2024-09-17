import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import "./App.scss";
import AppRoutes from "./AppRoutes";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";
import { withTranslation } from "react-i18next";

const App = ({ i18n }) => {
  const [isFullPageLayout, setIsFullPageLayout] = useState(false);
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const onRouteChanged = () => {
      // console.log("ROUTE CHANGED");
      const body = document.querySelector("body");

      if (location.pathname === "/layout/RtlLayout") {
        body.classList.add("rtl");
        // i18n.changeLanguage('ar');
      } else {
        body.classList.remove("rtl");
        // i18n.changeLanguage('en');
      }
      window.scrollTo(0, 0);

      const fullPageLayoutRoutes = ["/login", "/register", "/forget_pass"];

      if (fullPageLayoutRoutes.includes(location.pathname)) {
        setIsFullPageLayout(true);
      } else {
        setIsFullPageLayout(false);
      }
    };

    onRouteChanged(); // Run on component mount
    history.listen(onRouteChanged); // Run on route change
  }, [location, history]);

  return (
    <div className={`container-scroller`}>
      <div className="container-fluid">
        {!isFullPageLayout && <Navbar />}
        <div className="main-panel">
          <div className="content-wrapper">
            <AppRoutes />
          </div>
          {!isFullPageLayout && <Footer />}
        </div>
      </div>
    </div>
  );
};

export default withTranslation()(App);
