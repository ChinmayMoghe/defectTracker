import * as types from '../actions/actions';

export default function (state = {}, { response,type }) {
    switch (type) {
        case types.REGISTER_USER_SUCCESS:
            return { ...state, ...response };
        case types.REGISTER_USER_ERROR:
            return { ...state, ...response };
        default:
            return state;
    }
};