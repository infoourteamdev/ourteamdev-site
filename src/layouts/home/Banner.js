import React from 'react'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import useStyles from '../../styles/home/Banner.style'
import '../../styles/banner.css'
import BannerSVG from '../../assets/BannerSVG'
import { Fade } from 'react-awesome-reveal'

function Banner() {
  const classes = useStyles()

  return (
    <div className={classes.main}>
      <Card className={classes.root} elevation={0}>
        <div className={classes.zindex}>
          <div className={classes.details}>
            <Fade delay={800} cascade duration={1000} triggerOnce>
              <Typography
                variant="h3"
                gutterBottom
                className={`${classes.title} animated-text-main`}
              >
                <div className={`${classes.textTitle} animated-text`}>
                  Accelerate
                </div>
                <div className={`${classes.textTitle} animated-text`}>
                  innovation with world-class
                </div>
                <div className={`${classes.textTitle} animated-text`}>
                  Tech Developers
                </div>
              </Typography>
              <Typography
                variant="subtitle1"
                gutterBottom
                className={classes.subtitle}
              >
                We design and build best quality websites and mobile apps for
                all kinds of business.
              </Typography>
              <Button
                variant="text"
                disableElevation
                className={`${classes.btnshire} btnhire`}
              >
                HIRE US
              </Button>
            </Fade>
          </div>
          <Fade duration={2000} triggerOnce>
            <BannerSVG />
          </Fade>
        </div>
      </Card>
      <div className={classes.circularbg}></div>
      <div className={classes.circularbg2}></div>
      <div className={classes.circularbg3}></div>
    </div>
  )
}

export default Banner
