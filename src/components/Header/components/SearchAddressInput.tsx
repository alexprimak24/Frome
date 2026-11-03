import React, { KeyboardEventHandler, useState } from "react";
import Input from "@mui/joy/Input";
import SearchIcon from "@mui/icons-material/Search";
import { SearchAddressInputProps } from "../../../App";

//Simple Button Component
const SearchBtn = ({ onClick }: { onClick: () => void }) => (
  <button
    onClick={onClick}
    style={{
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: "0",
    }}
  >
    <SearchIcon
      sx={{
        color: "#05A9AF",
        transition: "color 0.3s ease",
        ":hover": {
          color: "#59C2CA",
        },
      }}
    />
  </button>
);

function SearchAddressInput({ handleSearchAddress }: SearchAddressInputProps) {
  const [inputAddress, setInputAddress] = useState<string>("");

  //On Enter press call handleSearchAddress function
  const handleKeySubmitAddress: KeyboardEventHandler<HTMLInputElement> = (
    event
  ) => {
    if (event.key === "Enter") {
      handleSearchAddress(inputAddress);
    }
  };

  const handleSearchIconSubmitAddress = () => {
    handleSearchAddress(inputAddress);
  };

  return (
    <Input
      placeholder="Search adress / domain"
      size="sm"
      variant="outlined"
      startDecorator={<SearchBtn onClick={handleSearchIconSubmitAddress} />}
      onChange={(e) => setInputAddress(e.target.value)}
      onKeyDown={handleKeySubmitAddress}
      sx={{
        borderColor: "rgba(43, 45, 66, 0.70)",
        fontSize: "12px",
        color: "rgba(43, 45, 66, 0.70)",
        fontFamily: "Px_Grotesk_Pan-Regular",
        borderRadius: "20px",
        maxWidth: "241px",
        maxHeight: "28px",
        height: "100%",
        width: "100%",
        "--Input-focusedInset": "var(--any, )",
        "--Input-focusedThickness": "0rem",
        "--Input-focusedHighlight": "rgba(13,110,253,.25)",
        "&::before": {
          transition: "box-shadow .3s ease-in-out",
        },
        "&:focus-within": {
          borderColor: "#05A9AF",
        },
      }}
    />
  );
}

export default SearchAddressInput;
