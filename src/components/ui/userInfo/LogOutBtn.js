import styled from "styled-components";
import Button from "react-bootstrap/Button";

const LogOutBtn = styled(Button)`
  color: rgba(255, 255, 255, 0.5);
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 0.25rem;
  &:hover {
    color: rgba(255, 255, 255, 1);
    border-color: rgba(255, 255, 255, 1);
    background: transparent;
  }
`;

export default LogOutBtn;
