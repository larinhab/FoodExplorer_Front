import styled from "styled-components";

export const Container = styled.div`
    height: 100dvh;
    width: 100%;
    margin: auto;

    .card-container{
        margin: auto 23rem;
    }

    h1{
        font-size: 32px;
        font-family: Poppins;
        font-weight: 500;
        margin-bottom: 2rem;

        color: ${({ theme }) => theme.COLORS.LIGHT_BLUE_300};
    }

    .category{
        margin: 2rem 25rem;

        >h1{
            margin: 4rem 0rem;
        }
    }   

    swiper-container{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 600px;
        margin-bottom: 12.5rem;
    }

    swiper-slide{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        overflow: hidden;

        background-color: ${({ theme }) => theme.COLORS.DARK_BLUE_200};
    }
`

export const HomeImage = styled.div`
    width: 1120px;
    height: 260px;  
    border-radius: 8px;
    background: var(--Gradients-200, linear-gradient(180deg, #091E26 0%, #00131C 100%));

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 10% auto 4% auto;

    > .banner-container {
        display: flex;
        align-items: center;
        justify-content: center;

        img{
        width: 600px;
        height: 400px;
        overflow: hidden;
        margin-bottom: 14rem;
    }
    }
        h2 {
        font-family: Poppins;
        font-size: 40px;
        font-weight: 500;
    }

        p{
        font-family: Roboto;
        font-size: 16px;
        font-weight: 400;

        text-align: center;
    }

`