import React from 'react'
import { Avatar, Grid, Paper, TextField, Checkbox, Button, FormControlLabel, Typography, Link } from '@mui/material'
import LockIcon from '@mui/icons-material/Lock';
import { signInWithGoogle, signInWithFacebook } from '../../Constants/Firebase';

const Login=()=>{
    const [checked, setChecked] = React.useState(true);
    const paperstyle = {padding:20, height:'70vh',width:280, margin: '20px auto'}
    const avatarStyle= {backgroundColor: 'green'}
    const btnStyle = {margin:'8px 0'}

    const handleChange = (event) => {
        setChecked(event.target.checked);
      };

    return (
        <Grid>
            <Paper elevation={10} style={paperstyle}>
                <Grid align="center">
                <h2> Sign In </h2>
 
 <Avatar style={avatarStyle}><LockIcon/></Avatar>
                </Grid>
       
       <TextField label="Username" placeholder="Enter username" variant="standard" fullWidth required/>
       <TextField label="Password" placeholder="Enter password" variant="standard" fullWidth required type="password"/>
       <FormControlLabel
        label="Remember me"
        control={
          <Checkbox
            checked={checked[0] && checked[1]}
            indeterminate={checked[0] !== checked[1]}
            onChange={handleChange}
          />
        }
      />
    <Button type="submit" color='primary' fullWidth style={btnStyle} variant="contained">Sign in</Button>
    <Typography>
        <Link href="#">Forogot password ?</Link>
    </Typography>
    <Typography> Do you have an account ?
        <Link href="#">Sign Up?</Link>
    </Typography>

    <Grid container >
  <Grid item xs={6}>
  <button class="login-with-google-btn" onClick={signInWithGoogle} size="small">
        Sign in
      </button>
  </Grid>
  
  <Grid item xs={6} >
<button class="login-with-google-btn" onClick={signInWithFacebook} size="small">
        Sign in
      </button>
  </Grid>
</Grid>


    <h1>{localStorage.getItem("name")}</h1>
    <h1>{localStorage.getItem("email")}</h1>
    <img src={localStorage.getItem("profilePic")} alt="Google profile pic"/>
                </Paper>
        </Grid>
    )
}

export default Login