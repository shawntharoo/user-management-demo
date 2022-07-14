import React, { Component } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import { connect } from 'react-redux';
import ResponsiveAppBar from '../AppBar/Appbar';
import { currentUserSession } from '../../Actions/Authaction'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
    this.props.currentUserSession()
  }

  componentWillUnmount() {
    console.log("home will mount")
    this.props.currentUserSession()
  }

  render() {

    const result = this.props.authReducer.result
    console.log(result)
    return (
     
      <div>
        <ResponsiveAppBar />
        { result !== undefined &&
        <Card sx={{ maxWidth: 345 }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                {result.photoURL}
              </Avatar>
            }
            title={result.displayName}
            subheader={result.email}
          />

          <CardContent>
            <Typography variant="body2" color="text.secondary">
              This impressive paella is a perfect party dish and a fun meal to cook
              together with your guests. Add 1 cup of frozen peas along with the mussels,
              if you like.
            </Typography>
          </CardContent>
        </Card>
      }
      </div>
    );
}
}

const mapStateToProps = (state) => {
  return {
    authReducer: state.authReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    currentUserSession: () => dispatch(currentUserSession())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)