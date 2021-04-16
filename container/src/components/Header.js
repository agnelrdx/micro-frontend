import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { Link as RouterLink } from 'react-router-dom'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none'
    },
    a: {
      textDecoration: 'none'
    }
  },
  appBar: {
    borderBottom: `1px solid #ddd`,
    backgroundColor: '#ddd',
    margin: 0
  },
  btnHead: {
    margin: '0 10px'
  },
  title: {
    marginRight: '50px'
  }
})

export default function Header() {
  const classes = useStyles()

  return (
    <React.Fragment>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography
            className={classes.title}
            variant="h6"
            color="inherit"
            noWrap
            component={RouterLink}
            to="/">
            App
          </Typography>
          <RouterLink to="/blog">
            <Button
              className={classes.btnHead}
              variant="contained"
              color="primary">
              Blog
            </Button>
          </RouterLink>
          <RouterLink to="/dashboard/home">
            <Button
              className={classes.btnHead}
              variant="contained"
              color="primary">
              Dashboard
            </Button>
          </RouterLink>
          <RouterLink to="/dashboard/stats">
            <Button
              className={classes.btnHead}
              variant="contained"
              color="primary">
              Stats
            </Button>
          </RouterLink>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  )
}
