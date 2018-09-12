import React, { Component } from 'react';
import './App.css';
import PostalCodesForm from '../PostalCodesForm'
import { withStyles } from '@material-ui/core/styles'
import {
  Typography,
} from '@material-ui/core'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import DSMUI from '../DSMUI'
import StarwarsForm from '../StarwarsForm'
import ButtonNavLink from '../ButtonNavLink'

class App extends Component {
  render() {
    const { classes } = this.props
    return (
      <Router>
        <div className="App">
          <div className={classes.header}>
            <div className={classes.title}>
              <Typography className={classes.root}  variant='display1'>Downshift, Material UI, Redux & Redux Form Example App</Typography>
            </div>
            <div className={classes.nav}>
              <ButtonNavLink to='dsmui' variant='raised' color='primary'>Downshift with Material UI</ButtonNavLink>
              <ButtonNavLink to='dsmui-redux-form' variant='raised' color='primary'>Downshift with Material UI, Redux & Redux Form</ButtonNavLink>
            </div>
          </div>
          <div className={classes.body}>
            <Route path='/dsmui' component={DSMUI} />
            <Route path='/dsmui-redux-form' component={StarwarsForm} />
          </div>
        </div>
      </Router>

    )
  }
}

const styles = theme => ({
  body: {
    padding: '0 15% 0 15%',
  },
  title: {
    // backgroundColor: 'orange',
    padding: '1.5rem 0 2rem 0',
  },
  header: {
    backgroundColor: 'black',
    // padding: '0rem 0 0rem 0',
    display: 'flex',
    flexFlow: 'column nowrap',
    // justifyContent: 'space-around',
  },
  root: {
    color: theme.palette.primary.contrastText,
  },
  nav: {
    // width: '100%',
    // height: '100%',
    // backgroundColor: 'pink',
    display: 'flex',
    justifyContent: 'space-around',
    paddingBottom: '1rem'
  },
})

export default withStyles(styles)(App)
