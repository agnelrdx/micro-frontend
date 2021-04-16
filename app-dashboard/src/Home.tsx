import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { Link as RouterLink } from 'react-router-dom'
import BarC from './components/BarC'
import AreaC from './components/AreaC'
import ComposedC from './components/ComposedC'
import ScatterC from './components/ScatterC'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: '0 30px'
  },
  title: {
    fontSize: '46px',
    margin: '40px 0 0px',
    textAlign: 'center',
    color: '#444'
  },
  areaChart: {
    width: '100%'
  }
})

const Home: React.FC = () => {
  const classes = useStyles()

  return (
    <div className="app-dashboard">
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <h1 className={classes.title}>Dashboard</h1>
        </Grid>
        <Grid
          item
          xs={12}
          style={{ textAlign: 'center', marginBottom: '20px' }}>
          <RouterLink to="/dashboard/stats" style={{ textDecoration: 'none' }}>
            <Button variant="contained" color="primary">
              Go to Stats
            </Button>
          </RouterLink>
        </Grid>
        <Grid item xs={6}>
          <BarC />
        </Grid>
        <Grid item xs={6}>
          <AreaC />
        </Grid>
        <Grid item xs={6}>
          <ComposedC />
        </Grid>
        <Grid item xs={6}>
          <ScatterC />
        </Grid>
      </Grid>
    </div>
  )
}

export default Home
