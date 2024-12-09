import styled from "@emotion/styled";

const StyledListbox = styled("ul")(
  () => `
  box-sizing: border-box;
  margin: 12px 17px;
  width: 159px;
  overflow: auto;
  outline: 0;
  z-index: 1;
  border-radius: 10px;
  border: 1px solid #05A9AF;
  background: #F8F7F9;
  box-shadow: -2px -2px 10px -3px rgba(5, 169, 175, 0.25), 2px 2px 10px -3px rgba(5, 169, 175, 0.25);
  `
);

export default StyledListbox;
