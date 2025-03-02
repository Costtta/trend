import { Box, Button, Grid2, IconButton, Input, InputAdornment, Typography, useTheme } from "@mui/material"
import LockIcon from '@mui/icons-material/Lock';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import CircleIcon from '@mui/icons-material/Circle';
import { FcGoogle } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { fetchSignUp } from "../redux/signUpSlice";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const SignUp = () => {
    const theme = useTheme()
    const [name, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const { data2, isLoading2, error2 } = useSelector(state => state.signUp)
    const dispatch = useDispatch()

    const handleSignUp = (e) => {
        e.preventDefault()
        dispatch(fetchSignUp({ name, lastname, password, email }))
    }
        const [visable, setVisable] = useState(false)
        const handleVisability = () =>{
            setVisable(!visable)
        }

    return (
        <Grid2 size={{ md: 6, xs: 12 }} bgcolor={theme.palette.grey[500]} paddingTop={4.5} marginBottom={4.5}>
            <Box textAlign={'center'}>
                <Typography variant='h2' fontWeight={'bold'} fontSize={'24px'} sx={{ textTransform: 'uppercase' }}>I am new to This store</Typography>
                <Typography>Enjoy exclusive discounts & offers</Typography>
            </Box>
            <form action="" onSubmit={handleSignUp}>
                <Box display={'flex'} alignItems={'end'} marginBottom={'1rem'}>
                    <CircleIcon sx={{ mr: 1, my: 0.5 }} />
                    <Input sx={{ width: '100%' }} variant='standard' placeholder='First name' required value={name} onChange={(e) => setFirstName(e.target.value)} />
                </Box>
                <Box display={'flex'} alignItems={'end'} marginBottom={'1rem'}>
                    <CircleIcon sx={{ mr: 1, my: 0.5 }} />
                    <Input sx={{ width: '100%' }} variant='standard' placeholder='Last name' required value={lastname} onChange={(e) => setLastName(e.target.value)} />
                </Box>

                <Box display={'flex'} alignItems={'end'} marginBottom={'1rem'}>
                    <AlternateEmailIcon sx={{ mr: 1, my: 0.5 }} />
                    <Input sx={{ width: '100%' }} variant='standard' type='email' placeholder='E-mail Address' required value={email} onChange={(e) => setEmail(e.target.value)} />
                </Box>
                <Box display='flex' alignItems='flex-end' marginBottom={'5rem'}>
                    <LockIcon sx={{ mr: 1, my: 0.5 }} />
                    <Input sx={{ width: '100%' }} placeholder='Password' variant='standard' type='password' value={password} onChange={(e) => setPassword(e.target.value)} required endAdornment={
                        <InputAdornment>
                            <IconButton onClick={handleVisability}>
                                {!visable ? <VisibilityOffIcon /> : <Visibility /> }
                            </IconButton>
                        </InputAdornment>
                    } />
                </Box>
                <Box>
                    <Typography fontSize={'18px'}>Yes, I would like to receive personalized offers, tips and tricks, and other information from Store.</Typography>
                    <Typography fontSize={'18px'}>The terms and conditions for Dubai Perfumes apply. Here you can find our privacy information.</Typography>
                </Box>
                <Button sx={{ textTransform: 'capitalize', width: '100%', borderRadius: '18px', color: "WHITE" }} variant='contained' color='warning' type='submit'>sign up</Button>
                <Box textAlign={'center'}>
                    <Typography className="or"
                        sx={{
                            position: 'relative',
                            '&::before, &::after': {
                                content: '""',
                                position: 'absolute',
                                width: '40%',
                                height: '1px',
                                backgroundColor: theme.palette.common.black, // Or your desired color
                                top: '10px',
                            },
                            '&::before': {
                                left: 0,
                            },
                            '&::after': {
                                right: 0,
                            },
                        }}
                    >Or</Typography>
                    <Typography sx={{ opacity: 0.5 }}>Sign up with google</Typography>
                    <FcGoogle />
                </Box>
            </form>
        </Grid2 >
    )
}

export default SignUp;
