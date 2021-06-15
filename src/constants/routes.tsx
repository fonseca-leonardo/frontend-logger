import { FiPieChart, FiCpu } from 'react-icons/fi';
import { MdTranslate } from 'react-icons/md';

import LoginPage from "../pages/Login";
import DashboardPage from "../pages/Dashboard";
import EndpointPage from "../pages/Endpoint";
import TranslationPage from "../pages/Translation";



const routes = {
    private: [
        {
            route: '/dashboard',
            title: 'Dashboard',
            page: DashboardPage,
            Icon: FiPieChart,
        },
        {
            route: '/endpoint',
            title: 'APIs Calls',
            page: EndpointPage,
            Icon: FiCpu,

        },
        {
            route: '/translations',
            title: 'Translations',
            page: TranslationPage,
            Icon: MdTranslate
        }
    ],
    public: [
        {
            route: '/login',
            title: 'Login',
            page: LoginPage
        }
    ]
}

export default routes;