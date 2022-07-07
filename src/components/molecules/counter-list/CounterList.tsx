import React from 'react';
import { CouterListContainer } from "./CounterList.style";
import { CounterProps, Counter } from '@Components/atoms/counter/Counter';

type CounterListProps = {
    counterList: CounterProps[];
    selectedIds: Array<string>;
    onSelect?: (val: string) => void;
}

export const CounterList = (props: CounterListProps) => {

    const mapFn = (counter: CounterProps, idx: number) => (
        <Counter
            {...counter}
            key={idx}
            onClick={props.onSelect}
            selected={props.selectedIds.includes(counter.id)}
        />
    )

    return(
        <CouterListContainer>
            {props.counterList.map(mapFn)}
            {/* {
            props.counterList.map((counter, idx) =>
                <Counter
                    {...counter}
                    key={idx}
                    onClick={props.onSelect}
                    selected={props.selectedIds.includes(counter.id)}
                />)
            } */}
        </CouterListContainer>
    );
}