import React from 'react';
import { CounterBox, CounterActions, ActionBox, TittleBox, ActionButton } from './Counter.style';

export type CounterProps = {
    id?: string;
    title: string;
    times: number;
    selected: boolean;
    onClick?: (val: string) => void;
}

export const Counter = (props: CounterProps) => {
    const clickHandler = () => props.onClick(props.id);

    return(
        <CounterBox selected={props.selected}>
            <TittleBox onClick={clickHandler}>
                <p>{props.title}</p>
            </TittleBox>
            <CounterActions>
                {/* <ActionBox orange disabled={props.times === 0}>-</ActionBox> */}
                <ActionButton orange disabled={props.times === 0}>-</ActionButton>
                <ActionBox>{props.times}</ActionBox>
                <ActionButton orange>+</ActionButton>
                {/* <ActionBox orange>+</ActionBox> */}
            </CounterActions>
        </CounterBox>
    );
}