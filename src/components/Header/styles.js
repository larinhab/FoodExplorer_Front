import styled from "styled-components";
import { Link } from "react-router-dom"

export const Container = styled.header`
    width: 100%;
    height: 8rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_BLUE_700};

    display: flex;
    align-items: center;
    text-align: center;
    gap: 2rem;
    justify-content: space-between;

    h2 {
        font-family: Roboto;
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
    }

    img {
        width: 30px;
        height: 30px;
        margin: 0;
    }

    button{
        width: 216px;
    }
    
    >.icons {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 20rem;
        gap: 2rem;
    }
`

export const Search = styled.input`
    display: flex;
    align-items: center;
    justify-content: center;

    height: 48px;
    padding: 12px 14px;
    gap: 14px;

    border: none;
    border-radius: .3125rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_BLUE_900};
`
