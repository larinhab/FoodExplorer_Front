import styled from "styled-components";

export const Container = styled.div`
    main{
        display: grid;
        grid-template-columns: repeat(2, 400px);
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
        margin: 6rem auto 2rem auto;
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
        padding-top: 3rem;
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

    .saveCardInput{
        width: 5px;
        height: 5px;
        appearance: none;
        border-radius: 12px;
        border: 1px solid #fff;
        background: transparent;
        cursor: pointer;
        align-items: center;
        margin-left: 4px;
    }

    .saveCardInput:checked {
        background-color:  ${({ theme }) => theme.COLORS.LIGHT_100};
        border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};;
    }
    
    .saveCard{
        font-size: 12px;
        display: flex;
        align-items: center;
        justify-content: right;
        position: absolute;
        bottom: 15px;
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

    .totalPrice{
        width: 80px;
        cursor: not-allowed;
        margin: 2rem auto;
    } 

    .qrCodeImg{
        width: 50%;
        margin-top: 1rem;
    }
`
export const Label = styled.label`
            color: ${({ theme }) => theme.COLORS.LIGHT_400};

            font-family: Roboto;
            font-size: 1.6rem;
            font-weight: 400;

            margin: 1rem 0;
`
