import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";

export interface SearchAddressInputProps {
  handleSearchAddress: (inputAddress: string) => void;
}

function App() {
  const [inputAddress, setInputAddress] = useState<string>("");

  //Set the wallet that is pasted in the search filed
  const handleSearchAddress = (searchAddress: string) => {
    setInputAddress(searchAddress);
  };
  //recome it
  console.log(inputAddress);

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
