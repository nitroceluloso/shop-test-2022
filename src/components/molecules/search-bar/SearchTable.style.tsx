import styled from 'styled-components';

export const StyledWrapper = styled.div`
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;

    & > input:not(:only-child) {
        width: 70%;
    }
`