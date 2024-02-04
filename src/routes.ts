import {routesType, EMPLOYEES_ROUTE, EMPLOYEES_ID_ROUTE} from './utils/employeesConsts';
import Employees from './components/Employees';
import DefiniteEmployee from './components/DefiniteEmployee';
import {FC} from 'react';

interface route {
    path: routesType;
    Component: FC;
}

export const routes: route[]  = [
    {
        path: EMPLOYEES_ROUTE,
        Component: Employees,
    },
    {
        path: EMPLOYEES_ID_ROUTE,
        Component: DefiniteEmployee,
    }
]