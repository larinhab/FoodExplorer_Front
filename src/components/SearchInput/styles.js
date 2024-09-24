import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-grow: 1;
  border-radius: 0.5rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
  
  &:focus-within {
      border: 1px solid ${({ theme }) => theme.COLORS.GRAY_100};
    }
    
    svg {
        color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
    
    input {
        max-width: 28.2rem;
        color: ${({ theme }) => theme.COLORS.GRAY_100};

    &:focus {
      border: none;
      outline: none;
    }

    &:disabled {
      opacity: 0.5;
    }
  }
`;