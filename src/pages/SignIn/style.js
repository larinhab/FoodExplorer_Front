import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    margin: auto;
     
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const Section = styled.div`
    width: 800px;
    display: flex;
    flex-direction: column;
    text-align: center;

    margin-right: 30rem; 
    
    padding: 6rem;
    border-radius: 1rem;

    background-color:  ${({ theme }) => theme.COLORS.DARK_BLUE_700};

    >h1{
        font-family: Poppins;
        font-size: 32px;
        font-weight: 500;
        color: ${({ theme }) => theme.COLORS.LIGTH_100};
        margin-bottom: 2rem;
    }

    >p, a {
        font-size: 16px;
        margin-top: 2rem;
        text-decoration: none;
        color: white;
    }
`

export const Form = styled.form`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    margin-bottom: 2rem;

    >label{
        font-family: Roboto;
        font-size: 16px;
        font-weight: 400;
        line-height: 2rem;
        margin-bottom: 0.5rem;
        
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    >input{
        width: 100%;
        padding: 12px 14px;

        border-radius: 8px;
        border: none;
        background-color: ${({ theme }) => theme.COLORS.DARK_BLUE_900};
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }

    >input:last-child{
        margin-bottom: 2rem;
    }
`
