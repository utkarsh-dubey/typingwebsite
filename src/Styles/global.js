import { createGlobalStyle } from "styled-components";

export const GlobalStyles  = createGlobalStyle`

    *{
        box-sizing: border-box;
    }

    body{
        background: black;
        color: white;
        padding: 0;
        margin: 0;
        transition: all 0.25s linear;
    }

    .canvas{
        display: grid;
        min-height: 100vh;
        gap: 0.5rem;
        padding: 1rem;
        width: 100vw;
        text-align: center;
        align-items: center;
    }

    .type-box{
        display: block;
        max-width: 1000px;
        height: 140px;
        margin-left: auto;
        margin-right: auto;
        overflow: hidden;
    }

    .words{
        display: flex;
        flex-wrap: wrap;
        align-content: center;
        font-size: 33px;
    }

    .word{
        margin: 5px;
        padding-right:2px;
    }

    .hidden-input{
        opacity: 0;
    }

`