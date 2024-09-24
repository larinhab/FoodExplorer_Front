import styled from "styled-components";

export const Container = styled.div`
    height: 100dvh;
    width: 100%;
   
    footer{
        position: fixed;
        bottom: 0;
    }
    
    main{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin: 4rem;
    }
    
    .favorites-container{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    h2{
        font-family: Poppins;
        font-size: 3rem;
        margin-bottom: 4rem;
    }

    td{
        display: flex;
        width: 180px;
        justify-content: center;
        align-items: center;
        font-size: 1.8rem;
    }
    
    tr{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        
        margin-bottom: 3rem;
        padding-bottom: 2rem;
        border-bottom: 1px solid gray;
    }
    
    .btn{
        font-size: 1.2rem;
        margin: 0 0 0 3rem;
    }

    .fav-image {
        width: 120px;
        height: 120px;
    }
`