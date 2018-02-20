
import * as constants from '../constants';

// export interface IncrementEnthusiasm {
//     type: constants.INCREMENT_ENTHUSIASM;
// }

// export interface DecrementEnthusiasm {
//     type: constants.DECREMENT_ENTHUSIASM;
// }

// export type EnthusiasmAction = IncrementEnthusiasm | DecrementEnthusiasm;

// export function incrementEnthusiasm(): IncrementEnthusiasm {
//     return {
//         type: constants.INCREMENT_ENTHUSIASM
//     };
// }

// export function decrementEnthusiasm(): DecrementEnthusiasm {
//     return {
//         type: constants.DECREMENT_ENTHUSIASM
//     };
// }

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

export type UserAction = IaddUser | IdeleteUser | ItoggleAdmin;

export const addUser = (username: string): IaddUser => ({type: constants.ADD_USER, username});
export const deleteUser = (id: number): IdeleteUser => ({type: constants.DELETE_USER, id});
export const toggleAdmin = (id: number): ItoggleAdmin => ({type: constants.TOGGLE_ADMIN, id});