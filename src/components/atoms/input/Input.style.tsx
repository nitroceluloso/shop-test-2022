import styled, { StyledComponent } from 'styled-components';
import Glass from '@Assets/svg/glass.svg';
import { InputLook } from './Input';

const defaultInput = styled.input`
    display: block;
    width: 100%;
    padding: 0.85rem 0.62rem 0.85rem 0.62rem;
    border: 1px solid rgba(0, 0, 0, 0.05);
    border-radius: 0.5rem;
    font-size: 1rem;
`;

export const InputStyle = styled.input`
    display: block;
    width: 100%;
    padding: 0.85rem 0.62rem 0.85rem 3rem;
    background: url(${Glass}) no-repeat scroll 1.25rem 0.75rem;
    border: 1px solid rgba(0, 0, 0, 0.05);
    border-radius: 0.5rem;
    font-size: 1rem;
`;

const stylesByLook = new Map<InputLook, StyledComponent<'input', any>>([
    ['default', defaultInput],
    ['search', InputStyle]
]);

export const getInputByLook = (look: InputLook) => stylesByLook.get(look) as StyledComponent<'input', any>;