import React from "react";
import { render, screen } from "@testing-library/react";
import Input from "./";

describe('Input [atom]:', () => {
    test('should render', () => {
        const props = {
            value: 'value',
            placeholder: 'placeholder'
        }
        render(<Input {...props} />);
        const input = screen.getByTestId('input');
        expect(input).toBeDefined();
    });
});