import React, { useEffect, useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { StylesProvider } from '@material-ui/core/styles';
import {
    unstable_createMuiStrictModeTheme as createMuiTheme,
    ThemeProvider,
} from '@material-ui/core/styles';
import { useHistory } from 'react-router';

// eslint-disable-next-line react/prop-types
const OverridesCss: React.FunctionComponent = ({ children }) => {
    const history = useHistory();

    const getPrimaryColor = () => {
        if (history.location.pathname.includes('product')) return '#EDCD27';
        if (history.location.pathname.includes('market-research'))
            return '#FFAB08';
        if (history.location.pathname.includes('brand-creation'))
            return '#EE6B1D';
        if (history.location.pathname.includes('sales-channels'))
            return '#43A047';
        if (history.location.pathname.includes('customer-support'))
            return '#0097A6';
        if (history.location.pathname.includes('brand-awareness'))
            return '#7B1FA2';
        if (history.location.pathname.includes('improvements'))
            return '#DA4B7B';
        if (history.location.pathname.includes('sales-statistics'))
            return '#EA4335';
        return '#4285F4';
    };

    const [color, setColor] = useState(getPrimaryColor());

    useEffect(() => {
        history.listen((location) => {
            if (location.pathname.includes('product')) {
                setColor('#EDCD27');
                return;
            }
            if (location.pathname.includes('market-research')) {
                setColor('#FFAB08');
                return;
            }
            if (location.pathname.includes('brand-creation')) {
                setColor('#EE6B1D');
                return;
            }
            if (location.pathname.includes('customer-support')) {
                setColor('#0097A6');
                return;
            }
            if (location.pathname.includes('sales-channels')) {
                setColor('#43A047');
                return;
            }
            if (location.pathname.includes('brand-awareness')) {
                setColor('#7B1FA2');
                return;
            }
            if (location.pathname.includes('improvements')) {
                setColor('#DA4B7B');
                return;
            }
            if (location.pathname.includes('sales-statistics')) {
                setColor('#EA4335');
                return;
            } else setColor('#4285F4');
        });
    }, [history]);

    const theme = createMuiTheme({
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
                fontFamily: 'Neue Haas Grotesk',
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: '36px',
                lineHeight: '54px',
                textTransform: 'uppercase',
            },
            h2: {
                fontFamily: 'Neue Haas Grotesk',
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: '30px',
                lineHeight: '150%',
            },
            h3: {
                fontFamily: 'Neue Haas Grotesk',
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: '24px',
                lineHeight: '150%',
                letterSpacing: '0.0015em',
            },
            h4: {
                fontFamily: 'Neue Haas Grotesk',
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: '20px',
                lineHeight: '150%',
                letterSpacing: '0.0015em',
                textTransform: 'uppercase',
            },
            h5: {
                fontFamily: '"Neue Haas Grotesk"',
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
                fontFamily: '"Neue Haas Grotesk"',
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: '18px',
                lineHeight: '150%',
            },
            button: {
                fontFamily: '"Neue Haas Grotesk"',
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: '18px',
                lineHeight: '150%',
                textTransform: 'uppercase',
            },
            subtitle1: {
                fontFamily: '"Neue Haas Grotesk"',
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: '16px',
                lineHeight: '150%',
                letterSpacing: '0.005em',
            },
            subtitle2: {
                fontFamily: '"Neue Haas Grotesk"',
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: '14px',
                lineHeight: '142%',
                letterSpacing: '0.005em',
            },
            body1: {
                fontFamily: '"Neue Haas Grotesk"',
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: '13px',
                lineHeight: '150%',
                letterSpacing: '0.015em',
            },
            body2: {
                fontFamily: '"Neue Haas Grotesk"',
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: '18px',
                lineHeight: '150%',
                letterSpacing: '0.015em',
            },
            caption: {
                fontFamily: 'Neue Haas Grotesk',
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: '12px',
                lineHeight: '150%',
                letterSpacing: '0.03em',
            },
            overline: {
                fontFamily: 'Neue Haas Grotesk',
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: '10px',
                lineHeight: '150%',
                letterSpacing: '0.02em',
                textTransform: 'none',
            },
        },
        palette: {
            primary: {
                main: color,
            },
            secondary: {
                main: '#4285F4',
            },
            success: {
                main: '#FFC221',
            },
            error: {
                main: '#F44336',
            },
        },
    });

    return (
        <StylesProvider injectFirst>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </StylesProvider>
    );
};

export default OverridesCss;
