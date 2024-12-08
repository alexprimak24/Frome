import { styled } from "@mui/system";
import { Button } from "@mui/material";

const ConnectAccountBtn = styled(Button)(() => ({
  background: "#05A9AF",
  borderColor: "rgba(43, 45, 66, 0.70)",
  fontSize: "16px",
  color: "white",
  fontFamily: "Px_Grotesk_Pan-Bold",
  textTransform: "uppercase",
  borderRadius: "20px",
  maxWidth: "159px",
  height: "32px",
  padding: "0 20px",
  fontWeight: "bold",
  letterSpacing: "1px",
  border: "2px solid #05A9AF",
  transition: "all 0.3s ease-in-out",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  "&:hover": {
    background: "#59C2CA",
    borderColor: "#59C2CA",
    transform: "scale(1.03)",
    boxShadow: "0 8px 12px rgba(0, 0, 0, 0.2)",
  },
}));

export default ConnectAccountBtn;
