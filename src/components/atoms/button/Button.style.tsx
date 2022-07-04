import styled, { StyledComponent } from "styled-components";
import { ButtonType } from "./Button";

const BaseButton = styled.button`
	font-size: 1rem;
	font-weight: var(--bold-font);
	min-width: 71px;
	border-radius: 8px;
	border: 1px solid rgba(var(--black), 0.01);
	box-shadow: 0px 2px 8px rgba(var(--black), 0.1);
`;

const ActionButton = styled(BaseButton)`
	color: var(--white);
	background-color: rgb(var(--orange));
	padding: 0.5rem 1.5rem;
`;

const OptionButton = styled(BaseButton)`
	color: var(--black);
	background-color: var(--white);
	padding: 0.5rem 1.5rem;
`;

const SecundaryButton = styled(BaseButton)`
	color: rgb(var(--orange));
	background-color: var(--white);
	padding: 0.75rem 1.125rem;
`;

const CancelButton = styled(BaseButton)`
	color: rgb(var(--black));
	background-color: var(--white);
	padding: 0.75rem 1.125rem;
`;

const DangerButton = styled(BaseButton)`
	color: rgb(var(--red));
	background-color: var(--white);
	padding: 0.5rem 1.5rem;
`;

const TransparentButton = styled.button`
	background: transparent;
    border: 0;
`;

const mappedButtons = new Map<ButtonType, StyledComponent<"button", any>>([
	["action", ActionButton],
	["option", OptionButton],
	["secundary", SecundaryButton],
	["cancel", CancelButton],
	["danger", DangerButton],
	["transparent", TransparentButton]
]);

export const getButtonType = (look: ButtonType) => mappedButtons.get(look);
