import { Box, Button, Grid2, TextField, Typography, useTheme } from "@mui/material"
import LockIcon from '@mui/icons-material/Lock';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import CircleIcon from '@mui/icons-material/Circle';
import { FcGoogle } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { fetchSignUp } from "../redux/signUpSlice";


const SignUp = () => {
    const theme = useTheme()
    const [name, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const [password, setPasswordUp] = useState('')
    const [email, setEmailUp] = useState('')
    const { data2, isLoading2, error2 } = useSelector(state => state.signUp)
    const dispatch = useDispatch()
    
    
    const handleSignUp = (e) => {
        e.preventDefault()
        dispatch(fetchSignUp({name, lastname, password, email}))
    }
    console.log(data2);
    return (
        <Grid2 size={{ md: 6, xs: 12 }} bgcolor={theme.palette.grey[500]} paddingTop={4.5} marginBottom={4.5}>
            <Box textAlign={'center'}>
                <Typography variant='h2' fontWeight={'bold'} fontSize={'24px'} sx={{ textTransform: 'uppercase' }}>I am new to This store</Typography>
                <Typography>Enjoy exclusive discounts & offers</Typography>
            </Box>
            <form action="" onSubmit={handleSignUp}>
                <Box display={'flex'} alignItems={'end'}>
                    <CircleIcon sx={{ mr: 1, my: 0.5 }} />
                    <TextField sx={{ width: '100%' }} variant='standard' placeholder='First name' required value={name} onChange={(e) => setFirstName(e.target.value)} />
                </Box>
                <Box display={'flex'} alignItems={'end'}>
                    <CircleIcon sx={{ mr: 1, my: 0.5 }} />
                    <TextField sx={{ width: '100%' }} variant='standard' placeholder='Last name' required value={lastname} onChange={(e) => setLastName(e.target.value)} />
                </Box>

                <Box display={'flex'} alignItems={'end'}>
                    <AlternateEmailIcon sx={{ mr: 1, my: 0.5 }} />
                    <TextField sx={{ width: '100%' }} variant='standard' type='email' placeholder='E-mail Address' required value={email} onChange={(e) => setEmailUp(e.target.value)} />
                </Box>
                <Box display={'flex'} alignItems={'end'}>
                    <LockIcon sx={{ mr: 1, my: 0.5 }} />
                    <TextField sx={{ width: '100%' }} variant='standard' type='password' placeholder='Last name' required value={password} onChange={(e) => setPasswordUp(e.target.value)} />
                </Box>
                <Box>
                    <Typography fontSize={'18px'}>Yes, I would like to receive personalized offers, tips and tricks, and other information from Store.</Typography>
                    <Typography fontSize={'18px'}>The terms and conditions for Dubai Perfumes apply. Here you can find our privacy information.</Typography>
                </Box>
                <Button sx={{ textTransform: 'capitalize', width: '100%', borderRadius: '18px', color: "WHITE" }} variant='contained' color='warning' type='submit'>sign up</Button>
                <Typography>Or</Typography>
                <Typography>Sign up with google</Typography>
                <FcGoogle />
            </form>
        </Grid2>
    )
}

export default SignUp;
