import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import {routes} from 'utils/routes';
import {EMPLOYEES_ROUTE} from 'utils/paths/employees';

const AppRouter = () => {
    return (
        <Routes>
            {routes.map(({path, Component}) =>
                <Route
                    key={path}
                    path={path}
                    element={<Component/>}
                />
            )}
            <Route
                path="*"
                element={<Navigate to={EMPLOYEES_ROUTE}/>}
            />
        </Routes>
    );
};

export default AppRouter;