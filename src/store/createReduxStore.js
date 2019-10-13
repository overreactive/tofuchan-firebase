import { createStore } from 'redux'
import thunk from "redux-thunk";
import { getFirestore } from "redux-firestore";
import { getFirebase } from "react-redux-firebase";
import { applyMiddleware } from "redux"
import rootReducer from './reducers/rootReducer'

const initialState = {}

export default () => {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore }))
  )
}