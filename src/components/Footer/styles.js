import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  height: 8rem;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.COLORS.DARK_BLUE_700};

  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 30rem;

  p {
    font-size: 1.2rem;
    font-family: "Poppins";
  }
  >div {
    filter: contrast(0);

    h2{
        font-size: 1.5rem;
        margin-left: 1rem;
    }

    img {
      width: 2rem;
    }
  }

`