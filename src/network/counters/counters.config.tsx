import { setPrefixUrl } from "../config/config";

const resource = 'counter';
export const counterBaseUrl = setPrefixUrl(resource);

export enum countersQueryKeys {
    getCounters = 'getCounters'
}