import React, {useState, useRef} from 'react';
import Button from '@Components/atoms/button';
import Input from '@Components/atoms/input';
import { StyledWrapper } from "./SearchTable.style";
import { useClickOutside } from '@Components/hooks/click-outside/useClickOutside';

type SearchBarProps = {
    onChange: (val: string) => void;
}

export const SearchBar = (props: SearchBarProps) => {
    const [isOnFocus, setFocus] = useState<boolean>(false);
    const ref = useClickOutside(() => setFocus(false));

    const focus = () => {
        setFocus(true);
    }
    const blur = () => {
        setFocus(false)
    }

    const onChangeHandler = (txt: string) => {
        props.onChange(txt);
    }

    return(
        <StyledWrapper ref={ref}>
            <Input placeholder='Search counters' value=''look='search' onFocus={focus} onChange={onChangeHandler} />
            {
                isOnFocus &&
                <Button look='secundary' onClick={blur}>Cancel</Button>
            }
        </StyledWrapper>
    );
}