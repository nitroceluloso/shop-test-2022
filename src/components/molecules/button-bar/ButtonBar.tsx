import React from 'react';
import Button from '@Components/atoms/button';
import { ButtonBarContainer, Separation, ButtonContainer, OptionButtonBox } from './ButtonBar.style';
import Plus from "@Assets/svg/plus.svg";
import Trash from "@Assets/svg/trash.svg";
import Share from "@Assets/svg/share.svg";

type ButtonBarProps = {
    showOptions: boolean;
}

export const ButtonBar = (props: ButtonBarProps) => {
    return (
        <ButtonBarContainer>
            <Separation/>
            <ButtonContainer>
                <Button look='action' onClick={() => {}}>
                    <img src={Plus} alt="" style={{height: '21px'}}/>
                </Button>

                {
                    props.showOptions &&
                    <OptionButtonBox>
                        <Button look='option' onClick={() => {}}>
                            <img src={Trash} alt="" style={{height: '21px'}}/>
                        </Button>
                        <Button look='option' onClick={() => {}} >
                            <img src={Share} alt="" style={{height: '21px'}}/>
                        </Button>
                    </OptionButtonBox>
                }
            </ButtonContainer>
        </ButtonBarContainer>
    );
}