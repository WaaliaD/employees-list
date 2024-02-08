export const EMPLOYEES_ROUTE = '/employees';
export const EMPLOYEES_ID_ROUTE = '/employees/:id';

const routesArray = [EMPLOYEES_ROUTE, EMPLOYEES_ID_ROUTE];
export type routesType = typeof routesArray[number];