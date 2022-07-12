import styled from 'styled-components';

export const CounterHeaderBox = styled.div`
    padding: 0.5rem 1.5rem 0rem 1.5rem;
`;

type ParagraphProps = {
    bold?: boolean;
}

export const Paragraph = styled.span<ParagraphProps>`
    margin-right: 0.5rem;
    color: rgba(136, 139, 144, 1);
    &:first-child {
        color: black
    }
`;

export const OrangeParagrapg = styled.span`
    color: rgb(var(--orange));
`;