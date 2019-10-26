import { 
    GET_SMURFS_START,
    GET_SMURFS_SUCCESS,
    GET_SMURFS_FAILED,
    ADD_SMURFS_START,
    ADD_SMURFS_SUCCESS,
    ADD_SMURFS_FAILED,
    UPDATE_SMURFS_START,
    UPDATE_SMURFS_SUCCESS,
    UPDATE_SMURFS_FAILED,
    DELETE_SMURFS_START,
    DELETE_SMURFS_SUCCESS,
    DELETE_SMURFS_FAILED
} from '../actions/index';

const initialState = {
    smurfList : [],
    gettingSmurfs: false,
    addingSmurfs: false,
    updatingSmurfs: false,
    deletingSmurfs: false,
    error: null
}

export default reducer = (state = initialState, action) => {

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


        //updating a smurf
        case UPDATE_SMURF_START: {
                return {
                    ...state,
                    addingSmurfs: true
                }
            }

        case UPDATE_SMURF_SUCCESS: {
                return {
                    ...state,
                    smurfs: action.payload,
                    updatingSmurfs: false
                }
            }

        case UPDATE_SMURF_FAILED: {
                return {
                    ...state,
                    updatingSmurfs: false,
                    error: action.payload
                }
            }



        //deleting a smurf
        case DELETE_SMURF_START: {
                return {
                    ...state,
                    deletingSmurfs: true
                }
            }

    case DELETE_SMURF_SUCCESS: {
                return {
                    ...state,
                    smurfs: action.payload,
                    deletingSmurfs: false
                }
            }

    case DELETE_SMURF_FAILED: {
                return {
                    ...state,
                    deletingSmurfs: false,
                    error: action.payload
                }
            }

    default: 
        return state;

        }
    }