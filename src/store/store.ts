import {combineReducers, configureStore} from '@reduxjs/toolkit';
import employeesReducer from './reducers/EmployeesSlice'
import filterFormContentReducer from './reducers/FilterFormContentSlice';
import employeeByIdReducer from './reducers/EmployeeByIdSlice';
import themeReducer from './reducers/ThemeSlice';
import windowSizeReducer from './reducers/WindowSizeSlice';
import selectsReducer from './reducers/SelectsSlice';

const rootReducer = combineReducers({
    employeesReducer,
    filterFormContentReducer,
    employeeByIdReducer,
    themeReducer,
    windowSizeReducer,
    selectsReducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']