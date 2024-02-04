import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import AppRouter from './components/AppRouter';
import { ConfigProvider } from 'antd';

export default function App() {
    return (
        <ConfigProvider
            theme={{
                token: {
                    // colorBgContainer: '#000',
                    // colorBgElevated: '#994442',
                    // colorText: '#000',
                    // colorTextPlaceholder: '#ffddff'

                    //colorPrimary: '#994442',
                    //colorPrimaryHover: '#994442',
                },
            }}
        >
            <BrowserRouter>
                <AppRouter/>
            </BrowserRouter>
        </ConfigProvider>
    );
}