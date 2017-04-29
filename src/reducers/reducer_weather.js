import {FETCH_WEATHER} from '../actions/index'



export default function (state=[], action) {
    console.log(state)
    switch (action.type) {
        case FETCH_WEATHER:        
            return [ ...state, action.payload.data ]
            

            default:
            return state; 
    }

    
}

// we return existing state plus our new payload data.