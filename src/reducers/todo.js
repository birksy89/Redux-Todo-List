/**
 * This is a reducer, a pure function with (state, action) => state signature.
 * It describes how an action transforms the state into the next state.
 *
 * The shape of the state is up to you: it can be a primitive, an array, an object,
 * or even an Immutable.js data structure. The only important part is that you should
 * not mutate the state object, but return a new object if the state changes.
 *
 * In this example, we use a `switch` statement and strings, but you can use a helper that
 * follows a different convention (such as function maps) if it makes sense for your
 * project.
 */

const initialState = [];

export default function todo(state = initialState, action) {
  console.log("Inside the 'todo' reducer", state, action);

  switch (action.type) {
    case "ADD_TODO":
      console.log("Inside action type - ADD_TODO");
      const newTodo = {
        userId: 1,
        id: action.id,
        title: action.text
      };
      return [...state, newTodo];

    case "REMOVE_TODO":
      // Filter out the removed todo via id
      const filtered = state.filter(todo => todo.id !== action.id);
      return [...filtered];
    case "FETCH_TODOS":
      // Append the fetched to dos
      return [...state, ...action.payload];

    default:
      return state;
  }
}
