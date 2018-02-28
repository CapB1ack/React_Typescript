
import * as constants from '../constants';
import { IUser } from '../types';

export interface IaddUser {
    type: constants.ADD_USER;
    username: string;
}
export interface IdeleteUser {
    type: constants.DELETE_USER;
    id: number; 
}
export interface ItoggleAdmin {
    type: constants.TOGGLE_ADMIN;
    id: number; 
}
export interface ILoadedUsers {
    type: constants.LOADED_USERS;
    users: IUser[]; 
}
export interface IFetchUsers {
    type: constants.FETCH_USERS;
}

export type UserAction = IaddUser | IdeleteUser | ItoggleAdmin | ILoadedUsers | IFetchUsers;

export const addUser = (username: string): IaddUser => ({type: constants.ADD_USER, username});
export const deleteUser = (id: number): IdeleteUser => ({type: constants.DELETE_USER, id});
export const toggleAdmin = (id: number): ItoggleAdmin => ({type: constants.TOGGLE_ADMIN, id});
export const loadedUsers = (users: IUser[]): ILoadedUsers => ({type: constants.LOADED_USERS, users});
export const fetchUsers = (): IFetchUsers => ({type: constants.FETCH_USERS});

export const fetchData = (typeOfData: string) => {
    return function (dispatch: any) {
        return fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => dispatch(loadedUsers(json)));
    };
};
