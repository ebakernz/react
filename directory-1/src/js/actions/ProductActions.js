import dispatcher from "../dispatcher";

export function createProduct(title) {
	dispatcher.dispatch({
		type: "CREATE_PRODUCT",
		title
	});
}

export function reloadProducts() {

	/*axios("http://someurl.com/products").then((data) => {
		console.log("got some data", data);
	})*/

	dispatcher.dispatch({ type: "FETCH_PRODUCTS"});
	setTimeout(() => {
		dispatcher.dispatch({type: "RECEIVE_PRODUCTS", products: [
			{
				id: 3,
				title: "Big John",
				group: 'Club',
				category: 'Cleaning',
				urlTitle: 'biosolutions'
			},
			{
				id: 4,
				title: "Quigg Partners",
				group: 'Member',
				category: 'Entertainment',
				urlTitle: 'the-hollywoods'
			}
		]});
	}, 1000);

}