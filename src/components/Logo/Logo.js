import styled from "styled-components";

export const Container = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;

        >img{
            margin-right: 3rem;
        }

        >h1{
            color: ${({ theme }) => theme.COLORS.WHITE};

            font-family: Roboto;
            font-size: 42px;
            font-weight: 700;
            line-height: normal;
        }
`