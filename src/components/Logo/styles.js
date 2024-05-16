import styled from "styled-components";

export const Container = styled.div`
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        
        cursor: pointer;
        
        >h2{
            color: ${({ theme }) => theme.COLORS.WHITE};

            font-family: Roboto;
            font-size: 42px;
            font-weight: 700;
            line-height: normal;
            
            margin-left: 2rem;
        }
`