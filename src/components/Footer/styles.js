import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  height: 8rem;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.COLORS.DARK_BLUE_700};

  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 30rem;

  p {
    font-size: 1.2rem;
    font-family: "Poppins";
  }

  >div {
    filter: contrast(0);
  }

`