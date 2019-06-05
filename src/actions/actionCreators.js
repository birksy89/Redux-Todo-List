import uuid from 'uuid'

//  Counter Action Creators
export const increment = () => ({
  type: 'INCREMENT',
})
export const decrement = () => ({
  type: 'DECREMENT',
})
export const reset = () => ({
  type: 'RESET',
})


// Todo Action Creators

export function fetchTodos() {
  return function(dispatch) {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then(res => res.json())
      .then(data =>
        dispatch({
          type: 'FETCH_TODOS',
          payload: data
        })
      );
  };
}

export const addTodo = text => ({
  type: 'ADD_TODO',
  id: uuid.v4(),
  text
})
export const removeTodo = id => ({
  type: 'REMOVE_TODO',
  id
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}
