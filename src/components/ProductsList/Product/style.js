import styled from "styled-components"

export const StyledProducList = styled.li`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    border:1px solid blue;
    margin-right:3.5rem;
    margin-bottom: 3.25rem;
    border-radius: 0.3125rem;
    border: 2px solid var(--color-grey-100);

    &:hover{
        border-color: var(--color-color-primary);
    }
`
export const StyledDivProducList = styled.div`
    width: 18.75rem;
    height: 9.375rem;
    background-color: var(--color-grey-000);
    display: flex;
    justify-content: center;


    img{
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
    }

`
export const StyledDiv2ProducList = styled.div`
    height: 12.25rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-left:1.3125rem;

`