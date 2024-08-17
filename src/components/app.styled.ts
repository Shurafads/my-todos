import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  max-width: 70%;
`;
export const Title = styled.h1`
  font-size: 75px;
  font-weight: 300;
  color: rgb(230, 185, 185);

  @media (max-width: 1023px) {
    font-size: 65px;
  }

  @media (max-width: 767px) {
    font-size: 50px;
  }
`;
export const Wrapper = styled.div`
  width: 100%;
  box-shadow: 1px 5px 5px 0px rgb(230, 230, 230);
`;
