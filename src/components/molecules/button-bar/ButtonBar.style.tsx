import styled from 'styled-components';

export const ButtonBarContainer = styled.div`
    width: 100%;
    position: fixed;
    bottom: 0;
    padding:  0 1rem 1rem 1rem;
`;

export const ButtonContainer = styled.div`
    padding-top: 1rem;
    display: flex;
    justify-content: space-between;
`;

export const OptionButtonBox = styled.div`
    display: flex;

    & > button:first-child {
        margin-right: 1rem;
    }
`

export const Separation = styled.hr`
    margin: 0;
    border: 0;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.1);
`;