import { styled } from "@mui/system";
import { Button } from "@mui/material";

const ConnectedWalletBtn = styled(Button)(() => ({
  borderColor: "rgba(43, 45, 66, 0.70)",
  fontSize: "12px",
  color: "rgba(43, 45, 66, 0.70)",
  fontFamily: "Px_Grotesk_Pan-Regular",
  borderRadius: "20px",
  background: "transparent",
  border: "1px solid rgba(43, 45, 66, 0.70)",
  textTransform: "none",
  padding: "auto",
  width: "159px",
  height: "32px",
  //PLAY WITH IT
  // transition: "background-color 0.3s ease, transform 0.2s ease", // Smooth animations
  // boxShadow: "none", // Remove default shadow
  // "&:hover": {
  //   backgroundColor: "rgba(203, 240, 76, 0.2)", // Light green overlay on hover
  //   transform: "scale(1.05)", // Slight scale-up effect
  //   boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)", // Add subtle shadow
  // },
  // "&:focus": {
  //   outline: "none",
  //   backgroundColor: "rgba(203, 240, 76, 0.3)", // Slightly stronger overlay
  //   boxShadow: "0 0 0 3px rgba(203, 240, 76, 0.5)", // Focus ring
  // },
}));

export default ConnectedWalletBtn;
