// CSS in TS

import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body, button, select, input, option, textarea {
        background-color: #e1daca;
        font-family: "Encode Sans SC", sans-serif;
        color: #291d21;
    }
`