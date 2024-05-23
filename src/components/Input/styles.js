import styled from "styled-components";

export const Container = styled.div`

  background-color: ${({ theme }) => theme.COLORS.DARK_BLUE_900};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  
  width: 300%;
  height: 4.8rem;
  
  border-radius: 0.8rem;
  
  display: flex;
  align-items: center;  
  text-align: center;

  svg {
    margin: 1rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    filter: contrast(0);
  }

  input {
    width: 100%;
    height: 100%;
    padding: .75rem 2rem;
    background: none;
    outline: none;
    border: none;
    text-align: start;
  }

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
}
`