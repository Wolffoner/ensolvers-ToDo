//Types
const types = {
  authLogin: 'login',
  authLogout: 'logout',
}

// initial Store
const initialStore = {
    isLoggedIn: false,
    user: null,
}

//Reducer Login
const storeReducer = (state, action) => {
  switch(action?.type) {
      case types.authLogout:
          return {
              ...state,
              isLoggedIn: false,
              user: null,
          }

      case types.authLogin:
          return {
              ...state,
              isLoggedIn: true,
              user: action.payload,
          }
      default:
          return state;
  }
}

export { initialStore, types };
export default storeReducer;