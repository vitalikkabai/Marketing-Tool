import React from 'react';
import { Tabs, AppBar } from '@material-ui/core';
import classes from './Tab.module.scss';




interface AppBarProps {
  setValue?: any;
  children?: React.ReactNode;
  value?: any;
}

const CustomAppBar = (props: AppBarProps) => {
  const { children } = props;

  const handleChange = (event: React.ChangeEvent<Record<string, never>>, newValue: number) => {
    props.setValue(newValue);
  };

  return (<AppBar
    classes={{ root: classes.rootTabsBar }}
    className={classes.Tab}
    position="static"
    key="appbar">
    <Tabs
      scrollButtons={"auto"}
      variant="scrollable"
      aria-label="scrollable auto tabs example"
      onChange={handleChange}
      value={props.value}
      indicatorColor="primary"
    >
      {children}
    </Tabs>
  </AppBar>)
}

export default CustomAppBar;




