import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';

function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async event => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="form-cont-2">
      <div className="form-container my-2">
        <div className="my-2">
          <button>
            <Link to="/signup">Go to Sign Up</Link>
          </button>
        </div>
        <div className="my-1">
          <h2>Login</h2>
        </div>
        <div>
          <form
            className="form-container grey-background"
            onSubmit={handleFormSubmit}
          >
            <div className="py-1">
              <div className="flex-row py-1">
                <label htmlFor="email">Email address: </label>
              </div>
              <div>
                <input
                  placeholder="youremail@test.com"
                  name="email"
                  type="email"
                  id="email"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="py-1">
              <div className="flex-row py-1">
                <label htmlFor="pwd">Password: </label>
              </div>
              <div>
                <input
                  placeholder="******"
                  name="password"
                  type="password"
                  id="pwd"
                  onChange={handleChange}
                />
              </div>
            </div>

            {error ? (
              <div>
                <p className="error-text">
                  The provided credentials are incorrect
                </p>
              </div>
            ) : null}

            <div className="flex-row flex-end my-1 py-2">
              <button className="py-1" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
