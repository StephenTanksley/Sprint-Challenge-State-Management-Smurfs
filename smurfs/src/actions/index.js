//axios
import axios from 'axios'

//actions

//get a list
export const GET_SMURFS_START = "GET_SMURFS_START"
export const GET_SMURFS_SUCCESS = "GET_SMURFS_SUCCESS"
export const GET_SMURFS_FAILED = "GET_SMURFS_FAILED"

//add new smurf
export const ADD_SMURF_START = "ADD_SMURF_START"
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS"
export const ADD_SMURF_FAILED = "ADD_SMURF_FAILED"

//STRETCH ----->
//update
// export const UPDATE_SMURF_START = "UPDATE_SMURF_START"
// export const UPDATE_SMURF_SUCCESS = "UPDATE_SMURF_SUCCESS"
// export const UPDATE_SMURF_FAILED = "UPDATE_SMURF_FAILED"

//delete
// export const DELETE_SMURF_START = "DELETE_SMURF_START"
// export const DELETE_SMURF_SUCCESS = "DELETE_SMURF_SUCCESS"
// export const DELETE_SMURF_FAILED = "DELETE_SMURF_FAILED"

// <------STRETCH

//For MVP, I need to create a post request. Additional stretch functionality includes full CRUD functionality.css


export const getSmurfs = () => {
    return dispatch => {
        dispatch({ type: GET_SMURFS_START})

        axios
        .get('http://localhost:3333/smurfs')
        .then(response => {
            dispatch({GET_SMURFS_SUCCESS, payload: response.data })
        })
        .catch(error => {
            dispatch ({ type: GET_SMURFS_FAILED, payload: error})
        })
    }
}



//POST request - takes smurf as an argument to update the server with.

export const addSmurf = smurf => {
    return dispatch => {
        dispatch({ type: ADD_SMURF_START})

        axios
        .post('http://localhost:3333/smurfs', smurf)
        .then(response => {
            dispatch({ADD_SMURF_SUCCESS, payload: response.data })
        })
        .catch(error => {
            dispatch ({ type: ADD_SMURF_FAILED, payload: error})
        })
    }
}