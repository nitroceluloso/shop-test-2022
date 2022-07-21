import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ButtonBar from "./";

const addImgId = 'add-action-img';
const optionDivId = 'options-btn';

describe('ButtonBar [molecule]: ', () => {
    test('should render whithout options.', () => {

        const props = {
            showOptions: false
        }
        render(<ButtonBar {...props} />);
        const addImg = screen.getByTestId(addImgId);
        expect(addImg).toBeDefined();
    });

    test('should render whithout options.', () => {
        const props = {
            showOptions: true
        }
        render(<ButtonBar {...props} />);
        const optionDiv = screen.getByTestId(optionDivId)
        expect(optionDiv).toBeDefined();
    });
});