import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { useAccount } from "@fuels/react";
export interface SearchAddressInputProps {
  handleSearchAddress: (inputAddress: string) => void;
}

function App() {
  const [inputAddress, setInputAddress] = useState<string>("");
  const { account } = useAccount();
  //Set the wallet that is pasted in the search filed
  const handleSearchAddress = (searchAddress: string) => {
    setInputAddress(searchAddress);
  };
  //recome it
  console.log("Input address:", inputAddress);
  console.log("Connected address:", account);

  return (
    <>
      <div className="w-full h-[10px] bg-defaultgreen mb-[10px]" />
      <div className="max-w-[1440px] w-full mx-auto my-0">
        <Header handleSearchAddress={handleSearchAddress} />
      </div>
    </>
  );
}

export default App;
