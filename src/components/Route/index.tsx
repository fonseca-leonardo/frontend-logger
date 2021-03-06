/* eslint-disable no-nested-ternary */
import React from 'react';

import {
    Route as ReactDOMRoutes,
    RouteProps as ReactDOMRouteProps,
    Redirect,
} from 'react-router-dom';
import { useSelectedProject } from '../../hooks/selectedProject';

import { useAuth } from '../../hooks/auth';

import Menu from '../Menu';

import { Container } from './styles';

interface RouteProps extends ReactDOMRouteProps {
    isPrivate?: boolean;

    component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
    isPrivate = false,

    component: Component,

    ...rest
}) => {
    const { token } = useAuth();
    const { selectedProject } = useSelectedProject();

    return (
        <ReactDOMRoutes
            {...rest}
            render={() =>
                isPrivate === !!token ? (
                    token ? (
                        <Container>
                            {!!selectedProject?._id && (
                                <>
                                    <Menu />
                                    <Component />
                                </>
                            )}
                        </Container>
                    ) : (
                        <Component />
                    )
                ) : (
                    <>
                        <Redirect
                            to={{
                                pathname: isPrivate ? '/login' : '/dashboard',
                            }}
                        />
                    </>
                )
            }
        />
    );
};

export default Route;
