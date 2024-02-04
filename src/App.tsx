import React, {useEffect} from 'react';
import {BrowserRouter} from 'react-router-dom';
import AppRouter from './components/AppRouter';
import { ConfigProvider } from 'antd';
import {useAppDispatch, useAppSelector} from './hooks/redux';
import {themeSlice} from './store/reducers/ThemeSlice';

export default function App() {
    const {background, textColor, second} = useAppSelector(state => state.themeReducer);
    const dispatch = useAppDispatch();
    const {turnDarkTheme} = themeSlice.actions;

    useEffect(() => {
        if (localStorage.getItem('theme')) {
            dispatch(turnDarkTheme())
        }
    }, []);

    return (
        <ConfigProvider
            theme={{
                token: {
                    colorBgContainer: background,
                    colorBgElevated: background,
                    colorText: textColor,
                    colorTextPlaceholder: textColor,
                    colorBorder: second,
                    colorTextQuaternary: second,
                    colorFillSecondary: second,
                    colorFillTertiary: second,
                    colorPrimary: '#155DA4',
                },
            }}
        >
            <BrowserRouter>
                <AppRouter/>
            </BrowserRouter>
        </ConfigProvider>
    );
}