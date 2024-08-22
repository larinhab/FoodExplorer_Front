import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    .plate {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 1rem;
    }

    .plate-info{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        width: 100%;
    
        padding: 1rem;

        img {
            width: 176px;
            height: 176px;
            object-fit: cover;
            border-radius: 100%;
            margin-bottom: 2rem;
                    
            cursor: pointer;
        }

        svg:hover{
        color: ${({ theme }) => theme.COLORS.LIGHT_BLUE_100};
        transition: 1s;
    }

        .plate-name {
            width: 110%;
            
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            margin-bottom: 2rem;
            
            font-family: Poppins;
            font-size: 24px;
            font-weight: 700;
        }   

        .plate-price {
            font-family: Roboto;
            font-size: 36px;
            color: ${({ theme }) => theme.COLORS.LIGHT_BLUE_100};
            margin: 4rem auto;
        }

        .plate-description{
            align-items: center;
            justify-content: center;
            font-family: Roboto;
            font-size: 14px;
            font-weight: 400;
            text-align: center;
        }
    }

    .add-cart{
        display: flex;
        align-items: center;
        justify-content: center;
        
        gap: 2rem;
    }
`