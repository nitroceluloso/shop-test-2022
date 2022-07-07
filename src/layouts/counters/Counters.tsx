import React, {useState, useEffect} from 'react';
import { CountersBox, SearchBox } from './Counters.style';
import SearchBar from "@Components/molecules/search-bar";
import CountersHeader from '@Components/molecules/counters-header';
import ButtonBar from '@Components/molecules/button-bar';
import CounterList from "@Components/molecules/counter-list";

const counterListRaw = [
    {
        id: '1',
        title: 'Cups of coffe',
        times: 5,
        selected: false,
    },
    {
        id: '2',
        title: 'Records played',
        times: 10,
        selected: false,
    },
    {
        id: '3',
        title: 'Apples eaten',
        times: 0,
        selected: false,
    },
]

export const Counters = () => {
    const [filterText, setFilterText] = useState<string>('');
    const [itemAdition, setItemAdition] = useState(0);
    const [counterListSelected, setCounterListSelected] = useState<Array<string>>([]);
    const [counterList, setCounterList] = useState(counterListRaw);
    const showButtons = counterListSelected.length ? true : false;

    const updateSelectedCounter = (id: string) => {
        if(counterListSelected.includes(id)) {
            const updatedList = counterListSelected.filter(el => el !== id);
            setCounterListSelected(updatedList)
        } else {
            setCounterListSelected(counterListSelected.concat([id]));
        }
    }

    useEffect(() => {
        const filteredCounterList = counterListRaw.filter(({title}) => title.toLowerCase().includes(filterText));
        setCounterList(filteredCounterList);
    }, [filterText])

    useEffect(() => {
        const itemAdition = counterList.reduce((acumulative, current) => acumulative + current.times, 0);
        setItemAdition(itemAdition)
    }, [counterList])

    return(
        <>
            <SearchBox>
                <SearchBar onChange={setFilterText}/>
            </SearchBox>
            <CountersBox>
                <CountersHeader
                    itemAddition={itemAdition}
                    itemCount={counterList.length}
                    selectedItems={counterListSelected.length}
                    refresh={() => {}}
                />
                <CounterList
                    counterList={counterList}
                    selectedIds={counterListSelected}
                    onSelect={updateSelectedCounter}
                />
            </CountersBox>
            <ButtonBar showOptions={showButtons} />
        </>
    );
}