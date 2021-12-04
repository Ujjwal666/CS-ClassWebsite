export const initialState = {
	user: null,
	prof_info: [],
	current: [],
}

const reducer = (state,action) => {
	switch(action.type){
		case 'ADD_TO_CURRENT':
			return{
				...state,
				current: [action.item]
			}			
		case 'SET_USER':
			return{
				...state,
				user: action.user
			}
		case 'SET_INFO':
			return{
				...state,
				prof_info: action.prof_info
			}			
		default:
			return state;
	}
}

export default reducer;