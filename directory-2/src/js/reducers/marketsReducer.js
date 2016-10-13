export default function reducer(state={
	markets: [],
	fetching: false,
	fetched: false,
	error: null
}, action) {

	switch(action.type) {
		case "FETCH_MARKETS": {
			return {...state, fetching: true}
		}
		case "FETCH_MARKETS_REJECTED": {
			return {...state, fetching: false, error: action.payload}
		}
		case "FETCH_MARKETS_FULFILLED": {
			return {
				...state, 
				fetching: false,
				fetched: true, 
				markets: action.payload
			}
		}
		case "ADD_MARKET": {
			return {
				...state,
				markets: [...state.markets, action.payload]
			}
		}
		case "UPDATE_MARKET": {
			const { id, title, icon, urlTitle } = action.payload
			const newMarkets = [...state.markets]
			const marketToUpdate = newMarkets.findIndex(market => market.id === id)
			newMarkets[marketToUpdate] = action.payload
			return {
				...state,
				markets: newMarkets
			}
		}
		case "DELETE_MARKET": {
			return {
				...state,
				markets: state.markets.filter(market => market.id !== action.payload)
			}
		}
	}

	return state
}