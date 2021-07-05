import ProjectModel from '../../models/ProjectModel';

export interface IListProjectResponse {
    data: Array<ProjectModel>;
}

export interface ISelectProjectResponse {
    data: {};
    token: string;
}
