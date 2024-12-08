import React from "react";
import Logo from "./ui/Logo";
import SearchAddressInput from "./components/SearchAddressInput";

function Header() {
  return (
    <div className="flex items-center flex-col">
      <div className="w-full h-[10px] bg-defaultgreen mb-[10px]" />
      <div className="max-w-[1200px] w-full flex justify-between">
        <Logo />
        <SearchAddressInput />
      </div>
      <div className="max-w-[1200px] w-full h-[1px] bg-defaultgrey mt-[15px]" />
    </div>
  );
}

export default Header;
