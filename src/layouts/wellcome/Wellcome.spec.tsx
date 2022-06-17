import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Wellcome } from "./Wellcome";

describe("Wellcome layout", () => {
	test("should render and click the button", () => {
		const text = "Get started";
		const fn = jest.fn();
		render(<Wellcome onClick={fn} />);
		const button = screen.getByText(text);
		fireEvent.click(button);
		expect(fn).toHaveBeenCalled();
	});
});
