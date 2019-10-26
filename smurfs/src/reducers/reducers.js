import { 
    GET_SMURFS_START,
    GET_SMURFS_SUCCESS,
    GET_SMURFS_FAILED,
    ADD_SMURF_START,
    ADD_SMURF_SUCCESS,
    ADD_SMURF_FAILED,
    // UPDATE_SMURF_START,
    // UPDATE_SMURF_SUCCESS,
    // UPDATE_SMURF_FAILED,
    // DELETE_SMURF_START,
    // DELETE_SMURF_SUCCESS,
    // DELETE_SMURF_FAILED
} from '../actions/index';


const initialState = {
    smurfs : [],
    gettingSmurfs: false,
    addingSmurfs: false,
    // updatingSmurfs: false,
    // deletingSmurfs: false,
    error: null
}

export function reducer(state = initialState, action) {

    switch(action.type) {

    //getting smurf list
    case GET_SMURFS_START: {
                return {
                    ...state,
                    gettingSmurfs: true
                }
            }

    case GET_SMURFS_SUCCESS: {
                return {
                    ...state,
                    smurfs: action.payload,
                    gettingSmurfs: false
                }
            }

    case GET_SMURFS_FAILED: {
                return {
                    ...state,
                    gettingSmurfs: false,
                    error: action.payload
                }
            }


    //adding a new smurf
    case ADD_SMURF_START: {
                return {
                    ...state,
                    addingSmurfs: true
                }
            }

    case ADD_SMURF_SUCCESS: {
                return {
                    ...state,
                    smurfs: action.payload,
                    addingSmurfs: false
                }
            }

    case ADD_SMURF_FAILED: {
                return {
                    ...state,
                    addingSmurfs: false,
                    error: action.payload
                }
            }

//STRETCH -----> 
    // //updating a smurf
    // case UPDATE_SMURF_START: {
    //             return {
    //                 ...state,
    //                 addingSmurfs: true
    //             }
    //         }

    // case UPDATE_SMURF_SUCCESS: {
    //             return {
    //                 ...state,
    //                 smurfList: action.payload,
    //                 updatingSmurfs: false
    //             }
    //         }

    // case UPDATE_SMURF_FAILED: {
    //             return {
    //                 ...state,
    //                 updatingSmurfs: false,
    //                 error: action.payload
    //             }
    //         }



    // //deleting a smurf
    // case DELETE_SMURF_START: {
    //             return {
    //                 ...state,
    //                 deletingSmurfs: true
    //             }
    //         }

    // case DELETE_SMURF_SUCCESS: {
    //             return {
    //                 ...state,
    //                 smurfLists: action.payload,
    //                 deletingSmurfs: false
    //             }
    //         }

    // case DELETE_SMURF_FAILED: {
    //             return {
    //                 ...state,
    //                 deletingSmurfs: false,
    //                 error: action.payload
    //             }
    //         }

    default: 
        return state;

        }
    }