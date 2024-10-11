import { useState } from 'react';
import { UPDATE_ACCOUNT_NAME, UPDATE_ACCOUNT_STATUS } from '../utils/actions';
import { useAccountContext } from '../utils/GlobalState';

export default function AccountDisplay() {
  const [state, dispatch] = useAccountContext();

  const [newName, setNewName] = useState(state.userName);
  const [updatingName, setUpdatingName] = useState(false);

  const toggleUpdateName = () => {
    setUpdatingName(!updatingName);
  };

  const handleInputSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: UPDATE_ACCOUNT_NAME,
      userName: newName,
    });
    setUpdatingName(!updatingName);
  };

  const handleInputChange = (e) => {
    setNewName(e.target.value);
  };

  return (
    <>
      {state.isLoggedIn && (
        <>
          {updatingName ? (
            <form
              onSubmit={handleInputSubmit}
            >
              <input
                placeholder="New userName"
                onChange={handleInputChange}
                onSubmit={handleInputSubmit}
              ></input>
              <button type="submit">Submit</button>
            </form>
          ) : (
            <button onClick={toggleUpdateName}>Update userName</button>
          )}
          <span>You are currently signed in ✅</span>
        </>
      )}
      <button
        onClick={() =>
          dispatch({
            type: UPDATE_ACCOUNT_STATUS
          })
        }
      >
        {state.isLoggedIn ? 'Log out' : 'Log in'}
      </button>
    </>
  );
}
