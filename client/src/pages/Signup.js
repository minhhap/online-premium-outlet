import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';

function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async event => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
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
        <div className="py-2">
          <button>
            <Link to="/login">Go to Login</Link>
          </button>
        </div>
        <div className="py-1">
          <h2>Sign Up</h2>
        </div>
        <div>
          <form
            className="grey-background form-container"
            onSubmit={handleFormSubmit}
          >
            <div className="py-1">
              <div className="flex-row py-1">
                <label htmlFor="firstName">First name</label>
              </div>
              <div>
                <input
                  placeholder="Jane"
                  name="firstName"
                  type="firstName"
                  id="firstName"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="py-1">
              <div className="flex-row py-1">
                <label htmlFor="lastName">Last name</label>
              </div>
              <div>
                <input
                  placeholder="Doe"
                  name="lastName"
                  type="lastName"
                  id="lastName"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="py-1">
              <div className="flex-row py-1">
                <label htmlFor="email">Email</label>
              </div>
              <div>
                <input
                  placeholder="youremail@email.com"
                  name="email"
                  type="email"
                  id="email"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="py-1">
              <div className="flex-row py-1">
                <label htmlFor="pwd">Password</label>
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

            <div className="flex-row py-2 my-2">
              <button className="py-1" type="submit">
                Create Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
