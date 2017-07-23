export default function(state=null, action) {

	if(action.type === 'ADD_TWEET') {
		return {
			user: {
				...state.user,
				tweets: [action.payload, ...state.user.tweets]
			}
		}
	} else if(action.type === 'USER_FETCHED'){
		return action.payload

	} else {
		return state;
	}
}