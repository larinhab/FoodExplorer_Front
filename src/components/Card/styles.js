import styled from "styled-components";

export const Container = styled.div`
    background-color: ${({ theme }) => theme.COLORS.DARK_200};

    padding: 2rem;
    height: 100%;

    cursor: pointer;

    img {
        width: 13rem;
        height: 13rem;
        object-fit: cover;
        border-radius: 100%;
        }

    > h2 {
        font-size: 14px;
    }

    .swiper-container {
        width: 100%;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .swiper-slide{
        width: 500px;
        height: 300px;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    
`