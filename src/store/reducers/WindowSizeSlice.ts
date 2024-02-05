import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface WindowSizeState {
    big: boolean
}

const initialState: WindowSizeState = {
    big: true
}

export const windowSizeSlice = createSlice({
    name: 'windowSize',
    initialState,
    reducers: {
        setSize(state, action: PayloadAction<boolean>,) {
            state.big = action.payload;
        }
    }
})

export default windowSizeSlice.reducer;