import React from "react";
import logo from "../../../assets/images/logo.svg";
function Logo() {
  return (
    <div className="flex items-center gap-5">
      <img src={logo} />
      <h2 className="text-defaultgreen font-groteskpanbold text-2xl">Frome</h2>
    </div>
  );
}

export default Logo;
