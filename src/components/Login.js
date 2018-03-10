import React from 'react';
import './Login.css';
function Login() {
	return (
		<div className="row justify-content-center">
			<div className="col text-center">
				<p>Login or Singin with Twitter or Github.</p>
				<a type="button" className="btn btn-primary" href="auth/twitter">Twitter</a>
				<a type="button" className="btn btn-dark" href="auth/github">Github</a>
			</div>
		</div>
	);
}
export default Login;