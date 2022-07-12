import Button from '@Components/atoms/button';
import React from 'react';
import { CounterHeaderBox, Paragraph, OrangeParagrapg } from './CountersHeader.style';
import Refresh from "../../../assets/svg/refresh.svg";

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
                    <Paragraph bold>{props.itemCount} items</Paragraph>
                    <Paragraph>{props.itemAddition} times</Paragraph>
                </>
            }
            {
                props.selectedItems > 0 &&
                <>
                    <OrangeParagrapg> {props.selectedItems} selected </OrangeParagrapg>
                </>
            }
            <Button look='transparent' onClick={props.refresh}>
                <img src={Refresh} alt="" />
            </Button>
        </CounterHeaderBox>
    );
}