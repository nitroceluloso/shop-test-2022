import styled from 'styled-components';

export const TittleBox = styled.div`
    width: 50%;
`

type CounterBoxProps = {
    selected: boolean;
}

export const CounterBox = styled.div<CounterBoxProps>`
    border-radius: 0.37rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    background-color: ${props => props.selected ? 'rgba(var(--orange), 0.1)' : 'rgb(var(--white))'};

    & p{
        margin: 0;
    }
`;

export const CounterActions = styled.div`
    display: flex;
`;

type ActionBoxProps = {
    orange?: boolean;
}
export const ActionBox = styled.div<ActionBoxProps>`
    padding: 0 0.62rem;
    cursor: pointer;
    color: ${props => props.orange ? 'rgb(var(--orange))' : 'black'}
`;