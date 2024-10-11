import { createContext, useContext, useReducer } from 'react';
import { reducer } from './reducers';

const AccountContext = createContext();
const { Provider } = AccountContext;

const AccountProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    isLoggedIn: false,
    userName: 'admin',
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useAccountContext = () => useContext(AccountContext);

export { AccountProvider, useAccountContext };
