import React from 'react'
import { useForm } from 'react-hook-form';
import { Avatar, Grid, Paper, TextField, Checkbox, Button, FormControlLabel, Typography, Link } from '@mui/material'
import LockIcon from '@mui/icons-material/Lock';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import { signInWithGoogle, signInWithFacebook, signInWithCredential } from '../../Constants/Firebase';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [checked] = React.useState(true);
  const paperstyle = { padding: 20, height: '70vh', width: 280, margin: '20px auto' }
  const avatarStyle = { backgroundColor: 'green' }
  const btnStyle = { margin: '8px 0' }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => signInWithCredential(data, navigate);

  return (
    <Grid>
      <Paper elevation={10} style={paperstyle}>
        <Grid align="center">
          <h2> Sign In </h2>

          <Avatar style={avatarStyle}><LockIcon /></Avatar>
        </Grid>

        <form onSubmit={handleSubmit(onSubmit)}>
        <TextField label="Username" placeholder="Enter username" variant="standard" fullWidth {...register('Username', { required: true })} />
          {errors.Username && <p>Username is required.</p>}
          <TextField label="Password" placeholder="Enter password" variant="standard" fullWidth {...register('Password', { required: true })} type="password"/>
          {errors.Password && <p>Password is required.</p>}
          <FormControlLabel
          label="Remember me"
          control={
            <Checkbox
              checked={checked[0] && checked[1]}
              indeterminate={checked[0] !== checked[1]}
              {...register('Remember')}
            />
          }
        />
          <Button type="submit" color='primary' fullWidth style={btnStyle} variant="contained">Sign in</Button>
        </form>

        <Typography>
          <Link href="#">Forogot password ?</Link>
        </Typography>
        <Typography> Do you have an account ?
          <Link href="#">Sign Up?</Link>
        </Typography>

        <Grid container >
          <Grid item xs={6}>
            <Button variant="outlined" startIcon={<GoogleIcon />} onClick={() => signInWithGoogle(navigate)}>
              Sign in
            </Button>
          </Grid>

          <Grid item xs={6} >
            <Button variant="outlined" startIcon={<FacebookIcon />} onClick={() => signInWithFacebook(navigate)}>
              Sign in
            </Button>
          </Grid>
        </Grid>


        <h1>{localStorage.getItem("name")}</h1>
        <h1>{localStorage.getItem("email")}</h1>
        <img src={localStorage.getItem("profilePic")} alt="Google profile pic" />
      </Paper>
    </Grid>
  )
}

export default Login