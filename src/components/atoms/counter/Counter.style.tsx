import styled from 'styled-components';

export const TittleBox = styled.div`
    /* width: 50%; */
    flex-grow: 1;
`

type CounterBoxProps = {
    selected: boolean;
}

export const CounterBox = styled.div<CounterBoxProps>`
    border-radius: 0.37rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 1rem;
    background-color: ${props => props.selected ? 'rgba(var(--orange), 0.1)' : 'rgb(var(--white))'};
    cursor: default;

    & p{
        margin: 0;
    }
`;

export const CounterActions = styled.div`
    display: flex;
    flex-grow: 0;
`;

type ActionBoxProps = {
    orange?: boolean;
    disabled?: boolean;
}
export const ActionBox = styled.div<ActionBoxProps>`
    padding: 0 0.62rem;
    color: ${props => props.orange ? 'rgb(var(--orange))' : 'black'};
    color: ${props => props.disabled ? 'rgb(var(--gray))' : null};
`;

type ActionButtonProps = {
    orange?: boolean;
}
export const ActionButton = styled.button<ActionButtonProps>`
    background: transparent;
    border: 0;
    color: ${props => props.orange ? 'rgb(var(--orange))' : 'black'};
    color: ${props => props.disabled ? 'rgb(var(--gray))' : null};
`