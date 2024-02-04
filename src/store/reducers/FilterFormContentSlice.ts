import {IFilterFormContent} from '../../models/IFilterFormContent';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface FilterFormContentState {
    filterFormContent: IFilterFormContent;
}

const initialState: FilterFormContentState = {
    filterFormContent: {page: 1} as IFilterFormContent,
}

export const filterFormContentSlice = createSlice({
    name: 'filterFormContent',
    initialState,
    reducers: {
        positionChanged(state, action: PayloadAction<string[]>) {
            state.filterFormContent.position = action.payload;
        },
        genderChanged(state, action: PayloadAction<string[]>) {
            state.filterFormContent.gender = action.payload;
        },
        nameChanged(state, action: PayloadAction<string>) {
            state.filterFormContent.name = action.payload;
        },
        stackChanged(state, action: PayloadAction<string[]>) {
            state.filterFormContent.stack = action.payload;
        },
        setPage(state, action: PayloadAction<number>) {
            state.filterFormContent.page = action.payload
        }
    }
})

export default filterFormContentSlice.reducer;