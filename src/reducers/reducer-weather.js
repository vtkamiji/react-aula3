import {FETCH_WEATHER} from '../actions/index';

export default function(state = [], action){
	console.log("action received:" + action);
	console.log(action.payload);
	console.log(action.type);
	switch(action.type) {
		case FETCH_WEATHER:
			console.log('entered switchcase');
			/* Do NOT ever manipulate state direct */
			//return state.push(action.payload.data); **cria novo state
			return state.concat([action.payload.data]);
			// return [ action.payload.data, ...state ]; **igual ao de cima
 	}

	return state;
}