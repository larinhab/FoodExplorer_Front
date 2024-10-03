import styled from 'styled-components'

export const Form = styled.form`
    input{
        padding: 0.8rem;
    }

    h2{
        text-align: center;
        font-size: 2rem;
        margin-bottom: 2rem;
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

    .county-complement label:last-child,
    .county-complement input:last-child{
        width: 70%;
        cursor: not-allowed;
    }

    .address-complement label:last-child,
    .city-complement label:last-child{
        width: 100%;
    }
    
    .saveAddressInput{
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

    .saveAddressInput:checked {
        background-color:  ${({ theme }) => theme.COLORS.LIGHT_100};
        border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};;
    }
    
    .saveAddress{
        font-size: 12px;
        display: flex;
        align-items: center;
        justify-content: right;
        position: absolute;
        bottom: 15px;
    }
`

export const Label = styled.label`
            color: ${({ theme }) => theme.COLORS.LIGHT_400};

            font-family: Roboto;
            font-size: 1.6rem;
            font-weight: 400;

            margin: 1rem 0;
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