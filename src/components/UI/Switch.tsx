import React from 'react';
import styled from 'styled-components';
import moon from 'utils/images/moon.svg'
import sun from 'utils/images/sun.svg'
import {useAppDispatch, useAppSelector} from 'hooks/redux';
import {themeSlice} from 'store/reducers/ThemeSlice';

const StyledLabel = styled.label<{isDesktop: boolean}>`
    width: ${props => props.isDesktop ? '55px' : '47px'};
    height:${props => props.isDesktop ? '26px' : '22.22px'};
    user-select: none;
    position: relative;
    cursor: pointer;
`

const StyledSpan = styled.span<{isDesktop: boolean}>`
    width: ${props => props.isDesktop ? '55px' : '47px'};
    height:${props => props.isDesktop ? '26px' : '22.22px'};
    position: absolute;
    background: #155DA4;
    border-radius: 30px;
    box-shadow: 0 4px 4px 0 #00000040 inset;
    transition: 0.3s;
    
    &:after {
        content: "";
        width: ${props => props.isDesktop ? '20px' : '17px'};
        height: ${props => props.isDesktop ? '20px' : '17px'};
        position: absolute;
        top: ${props => props.isDesktop ? '3px' : '2.56px'};
        left: ${props => props.isDesktop ? '3px' : '2.56px'};
        background: white;
        border-radius: 30px;
        transition: 0.3s;
    }
`

const StyledInput = styled.input<{isDesktop: boolean}>`
    display: none;
    &:checked + ${StyledSpan}:after {
        left: ${props => props.isDesktop ? '32px' : '27.35px'};
    }
`

const Moon = styled.img<{dark: boolean; isDesktop: boolean}>`
    position: relative;
    left: ${props => props.isDesktop ? '21.5px' : '18px'};
    top: ${props => props.isDesktop ? '2px' : '5px'};
    width: ${props => props.isDesktop ? '14px' : '12px'};
    height: ${props => props.isDesktop ? '14px' : '12px'};
    visibility: ${props => props.dark ? 'visible' : 'hidden'};
    z-index: 1;
`

const Sun = styled.img<{dark: boolean; isDesktop: boolean}>`
    position: relative;
    top: ${props => props.isDesktop ? '2px' : '5px'};
    left: ${props => props.isDesktop ? '5.75px' : '5px'};
    width: ${props => props.isDesktop ? '14px' : '12px'};
    height: ${props => props.isDesktop ? '14px' : '12px'};
    visibility: ${props => props.dark ? 'hidden' : 'visible'};
    z-index: 1;
`

const Switch = () => {
    const {dark} = useAppSelector(state => state.themeReducer)
    const {isDesktop} = useAppSelector(state => state.windowSizeReducer);
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
        <StyledLabel isDesktop={isDesktop}>
            <StyledInput onClick={toggleTheme} type="checkbox" checked={dark} isDesktop={isDesktop}/>
            <StyledSpan isDesktop={isDesktop}></StyledSpan>

            <Sun src={sun} dark={dark} isDesktop={isDesktop}/>
            <Moon src={moon} dark={dark} isDesktop={isDesktop}/>
        </StyledLabel>
    );
};

export default Switch;