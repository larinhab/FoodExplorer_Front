import styled from "styled-components";

export const Container = styled.div`
    height: 100dvh;
    width: 100%;
    margin: 0 auto;

 
    .plate-container {
        display: flex;
        justify-items: center;
        align-items: center;
        
        margin: 16px 20%;
        padding: 4rem;
        gap: 3rem;
    }

        .plate-info{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: start;

            gap: 3rem;
            
            width: 600px;
            margin-left: 4rem;
        }

        .plate-image {
            width: 380px;
            height: 380px;
        }
    
        .plate-name {        
            font-family: Poppins;
            font-size: 40px;
            font-style: normal;
            font-weight: 500;
        }
        
        .plate-description {
            font-family: Poppins;
            font-size: 24px;
            font-style: normal;
            font-weight: 400;
            
            margin: 2rem 0;
        }
        
    .add-cart {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2rem;
        width: 50%;
    }

`