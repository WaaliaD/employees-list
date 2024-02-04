import {IEmployee} from '../../models/IEmployee';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface EmployeeByIdState {
    employee: IEmployee;
    isLoading: boolean;
    error: string;
}

const initialState: EmployeeByIdState = {
    employee: {} as IEmployee,
    isLoading: false,
    error: '',
}

export const employeeByIdSlice = createSlice({
    name: 'employeeById',
    initialState,
    reducers: {
        employeeByIdFetching(state) {
            state.isLoading = true;
        },
        employeeByIdFetchingSuccess(state, action: PayloadAction<IEmployee>) {
            state.isLoading = false;
            state.error = '';
            state.employee = action.payload;
        },
        employeeByIdFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },
    }
})

export default employeeByIdSlice.reducer;