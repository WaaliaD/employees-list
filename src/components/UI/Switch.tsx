import React from 'react';
import styled from 'styled-components';
import moon from 'utils/images/moon.svg'
import sun from 'utils/images/sun.svg'
import {useAppDispatch, useAppSelector} from 'hooks/redux';
import {themeSlice} from 'store/reducers/ThemeSlice';

const StyledLabel = styled.label`
    width: 55px;
    height: 26px;
    user-select: none;
    position: relative;
    cursor: pointer;

    @media (max-width: 768px) {
        width: 47px;
        height: 22.22px;
    }
`

const StyledSpan = styled.span`
    width: 55px;
    height: 26px;
    position: absolute;
    background: #155DA4;
    border-radius: 30px;
    box-shadow: 0 4px 4px 0 #00000040 inset;
    transition: 0.3s;
    
    &:after {
        content: "";
        width: 20px;
        height: 20px;
        position: absolute;
        top: 3px;
        left: 3px;
        background: white;
        border-radius: 30px;
        transition: 0.3s;
    }

    @media (max-width: 768px) {
        width: 47px;
        height: 22.22px;

        &:after {
            width: 17px;
            height: 17px;
            top: 2.56px;
            left: 2.56px;
        }
    }
`

const StyledInput = styled.input`
    display: none;
    &:checked + ${StyledSpan}:after {
        left: 32px;
    }

    @media (max-width: 768px) {
        &:checked + ${StyledSpan}:after {
            left: 27.35px;
        }
    }
`

const Moon = styled.img<{dark: boolean}>`
    position: relative;
    left: 21.5px;
    top: 2px;
    width: 14px;
    height: 14px;
    visibility: ${props => props.dark ? 'visible' : 'hidden'};
    z-index: 1;

    @media (max-width: 768px) {
        left: 18px;
        top: 5px;
        width: 12px;
        height: 12px;
    }
`

const Sun = styled.img<{dark: boolean}>`
    position: relative;
    top: 2px;
    left: 5.75px;
    width: 14px;
    height: 14px;
    visibility: ${props => props.dark ? 'hidden' : 'visible'};
    z-index: 1;

    @media (max-width: 768px) {
        top: 5px;
        left: 5px;
        width: 12px;
        height: 12px;
    }
`

const Switch = () => {
    const {dark} = useAppSelector(state => state.themeReducer)
    const {turnLightTheme, turnDarkTheme} = themeSlice.actions;
    const dispatch = useAppDispatch();

    function toggleTheme () {
        if(dark) {
            dispatch(turnLightTheme())
        } else {
            dispatch(turnDarkTheme())
        }
    }

    return (
        <StyledLabel>
            <StyledInput onClick={toggleTheme} type="checkbox" checked={dark}/>
            <StyledSpan></StyledSpan>

            <Sun src={sun} dark={dark}/>
            <Moon src={moon} dark={dark}/>
        </StyledLabel>
    );
};

export default Switch;