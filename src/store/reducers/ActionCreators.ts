import {AppDispatch} from '../store';
import axios from 'axios';
import {IEmployee} from '../../models/IEmployee';
import {employeesSlice} from './EmployeesSlice';

export const fetchEmployees = (
    page: number = 1,
    name: string = '',
    gender: string[] = [],
    position: string[] = [],
    stack: string[] = [],
    IEmployees: IEmployee[] = [],
) => async (dispatch: AppDispatch) => {
    const url = new URL('https://frontend-test-api.stk8s.66bit.ru/api/Employee');
    url.searchParams.append('Page', page.toString());
    url.searchParams.append('Count', '10');
    if (name) url.searchParams.append('Name', name);
    if (gender) gender.forEach(item => url.searchParams.append('Gender', item));
    if (position) position.forEach(item => url.searchParams.append('Position', item));
    if (stack) stack.forEach(item => url.searchParams.append('Stack', item));

    try {
        dispatch(employeesSlice.actions.employeesFetching());
        const response = await axios.get<IEmployee[]>(url.href);
        dispatch(employeesSlice.actions.employeesFetchingSuccess(IEmployees.concat(response.data)));
        localStorage.setItem('employees', JSON.stringify(IEmployees.concat(response.data)));
    } catch (error: unknown) {
        if (error instanceof Error) {
            dispatch(employeesSlice.actions.employeesFetchingError(error.message))
        } else {
            dispatch(employeesSlice.actions.employeesFetchingError('unknown error'))
        }
    }
}