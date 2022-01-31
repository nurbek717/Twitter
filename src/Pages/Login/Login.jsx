import React from 'react';
import { Context } from '../../Context/Authenticated';

import './login.css'
import twitter from '../../Assets/img/twitter.svg';
function Login() {
	const { setToken } = React.useContext(Context);

	const handleSubmit = (evt) => {
		evt.preventDefault();

		const { user_email, user_password } = evt.target.elements;

		fetch('https://reqres.in/api/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email: user_email.value.trim(),
				password: user_password.value.trim(),
			}),
		})
			.then((response) => response.json())
			.then((data) => setToken(data ?.token))
	};

	
	return (

    <div className='container'>
     <div className='login'>
      <img src={twitter} alt="twitwer"  />
      <h1 className='login__headoing'>Log in to Twitter</h1>
      <form className='form' onSubmit={handleSubmit}>
			<input className='login__input'
				type='email'
				defaultValue='eve.holt@reqres.in'
				name='user_email'
			/>
			<input className='login__input'
				type='password'
				defaultValue='cityslicka'
				name='user_password'
			/>

			<button className='login__btn'>Log In</button>
		</form>

    <div className='login__link'>
    <a className='link'   href="#">Forgot password?</a>
    <a className='link' href="#">Sign up to Twitter</a>
    </div>
     </div>
    </div>
		
	);
}

export default Login;
