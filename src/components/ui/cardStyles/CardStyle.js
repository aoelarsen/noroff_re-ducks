import styled from "styled-components";

export const CardDetailWrap = styled.div`
  align-self: center;
  justify-self: center;
  padding: 1em;
  margin-bottom: 1em;
  height: auto;
  display: grid;
  grid-template: 0.5fr 2fr 0.5fr / 1fr;
  align-items: center;
  justify-items: center;
  place-items: center center;
  background: #fafafa
  border: ${props =>
    props.rarity === "Common"
      ? "1px solid #252525"
      : props =>
          props.rarity === "Uncommon"
            ? "3px solid #c0c0c0"
            : "3px solid #a17f1a"};
  border-radius: 0.3rem;
  box-shadow: 0 3px 16px #ccc;

  &:hover {
    box-shadow: 0 0 0 #ccc;
    cursor: pointer;
  }
`;

export const CardName = styled.h5`
  padding: 1rem 0;
  font-size: 1.3em;
  font-weight: bold;
  text-align: center;
  color: #252525;
`;

export const CardButton = styled.button`
  margin: 0.5rem;
  padding: 0.7rem 1.5rem;
  font-family: inherit;
  font-weight: bold;
  font-size: 1.2rem;
  border: 1px solid #252525;
  border-radius: 0.3rem;
  color: #252525;
  background: transparent;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
    border: 1px solid
      ${props =>
        props.rarity === "Common"
          ? "#454545"
          : props => (props.rarity === "Uncommon" ? "#c0c0c0" : "#a17f1a")};
    color: ${props =>
      props.rarity === "Common"
        ? "#454545"
        : props => (props.rarity === "Uncommon" ? "#c0c0c0" : "#a17f1a")};
  }
`;
