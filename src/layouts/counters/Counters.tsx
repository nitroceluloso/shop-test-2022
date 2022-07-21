import React, {useState, useEffect} from 'react';
import { CountersBox, SearchBox } from './Counters.style';
import SearchBar from "@Components/molecules/search-bar";
import CountersHeader from '@Components/molecules/counters-header';
import ButtonBar from '@Components/molecules/button-bar';
import CounterList from "@Components/molecules/counter-list";
import { getUpdateCounterFn, useGetCounters } from '../../network/counters/useCounters';
import Loading from "@Assets/svg/loading.svg";
import { queryClient } from '../../contexts/network/NetworkProvider';
import { countersQueryKeys } from '../../network/counters/counters.config';
import { Counter } from 'src/network/counters/counters.model';

export const Counters = () => {
    const [filterText, setFilterText] = useState<string>('');
    const [itemAdition, setItemAdition] = useState(0);
    const [counterListSelected, setCounterListSelected] = useState<number[]>([]);
    const showButtons = counterListSelected.length ? true : false;
    const { data: counterListRaw, isFetching, isLoading, refetch } = useGetCounters();
    const [counterList, setCounterList] = useState([]);
    const updateCounterMutation = getUpdateCounterFn({
        onSuccess: (murationData: Counter) => {
            queryClient.setQueryData(countersQueryKeys.getCounters,
                (counterList: Counter[]) =>
                    counterList.map(counter => counter.id === murationData.id ? murationData : counter));
        }
    });

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
        if (!isFetching) setCounterList(counterListRaw);
    }, [isFetching, counterListRaw]);

    return(
        <>
            <SearchBox>
                <SearchBar onChange={setFilterText}/>
            </SearchBox>
            <CountersBox $loading={isLoading}>

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
                        isRefreshing={isFetching}
                        refresh={refetch}
                    />
                }

                {
                    !isLoading &&
                    <CounterList
                        counterList={counterList}
                        selectedIds={counterListSelected}
                        onSelect={updateSelectedCounter}
                        decrement={updateCounterMutation.mutate}
                        increment={updateCounterMutation.mutate}
                    />
                }
            </CountersBox>
            <ButtonBar showOptions={showButtons} />
        </>
    );
}