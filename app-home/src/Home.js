import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { Link as RouterLink } from 'react-router-dom'
import Para from './components/Para'
import Block from './components/Block'
import Timeline from './components/Timeline'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    justifyContent: 'center'
  },
  paper: {
    padding: '6px 16px'
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main
  },
  title: {
    fontSize: '46px',
    margin: '40px 0 0px',
    textAlign: 'center',
    color: 'green'
  }
}))

export default function CustomizedTimeline() {
  const classes = useStyles()
  const loop = new Array(8).fill(Math.random())

  return (
    <div className="app-home">
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <h1 className={classes.title}>Home</h1>
        </Grid>
        <Grid
          item
          xs={12}
          style={{
            textAlign: 'center'
          }}>
          <RouterLink
            to="/blog"
            style={{
              textDecoration: 'none',
              marginBottom: '20px',
              display: 'inline-block'
            }}>
            <Button variant="contained" color="primary">
              Go to Blog
            </Button>
          </RouterLink>
          <Para />
        </Grid>
        {loop.map((v, k) => (
          <Block key={k} />
        ))}
        <Timeline />
      </Grid>
    </div>
  )
}
