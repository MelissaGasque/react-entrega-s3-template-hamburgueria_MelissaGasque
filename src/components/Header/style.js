import styled from "styled-components"

export const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    height: 5rem;
    width: 100%;

    @media(max-width: 867px){
        flex-direction: column;
    }
  `
export const StyledDivHeader = styled.div`
    width: 70%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--color-grey-000);
    
    @media(max-width: 867px){
        width: clamp(1px, 100%, 867px);
    }

    img{
        margin-left: 6.8244rem;
        width: 9.9337rem;
        height: 2.3019rem;

        @media(max-width: 867px){
            margin-left: 1rem;
        }
    }
    span{
        height:3.75rem;
        width: 40px;
        position: relative;
        display: inline-block;
        margin-right: 1rem;
        display: flex;
        cursor: pointer;

    }
    span>p{
        background-color: var(--color-color-primary);
        width: 1.25rem;
        height: 1.5rem;
        display: flex;
        text-align: center;
        justify-content: center;
        align-items: center;
        border-radius: 0.4375rem;
        font-size: 0.875rem;
        font-weight: 900;
        color:var(--color-white);
        position: absolute;
        top: 10px;
        right: 0;
    }
    span>img{
        width: 1.5625rem;
        height: 1.5625rem;
        position: absolute;
        top: 24px;
        right: 13px;
    }
`

export const StyledFormHeader = styled.form`
    width: 30%;
    background-color: var(--color-grey-000);
    padding: 0.5rem;

    @media(max-width: 867px){
        width: 98%;
    }

    div{
        width: 75%;
        height: 3.75rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: var(--color-white);
        border: 0.125rem solid var(--color-grey-100);
        border-radius:0.5rem;

        @media(max-width: 867px){
            width: 99%;  
        }
    }
    div:hover{
        border: 2px solid var(--color-grey-600);
    }    
    input{
        height: 2.5rem;
        width: 75%;
        border: none;
        padding: 0rem 0.625rem 0 0.9375rem;
        font-size: 1rem;
        font-weight: 400;
    }
    input::placeholder {
        color: var(--color-grey-100);
    }
    input:hover::placeholder {
        color: var(--color-grey-300);
    }
    input:focus {
        outline: none;
    }
    img{
        width: 3.3125rem;
        height: 2.5rem;
        margin-right: 0.625rem;
    }
`