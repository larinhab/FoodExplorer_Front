import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    height: 8rem;
    
    background-color: ${({ theme }) => theme.COLORS.DARK_BLUE_700};

    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    
    padding: 0 30rem;
    gap: 2rem;

    svg{
        cursor: pointer;
    }

    >.icons {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 2rem;
        gap: 2rem;
    }

    button{
        width: 30%;
        font-size: 14px;
        font-weight: 500;
    }
`