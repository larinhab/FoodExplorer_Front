import styled from "styled-components";

export const Container = styled.textarea`
    width: 100%;
    height: 170px;

    border-radius: 8px;
    background-color: ${({ theme }) => theme.COLORS.DARK_BLUE_900};

    color: ${({ theme }) => theme.COLORS.WHITE};

    border: none;
    resize: none;

    font-family: 'Roboto';

    margin-bottom: 2rem;
    border-radius: 0.8rem;
    padding: 1rem;

    &::placeholder {
        color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
`