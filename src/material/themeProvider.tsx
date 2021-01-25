import React  from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { StylesProvider } from '@material-ui/core/styles';

import { unstable_createMuiStrictModeTheme as createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

export const theme = createMuiTheme({
    overrides: {
        MuiCssBaseline: {
            '@global': {
                html: {
                    WebkitFontSmoothing: 'auto',
                },
            },
        },
    },
    typography: {
        h1: {
            fontFamily: 'liberation-sans',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '36px',
            lineHeight: '54px',
            textTransform: "uppercase",
        },
        h2: {
            fontFamily: 'liberation-sans',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: '30px',
            lineHeight: '150%',
        },
        h3: {
            fontFamily: 'liberation-sans',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: '24px',
            lineHeight: "150%",
            letterSpacing: '0.0015em',
        },
        h4: {
            fontFamily: 'liberation-sans',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: '20px',
            lineHeight: '150%',
            letterSpacing: '0.0015em',
            textTransform: "uppercase",
        },
        h5: {
            fontFamily: 'liberation-sans',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '24px',
            lineHeight: '150%',
            letterSpacing: 0,
            '@media (max-width:960px)': {
                fontSize: '14px',
            },
        },
        h6: {
            fontFamily: 'liberation-sans',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '18px',
            lineHeight: '150%',
        },
        button: {
            fontFamily: 'liberation-sans',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: '18px',
            lineHeight: '150%',
            textTransform: "uppercase",
        },
        subtitle1: {
            fontFamily: "liberation-sans",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "16px",
            lineHeight: "150%",
            letterSpacing: '0.005em',
        },
        subtitle2: {
            fontFamily: "liberation-sans",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "14px",
            lineHeight: "142%",
            letterSpacing: "0.005em",
        },
        body1: {
            fontFamily: 'liberation-sans',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '13px',
            lineHeight: '150%',
            letterSpacing: '0.015em',
        },
        body2: {
            fontFamily: 'liberation-sans',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: '18px',
            lineHeight: '150%',
            letterSpacing: '0.015em',
        },
        caption: {
            fontFamily: 'liberation-sans',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '12px',
            lineHeight: '150%',
            letterSpacing: '0.03em',
        },
        overline: {
            fontFamily: 'liberation-sans',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '10px',
            lineHeight: '150%',
            letterSpacing: '0.02em',
            textTransform: "none"
        },
    },
    palette: {
        primary: {
            main: '#4285F4'
        },
        secondary: {
            main: '#432480'
        },
        success: {
            main: '#FFC221'
        },
        error: {
            main: '#F44336'
        },
    }
});

// eslint-disable-next-line react/prop-types
const OverridesCss:React.FunctionComponent = ({ children }) => {
    return (
        <StylesProvider injectFirst>

            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </StylesProvider>

    );
}

export default OverridesCss;
