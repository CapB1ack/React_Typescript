
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
}

export interface IdeleteUser {
    type: constants.DELETE_USER;
}

export type UserAction = IaddUser | IdeleteUser;

export const addUser = (): IaddUser => ({type: constants.ADD_USER});
export const deleteUser = (): IdeleteUser => ({type: constants.DELETE_USER});