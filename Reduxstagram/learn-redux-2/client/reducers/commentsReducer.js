function postComments(state = [], action) {
  switch(action.type){
    case 'ADD_COMMENT':
      // return the new state with the new comment
      return [...state,{
        user: action.author,
        text: action.comment
      }];
    case 'REMOVE_COMMENT':
      // we need to return the new state without the deleted comment
      return [
        // from the start to the one we want to delete
        ...state.slice(0,action.i),
        // after the deleted one, to the end
        ...state.slice(action.i + 1)
      ]

    case "UPDATE_COMMENT":
      console.log(action);
      const newcomment = action.comment;
      const newComments = [...state];
      const commentToUpdate = action.index;
      newComments[commentToUpdate] = {
        text: newcomment
      }
      // return new state with updated comment
      return [
        newComments
      ]


    /*case "UPDATE_MARKET": {
      const { id, title, icon, urlTitle } = action.payload
      const newMarkets = [...state.markets]
      const marketToUpdate = newMarkets.findIndex(market => market.id === id)
      newMarkets[marketToUpdate] = action.payload
      return {
        ...state,
        markets: newMarkets
      }
    }*/

    default:
      return state;
  }
  return state;
}

function comments(state = [], action) {
  if(typeof action.postId !== 'undefined') {
    return {
      // take the current state
      ...state,
      // overwrite this post with a new one
      [action.postId]: postComments(state[action.postId], action)
    }
  }
  return state;
}

export default comments;
