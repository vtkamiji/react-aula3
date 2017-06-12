import {FETCH_WEATHER} from '../actions/index';

export default function(state = [], action){
	
	switch(action.type) {
		case FETCH_WEATHER:			
			/* Do NOT ever manipulate state direct */
			//return state.push(action.payload.data); **cria novo state
			return state.concat([action.payload.data]);
			// return [ action.payload.data, ...state ]; **igual ao de cima
 	}

	return state;
}