import styled from 'styled-components';

type ButtonBarContainerProps = {
    transparent?: boolean;
}

export const ButtonBarContainer = styled.div<ButtonBarContainerProps>`
    width: 100%;
    position: fixed;
    bottom: 0;
    padding:  0 1rem 1rem 1rem;
    opacity: ${props => props.transparent ? '0.2' : 1};
`;

export const ButtonContainer = styled.div`
    padding-top: 1rem;
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
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