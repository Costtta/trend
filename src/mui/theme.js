import { Badge, createTheme, styled } from "@mui/material";



export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        warning: {
            main: '#E58411',
        },
        grey: {
            "500": '#FBFBFB',
            "600": '#F0F0F0',
            '700': '#FDFDFD'
        },
        pinkBg: {
            main: '#FFF9F1'
        },
        footerBg: {
            main: '#F7F7F7'
        },
        featuresBg: {
            main: '#FFF9F1'
        },
        darkMode: '#464646',
        darkBag: '#000000',
        common: {
            black: '#0D1B39',
            white: '#fff'
        }
    },
    colorSchemes: {
        dark: true
    },
    components: {
        MuiStepLabel: {
            styleOverrides: {
                label: {
                    fontSize: '10px',
                    color: 'black',
                },
            },
        },
        MuiStepIcon: {
            styleOverrides: {
                root: {
                    fontSize: '20px',
                    color: '',
                    border: '1px solid black',
                    borderRadius: '50%', 
                },
                text: {
                    fill: 'black'
                }
            },
        },
        MuiStepConnector: {
            styleOverrides: {
                line: {
                    color: 'red', 
                },
            },
        },
    },
})

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        warning: {
            main: '#E58411',
        },
        grey: {
            "500": '#221506',
            "600": '#221506',
            '700': '#292B2B'
        },
        pinkBg: {
            main: '#221506'
        },
        footerBg: {
            main: '#221506'
        },
        featuresBg: {
            main: '#221506'
        },
        darkMode: '#464646',
        darkBag: '#000000',
        common: {
            black: '#fff',
            white: '#221506'
        }
    },
    colorSchemes: {
        dark: true
    },
    components: {
        MuiStepLabel: {
            styleOverrides: {
                label: {
                    fontSize: '10px',
                    color: 'black',
                },
            },
        },
        MuiStepIcon: {
            styleOverrides: {
                root: {
                    fontSize: '20px',
                    border: '1px solid black',
                    borderRadius: '50%',
                },
                text: {
                    fill: 'black'
                }
            },
        },
    },
})

export const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 5,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
        color: 'white',

    },
}));

