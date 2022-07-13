import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import SearchBar from "./";

describe('Searchbar [molecule]: ', () => {
    test('should render', () => {
        const testId = 'search-bar';
        const props = {
            onChange: jest.fn()
        }
        render(<SearchBar {...props} />);
        const cmp = screen.getByTestId(testId);
        expect(cmp).toBeDefined();
    });

    test('should show button on focus', async () => {
        const inputId = 'input';
        const cancelBtn = 'Cancel';
        const props = {
            onChange: () => {}
        }
        render(<SearchBar {...props} />);
        const inputElement = screen.getByTestId(inputId);
        act(() => {
            inputElement.focus();
        });
        const btn = screen.getByText(cancelBtn);
        expect(btn).toBeDefined();
    });

    test('should hide button on focus-out', async () => {
        const inputId = 'input';
        const cancelBtn = 'Cancel';
        const props = {
            onChange: () => {}
        }
        render(<SearchBar {...props} />);
        const inputElement = screen.getByTestId(inputId);
        act(() => {
            inputElement.focus();
        });
        const btn = screen.getByText(cancelBtn);
        expect(btn).toBeDefined();

        fireEvent.click(btn);
        const removedBtn = screen.queryByText(cancelBtn)
        expect(removedBtn).toBeNull();
    });

    test('should trigger onChange', () => {
        const inputId = 'input';
        const props = {
            onChange: jest.fn()
        }
        render(<SearchBar {...props} />);
        const inputElement = screen.getByTestId(inputId);
        fireEvent.change(inputElement, {
            target: { value: 'filter' }
        });
        expect(props.onChange).toHaveBeenCalled();
    });
});