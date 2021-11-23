//Types
const types = {
  authLogin: 'login',
  authLogout: 'logout',
  setFolder: 'setFolder'
}

// initial Store
const initialStore = {
    isLoggedIn: false,
    user: null,
    folder: null
}

//Reducer Login
const storeReducer = (state, action) => {
  switch(action?.type) {
    case types.authLogout:
      return {
        ...state,
        isLoggedIn: false,
      }
    case types.authLogin:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
      }
    case types.setFolder:
      return {
        ...state,
        folder: action.payload,
      }
    default:
      return state;
  }
}

export { initialStore, types };
export default storeReducer;