/* eslint-disable no-unused-vars */
import React, { createContext, useState, useContext, useEffect } from 'react';

import { LocalStorageKeys } from '../constants';
import SelectProjectDialog from '../components/SelectProjectDialog';
import ProjectModel from '../models/ProjectModel';
import { useAuth } from './auth';

interface SelectedProject {
    _id?: string;

    name?: string;
}

interface SelectedProjectState {
    _id: string;
    name: string;
}

interface SelectedProjectContextData {
    selectedProject?: SelectedProject;
    change(project: SelectedProject): void;
}

const SelectedProjectContext = createContext<SelectedProjectContextData>(
    {} as SelectedProjectContextData,
);

const SelectedProjectProvider: React.FC = ({ children }) => {
    const [data, setData] = useState<SelectedProjectState>(() => {
        const selectedProject = localStorage.getItem(
            LocalStorageKeys.SELECTED_PROJECT,
        );

        if (selectedProject) {
            return JSON.parse(selectedProject);
        }

        return {} as SelectedProjectState;
    });
    const { token } = useAuth();

    useEffect(() => {
        const selectedProject = localStorage.getItem(
            LocalStorageKeys.SELECTED_PROJECT,
        );

        if (selectedProject) {
            setData(JSON.parse(selectedProject));
        }
    }, []);

    const change = (selectedProject: ProjectModel) => {
        localStorage.setItem(
            LocalStorageKeys.SELECTED_PROJECT,
            JSON.stringify(selectedProject),
        );

        setData(selectedProject);
    };

    return (
        <SelectedProjectContext.Provider
            value={{
                selectedProject: data,
                change,
            }}
        >
            {!data._id && token && (
                <SelectProjectDialog
                    onChangeProject={change}
                    currentProject={data}
                />
            )}
            {children}
        </SelectedProjectContext.Provider>
    );
};

function useSelectedProject(): SelectedProjectContextData {
    const context = useContext(SelectedProjectContext);

    if (!context) {
        throw new Error(
            'useSelectedProject must be used within an SelectedProjectProvider',
        );
    }

    return context;
}

export { SelectedProjectProvider, useSelectedProject };
