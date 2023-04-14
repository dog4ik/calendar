import React, { ReactNode } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
`;
const Wrapper = ({ children }: { children: ReactNode }) => {
  return <Container>{children}</Container>;
};

export default Container;
