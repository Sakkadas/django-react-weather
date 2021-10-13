import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import {WeatherCloudy} from '@styled-icons/fluentui-system-regular/WeatherCloudy'


function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary">
            {'Coded by '}
            <Link color="inherit" href="https://github.com/sakkadas">
                <span style={{fontSize: '16px'}}><b>Ilya Nesterov</b></span>
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default function StickyFooter() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '83vh',
            }}
        >
            <CssBaseline/>
            <Box
                component="footer"
                sx={{
                    py: 3,
                    px: 2,
                    mt: 'auto',
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'light'
                            ? theme.palette.grey[100]
                            : theme.palette.grey[400],
                }}
            >
                <Container maxWidth="sm">
                    <Typography variant="body1">
                       <span style={{fontSize: '18px'}}>My Django React Weather App.

                       </span> <WeatherCloudy style={{width: '18%'}}/>
                    </Typography>
                    <Copyright/>
                </Container>
            </Box>
        </Box>
    );
}