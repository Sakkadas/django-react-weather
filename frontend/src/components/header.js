import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'
import {format} from 'date-fns'
import { makeStyles } from '@material-ui/core'


const useStyles = makeStyles((theme) => {
    return {
        appBar: {
            width: '100%'
        }
    }
})

function Header() {
    const classes = useStyles()
    return <React.Fragment>
        <AppBar
            position="fixed"
            elevation={0}
            color="primary"
        >
            <Toolbar>
                <Typography className={classes.date}>
                    Today is the {format(new Date(), 'do MMMM Y')}
                </Typography>
            </Toolbar>
        </AppBar>
    </React.Fragment>
}

export default Header