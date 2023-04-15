import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 100vh;
  @media (min-width: 740px) {
    max-width: 740px;
    width: 740px;
    margin-left: auto;
    margin-right: auto;
  }
  flex-direction: column;
`;

export default Container;
