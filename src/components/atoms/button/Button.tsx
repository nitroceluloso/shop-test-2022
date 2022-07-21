import React from "react";
import { getButtonType } from "./Button.style";

export type ButtonType =
	| "action"
	| "option"
	| "secundary"
	| "cancel"
	| "danger"
	| "transparent";

export type ButtonProps = {
	look: ButtonType;
	children?: string | JSX.Element,
	disabled?: boolean;
	onClick?: () => void;
};

export const Button = (props: ButtonProps) => {
	const StyledButton = getButtonType(props.look);
	return (
		<StyledButton type="button" onClick={props.onClick} disabled={props.disabled}>
			{props.children}
		</StyledButton>
	);
};
