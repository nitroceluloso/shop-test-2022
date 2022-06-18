import React from 'react';
import { CouterListContainer } from "./CounterList.style";
import { CounterProps, Counter } from '@Components/atoms/counter/Counter';

type CounterListProps = {
    counterList: CounterProps[];
}

export const CounterList = (props: CounterListProps) => {
    return(
        <CouterListContainer>
            {
                props.counterList.map((counter, idx) => {
                    return <Counter key={idx} {...counter} />
                })
            }
        </CouterListContainer>
    );
}