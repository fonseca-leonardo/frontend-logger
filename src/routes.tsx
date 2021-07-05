import React, { useEffect, useCallback } from 'react';
import { Switch, Redirect } from 'react-router-dom';
import Route from './components/Route';

import routes from './constants/routes';
import { useAuth } from './hooks/auth';
import AuthService from './services/AuthService';

export default function AppRoutes() {
    const { token, signIn, signOut } = useAuth();

    const authorization = useCallback(async () => {
        if (token) {
            try {
                const result = await AuthService.authorize();

                signIn({
                    token: result.token,
                    user: {
                        _id: result.data._id,
                        email: result.data.email,
                        name: result.data.name,
                        permission: result.data.permission,
                    },
                });
            } catch (error) {
                signOut();
            }
        }
    }, []);

    useEffect(() => {
        authorization();
    }, []);

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
