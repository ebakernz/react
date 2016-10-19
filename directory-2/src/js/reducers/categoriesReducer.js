export default function reducer(state={
	categories: [],
	fetching: false,
	fetched: false,
	error: null
}, action) {

	switch(action.type) {
		case "FETCH_CATEGORIES": {
			return {...state, fetching: true}
		}
		case "FETCH_CATEGORIES_REJECTED": {
			return {...state, fetching: false, error: action.payload}
		}
		case "FETCH_CATEGORIES_FULFILLED": {
			return {
				...state,
				fetching: false,
				fetched: true,
				categories: action.payload
			}
		}
		case "ADD_CATEGORY": {
			return {
				...state,
				categories: [...state.categories, action.payload]
			}
		}
		case "UPDATE_CATEGORY": {
			const { id, title, icon, urlTitle } = action.payload
			const newCategories = [...state.categories]
			const marketToUpdate = newCategories.findIndex(category => category.id === id)
			newCategories[marketToUpdate] = action.payload
			return {
				...state,
				categories: newCategories
			}
		}
		case "DELETE_CATEGORY": {
			return {
				...state,
				categories: state.categories.filter(category => category.id !== action.payload)
			}
		}
	}

	return state
}