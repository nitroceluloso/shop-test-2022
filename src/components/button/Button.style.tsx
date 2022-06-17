import React from "react";
import styled, { StyledComponent } from "styled-components";
import { ButtonType } from "./Button";

const BaseButton = styled.button`
	font-size: 1rem;
	font-weight: var(--bold-font);
	min-width: 71px;
	border-radius: 8px;
	border: 1px solid rgba(0, 0, 0, 0.01);
	box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
	:hover {
		cursor: pointer;
	}
`;

const ActionButton = styled(BaseButton)`
	color: var(--white);
	background-color: var(--orange);
	padding: 0.5rem 1.5rem;
`;

const OptionButton = styled(BaseButton)`
	color: var(--black);
	background-color: var(--white);
	padding: 0.5rem 1.5rem;
`;

const SecundaryButton = styled(BaseButton)`
	color: var(--orange);
	background-color: var(--white);
	padding: 0.75rem 1.125rem;
`;

const CancelButton = styled(BaseButton)`
	color: var(--black);
	background-color: var(--white);
	padding: 0.75rem 1.125rem;
`;

const DangerButton = styled(BaseButton)`
	color: var(--red);
	background-color: var(--white);
	padding: 0.5rem 1.5rem;
`;

const mappedButtons = new Map<ButtonType, StyledComponent<"button", any>>([
	["action", ActionButton],
	["option", OptionButton],
	["secundary", SecundaryButton],
	["cancel", CancelButton],
	["danger", DangerButton],
]);

export const getButtonType = (look: ButtonType) => mappedButtons.get(look);
