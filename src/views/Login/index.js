import React, { useState } from "react";
import { Button, TextField, Grid, CircularProgress } from "@material-ui/core";
import { Facebook } from "@material-ui/icons";
import { login } from 'store/actions'
import { authSelector } from 'store/selectors'
import { useDispatch, useSelector } from 'react-redux'
 

const Login = () => {

    const auth = useSelector( authSelector )
    const dispatch = useDispatch()

    const [ email, setEmail ] = useState('')
    const [ password, setPassowrd ] = useState('')

    function handleSubmit( event ) {
        event.preventDefault()

        const payload = { email, password }
        
        // dispatch login action.
        dispatch( login( payload ) )
        
        console.log('login request: ', payload)
    }

    function onForgotPassword( event ) {
        console.log('on forgot password...', event)
    }

    function onSignUp( event ) {
        console.log('on signup: ', event)
    }

    function onSignupWithFacebook( event ) {
        console.log('on signup with facebook: ', event)
    }

    function onSignupWithGoogle( event ) {
//         axios.get("http://localhost:1767/oauth2/authorize/google")

// console.log(       axios.get("http://localhost:1767/oauth2/authorize/google"))

//         const response = axios.get('http://localhost:1767/oauth2/authorize/google');
// console.log(response.request._redirectable._redirectCount);
        console.log('on signup with google: ', event)        
    }


  return (
    <Grid container direction="column" alignItems="center" justify="center">
      <Grid item xs="3">
        <h1
          className="h3 mb-3 font-weight-normal"
          style={{ textAlign: "center" }}
        >
          {" "}
          Sign in
        </h1>

        <p style={{ textAlign: "center" }}> OR </p>

        <form className="form-signin" onSubmit={ handleSubmit } >
          <TextField
            id="user-email"
            name="email"
            value={email}
            onChange={ e => setEmail( e.target.value ) }
            label="User Email"
            variant="outlined"
            fullWidth            
          />
          <TextField
            id="user-password"
            name="password"
            value={password}
            onChange={ e => setPassowrd( e.target.value ) }
            type="password"
            label="User Password"
            variant="outlined"
            fullWidth
            style={{marginTop: '6px'}}
          />

          <Button
            variant="contained"
            color="primary"
            fullWidth
            type="submit"
            style={{ marginTop: "8px" }}
          >
            { auth.loading? <CircularProgress size={24} color="default" />: "Sign in" }
          </Button>

          <Button color="primary" onClick={onForgotPassword} >Forgot password?</Button>
          <hr />
        </form>

        <Button variant="contained" color="primary" fullWidth onClick={onSignUp} >
          Sign up New Account
        </Button>

        <br />
        <br />
      
      </Grid>
      
      <div className="social-login">
       
          <Button variant="contained" color="primary" fullWidth onClick={onSignupWithFacebook} >
            <Facebook /> Sign in with Facebook
          </Button>
          <br />
          <a href="http://localhost:1767/oauth2/authorize/google">
      
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            onClick={onSignupWithGoogle}
            style={{ marginTop: "4px" }}
          >
            Sign in with Google
            </Button>

            </a>
        </div>
    </Grid>
  );
};

export default Login;
