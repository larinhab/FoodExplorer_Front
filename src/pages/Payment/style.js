import styled from "styled-components";

export const Container = styled.div`
    main{
        display: grid;
        grid-template-columns: repeat(2, 400px);
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        width: 1000px;

        margin: 4rem auto;

        background-color: ${({ theme }) => theme.COLORS.DARK_BLUE_700};
        padding: 4rem;
        border-radius: 8px;
    }

    input{
        padding: 0.8rem;
    }

    h2{
        text-align: center;
        font-size: 2rem;
        margin-bottom: 2rem;
    }
    
    .finishedBtn{
        width: 200px;
        grid-column: span 2;
        justify-self: center;
        margin: 4rem auto 2rem auto;
    }

    .address{
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    .street,
    .county-complement,
    .address-complement,
    .city-complement{
        display: flex;
        gap: 2rem;
    }
    
    .street label:first-child{
        width: 90%;
    }

    .county-complement label:first-child{
        width: 100%;
    }

    .county-complement label:last-child{
        width: 50%;
    }
`

export const Section = styled.div`
    width: 100%;

    .payment-method{
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        gap: 4rem;
        padding-top: 5rem;
    }

    .payment{
            margin: 2rem auto;
            display: flex;
            flex-direction: column;
            gap: 3.4rem;
        }

    .cardInfoNumbers,
    .cardFinalInfo{
        display: flex;
        justify-content: space-between;
        gap: 1rem;
    }

    .cardInfoNumbers label:first-child{
        width: 100%;
    }

    .cardInfoNumbers label:last-child{
        width: 30%;
    }

    .cardFinalInfo label:first-child{
        width: 30%;
    }

    .cardFinalInfo label:last-child{
        width: 100%;
    }
    
    .qrCode{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        > p{
            word-wrap: break-word;
            word-break: break-all;
            text-align: center;
            margin: 2rem 1rem;
        }

        > button{
            width: 170px;
        }
    }

    .qrCodeImg{
        width: 50%;
        margin-top: 3rem;
    }
`

export const Select = styled.select`
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${({ theme }) => theme.COLORS.DARK_BLUE_900};
        
        font-family: Roboto;
        font-size: 14px;
        color: ${({ theme }) => theme.COLORS.GRAY_500};
        
        border: none;
        cursor: pointer;

        height: 4.8rem;
        border-radius: 0.8rem;
        padding: .75rem 2rem;

`

export const Label = styled.label`
            color: ${({ theme }) => theme.COLORS.LIGHT_400};

            font-family: Roboto;
            font-size: 1.6rem;
            font-weight: 400;

            margin: 1rem 0;
        
`
