import styled from "styled-components";

const ToggleHeader = styled.div`
  margin-top: 0.7rem;
  margin-bottom: ${props => (props.isVisible ? "0" : "1rem")};
  padding: 0.2rem 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fafafa;
  background: #343a40;
  border-radius: ${props => (props.isVisible ? "0.3rem 0.3rem 0 0" : "0.3rem")};
  &:hover {
    cursor: pointer;
  }
`;
export default ToggleHeader;
