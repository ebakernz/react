export function fetchMarkets() {
	return {
		type: "FETCH_MARKETS_FULFILLED", 
		payload: [
			{
				id: 1,
				title: "Club",
				iconName: 'CLUB',
				color: 'blue2',
				urlTitle: 'club'
			},
			{
				id: 2,
				title: "Member",
				iconName: 'MEMBER',
				color: 'blue2',
				urlTitle: 'member'
			}
		]
	}
}

export function addMarket(id, title, icon, urlTitle) {
	return {
		type: "ADD_MARKET",
		payload: {
			id,
			title,
			icon,
			urlTitle
		}
	}
}

export function updateMarket(id, title, icon, urlTitle) {
	return {
		type: "UPDATE_MARKET",
		payload: {
			id,
			title,
			icon,
			urlTitle
		}
	}
}

export function deleteMarket(id) {
	return {
		type: "DELETE_MARKET",
		payload: id
	}
}