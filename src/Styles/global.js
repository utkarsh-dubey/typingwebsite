import { createGlobalStyle } from "styled-components";

export const GlobalStyles  = createGlobalStyle`

    *{
        box-sizing: border-box;
    }

    body{
        background: ${({theme}) => theme.background};
        color: ${({theme}) => theme.title};
        padding: 0;
        margin: 0;
        transition: all 0.25s linear;
        overflow-y: scroll;
    }

    body::-webkit-scrollbar{
        display: none;
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
        color: ${({theme}) => theme.typeBoxText};
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

    .upper-menu{
        display:flex;
        width: 1000px;
        margin-left: auto;
        margin-right: auto;
        justify-content: space-between;
        font-size: 1.3rem;
        padding: 0.5rem;
    }

    .modes{
        display:flex;
    }
    .mode{
        margin-right: 7px;
    }

    .mode:hover{
        color: green;
        cursor: pointer;
    }

    .footer, .header{
        display: flex;
        width: 1000px;
        margin-left: auto;
        margin-right: auto;
        justify-content: space-between;
    }

    .stats-comp{
        display: flex;
        width: 1000px;
        margin-left: auto;
        margin-right: auto;
    }

    .left{
        width: 30%;
        padding: 30px;
    }
    .right{
        width: 70%;
    }
    .title{
        font-size: 20px;
        color: ${({theme}) => theme.typeBoxText};

    }

    .subtitle{
        font-size: 30px;
        color: ${({theme}) => theme.title};
    }
    .resulttable, .userpage-graph{
        width: 1000px;
        margin-left: auto;
        margin-right: auto;
    }

    .user-profile{
        display: flex;
        width: 1000px;
        margin-left: auto;
        margin-right: auto;
        border-radius: 20px;
        background: ${({theme})=>theme.title};
        color: ${({theme})=>theme.background};
        min-height: 200px;
        justify-content: center;
        align-items: center;
    }

    .user{
        width: 50%;
        display: flex;
        padding: 1rem;
        font-size: 1.5rem;
        border-right: 2px solid;
    }

    .info{
        width: 60%;
    }

    .profile-picture{
        width: 40%;
    }

    .total-tests{
        width: 50%;
        font-size: 3rem;
    }

    .logo{
        display: flex;
        gap: 10px;
    }

    .compare-btn{
        cursor: pointer;
        background: ${({theme})=>theme.title};
        color: ${({theme})=>theme.background};
        padding: 0.3rem;
        border-radius: 5px;
        margin-top: -5px;
    }


`