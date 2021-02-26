import React from 'react';
import { Tabs, AppBar, useTheme } from '@material-ui/core';
import classes from './Tab.module.scss';

interface AppBarProps {
    setValue?: (value: number) => void;
    children?: React.ReactNode;
    value?: number;
}

const CustomAppBar: React.FC<any> = (props: AppBarProps) => {
    const { children } = props;

    const handleChange = (
        event: React.ChangeEvent<Record<string, never>>,
        newValue: number
    ) => {
        props.setValue && props.setValue(newValue);
    };
    const theme = useTheme();

    return (
        <AppBar
            classes={{ root: classes.rootTabsBar }}
            className={classes.Tab}
            position="static"
            key="appbar"
            style={{ color: theme.palette.primary.main }}
        >
            <Tabs
                scrollButtons={'auto'}
                variant="scrollable"
                aria-label="scrollable auto tabs example"
                onChange={handleChange}
                value={props.value}
                indicatorColor="primary"
            >
                {children}
            </Tabs>
        </AppBar>
    );
};

export default CustomAppBar;
