import styled , {css} from "styled-components"

export const StyleOne = css`
    font-size: 14px;
    font-weight: 600;
`
export const StyleTwo = css`
    font-size: 18px;
    font-weight: 700;
`

export const Title_1 = styled.h1`
    ${StyleTwo}
    color:var(--color-grey-600);
`

export const Title_2 = styled.h2`
    ${StyleOne};
    color: var(--color-color-primary);
`


export const Title_3 = styled.h2`
    ${StyleOne};
    color: var(--color-grey-600);
`
export const Title_4 = styled.h1`
    ${StyleTwo}
    color:var(--color-white);
`

export const Text = styled.p`
    font-size: 0.75rem;
    font-weight: 400;
    color: var(--color-grey-300);
`