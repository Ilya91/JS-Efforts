import React from 'react';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';

const Main = () => (
    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <AppBar title="My AppBar" />
    </MuiThemeProvider>
);

export default Main;