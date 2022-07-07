import styled from "styled-components";

export const SearchBox = styled.div`
    padding: 1rem 1rem;
`;

type CounterBoxPropx = {
    transparent?: boolean;
}

export const CountersBox = styled.div<CounterBoxPropx>`
    opacity: ${props => props.transparent ? '0.2' : 1};
`;
