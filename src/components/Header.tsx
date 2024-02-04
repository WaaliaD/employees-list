import React from 'react';
import styled from 'styled-components';
import image from "../images/logo.png";
import {Switch} from 'antd';
import {useAppDispatch, useAppSelector} from '../hooks/redux';
import {themeSlice} from '../store/reducers/ThemeSlice';

const StyledHeader = styled.div`
    display: flex;
    justify-content: center;
    box-shadow: 0 4px 8px 0 #3971A440;
`

const Services = styled.div`
    width: 1560px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 90px;
`

const ServicesInfo = styled.div`
    margin-left: auto;
`

const StyledSpan = styled.span`
    margin-left: 12px;
    margin-right: 48px;
`


const Header = () => {
    const {dark} = useAppSelector(state => state.themeReducer)
    const dispatch = useAppDispatch();
    const {turnLightTheme, turnDarkTheme} = themeSlice.actions;

    return (
        <StyledHeader>
            <Services>
                <img src={image} alt="logo"/>
                <ServicesInfo>
                    <StyledSpan>+7 343 290 84 76</StyledSpan>
                    <StyledSpan>info@66bit.ru</StyledSpan>
                </ServicesInfo>
                <Switch value={dark} onChange={
                    (checked) => {
                        if (checked) {
                            dispatch(turnDarkTheme())
                        } else {
                            dispatch(turnLightTheme())
                        }
                    }
                }/>
            </Services>
        </StyledHeader>

    );
};

export default Header;