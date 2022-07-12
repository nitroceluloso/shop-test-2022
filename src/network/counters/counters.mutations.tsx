import { deleteCall, patchCall, postCall } from "../config/config";
import { counterBaseUrl } from "./counters.config";
import { CounterForm, UpdateCounterData } from "./counters.model";

export const addCounter = (data: CounterForm) => {
    return postCall(counterBaseUrl, data);
};

export const updateCounter = (data: UpdateCounterData) => {
    const url = counterBaseUrl + '/' + data.type + '/' + data.id;
    return patchCall(url, data);
}

export const deleteCounter = (id: number) => {
    const body = {id};
    return deleteCall(counterBaseUrl, body);
}