import { Box, Button, Grid2, TextField, Typography, useTheme } from '@mui/material';
import React, { useState } from 'react'
import LockIcon from '@mui/icons-material/Lock';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSignIn } from '../redux/signInSlice';


const SignIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { data, isLoading, error } = useSelector(state => state.signIn)
    const dispatch = useDispatch()
    const handleSignIn = (e) => {
        e.preventDefault();
        dispatch(fetchSignIn({ email, password }))
    }


    const theme = useTheme()
    return (
        // <Box component={'section'} position={'relative'} className='sign-in-up' marginTop={14}>
                    <Grid2 size={{ md: 6, xs: 12 }} bgcolor={theme.palette.grey[500]} paddingTop={4.5} marginBottom={4.5}>
                        <Typography sx={{ textTransform: 'uppercase' }} textAlign={'center'} fontWeight={'bold'}>I am already a customer</Typography>
                        <form action="" onSubmit={handleSignIn}>
                            <Box display={'flex'} alignItems={'end'} paddingTop={6}>
                                <AlternateEmailIcon sx={{ mr: 1, my: 0.5 }} />
                                <TextField type='email' variant='standard' sx={{ width: '100%' }} label='E-mail Address' value={email} onChange={(e) => setEmail(e.target.value)} required />
                            </Box>
                            <br />
                            <Box display='flex' alignItems='flex-end' marginBottom={19}>
                                <LockIcon sx={{ mr: 1, my: 0.5 }} />
                                <TextField sx={{ width: '100%' }} label='Password' variant='standard' type='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                            </Box>
                            <Button type='submit' variant='contained' color='warning' sx={{ width: '100%', borderRadius: '18px', color: 'white', textTransform: 'capitalize' }}>Sign in</Button>
                        </form>
                    </Grid2>
        // </Box>
    )
}

export default SignIn;
