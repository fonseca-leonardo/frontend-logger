import api from '../api';

import { IDashboardResponse, IEndpointsRequest } from './IResponse';

const routes = {
    dashboard: '/metrics/dashboard',
    endpoint: '/metrics/endpoints',
};

class MetricsService {
    public async getDashboard() {
        const result = await api.get<IDashboardResponse>(routes.dashboard);

        return result.data;
    }

    public async getEndpointMetrics(time: string) {
        const result = await api.get<IEndpointsRequest>(routes.endpoint, {
            params: {
                time,
            },
        });

        return result.data;
    }
}

export default new MetricsService();
