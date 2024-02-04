import {createSlice} from '@reduxjs/toolkit';

interface ThemeState {
    background: string,
    second: string,
    textColor: string,
    dark: boolean
}

const initialState: ThemeState = {
    background: '#FFFFFF',
    second: '#F2F2F2',
    textColor: '#292929',
    dark: false
}
export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        turnLightTheme(state) {
            state.background = '#FFFFFF';
            state.second = '#F2F2F2';
            state.textColor = '#292929';
            state.dark = false
            localStorage.setItem('theme', '')
        },
        turnDarkTheme(state) {
            state.background = '#292929';
            state.second = '#3E3E3E';
            state.textColor = '#F5F5F5';
            state.dark = true
            localStorage.setItem('theme', 'true')
        },
    }
})

export default themeSlice.reducer;