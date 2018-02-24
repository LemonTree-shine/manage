import { combineReducers } from 'redux';

// var defaultState = {
// 	name:"default",age:12
// };

function todos1(state = {name:"default"}, action) {
	switch (action.type) {
	  case 'ADD_TODO':
		return {
			...state,
			...action
		}
	  default:
		return state
	}
}

function todos2(state = {age:"default"}, action) {
	switch (action.type) {
	  case 'ADD_TODO2':
		return {
			...state,
			...action
		}
	  default:
		return state
	}
}


const todos = combineReducers({
    todos1,
    todos2
})

export default todos;