const userFetched = (response) => {
	return {
    	type: 'USER_FETCHED',
    	payload: response
    }
}

export const addTweet = (tweet) => {
	return {
		type: 'ADD_TWEET',
		payload: tweet
	}	
}
export const fetchUsers = (url, userId) => {
	return (dispatch, getState) => {
		//commenting this code out, because of CORS issue. Need to figure out
        /*fetch(url)
            .then((response) => {
            	console.log(response)
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                response = JSON.parse(response.response);
                dispatch(usersFetched(response));
            }); */
        var userJSON;
        if(userId === 'user_1') {
        	userJSON = require('../data/user1Mockup.json');
        } else {
        	userJSON = require('../data/user2Mockup.json');
        }
        dispatch(userFetched(userJSON));
    };
}