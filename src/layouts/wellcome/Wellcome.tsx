import React from "react";
import Button from "@Components/atoms/button";
import {
	ImageSection,
	MainSection,
	Title,
	Paragraph,
	ButtonSection,
} from "./Wellcome.style";
import WellComeImg from "@Assets/svg/wellcome.svg";

type WellcomeProps = {
	onClick: () => void;
};

export const Wellcome = (props: WellcomeProps) => {
	return (
		<>
			<ImageSection>
				<img src={WellComeImg} alt="" width="178" height="178" />
			</ImageSection>
			<MainSection>
				<Title>Welcome to Counters</Title>
				<Paragraph>
					Capture cups of lattes, frapuccinos, or anything else that
					can be counted.
				</Paragraph>
			</MainSection>
			<ButtonSection>
				<Button
					look="action"
					onClick={props.onClick}
				> Get started </Button>
			</ButtonSection>
		</>
	);
};
