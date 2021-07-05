import api from '../api';

import { IListProjectResponse, ISelectProjectResponse } from './IResponses';

const routes = {
    listProjects: '/projects',
    selectProject: (projectId: string) => `/projects/select/${projectId}`,
};

class ProjectService {
    public async listProjects() {
        const result = await api.get<IListProjectResponse>(routes.listProjects);

        return result.data;
    }

    public async selectProject(projectId: string) {
        const result = await api.patch<ISelectProjectResponse>(
            routes.selectProject(projectId),
        );

        return result.data;
    }
}

export default new ProjectService();
