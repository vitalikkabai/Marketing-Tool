import React from "react";
import Box from "@material-ui/core/Box";
import "./Tab.module.scss";



interface TabPanelProps {
  children?: React.ReactNode;
  index?: any;
  value?: any;
  className?: any;
}

const TabPanel: React.FC<TabPanelProps> = (props) => {
  const { children, value, index } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
    >
      {value === index && (
        <Box>
          {children}
        </Box>
      )}
    </div>
  );
}

export default TabPanel;