import axios from 'axios'

export const GET_CAT_START = "GET_CAT_START"
export const GET_CAT_SUCCESS = "GET_CAT_SUCCESS"
export const GET_CAT_FAILURE = "GET_CAT_FAILURE"

export const getCat = () => {
    return (dispatch) => {
        dispatch({ type: GET_CAT_START})

        axios
        .get('https://api.thecatapi.com/v1/images/search?api_key=d1721634-2547-4620-8847-6cdb7bb94d57')
        .then(res => {
            console.log(res.data)
            dispatch({type: GET_CAT_SUCCESS, payload:res.data})
        })
        .catch(err => {
            console.log(err)
            dispatch({type: GET_CAT_FAILURE, payload: err.message})
        })
    }   
}

