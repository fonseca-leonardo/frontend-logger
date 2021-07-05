export interface ILoginResponse {
    token: string;
}

export interface IAuthResponse {
    data: {
        email: string;

        _id: string;

        name: string;

        permission: { [x: string]: { [x: number]: number[] } };
    };
    token: string;
}
