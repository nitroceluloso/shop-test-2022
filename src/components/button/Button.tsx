import React from "react";
import { getButtonType } from "./Button.style";

export type ButtonType =
	| "action"
	| "option"
	| "secundary"
	| "cancel"
	| "danger";

export type ButtonProps = {
	title: string;
	look: ButtonType;
	onClick?: () => void;
};

export const Button = (props: ButtonProps) => {
	const StyledButton = getButtonType(props.look);
	return (
		<StyledButton type="button" onClick={props.onClick}>
			{props.title}
		</StyledButton>
	);
};
