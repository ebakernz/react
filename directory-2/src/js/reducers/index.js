import { combineReducers } from "redux"

import categories from "./categoriesReducer"
import markets from "./marketsReducer"
import products from "./productsReducer"

export default combineReducers({
	categories,
	markets,
	products
})