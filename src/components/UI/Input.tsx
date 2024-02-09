import React, {ChangeEvent, FC} from 'react';
import styled from 'styled-components';

interface InputProps {
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    background: string;
    textColor: string;
}

const StyledInput = styled.input<{background: string, textColor: string}>`
    border: 0.5px solid #B0B0B0;
    border-radius: 5px;
    margin-bottom: 28px;
    padding: 10px;
    font-size: 20px;
    background-color: ${props => props.background};
    color: ${props => props.textColor};
    
    &::-webkit-input-placeholder,
    &::-moz-placeholder {
        color: #B0B0B0;
    }
    
    &:focus,
    &:active {
        outline: none;
        border-color: #155DA4;
    }
    
    @media (max-width: 768px) {
        margin-bottom: 12px;
        font-size: 12px;
    }
`

const Input: FC<InputProps> = ({value, onChange, placeholder, background, textColor}) => {
    return (
        <StyledInput
            textColor={textColor}
            background={background}
            type={'text'}
            value={value}
            onChange={event => onChange(event)}
            placeholder={placeholder}
        />
    );
};

export default Input;