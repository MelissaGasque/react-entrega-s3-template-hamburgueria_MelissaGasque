import styled from "styled-components"

export const StyledProducList = styled.ul`
padding-left:9.25rem;
display: flex;
flex-direction: row;
flex-wrap: wrap;
height: auto;
margin-top: 2rem;


@media(max-width: 867px){
    width: 90%;
    margin-top:5rem;
    padding: 1rem;
    flex-wrap: nowrap;
    overflow-x: scroll;
}
`