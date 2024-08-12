import styled from "styled-components";

export const Container = styled.div`
    height: 100dvh;
    width: 100%;
    margin: 0 auto;

    footer{
        position: fixed;
        bottom: 0;
    }
 
    .plate-container {
        display: flex;
        justify-items: center;
        align-items: center;
        width: 80%;
        
        margin: 100px 20%;
        padding: 4rem;
        gap: 3rem;
    }

        .plate-info{
            width: 800px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: start;

            gap: 3rem;

            margin-left: 4rem;
        }

        .plate-image {
            width: 480px;
            height: 480px;
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
        width: 60%;
    }
`

export const TagsContainer = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 1rem;

        margin: 1rem 0;
        padding-bottom: 3rem;
`