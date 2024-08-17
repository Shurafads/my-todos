import styled from "styled-components";

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`;
export const Label = styled.label`
  width: 100%;
`;

export const Input = styled.input`
  min-height: 50px;
  width: 100%;
  font-weight: 300;
  font-size: 25px;
  padding: 10px 10px 10px 50px;
  border: 1px solid rgb(230, 230, 230);
  background-color: rgb(255, 255, 255);

  &::placeholder {
    font-style: italic;
  }

  &:hover {
    border-color: rgb(230, 185, 185);
  }

  @media (max-width: 1023px) {
    font-size: 20px;
  }

  @media (max-width: 767px) {
    &::placeholder {
      font-size: 16px;
    }
  }
`;

export const Button = styled.button`
  cursor: pointer;
  position: absolute;
  padding: 0;
  left: 0;
  border: none;
  height: 100%;
  width: 50px;
  opacity: 30%;
  background: url("icons/down-mark.svg") center / 50% 50% no-repeat;

  &:hover {
    background: url("icons/down-mark-curr.svg") center / 50% 50% no-repeat;
    opacity: 100%;
  }

  &:active {
    background: url("icons/down-mark.svg") center / 50% 50% no-repeat;
    opacity: 10%;
  }
`;

export const TodosWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Notification = styled.span`
  position: absolute;
  top: -30px;
  left: 0;
  right: 0;
  text-align: center;
  color: rgb(230, 185, 185);
`;
