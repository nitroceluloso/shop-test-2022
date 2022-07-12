import { getCall } from "../config/config";
import { counterBaseUrl } from "./counters.config";

export const getCounters = async () => getCall(counterBaseUrl);