// a reducer takes in:
// 1. the action (what happened)
// 2. copy of current state

function posts(state = [], action) {
	console.log('post reducer');
	console.log(state, action);

	switch(action.type) {
		case "INCREMENT_LIKES":
			console.log('incrementing likes');
			const i = action.index;
			
			return [
				...state.slice(0,i), // before the one we're updating
				{...state[i], likes: state[i].likes + 1},
				...state.slice(i + 1) // after the one we're updating
			]
		default:
			return state;
	}

	return state;
}

export default posts;