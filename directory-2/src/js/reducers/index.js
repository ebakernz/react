import { combineReducers } from "redux"

import markets from "./marketsReducer"
import products from "./productsReducer"

export default combineReducers({
	markets,
	products
})