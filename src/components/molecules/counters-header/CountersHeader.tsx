import Button from '@Components/atoms/button';
import React from 'react';
import { CounterHeaderBox, Paragraph, OrangeParagrapg } from './CountersHeader.style';
import Refresh from "../../../assets/svg/refresh.svg";

type CountersHeaderProps = {
    itemCount: number;
    itemAddition: number;
    selectedItems: number;
    refresh: () => void;
    isRefreshing?: boolean;
}

export const CountersHeader = (props: CountersHeaderProps) => (
    <CounterHeaderBox data-testid="counter-header-box">
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
        <Button look='transparent' disabled={props.isRefreshing} onClick={props.refresh}>
            <img src={Refresh} alt="" data-testid="refresh-icon" />
        </Button>
        {
            props.isRefreshing && <span>Refreshing...</span>
        }
    </CounterHeaderBox>
)