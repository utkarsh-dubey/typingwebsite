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

    .current{
        border-left: 1px solid;
        animation: blinking 2s infinite;
        @keyframes blinking{
            0% {border-left-color: white;}
            25% {border-left-color: black;}
            50% {border-left-color: white;}
            75% {border-left-color: black;}
        }
    }

    .current-right{
        border-right: 1px solid;
        animation: blinkingRight 2s infinite;
        @keyframes blinkingRight{
            0% {border-right-color: white;}
            25% {border-right-color: black;}
            50% {border-right-color: white;}
            75% {border-right-color: black;}
            100% {border-right-color: white;}
        }
    }

    .correct{
        color: green;
    }

    .incorrect{
        color: red;
    }

`