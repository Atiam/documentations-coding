const name = 'Tiam';
const num1 = 1;
const num2 = 2;

function JSXVariables() {
  return (
    <div className="main-container">
      <div className="container">
        <div className="p-5 mb-4 bg-light">
          {/* JavaScript expressions can be escaped inside of curly braces */}

          <h2>My cat's name is {name}. But you can call me...</h2>
          <h1>The TEGDA!</h1>
          <hr />
          <h2>I can do math: {num1 + num2}.</h2>
          <h2>
            I can generate random numbers:
            {Math.floor(Math.random() * 10) + 1},
            {Math.floor(Math.random() * 10) + 1},
            {Math.floor(Math.random() * 10) + 1}.
          </h2>
          <h2>I can even reverse my name: {name.split('').reverse()}</h2>
        </div>
      </div>
    </div>
  );
}

export default JSXVariables;
