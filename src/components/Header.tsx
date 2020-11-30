import React from "react";
import { logo } from "../constants";

const options: string[] = ["Purchase", "My Orders", "Sell"];

const Header = () => {
  return (
    <div className="header-wrapper">
      <img src={logo} alt="logo" />
      <div className="header-options">
        {options.map((option: string, index: number) => (
          <div key={index} className="header-option">
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
