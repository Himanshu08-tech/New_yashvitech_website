import React from "react";
import PortfolioTitlePage from "./Portfolio_main";
import Portfolio_mid from "./Portfolio_mid";
import Portfolio_bottom from "./Portfolio_bottom";
import PortfolioTop from "./PortfolioTop";

function portfolio() {
  return (
    <>
      <div>
      <PortfolioTop/>
        {/* <PortfolioTitlePage /> */}
        <Portfolio_mid />
        {/* <Portfolio_bottom /> */}
      </div>
    </>
  );
}

export default portfolio;
