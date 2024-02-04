import {IEmployee} from '../../models/IEmployee';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface EmployeesState {
    employees: IEmployee[];
    isLoading: boolean;
    error: string;
}

const initialState: EmployeesState = {
    employees: [],
    isLoading: false,
    error: '',
}

export const employeesSlice = createSlice({
    name: 'employees',
    initialState,
    reducers: {
        employeesFetching(state) {
            state.isLoading = true;
        },
        employeesFetchingSuccess(state, action: PayloadAction<IEmployee[]>) {
            state.isLoading = false;
            state.error = '';
            state.employees = action.payload;
        },
        employeesFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },
    }
})

export default employeesSlice.reducer;