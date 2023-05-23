import "./App.css";
import { userValidation } from "./Validation";
function App() {
  const createUser = async (event) => {
    event.preventDefault();
    let formData = {
      name: event.target[0].value,
      email: event.target[1].value,
      password: event.target[2].value,
    };
    const isValid = await userValidation.isValid(formData);
    console.log(isValid);
  };
  return (
    <div className="App">
      <form className="form" onSubmit={createUser}>
        <input type="text" placeholder="enter your name" />
        <input type="email" placeholder="enter your email" />
        <input type="password" placeholder="enter your password" />
        <input className="submit" type="submit" />
      </form>
    </div>
  );
}

export default App;
