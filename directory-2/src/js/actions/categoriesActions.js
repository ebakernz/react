export function fetchCategories() {
	return {
		type: "FETCH_CATEGORIES_FULFILLED",
		payload: [
			{
				id: 1,
				title: 'Cars / Transport',
				color: 'blue1',
				group: 'club',
				urlTitle: 'cars-and-transport'
			},
			{
				id: 2,
				title: 'Cleaning / Hygiene',
				color: 'blue2',
				group: 'member',
				urlTitle: 'cleaning-and-hygiene'
			},
			{
				id: 3,
				title: 'Employment',
				color: 'blue1',
				group: 'club',
				urlTitle: 'employment'
			},
			{
				id: 4,
				title: 'Entertainment',
				color: 'blue2',
				group: 'member',
				urlTitle: 'entertainment'
			}, 
			{
				id: 5,
				title: 'Financial / Strategic Mgt',
				color: 'blue1',
				group: 'club',
				urlTitle: 'financial-and-strategic-mgt'
			},
			{
				id: 6,
				title: 'Gaming',
				color: 'black',
				group: 'member',
				urlTitle: 'gaming'
			},
			{
				id: 7,
				title: 'Gas / Energy',
				color: 'blue2',
				group: 'club',
				urlTitle: 'gas-and-energy'
			},
			{
				id: 8,
				title: 'Health / Wellbeing',
				color: 'black',
				group: 'member',
				urlTitle: 'health-and-wellbeing'
			},
			{
				id: 9,
				title: 'Hospitality',
				color: 'blue2',
				group: 'club',
				urlTitle: 'hospitality'			
			},
			{
				id: 10,
				title: 'Music Systems',
				color: 'blue2',
				group: 'member',
				urlTitle: 'music-systems'
			}
		]
	}
}

export function addCategory(id, title, color) {
	return {
		type: "ADD_CATEGORY",
		payload: {
			id,
			title,
			color
		}
	}
}

export function updateCategory(id, title, color) {
	return {
		type: "UPDATE_CATEGORY",
		payload: {
			id,
			title,
			color
		}
	}
}

export function deleteCategory(id) {
	return {
		type: "DELETE_CATEGORY",
		payload: id
	}
}