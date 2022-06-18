import React from 'react';
import Input from '@Components/atoms/input';
import { CountersBox, SearchBox } from './Counters.style';
import Counter from "@Components/atoms/counter";
import CountersHeader from '@Components/molecules/counters-header';
import ButtonBar from '@Components/molecules/button-bar';
import CounterList from "@Components/molecules/counter-list";

const counterList = [
    {
        title: 'Cups of coffe',
        times: 5,
        selected: false,
    },
    {
        title: 'Records played',
        times: 10,
        selected: true,
    },
    {
        title: 'Apples eaten',
        times: 0,
        selected: false,
    },
]

export const Counters = () => {
    return(
        <>
            <SearchBox>
                <Input value='' placeholder='Search Counters' />
            </SearchBox>
            <CountersBox>
                <CountersHeader itemAddition={17} itemCount={4} selectedItems={0} refresh={() => {}} />
                {/* <Counter title='Cups of coffe' times={5} />
                <Counter title='Records played' times={10} />
                <Counter title='Apples eaten' times={0} /> */}
                <CounterList counterList={counterList} />
            </CountersBox>
            <ButtonBar />
        </>
    );
}