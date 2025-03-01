import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from "react-router";

const NavBarPhoneSearch = () => {
    const navigate = useNavigate()

    // handle home
    const handleHome = () => {
        navigate('/home')
    }
    return (
        <AppBar sx={{backgroundColor: 'transparent'}} variant="0" color="black" position="static">
            <Toolbar sx={{justifyContent: 'space-between', alignItems: 'center'}}>
                <Typography variant="h1" fontSize={'28px'} fontWeight={'bold'}>LOGO</Typography>
                <IconButton onClick={handleHome}>
                    <CloseIcon color="warning"/>
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default NavBarPhoneSearch;
