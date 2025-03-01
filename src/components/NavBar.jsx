import {
    AppBar,
    ClickAwayListener,
    Container,
    Grid2,
    Grow,
    Input,
    InputAdornment,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    MenuItem,
    MenuList,
    Paper,
    Popper,
    Toolbar,
    Typography,
    useTheme,
} from "@mui/material";
import { BsHandbagFill } from "react-icons/bs";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { StyledBadge } from "../mui/theme";
import { BiSearchAlt } from "react-icons/bi";
import En from "../assets/En.webp";
import { useEffect, useRef, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, NavLink, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../redux/themeSlice";

const NavBar = () => {

    // cart products
    const cart = useSelector(state => state.cart.items.length)
    // redux
    const darkModeState = useSelector(state => state.themeMode.darkMode)
    const dispatch = useDispatch();

    // theme
    const theme = useTheme();

    // menu toggle
    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);



    // toggle
    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    // close
    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === "Tab") {
            event.preventDefault();
            setOpen(false);
        } else if (event.key === "Escape") {
            setOpen(false);
        }
    }

    const navigate = useNavigate()

    // handle search
    const handleSearch = () => {
        navigate('/search')
    }

    const prevOpen = useRef(open);
    useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }
        prevOpen.current = open;
    }, [open]);

    return (
        <AppBar
            sx={{ backgroundColor: "transparent" }}
            color="black"
            position="static"
            variant="0"
        >
            <Container>
                <Toolbar sx={{ padding: "0 !important", display: 'block' }}>
                    <Grid2 container flexGrow={{ md: 0, xs: 0 }} alignItems={"center"} justifyContent={'space-between'}>
                        <Grid2 size={{ md: 4, sm: 4, xs: 6 }}>
                            <Typography variant="h1" fontSize={"28px"} fontWeight={"bold"}>
                                LOGO
                            </Typography>
                        </Grid2>
                        <Grid2 size={{ md: 4 }} display={{ md: 'block', xs: 'none' }}>
                            <List
                                sx={{
                                    display: { md: "flex", xs: "none" },
                                    justifyContent: "center",
                                }}
                            >
                                <ListItem sx={{ width: "fit-content" }}>
                                    <ListItemButton>
                                        <ListItemText
                                            primary={
                                                <NavLink
                                                    style={{ color: theme.palette.common.black, textDecoration: "none" }}
                                                    to={"/home"}
                                                >
                                                    Home
                                                </NavLink>
                                            }
                                            sx={{
                                                textAlign: "center",
                                                width: "fit-content",
                                                "& .MuiListItemText-primary": {
                                                    width: "fit-content",
                                                },
                                            }}
                                        />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem sx={{ width: "fit-content" }}>
                                    <ListItemButton>
                                        <ListItemText
                                            primary={
                                                <NavLink
                                                    style={{ color: theme.palette.common.black, textDecoration: "none" }}
                                                    to={"/shop"}
                                                >
                                                    Shop
                                                </NavLink>
                                            }
                                            sx={{
                                                textAlign: "center",
                                                width: "fit-content",
                                                "& .MuiListItemText-primary": {
                                                    width: "fit-content",
                                                },
                                            }}
                                        />
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        </Grid2>
                        <Grid2 size={{ md: 4, sm: 4, xs: 6 }} flexGrow={''}>
                            <List sx={{ display: "flex", padding: 0 }}>
                                <ListItem
                                    sx={{
                                        padding: 0,
                                        width: "fit-content",
                                        display: { md: "none", xs: "flex" },
                                    }}
                                >
                                    <ListItemButton sx={{ padding: 0 }} onClick={handleSearch}>
                                        <ListItemIcon
                                            sx={{
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                color: theme.palette.warning.main,
                                                fontSize: "20px",
                                            }}
                                        >
                                            <BiSearchAlt />
                                        </ListItemIcon>
                                    </ListItemButton>
                                </ListItem>
                                <ListItem
                                    sx={{ padding: 0, display: { md: "flex", xs: "none" } }}
                                >
                                    {/* search input start */}

                                    <Input endAdornment={
                                        <InputAdornment position="end">
                                            <BiSearchAlt cursor={"pointer"} size={"20px"} onClick={handleSearch}/>
                                        </InputAdornment>} 
                                        sx={{'&::after': {borderBottom: `0px`}, '&::before' : {borderBottom: `0px`}, backgroundColor: theme.palette.grey[700], borderRadius: '19.5px', '& .MuiInputBase-input::placeholder': {fontSize: '15px'}, px: 0.5}} placeholder="Search"/>

                                    {/* search input end */}
                                </ListItem>
                                <ListItem sx={{ padding: 0, width: "fit-content" }}>
                                    <ListItemButton sx={{ padding: 0 }}>
                                        <Link to={'/cart'}>
                                            <ListItemIcon
                                                sx={{
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                }}
                                            >
                                                <StyledBadge
                                                    badgeContent={cart === 0 ? '0' : cart}
                                                    color="warning"
                                                    sx={{ color: theme.palette.common.black }}
                                                >
                                                    <BsHandbagFill sx={{ color: theme.palette.darkBag }} />
                                                </StyledBadge>
                                            </ListItemIcon>
                                        </Link>
                                    </ListItemButton>
                                </ListItem>
                                <ListItem
                                    sx={{ padding: 0, display: { md: "flex", xs: "none" }, maxWidth: '48px' }}
                                >
                                    <ListItemButton sx={{ padding: 0, maxWidth: '48px', justifyContent: 'center' }} onClick={() => dispatch(toggleTheme())}>
                                        <ListItemIcon
                                            sx={{
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                minWidth: '24px',
                                                flexGrow: 0
                                            }}
                                        >
                                            {darkModeState ? <LightModeIcon sx={{ color: theme.palette.warning.main }} /> : <DarkModeIcon sx={{ color: theme.palette.darkMode }} />}
                                        </ListItemIcon>
                                    </ListItemButton>
                                </ListItem>
                                <ListItem
                                    sx={{ padding: 0, display: { md: "flex", xs: "none" }, maxWidth: '90px' }}
                                >
                                    <ListItemButton sx={{ padding: 0 }}>
                                        <ListItemIcon
                                            sx={{
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                            }}
                                        >
                                            <img src={En} alt="united-state-flag" />
                                        </ListItemIcon>
                                        <ListItemText primary="En" sx={{ fontSize: "14px" }} />
                                    </ListItemButton>
                                </ListItem>
                                {/* menu for mobile screen */}
                                <ListItem sx={{ display: { md: "none", xs: "flex", padding: 0 }, width: 'fit-content !important' }}>
                                    <ListItemButton
                                        ref={anchorRef}
                                        id="composition-button"
                                        aria-controls={open ? "composition-menu" : undefined}
                                        aria-expanded={open ? "true" : undefined}
                                        aria-haspopup="true"
                                        onClick={handleToggle}
                                        sx={{ width: 'fit-content', padding: 0 }}
                                    >
                                        <ListItemIcon sx={{ justifyContent: 'center' }}>
                                            <MenuIcon style={{ color: theme.palette.warning.main }} />
                                        </ListItemIcon>
                                    </ListItemButton>
                                    <Popper
                                        open={open}
                                        anchorEl={anchorRef.current}
                                        role={undefined}
                                        placement="bottom-start"
                                        transition
                                        disablePortal
                                    >
                                        {({ TransitionProps, placement }) => (
                                            <Grow
                                                {...TransitionProps}
                                                style={{
                                                    transformOrigin:
                                                        placement === "bottom-start"
                                                            ? "left top"
                                                            : "left bottom",
                                                }}
                                            >
                                                <Paper>
                                                    <ClickAwayListener onClickAway={handleClose}>
                                                        <MenuList
                                                            autoFocusItem={open}
                                                            id="composition-menu"
                                                            aria-labelledby="composition-button"
                                                            onKeyDown={handleListKeyDown}
                                                        >
                                                            <MenuItem onClick={handleClose}>
                                                                <ListItemIcon
                                                                    sx={{
                                                                        display: "flex",
                                                                        justifyContent: "center",
                                                                        alignItems: "center",
                                                                    }}
                                                                    onClick={() => dispatch(toggleTheme())}
                                                                >
                                                                    {darkModeState ? <LightModeIcon sx={{ color: theme.palette.warning.main }} /> : <DarkModeIcon sx={{ color: theme.palette.darkMode }} />}
                                                                </ListItemIcon>
                                                            </MenuItem>
                                                            <MenuItem onClick={handleClose}>
                                                                <ListItemText
                                                                    primary={
                                                                        <NavLink
                                                                            style={{ color: theme.palette.common.black, textDecoration: "none" }}
                                                                            to={"/home"}
                                                                        >
                                                                            Home
                                                                        </NavLink>
                                                                    }
                                                                    sx={{
                                                                        textAlign: "center",
                                                                        width: "fit-content",
                                                                        "& .MuiListItemText-primary": {
                                                                            width: "fit-content",
                                                                        },
                                                                    }}
                                                                />
                                                            </MenuItem>
                                                            <MenuItem onClick={handleClose}>
                                                                <ListItemText
                                                                    primary={
                                                                        <NavLink
                                                                            style={{ color: theme.palette.common.black, textDecoration: "none" }}
                                                                            to={"/shop"}
                                                                        >
                                                                            Shop
                                                                        </NavLink>
                                                                    }
                                                                    sx={{
                                                                        textAlign: "center",
                                                                        width: "fit-content",
                                                                        "& .MuiListItemText-primary": {
                                                                            width: "fit-content",
                                                                        },
                                                                    }}
                                                                />
                                                            </MenuItem>
                                                        </MenuList>
                                                    </ClickAwayListener>
                                                </Paper>
                                            </Grow>
                                        )}
                                    </Popper>
                                </ListItem>
                            </List>
                        </Grid2>
                    </Grid2>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default NavBar;
