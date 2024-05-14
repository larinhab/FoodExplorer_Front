import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color:  ${({ theme }) => theme.COLORS.DARK_BLUE_900};
        color:  ${({ theme }) => theme.COLORS.LIGHT_300};

        -webkit-font-smoothing: antialiased;
    }

    a {
        text-decoration: none;
    }

    button {
        cursor: pointer;
        color:  ${({ theme }) => theme.COLORS.TOMATO_100};
    }

    `
