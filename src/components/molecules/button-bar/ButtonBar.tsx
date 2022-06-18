import React from 'react';
import Button from '@Components/atoms/button';
import { ButtonBarContainer, Separation, ButtonContainer, OptionButtonBox } from './ButtonBar.style';

export const ButtonBar = () => {
    return (
        <ButtonBarContainer>
            <Separation/>
            <ButtonContainer>
                <OptionButtonBox>
                    <Button title='+' look='option' onClick={() => {}} />
                    <Button title='+' look='option' onClick={() => {}} />
                </OptionButtonBox>
                <Button title='+' look='action' onClick={() => {}} />
            </ButtonContainer>
        </ButtonBarContainer>
    );
}