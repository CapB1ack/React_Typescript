export interface IUser {
    username: string;
    id: number;
    isAdmin: boolean;
}

export interface IStoreState {
    users: IUser[];
}