import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface WindowSizeState {
    isDesktop: boolean
}

const initialState: WindowSizeState = {
    isDesktop: true
}

export const windowSizeSlice = createSlice({
    name: 'windowSize',
    initialState,
    reducers: {
        setSize(state, action: PayloadAction<boolean>,) {
            state.isDesktop = action.payload;
        }
    }
})

export default windowSizeSlice.reducer;