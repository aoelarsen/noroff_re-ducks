import styled from "styled-components";

export const SingleCardContainer = styled.div`
  width: 70%;
  max-width: 660px;
  height: 100%;
  display: grid;
  grid-template: 1fr 3fr / 1fr 2fr;
  gap: 1rem;

  @media (max-width: 920px) {
    width: 90%;
  }

  @media (max-width: 530px) {
    width: 95%;
    grid-template: auto / 1fr;
    justify-items: center;
    align-items: center;
    place-items: center center;
  }
`;

export const SingleCardImg = styled.img`
  grid-area: 1 / 1 / span2 / 1;
  justify-self: center;
  align-self: center;
  place-self: center center;

  @media (max-width: 850px) {
    justify-self: start;
    align-self: start;
    place-self: start start;
  }

  @media (max-width: 530px) {
    justify-self: center;
    align-self: center;
    place-self: center center;
  }
`;

export const SingleCardList = styled.div`
  width: 100%;
  display: grid;
  grid-template: 1fr / 1fr 1fr;
  justify-items: center;
  align-items: center;
  place-items: center start;
  gap: 0.7rem;
  border-bottom: ${props =>
    props.rarity === "Common"
      ? "1px solid #252525"
      : props =>
          props.rarity === "Uncommon"
            ? "3px solid #c0c0c0"
            : "3px solid #a17f1a"};

  & span {
    padding: 0 1rem;
    font-weight: bold;
  }

  @media (max-width: 850px) {
    grid-template: 1fr 1fr /1fr;
    justify-items: start;
  }

  @media (max-width: 530px) {
    justify-items: start;
    place-self: center start;
  }
`;
