import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { Link as RouterLink } from 'react-router-dom'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    justifyContent: 'center'
  },
  nav: {
    flexGrow: 1,
    justifyContent: 'center',
    marginBottom: '15px'
  },
  card: {
    maxWidth: 300
  },
  media: {
    height: 140
  },
  title: {
    fontSize: '46px',
    margin: '40px 0 0px',
    textAlign: 'center',
    color: 'green'
  }
})

export default () => {
  const classes = useStyles()
  const loop = new Array(10).fill(Math.random())

  return (
    <div className="app-home">
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <h1 className={classes.title}>Blog</h1>
        </Grid>
        <Grid
          item
          xs={12}
          style={{ textAlign: 'center', marginBottom: '20px' }}>
          <RouterLink to="/" style={{ textDecoration: 'none' }}>
            <Button variant="contained" color="primary">
              Go Home
            </Button>
          </RouterLink>
        </Grid>
        {loop.map((v, k) => (
          <Grid key={k} item>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://source.unsplash.com/random"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Meow - {v}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p">
                    Lizards are a widespread group of reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}
