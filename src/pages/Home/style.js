import styled from "styled-components";

export const Container = styled.div`
    height: 100dvh;
    width: 100%;
    margin: auto;
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
    margin: 10% auto;

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