import styled from "styled-components";

export const Container = styled.div`
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: end;

        
        cursor: pointer;
        
        >h2{
            color: ${({ theme }) => theme.COLORS.WHITE};

            font-family: Roboto;
            font-size: 42px;
            font-weight: 700;
            line-height: normal;
            
            margin-left: 2rem;
        }

        > p {
        color: ${({ theme }) => theme.COLORS.LIGHT_BLUE_100};
    }
`

export const Section = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    gap: 1rem;
`