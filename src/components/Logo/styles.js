import styled from "styled-components";

export const Container = styled.div`
       
        
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: end;

        .logo-title {
            width: 150px;
            
            color: ${({ theme }) => theme.COLORS.WHITE};
            font-family: Roboto;
            font-size: 24px;
            font-weight: 700;
            line-height: normal;
            
            margin-left: 1rem;
            cursor: pointer;
        }
         
        .logo-img {  
            width: 30px;
            height: 30px;
            margin: 0;
        }

        > p {
            color: ${({ theme }) => theme.COLORS.LIGHT_BLUE_100};
            
    }
`

export const Section = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;

`