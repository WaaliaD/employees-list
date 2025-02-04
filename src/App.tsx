import React, {useEffect} from 'react';
import {BrowserRouter} from 'react-router-dom';
import AppRouter from 'components/AppRouter';
import {useAppDispatch, useAppSelector} from 'hooks/redux';
import {applicationAppearanceSlice} from 'store/reducers/ApplicationAppearanceSlice';
import styled from 'styled-components';
import Header from 'components/Common/Header';
import Breadcrumbs from 'components/Common/Breadcrumbs';

const Wrapper = styled.div<{ tc: string, bc: string }>`
    color: ${props => props.tc};
    background-color: ${props => props.bc};
    min-height: 100vh;
    font-size: 20px;
    font-family: 'Roboto', serif;
    
    @media (max-width: 768px) {
        font-size: 12px;
    }
`

export default function App() {
    const {background, textColor} = useAppSelector(state => state.applicationAppearanceReducer);
    const dispatch = useAppDispatch();
    const {turnDarkTheme, setSize} = applicationAppearanceSlice.actions;

    useEffect(() => {
        if (localStorage.getItem('theme')) {
            dispatch(turnDarkTheme())
        }
        dispatch(setSize(window.matchMedia("(min-width: 768px)").matches))
        window
            .matchMedia("(min-width: 768px)")
            .addEventListener('change', e => dispatch(setSize(e.matches)));
    }, []);

    return (
        <Wrapper
            bc={background}
            tc={textColor}
        >
            <BrowserRouter basename='/employees-list'>
                <Header/>
                <Breadcrumbs/>
                <AppRouter/>
            </BrowserRouter>
        </Wrapper>
    );
}