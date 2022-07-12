import React from 'react';
import { CouterListContainer } from "./CounterList.style";
import { CounterProps, Counter } from '@Components/atoms/counter/Counter';
import { CounterAction, UpdateCounterData } from 'src/network/counters/counters.model';

type CounterListProps = {
    counterList: CounterProps[];
    selectedIds: Array<number>;
    onSelect?: (val: number) => void;
    increment: (data: UpdateCounterData) => void;
    decrement: (data: UpdateCounterData) => void;
}

export const CounterList = (props: CounterListProps) => {

    const mapFn = (counter: CounterProps, idx: number) => (
        <Counter
            {...counter}
            key={idx}
            selected={props.selectedIds.includes(counter.id)}
            onClick={props.onSelect}
            decrement={props.decrement}
            increment={props.increment}
        />
    )
    return(
        <CouterListContainer>
            {props.counterList.map(mapFn)}
        </CouterListContainer>
    );
}