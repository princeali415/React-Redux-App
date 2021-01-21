import axios from 'axios'

export const GET_CAT_START = "GET_CAT_START"
export const GET_CAT_SUCCESS = "GET_CAT_SUCCESS"
export const GET_CAT_FAILURE = "GET_CAT_FAILURE"

export const getCatData = () => {
    return (dispatch) => {
        dispatch({ type: GET_CAT_START})

        axios
        .get('https://api.thecatapi.com/v1/images/search')
        
        .then(res => {
            console.log(res.data)
            dispatch({type: GET_CAT_SUCCESS, payload: res.data})
        })
        
        .catch(err => {
            console.log(err)
            dispatch({type: GET_CAT_FAILURE, payload: err})
        })
    }   
}

