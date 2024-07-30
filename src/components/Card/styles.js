import styled from "styled-components";

export const Container = styled.div`
    min-height: 100dvh;
    margin: 100px 200px;
    padding: 0 10rem;

    > h2 {
        font-size: 32px;
        font-family: Poppins;
        font-weight: 500;
        
        margin: 2rem 0;
        color: ${({ theme }) => theme.COLORS.LIGHT_BLUE_300};
    }
    

    swiper-slide{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-color: ${({ theme }) => theme.COLORS.DARK_BLUE_200};

    }

    .plate {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        
        padding: 2rem;
        
        width: 500px;
        height: 600px;

    }

    .plate-info{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        width: 100%;
        
        gap: 1rem;
        margin: 1em;
        padding: 2rem;

        img {
            width: 176px;
            height: 176px;
            object-fit: cover;
            border-radius: 100%;
            margin-bottom: 1rem;
                    
            cursor: pointer;
        }

        .plate-name {
            display: flex;
            align-items: center;
            
            font-family: Poppins;
            font-size: 24px;
            font-weight: 700;
        }   
        .plate-price {
            font-family: Roboto;
            font-size: 32px;
            color: ${({ theme }) => theme.COLORS.LIGHT_BLUE_100};
            margin-top: 4rem;
        }
        .plate-description{
            font-family: Roboto;
            font-size: 14px;
            font-weight: 400;
            overflow: auto;
            text-align: center;
        }


    }

    .add-cart{
        display: flex;
        align-items: center;
        justify-content: center;
        
        gap: 2rem;
        margin-bottom: 2rem;
    }
`