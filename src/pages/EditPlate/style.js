import styled from "styled-components";

export const Container = styled.div`
        height: 100dvh;
        margin: 0 auto 200px auto;

        footer{
            position: fixed;
            bottom: 0;
        }

        main {
            display: flex;
            flex-direction: column;
            padding: 2rem 34rem;

            text-align: left;
        }

        h1 {
            font-family: Poppins;
            font-size: 32px;
            font-style: normal;
            font-weight: 500;
        }

`
export const Form = styled.form`
        width: 100%;
        margin: 0 auto;

        .new-plate-container{
            width: 100%;
            margin: 2rem 0;
            padding: 2rem 0;
            display: flex;
            flex-direction: column;
            gap: 2rem;
        }

        .first-container,
        .second-container,
        .last-container{
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 2rem;
        }

        .second-container{
            div:nth-child(1){
                width: 250%;
            }

            div:nth-child(2){
                width: 100%;
            }
        }

        .first-container{
            width: 100%;
            
            p{
                margin: 1rem 0;
            }

            p, span{
            color: ${({ theme }) => theme.COLORS.LIGHT_400};
            font-family: Roboto;
            font-size: 16px;
            font-weight: 400;
            }

            div:first-child{
                width: 60%; 
                input[type='file']{
                    display: none;
                }
            }

            div:nth-child(2){
                width: 100%;
            }

            div:nth-child(3){
                width: 80%;
            }
            
        }

        .last-container{
            gap: 2rem;
            margin-left: 60%;
        }

        .last-container
        button:first-child{
            background-color: ${({ theme }) => theme.COLORS.DARK_BLUE_900};
        }
        button:first-child:hover{
            opacity: 0.5;
            transition: 1s;
        }
`

export const Label = styled.label`
        > p{
            color: ${({ theme }) => theme.COLORS.LIGHT_400};

            font-family: Roboto;
            font-size: 16px;
            font-weight: 400;

            margin: 1rem 0;
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

export const ImageLabel = styled.label`
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;
        background-color: ${({ theme }) => theme.COLORS.DARK_BLUE_900};

        height: 4.8rem;
        border-radius: 0.8rem;
        padding: .75rem 2rem;
`