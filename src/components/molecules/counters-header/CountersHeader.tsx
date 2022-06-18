import React from 'react';
import { CounterHeaderBox, Paragraph, OrangeParagrapg } from './CountersHeader.style';

type CountersHeaderProps = {
    itemCount: number;
    itemAddition: number;
    selectedItems: number;
    refresh: () => void;
}

export const CountersHeader = (props: CountersHeaderProps) => {
    return(
        <CounterHeaderBox>
            {props.selectedItems == 0 &&
                <>
                    <Paragraph>{props.itemCount} items</Paragraph>
                    <Paragraph>{props.itemAddition} times</Paragraph>
                </>
            }
            {
                props.selectedItems > 0 &&
                <>
                    <OrangeParagrapg> {props.selectedItems} selected </OrangeParagrapg>
                </>
            }
            <div></div>
        </CounterHeaderBox>
    );
}