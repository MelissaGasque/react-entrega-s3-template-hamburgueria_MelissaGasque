import styled, { css } from "styled-components"

export const StyledButton = styled.button`
    font-weight: 600;
    border-radius: 0.5rem;
    padding: 0px 20px 0px 20px;

    ${({button}) => {
        if(button === "big"){
            return css`
                width: 90%;
                height: 3.75rem;
                border: 2px solid var(--color-grey-100);
                color:var(--color-grey-300);
                background-color: var(--color-grey-100);
                margin-left: 1.375rem;

                &:hover{
                   background-color: var(--color-grey-300);
                   color: var(--color-grey-100);
                }
            `
        }else if(button === "mediun"){
            return css`
                width: 6.625rem;
                height: 2.5rem;
                border: 2px solid var(--color-grey-004);
                color:var(--color-white);
                background-color: var(--color-grey-004);
                
                &:hover{
                    background-color: var(--color-color-primary);
                    border: var(--color-color-primary) 2px solid;
                }
            `
        }else{
            return css`
            width: 2rem;
            height: 2rem;
            background-color: var(--color-color-primary);
            border: none;
            color:rgba(255, 255, 255, 0.5);
            `
        }
    }}
`