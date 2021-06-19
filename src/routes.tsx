import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import Route from './components/Route';

import routes from './constants/routes';

export default function AppRoutes() {
    return (
        <Switch>
            {routes.private.map((route) => (
                <Route
                    key={route.route}
                    path={route.route}
                    component={route.page}
                    isPrivate
                />
            ))}
            {routes.public.map((route) => (
                <Route
                    key={route.route}
                    path={route.route}
                    component={route.page}
                />
            ))}
            <Redirect to={{ pathname: '/login' }} />
        </Switch>
    );
}
