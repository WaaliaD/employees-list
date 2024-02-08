import React from 'react';
import styled from 'styled-components';
import moon from 'utils/images/moon.svg'
import sun from 'utils/images/sun.svg'
import {useAppDispatch, useAppSelector} from 'hooks/redux';
import {themeSlice} from 'store/reducers/ThemeSlice';

const StyledLabel = styled.label<{big: boolean}>`
    width: ${props => props.big ? '55px' : '47px'};
    height:${props => props.big ? '26px' : '22.22px'};
    user-select: none;
    position: relative;
`

const StyledSpan = styled.span<{big: boolean}>`
    width: ${props => props.big ? '55px' : '47px'};
    height:${props => props.big ? '26px' : '22.22px'};
    position: absolute;
    background: #155DA4;
    border-radius: 30px;
    box-shadow: 0 4px 4px 0 #00000040 inset;
    cursor: pointer;
    transition: 0.3s;
    
    &:after {
        content: "";
        width: ${props => props.big ? '20px' : '17px'};
        height: ${props => props.big ? '20px' : '17px'};
        position: absolute;
        top: ${props => props.big ? '3px' : '2.56px'};
        left: ${props => props.big ? '3px' : '2.56px'};
        background: white;
        border-radius: 30px;
        transition: 0.3s;
    }
`

const StyledInput = styled.input<{big: boolean}>`
    display: none;
    &:checked + ${StyledSpan}:after {
        left: ${props => props.big ? '32px' : '27.35px'};
    }
`

const Moon = styled.img<{dark: boolean; big: boolean}>`
    position: relative;
    left: ${props => props.big ? '21.5px' : '18px'};
    top: ${props => props.big ? '2px' : '5px'};
    width: ${props => props.big ? '14px' : '12px'};
    height: ${props => props.big ? '14px' : '12px'};
    visibility: ${props => props.dark ? 'visible' : 'hidden'};
    z-index: 1;
`

const Sun = styled.img<{dark: boolean; big: boolean}>`
    position: relative;
    top: ${props => props.big ? '2px' : '5px'};
    left: ${props => props.big ? '5.75px' : '5px'};
    width: ${props => props.big ? '14px' : '12px'};
    height: ${props => props.big ? '14px' : '12px'};
    visibility: ${props => props.dark ? 'hidden' : 'visible'};
    z-index: 1;
`

const Switch = () => {
    const {dark} = useAppSelector(state => state.themeReducer)
    const {big} = useAppSelector(state => state.windowSizeReducer);
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
        <StyledLabel big={big}>
            <StyledInput onClick={toggleTheme} type="checkbox" checked={dark} big={big}/>
            <StyledSpan big={big}></StyledSpan>

            <Sun src={sun} dark={dark} big={big}/>
            <Moon src={moon} dark={dark} big={big}/>
        </StyledLabel>
    );
};

export default Switch;