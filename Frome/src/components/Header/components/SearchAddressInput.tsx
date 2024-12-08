import React, { KeyboardEventHandler, useState } from "react";
import Input from "@mui/joy/Input";
import SearchIcon from "@mui/icons-material/Search";
import { Address } from "fuels";

function SearchAddressInput() {
  const [inputValue, setInputValue] = useState<string>();
  console.log(inputValue);

  //replace to global function
  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key === "Enter") {
      console.log("Input Value:", inputValue); // For debugging
      // Set the inputValue or perform an action
    }
  };

  const handleSearchIconPress = () => {
    console.log(inputValue);
  };
  //MADE RESTRUCTIONS AND REPLACE FOR GLOBAL FUNCTION
  return (
    <Input
      placeholder="Search adress / domain"
      size="sm"
      variant="outlined"
      startDecorator={
        <button onClick={handleSearchIconPress}>
          <SearchIcon sx={{ color: "#05A9AF" }} />
        </button>
      }
      onChange={(e) => setInputValue(e.target.value)}
      onKeyDown={handleKeyDown}
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
          borderColor: "rgba(43, 45, 66, 0.40)",
        },
      }}
    />
  );
}

export default SearchAddressInput;
