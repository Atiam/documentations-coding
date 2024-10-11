import { useName } from '../utils/NameContext';

// Import our action
import { SUBMIT, CHANGE } from '../utils/actions';

export default function ThemeComponent() {
  // Using our custom useName hook. Hands us two values on an array - the application state at index 0, and the dispatch function which can be used to modify it at index 1.
  // Note: the syntax we see used here is called 'array destructuring.'
  const [state, dispatch] = useName();

  const handleInputChange = (e) => {
    console.log('input changed', e.target.value);
    dispatch({
      type: CHANGE,
      value: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const result = state.isValid
      ? 'Username is valid!'
      : 'Username is not valid';

    alert(result);

    // To change the theme we invoke dispatch and pass in an object containing action type and payload
    dispatch({
      type: SUBMIT,
    });
  };

  return (
    <div className="text-center">
      <h4>Username Validator with useReducer</h4>
      <input
        type="text"
        placeholder="hello123"
        onChange={handleInputChange}
      ></input>
      <button
        id="button"
        onClick={handleSubmit}
        className="btn"
        type="button"
      >
        Toggle validation
      </button>
      <section className="text-center" style={{ padding: '20px' }}>
        Validity status{' '}
        <code style={{ fontWeight: 'bold' }}>: {state.isValid.toString()}</code>
      </section>
    </div>
  );
}
