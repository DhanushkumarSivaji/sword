import React from 'react';
import {connect} from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import TabPanel from './TabPanel'
import { activeTab } from '../actions/tab-actions';


function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
}));

const NavTabs = (props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0)

  const handleTabChange = (event, newValue) => {
    props.dispatch(activeTab(newValue + 1))
    setValue(newValue)
  };

  return (
    <div className={classes.root}>
      <Paper position="static">
        <Tabs value={value} onChange={handleTabChange} aria-label="simple tabs example" centered>
          <Tab label="Tab One" {...a11yProps(1)} />
          <Tab label="Tab Two" {...a11yProps(2)} />
          <Tab label="Tab Three" {...a11yProps(3)} />
        </Tabs>
      </Paper>
      <TabPanel value={value} index={value} />
    </div>
  );
}

export default connect()(NavTabs)
