import styled from "styled-components";

export const Container = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;

    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.TOMATO};
    
    height: 4.8rem;
    border: 0;
    padding: .75rem 2rem;
    border-radius: 10px;

    font-family: Poppins;
    font-size: 14px;
    text-align: center;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    &:disabled, &:hover {
        background-color: ${({ theme }) => theme.COLORS.T_LIGHT};
        transition: 1s;
    }

    svg {
        margin-right: 1rem;
    }
`