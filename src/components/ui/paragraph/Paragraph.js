import styled from "styled-components";

const Paragraph = styled.p`
  text-align: ${props => props.align || "left"};
  line-height: 1.7rem;
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
`;

export default Paragraph;
