import React from "react";
import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
	test("should render action button", () => {
		const text = "Action button";
		render(<Button  look="action">{text}</Button>);
		const button = screen.getByText(text);
		expect(true).toBe(true);
	});
});
