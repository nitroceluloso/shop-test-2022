import React from 'react';
import { CounterBox, CounterActions, ActionBox, TittleBox } from './Counter.style';

export type CounterProps = {
    id?: string;
    title: string;
    times: number;
    selected: boolean;
}

export const Counter = (props: CounterProps) => {
    console.log(props.selected)
    return(
        <CounterBox selected={props.selected}>
            <TittleBox>
                <p>{props.title}</p>
            </TittleBox>
            <CounterActions>
                <ActionBox orange>-</ActionBox>
                <ActionBox>{props.times}</ActionBox>
                <ActionBox orange>+</ActionBox>
            </CounterActions>
        </CounterBox>
    );
}