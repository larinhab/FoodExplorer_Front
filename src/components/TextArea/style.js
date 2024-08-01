import styled from "styled-components";

export const Container = styled.textarea`
    width: 100%;
    height: 170px;

    border-radius: 8px;
    background: var(--Dark-Dark-800, #0D161B);

    color: ${({ theme }) => theme.COLORS.WHITE};

    border: none;
    resize: none;

    font-family: 'Roboto';

    margin-bottom: 8px;
    border-radius: 10px;
    padding: 14px;

    &::placeholder {
        color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
`