import axios from "axios";

export function fetchProducts() {
	return {
		type: "FETCH_PRODUCTS_FULFILLED", 
		payload: [
			{
				id: 1,
				title: "Big John",
				group: 'Member',
				category: 'Entertainment',
				urlTitle: 'big-john',
				colour: 'MediumBlue'
			},
			{
				id: 2,
				title: "The Hollywoods",
				group: 'Member',
				category: 'Entertainment',
				urlTitle: 'the-hollywoods',
				logo: 'assets/ProductLogos/the-hollywoods.jpg',
				colour: 'MediumBlue'
			},
			{
				id: 3,
				title: "BioSolutions",
				group: 'Club',
				category: 'Cleaning',
				urlTitle: 'biosolutions',
				logo: 'assets/ProductLogos/BioSolutions.jpg',
				colour: 'MediumBlue'
			}
		]
	}
}

export function createProduct(id, title) {
	return {
		type: "CREATE_PRODUCT",
		payload: {
			id,
			title
		}
	}
}

export function updateProduct(id, title) {
	return {
		type: "UPDATE_PRODUCT",
		payload: {
			id,
			title
		}
	}
}

export function deleteProduct(id) {
	return {
		type: "DELETE_PRODUCT",
		payload: id
	}
}
