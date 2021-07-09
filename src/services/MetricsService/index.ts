import api from '../api';

import { IDashboardResponse } from './IResponse';

const routes = {
    dashboard: '/metrics/dashboard',
};

class ProjectService {
    public async getDashboard() {
        const result = await api.get<IDashboardResponse>(routes.dashboard);

        return result.data;
    }
}

export default new ProjectService();
