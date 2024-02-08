import {createSlice} from '@reduxjs/toolkit';

interface EmployeeByIdState {
    isFirstOpen: boolean;
    isSecondOpen: boolean;
    isThirdOpen: boolean;
}

const initialState: EmployeeByIdState = {
    isFirstOpen: false,
    isSecondOpen: false,
    isThirdOpen: false,
}

export const selectsSlice = createSlice({
    name: 'selects',
    initialState,
    reducers: {
        toggleFirst(state) {
            state.isFirstOpen = !state.isFirstOpen;
            state.isSecondOpen = false;
            state.isThirdOpen = false;
        },
        toggleSecond(state) {
            state.isSecondOpen = !state.isSecondOpen;
            state.isFirstOpen = false;
            state.isThirdOpen = false;
        },
        toggleThird(state) {
            state.isThirdOpen = !state.isThirdOpen;
            state.isFirstOpen = false;
            state.isSecondOpen = false;
        }
    }
});

export default selectsSlice.reducer;