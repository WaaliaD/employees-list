import React, {ChangeEvent, FC} from 'react';
import styled from 'styled-components';

interface InputProps {
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    isDesktop: boolean;
    background: string;
}

const StyledInput = styled.input<{isDesktop: boolean, background: string}>`
    border: 0.5px solid #B0B0B0;
    border-radius: 5px;
    margin-bottom: ${props => props.isDesktop ? '28px' : '12px'};
    padding: 10px;
    font-size: ${props => props.isDesktop ? '20px' : '12px'};
    background-color: ${props => props.background};
    
    &::-webkit-input-placeholder,
    &::-moz-placeholder {
        color: #B0B0B0;
    }
    
    &:focus,
    &:active {
        outline: none;
        border-color: #155DA4;
    }
`

const Input: FC<InputProps> = ({value, onChange, placeholder, isDesktop, background}) => {
    return (
        <StyledInput
            background={background}
            isDesktop={isDesktop}
            type={'text'}
            value={value}
            onChange={event => onChange(event)}
            placeholder={placeholder}
        />
    );
};

export default Input;