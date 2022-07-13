import styled, { css } from "styled-components";

export const SearchBox = styled.div`
    padding: 1rem 1rem;
`;

type CounterBoxPropx = {
    transparent?: boolean;
    $loading?: boolean;
}

const CounterBoxEmpty = css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 5rem);
`

export const CountersBox = styled.div<CounterBoxPropx>`
    opacity: ${props => props.transparent ? '0.2' : 1};
    ${props => props.$loading ? CounterBoxEmpty : ''};
`;