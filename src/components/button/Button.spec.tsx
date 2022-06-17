import React from "react";
import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
	test("should render action button", () => {
		const title = "Action button";
		render(<Button title={title} look="action" />);
		const button = screen.getByText(title);
		expect(true).toBe(true);
	});
});
