import React, {useState} from 'react';
import { getInputByLook } from "./Input.style";

export type InputLook = 'default' | 'search';

type InputProps = {
    value: string;
    placeholder: string;
    look?: InputLook;
    onChange?: (val: string) => void;
    onFocus?: () => void;
    onBlur?: () => void;
}

export const Input = (props: InputProps) => {
    const [value, setValue] = useState('');

    const onChangeHanlder = (ev: React.ChangeEvent<HTMLInputElement>) => {
        const incomeValue = ev.target.value;
        setValue(incomeValue);
        props.onChange(incomeValue);
    }

    const Input = getInputByLook(props.look || 'default');

    return(
        <Input
            type="text"
            value={value}
            placeholder={props.placeholder}
            onChange={onChangeHanlder}
            onFocus={props.onFocus}
        />);
}