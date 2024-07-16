import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  

  > svg {
    cursor: pointer;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    &:hover {
        transition: all 300ms ease-in-out;
    }
  }

  span {
    font-size: 2rem;
  }

  > svg {
    font-size: 3rem;
  }
`;