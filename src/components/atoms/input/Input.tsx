import React from 'react';
import { InputStyle } from "./Input.style";

type InputProps = {
    value: string;
    placeholder: string;
    onChange?: () => string;
}

export const Input = (props: InputProps) => {
    return(
        <InputStyle
            type="text"
            value={props.value}
            placeholder={props.placeholder}
            onChange={props.onChange}
        />);
}