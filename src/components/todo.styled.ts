import styled from "styled-components";

export const Label = styled.label`
  cursor: pointer;
  display: flex;
  width: 100%;
  margin: 0;
  border: 1px solid rgb(230, 230, 230);
  background-color: rgb(255, 255, 255);

  &:hover {
    .mark-current::before {
      border: 1px solid rgb(230, 185, 185);
    }
  }
`;

export const Input = styled.input`
  position: absolute;
  z-index: -1;
  display: none;
`;

export const Span = styled.span<{ $isActive: boolean }>`
  margin: auto 0 auto 10px;
  display: flex;

  &::before {
    content: "";
    display: inline-block;
    width: 25px;
    height: 25px;
    border: 1px solid rgb(230, 230, 230);
    border-radius: 50%;
    background: ${(props) =>
      props.$isActive
        ? "none"
        : `url('icons/check-mark.svg') center / 50% 50% no-repeat`};
  }
`;

export const Text = styled.p<{ $isActive: boolean }>`
  font-size: 25px;
  font-weight: 300;
  padding: 10px 10px 10px 15px;
  margin: 0;
  width: 100%;
  word-wrap: break-word;
  overflow-x: auto;
  text-decoration: ${(props) => (props.$isActive ? "none" : "line-through")};
  color: ${(props) => (props.$isActive ? "rgb(0,0,0)" : "rgb(230, 230, 230)")};

  @media (max-width: 1023px) {
    font-size: 20px;
  }
`;
