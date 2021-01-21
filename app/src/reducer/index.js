import {GET_CAT_START, GET_CAT_SUCCESS, GET_CAT_FAILURE} from '../actions/index'

export const initialState = {
    isLoading: false,
    catData: [],
    error: '',
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case GET_CAT_START:
            return {
                ...state,
                isLoading: true,
                error: '',
            }
        case GET_CAT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                catData: action.payload,
            }
        case GET_CAT_FAILURE:
            return {
                ...state,
                isLoading:false,
                error: action.payload,
            }
        default:
            return state;
    }
}