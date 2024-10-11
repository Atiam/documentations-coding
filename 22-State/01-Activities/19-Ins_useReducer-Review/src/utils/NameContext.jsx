import { createContext, useContext, useReducer } from 'react';

// Import our reducer
import { reducer } from './reducers';

// Create our theme context using createContext()
export const NameContext = createContext();
const { Provider } = NameContext;

// Create a custom hook that allows easy access to our NameContext values
export const useName = () => useContext(NameContext);

// Creating our theme provider. Accepts an argument of "props"
export default function NameProvider(props) {
  const initialState = {
    name: '1337user',
    isValid: false,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return <Provider value={[state, dispatch]} {...props} />;
}
