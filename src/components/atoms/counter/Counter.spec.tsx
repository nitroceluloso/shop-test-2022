import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./";

describe('Counter [atom]:', () => {
    test('should render', () => {
        const props = {
            id: 1,
            name: "Name",
            count: 0,
            onClick: () => {},
            increment: () => {},
            decrement: () => {}
        }
        render(<Counter {...props} />);
        const p = screen.getByText(props.name);
        expect(p).toBeDefined();
    });

    test('should trigger decrement fn', () => {
        const props = {
            id: 1,
            name: "Name",
            count: 1,
            onClick: () => {},
            decrement: jest.fn(),
            increment: () => {},
        }
        render(<Counter {...props} />);
        const btn = screen.getByTestId('decrement');
        fireEvent.click(btn);
        expect(props.decrement).toHaveBeenCalled();
    });

    test('should not trigger decrement fn because counter is 0', () => {
        const props = {
            id: 1,
            name: "Name",
            count: 0,
            onClick: () => {},
            decrement: jest.fn(),
            increment: () => {},
        }
        render(<Counter {...props} />);
        const btn = screen.getByTestId('decrement');
        fireEvent.click(btn);
        expect(props.decrement).toHaveBeenCalledTimes(0);
    });

    test('should trigger increment fn', () => {
        const props = {
            id: 1,
            name: "Name",
            count: 0,
            onClick: () => {},
            decrement: () => {},
            increment: jest.fn(),
        }
        render(<Counter {...props} />);
        const btn = screen.getByTestId('increment');
        fireEvent.click(btn);
        expect(props.increment).toHaveBeenCalled();
    });

    test('should get selected clicking the name', () => {
        const props = {
            id: 1,
            name: "Name",
            count: 0,
            onClick: jest.fn(),
            increment: () => {},
            decrement: () => {}
        }
        render(<Counter {...props} />);
        const p = screen.getByText(props.name);
        fireEvent.click(p);
        expect(props.onClick).toHaveBeenCalled();
    });
});