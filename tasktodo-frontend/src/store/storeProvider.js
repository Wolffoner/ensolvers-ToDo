import { createContext, useContext, useReducer } from 'react'
import storeReducer, { initialStore } from './storeReducer';

//Create Context
const StoreContext = createContext();

//Create Store Provider
const StoreProvider = ({ children }) =>
        <StoreContext.Provider value={useReducer(storeReducer, initialStore)}>
            {children}
        </StoreContext.Provider>

const useStore = () => useContext(StoreContext)[0];
const useDispatch = () => useContext(StoreContext)[1];

export { StoreContext, useStore, useDispatch }
export default StoreProvider;