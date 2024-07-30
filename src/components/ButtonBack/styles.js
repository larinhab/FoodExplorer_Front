import styled from "styled-components";
import { Link } from "react-router-dom"


export const Container = styled(Link)`
    display: flex;
    align-items: center;
    justify-items: center;
    text-align: center;
    margin: 0 20%;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background: transparent;
    
    font-size: 32px;
    border: none;
    text-decoration: none;

    > p {
        font-size: 24px;
        margin: 3rem 0;
    }
`