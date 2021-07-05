import api from '../api';
import { ILoginRequest } from './IRequests';
import { ILoginResponse, IAuthResponse } from './IResponses';

const routes = {
    login: '/auth',
    authorize: '/auth',
};

class AuthService {
    public async login(request: ILoginRequest) {
        const result = await api.post<ILoginResponse>(routes.login, request);

        return result.data;
    }

    public async authorize() {
        const result = await api.get<IAuthResponse>(routes.authorize);

        return result.data;
    }
}

export default new AuthService();
