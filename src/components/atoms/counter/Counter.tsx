import React from 'react';
import { CounterAction, UpdateCounterData } from 'src/network/counters/counters.model';
import { CounterBox, CounterActions, ActionBox, TittleBox, ActionButton } from './Counter.style';

export type CounterProps = {
    id: number;
    name: string;
    count: number;
    selected?: boolean;
    onClick: (val: number) => void;
    increment: (data: UpdateCounterData) => void;
    decrement: (data: UpdateCounterData) => void;
}

export const Counter = (props: CounterProps) => {
    const selectionHandler = () => props.onClick(props.id);
    const incrementFn = () => props.increment({ id: props.id, type: 'inc', count: props.count + 1 });
    const decrementFn = () => props.decrement({ id: props.id, type: 'dec', count: props.count - 1 });

    return(
        <CounterBox selected={props.selected}>
            <TittleBox onClick={selectionHandler}>
                <p>{props.name}</p>
            </TittleBox>
            <CounterActions>
                <ActionButton orange disabled={props.count === 0} onClick={decrementFn}>-</ActionButton>
                <ActionBox>{props.count}</ActionBox>
                <ActionButton orange onClick={incrementFn}>+</ActionButton>
            </CounterActions>
        </CounterBox>
    );
}