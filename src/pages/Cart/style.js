import styled from "styled-components";

export const Container = styled.div`
    height: 100dvh;
    width: 100%;
   
    main{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        margin: 50px;
    }
    
    h2{
        font-family: Poppins;
        font-size: 3rem;
        margin-bottom: 0.8rem;
    }
    

    .cart-item{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        gap: 100px;
    }

    .item-info{
        display: flex;
        justify-content: space-between;
        align-items: center;

        font-size: 18px;
        font-family: Roboto;
        font-weight: 400;
        text-align: center;

        border-bottom: 1px solid #fff;
    }

    table{
        width: 600px;
        margin: 3rem 5rem;
        padding: 2rem;
    }

    td, tr{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 4rem;

        text-align: justify;
    }

    .cart-image{
        width: 120px;
        height: 120px;
    }

    .cart-closing{
        display: flex;
        justify-content: center;
        align-items: center;
        
        gap: 5rem;
        margin: 4rem 20rem;
        padding: 2rem;

        font-size: 2rem;
        
        p {
            margin-right: 12rem;
        }
    }
`