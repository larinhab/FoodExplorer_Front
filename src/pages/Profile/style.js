import styled from "styled-components";


export const Container = styled.div`
        width: 100%;
        height: 100vh;
        background: ${({ theme }) => theme.COLORS.DARK_BLUE_200};



`

export const Form = styled.form`
    width: 600px;
    margin: 10rem auto;
    
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    .profile-container{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 1rem;

        h2 { 
            font-size: 2rem;
            font-family: Poppins;
            font-weight: 200; 
        }
    }

    input{
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    input:active{
        border-radius: 2px;
        outline: 1px solid white;
    }
`