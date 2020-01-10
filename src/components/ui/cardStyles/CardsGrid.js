import styled from "styled-components";

const CardGrid = styled.div`
  widht: 100%;
  height: 100%;
  margin: 1.5rem 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 0.5rem;
`;

export default CardGrid;
