import { useAccountContext } from '../utils/GlobalState';

const Header = () => {
  const [state] = useAccountContext();

  return (
    <header className="App-header">
      {state.isLoggedIn ? 
        <h1 classNAme="App-header">Welcome {state.userName}!</h1>
        :
        <h1>Welcome! Please log in!</h1>
      }
    </header>
  )
}

export default Header;
