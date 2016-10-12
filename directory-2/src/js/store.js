import { applyMiddleware, createStore } from "redux"

import logger from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"

import reducer from "./reducers"

const middleware = applyMiddleware(promise(), thunk, logger())

export default createStore(reducer, middleware)


 /*
 
 import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class ProductStore extends EventEmitter {

	constructor() {
		super();
		this.products = [
			{
				id: 1,
				title: "BioSolutions",
				group: 'Club',
				category: 'Cleaning',
				urlTitle: 'biosolutions'
			},
			{
				id: 2,
				title: "The Hollywoods",
				group: 'Member',
				category: 'Entertainment',
				urlTitle: 'the-hollywoods'
			}
		];
	}


	createProduct(title) {
		const id = Date.now();
		this.products.push({
			id,
			title,
			group: 'Member',
			category: 'Entertainment',
			urlTitle: 'url-string'
		});

		this.emit("change");
	}

	getAll() {
		return this.products;
	}

	handleActions(action) {
		switch(action.type) {
			case "CREATE_PRODUCT" : {
				this.createProduct(action.title);
			}
		}
	}
}

const productStore = new ProductStore;
//window.productStore = productStore; // export the store globally to browser for testing

dispatcher.register(productStore.handleActions.bind(productStore));
window.dispatcher = dispatcher;
export default productStore;

  */