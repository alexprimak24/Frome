import { styled } from "@mui/system";
import { MenuButton } from "@mui/base/MenuButton";

const StyledMenuButton = styled(MenuButton)(() => ({
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
  "&:focus-within": {
    borderColor: "#05A9AF",
  },
}));

export default StyledMenuButton;
