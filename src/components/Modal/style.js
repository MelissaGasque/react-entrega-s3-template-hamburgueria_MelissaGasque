import styled from "styled-components"

export const StyledModal = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 31.25rem;
    height: 25.6875rem;
    background-color:var(--color-white);

    @media(max-width: 867px){
        width: 90%
    }

`
export const StyledBackdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 9998;
`;

export const StyledDivModal = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 3.375rem;
    background-color: var(--color-color-primary);
    padding-left: 1.375rem;
    padding-right: 1.4175rem;
    color:var(--color-white);
`

export const StyleUlModal = styled.ul`
    display: flex;
    flex-direction: column;
    height: 13.5rem;
    overflow-y: auto ;
    border-bottom: solid 2px var(--color-grey-100);
    margin-left: 1.375rem;
    margin-right: 1.4175rem;
   
`

export const StyledTotalValueModal = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-right: 1.4175rem;
    padding-left: 1.375rem;
    height: 3.6875rem;

 
`