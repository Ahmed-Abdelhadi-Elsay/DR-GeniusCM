import * as React from 'react';
import animatonLogin from "../assets/anaimationlogin2.mp4";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props: any) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Ahmed Elsay
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const defaultTheme = createTheme();

export default function SignInSide() {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const username = data.get('number') as string;
        const password = data.get('password') as string;

        console.log('Username:', username); // For debugging
        console.log('Password:', password); // For debugging

        try {
            // Fetch user data from JSON file
            const response = await fetch('/public/data/NumberOne.json');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const users = await response.json();
            const user = users.find((user: any) => user.username === username && user.password === password);

            if (user) {
                setIsLoggedIn(true);
                sessionStorage.setItem('isLoggedIn', 'true');
                window.location.href = '/home';
            } else {
                alert('اسم المستخدم أو كلمة السر غير صحيحة');
            }
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    React.useEffect(() => {
        if (sessionStorage.getItem('isLoggedIn') === 'true') {
            setIsLoggedIn(true);
            window.location.href = '/home';
        }
    }, []);

    if (isLoggedIn) {
        return null; // Redirecting to home if already logged in
    }

    return (
        <ThemeProvider theme={defaultTheme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={6}
                    md={7}
                    sx={{
                        position: 'relative',
                        overflow: 'hidden',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <video
                        src={animatonLogin}
                        autoPlay
                        loop
                        muted
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            zIndex: -1,
                            filter: 'none',
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            تسجيل الدخول
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="number"
                                label="اسم المستخدم"
                                name="number"
                                autoComplete="number"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="كلمة السر"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="حفظ تسجيل الدخول"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2, fontSize: "1.1rem" }}
                            >
                                تسجيل الدخول
                            </Button>
                            <Copyright sx={{ mt: 5 }} />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}
