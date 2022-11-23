import React from 'react'
import {makeStyles} from '@material-ui/core'
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core';
import ScatterPlot from '../Graphics/ScatterPlot';
import LineGraph from '../Graphics/LineGraph';
import ChangeFunction from '../Graphics/ChangeFunction';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
    navTab: {
        backgroundColor: "#7df9ff"
    }
});

export default function Home() {
    const classes = useStyles();
    const [selectedTab, setSelectedTab] = React.useState(0);

    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
    }

  return (
    <>
        <Paper className={classes.root}>
            <Tabs
                className={classes.navTab}
                value={selectedTab}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="color"
                centered
                aria-label="tabs navigation"
            >
                <Tab label="Scatter Plot"/>
                <Tab label="Line Graph"/>
                <Tab label="Gauge"/>
            </Tabs>
        </Paper>
        {selectedTab === 0 && <ScatterPlot/>}
        {selectedTab === 1 && <LineGraph />}
        {selectedTab === 2 && <ChangeFunction />}
    </>
  );
}
