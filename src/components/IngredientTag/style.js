import styled from "styled-components";

export const Container = styled.div`
  background-color:  ${({ theme }) => theme.COLORS.DARK_BLUE_300};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  border: none;

  width: 100%;
  height: 3rem;
  margin: 2rem;
  border-radius: 0.8rem;
  
  display: flex;
  justify-content: space-between;
  align-items: center;  
  text-align: center;

  svg {
    font-size: 32px;
    margin: 1rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    filter: contrast(0);
  }

  button {
    background: none;
    border: none;
    display: flex;
  }

  > input {
    width: 100%;
    height: 3rem;
    padding: 1rem;
    border-radius: 0.8rem;
    
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
  }
`;