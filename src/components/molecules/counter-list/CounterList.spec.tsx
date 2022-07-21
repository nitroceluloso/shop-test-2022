import React from 'react';
import CounterList from "./";
import { render, screen, fireEvent } from "@testing-library/react";
import { CounterProps } from '@Components/atoms/counter/Counter';

describe('CounterList [molecule]', () => {
    test('should render with empty counterList', () => {
        const props = {
            counterList: [] as CounterProps[],
            selectedIds: [] as number[],
            increment: () => {},
            decrement: () => {},
        }
        render(<CounterList {...props} />)
    });

    test('should render with data in counterList', () => {
        const props = {
            counterList: [{
                id: 1,
                name: 'name',
                count: 0,
                onClick: () => {},
                increment: () => {},
                decrement: () => {},
            }] as CounterProps[],
            selectedIds: [] as number[],
            increment: () => {},
            decrement: () => {},
        }
        render(<CounterList {...props} />)
    });
});