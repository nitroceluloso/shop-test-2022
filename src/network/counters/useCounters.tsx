import { useQuery, useMutation } from "react-query"
import { countersQueryKeys } from "./counters.config";
import { Counter } from "./counters.model"
import { addCounter, deleteCounter, updateCounter } from "./counters.mutations";
import { getCounters } from "./counters.query"


export const useGetCounters = () =>
    useQuery<Counter[], Error>([countersQueryKeys.getCounters], () => getCounters())

export const getAddCounterFn = () => useMutation(addCounter);

export const getUpdateCounterFn = () => useMutation(updateCounter);

export const getDeleteCounterFn = () => useMutation(deleteCounter);