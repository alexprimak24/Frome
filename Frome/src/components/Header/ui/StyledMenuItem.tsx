import { MenuItem, menuItemClasses } from "@mui/base/MenuItem";
import { styled } from "@mui/system";

const StyledMenuItem = styled(MenuItem)(
  ({ hoverColor = "#05A9AF" }: { hoverColor?: string }) => `
  list-style: none;
  padding: 6px 10px; /* Padding to match the list's box-sizing and overall size */
  border-radius: 10px; /* Rounded corners to match the list */
  cursor: pointer;
  user-select: none;
  background: #F8F7F9; /* Background color to blend with the listbox */
  color: #2B2D42; /* Default text color */
  font-size: 13px;
  transition: all 0.2s ease; /* Smooth transition for background, color, etc. */
  
  &:hover {
    background-color: ${hoverColor};
    color: #FFF;
  }

  /* Focus effect */
  &:focus {
    background-color: ${hoverColor};
    color: #FFF;
  }

  /* Disabled item */
  &.${menuItemClasses.disabled} {
    color: #434D5B;
    cursor: not-allowed; /* Change cursor for disabled items */
  }

  &:last-of-type {
    border-bottom: none; /* Ensuring the last item has no bottom border */
  }
  `
);

export default StyledMenuItem;
