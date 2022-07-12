import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CounterHeader from "./";

const counterHeaderId = 'counter-header-box';
const refreshIcon = 'refresh-icon';

describe('Counter header [molecule]', () => {
    test('should render', () => {
        const props = {
            itemCount: 1,
            itemAddition: 5,
            selectedItems: 1,
            refresh: () => {},
        }
        render(<CounterHeader {...props} />);
        const cmp = screen.getByTestId(counterHeaderId);
        expect(cmp).toBeDefined();
    });

    test('should call refresh fn', () => {
        const props = {
            itemCount: 1,
            itemAddition: 5,
            selectedItems: 1,
            refresh: jest.fn(),
        }
        render(<CounterHeader {...props} />);
        const btn = screen.getByText('', { selector: 'button' });
        fireEvent.click(btn);
        expect(props.refresh).toHaveBeenCalled();
    });
});