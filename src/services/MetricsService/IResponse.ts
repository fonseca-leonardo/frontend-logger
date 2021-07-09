export interface IDashboardResponse {
    data: {
        dashUrl: string;
    };
}

export interface IEndpointsRequest {
    data: Array<{
        tag: string;
        total: number;
        warning: number;
        success: number;
        error: number;
    }>;
}
