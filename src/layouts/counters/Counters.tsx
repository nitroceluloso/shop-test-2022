import React, {useState, useEffect} from 'react';
import { CountersBox, SearchBox } from './Counters.style';
import SearchBar from "@Components/molecules/search-bar";
import CountersHeader from '@Components/molecules/counters-header';
import ButtonBar from '@Components/molecules/button-bar';
import CounterList from "@Components/molecules/counter-list";
import { getUpdateCounterFn, useGetCounters } from '../../network/counters/useCounters';
import Loading from "@Assets/svg/loading.svg";

export const Counters = () => {
    const [filterText, setFilterText] = useState<string>('');
    const [itemAdition, setItemAdition] = useState(0);
    const [counterListSelected, setCounterListSelected] = useState<number[]>([]);
    const showButtons = counterListSelected.length ? true : false;
    const { data, isFetching, isLoading, refetch } = useGetCounters();
    const [counterList, setCounterList] = useState([]);
    const { mutate } = getUpdateCounterFn();

    const updateSelectedCounter = (id: number) => {
        if(counterListSelected.includes(id)) {
            const updatedList = counterListSelected.filter(el => el !== id);
            setCounterListSelected(updatedList)
        } else {
            setCounterListSelected(counterListSelected.concat([id]));
        }
    }

    //filters list
    useEffect(() => {
        const filteredCounterList = counterList.filter(({name}) => name.toLowerCase().includes(filterText));
        setCounterList(filteredCounterList);
    }, [filterText]);

    //sets the addition of all counters
    useEffect(() => {
        const itemAdition = counterList.reduce((acumulative, current) => acumulative + current.count, 0);
        setItemAdition(itemAdition)
    }, [counterList]);

    //set list on state after fetch
    useEffect(() => {
        if (!isFetching) setCounterList(data);;
    }, [isFetching]);

    return(
        <>
            <SearchBox>
                <SearchBar onChange={setFilterText}/>
            </SearchBox>
            <CountersBox loading={isLoading}>

                {
                    isLoading &&
                    <div>
                        <img src={Loading} alt="" />
                    </div>
                }

                {
                    !isLoading &&
                    <CountersHeader
                        itemAddition={itemAdition}
                        itemCount={counterList.length}
                        selectedItems={counterListSelected.length}
                        refresh={refetch}
                    />
                }

                {
                    !isLoading &&
                    <CounterList
                        counterList={counterList}
                        selectedIds={counterListSelected}
                        onSelect={updateSelectedCounter}
                        decrement={mutate}
                        increment={mutate}
                    />
                }
            </CountersBox>
            <ButtonBar showOptions={showButtons} />
        </>
    );
}