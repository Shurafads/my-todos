import styled from "styled-components";

export const FilterWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  border: 1px solid rgb(230, 230, 230);
  background-color: rgb(255, 255, 255);
  padding: 0 10px;
  min-height: 55px;

  @media (max-width: 767px) {
    flex-direction: column;
  }
  @media (max-width: 767px) {
    padding: 10px 10px;
  }
`;


export const Text = styled.p`
  font-size: 16px;
  margin: 0;
  padding: 5px 10px;

  @media (max-width: 1023px) {
    font-size: 14px;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: center;

  @media (max-width: 767px) {
    border: 1px solid rgb(230, 230, 230);
    border-width: 1px 0;
    width: 100%;
    padding: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

export const Label = styled.label<{ $isCurrent: boolean }>`
  cursor: pointer;
  font-size: 16px;
  margin: 0 5px;
  padding: 5px 10px;
  outline: ${(props) => props.$isCurrent ? "1px solid rgb(230, 185, 185)" : "none"};
  border-radius: 5px;

  &:hover {
    color: rgb(230, 185, 185);
  }
  &:active {
    color: rgb(230, 230, 230);
  }

  @media (max-width: 1023px) {
    font-size: 14px;
  }
`;

export const Input = styled.input`
  display: none;
`;

export const ClearButton = styled.button`
  cursor: pointer;
  font-size: 16px;
  border: none;
  padding: 5px 10px;
  background-color: rgb(255, 255, 255);

  &:hover {
    color: rgb(230, 185, 185);
  }
  &:active {
    color: rgb(230, 230, 230);
  }

  @media (max-width: 1023px) {
    font-size: 14px;
  }
`;

