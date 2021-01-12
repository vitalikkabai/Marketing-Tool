import React, { ReactNode } from 'react';
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
