export type Counter = {
    id: number;
    name: string;
    count: number;
}

export type CounterForm = Omit<Counter, 'id'>;

export type CounterAction = 'inc' | 'dec';

export type UpdateCounterData = {
    id: number;
    count: number;
    type: CounterAction;
}