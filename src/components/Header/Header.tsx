import React from "react";
import Logo from "./ui/Logo";
import SearchAddressInput from "./components/SearchAddressInput";
import { SearchAddressInputProps } from "../../App";
import ConnectWalletBtn from "./components/ConnectWalletBtn";

function Header({ handleSearchAddress }: SearchAddressInputProps) {
  return (
    <div className="flex items-center flex-col mx-5">
      <div className="max-w-[1200px] w-full flex justify-between items-center">
        <Logo />
        <div className="flex items-center gap-[30px]">
          <SearchAddressInput handleSearchAddress={handleSearchAddress} />
          <ConnectWalletBtn />
        </div>
      </div>
      <div className="max-w-[1200px] w-full h-[1px] bg-defaultgrey mt-[15px]" />
    </div>
  );
}

export default Header;
