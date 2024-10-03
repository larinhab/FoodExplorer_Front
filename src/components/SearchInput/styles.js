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

  .search-results {
  position: absolute;
  top: 65px; 
  z-index: 1;
  
  width: 27%;
  background-color: ${({ theme }) => theme.COLORS.DARK_BLUE_700};
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  overflow: hidden;
}

.search-results ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.search-results li {
  padding: 10px;
  cursor: pointer;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_LIGHT_100};
}

.search-results li:hover {
  background-color: ${({ theme }) => theme.COLORS.LIGHT_300};
  color: ${({ theme }) => theme.COLORS.DARK_BLUE_700};
  transition: .5s;
}
`