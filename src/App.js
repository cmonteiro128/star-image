import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {mainTheme} from './theme.js';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import MainContent from './components/MainContent'
import withWidth, {MEDIUM, LARGE} from 'material-ui/utils/withWidth';
import spacing from 'material-ui/styles/spacing';
import './App.css';

let drawerStyle = {
    'top': '64px',
};

class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleTouchTap = this.handleTouchTap.bind(this);
  }

  state = {
    open: false,
  };

  handleTouchTapLeftIconButton = () => {
    this.setState({
      open: !this.state.open,
    });
  };

  handleChangeRequestNavDrawer = (open) => {
    this.setState({
      open: open,
    });
  };

  handleRequestClose() {
    this.setState({
      open: false,
    });
  }

  handleTouchTap() {
    this.setState({
      open: true,
    });
  }

  handleChangeMuiTheme = (muiTheme) => {
    this.setState({
      muiTheme: muiTheme,
    });
  };

  getStyles() {
    const styles = {
      main: {
        'backgroundColor': "#e1e2e1",
      },
      appBar: {
        position: 'fixed',
        // Needed to overlap the examples
        //zIndex: this.state.muiTheme.zIndex.appBar + 1,
        top: 0,
      },
      content: {
        margin: spacing.desktopGutter,
      },
      root: {
        paddingTop: spacing.desktopKeylineIncrement,
        height: '100vh',
        
      },
      contentWhenMedium: {
        margin: `${spacing.desktopGutter * 2}px ${spacing.desktopGutter * 3}px`,
      },
    };

    if (this.props.width === MEDIUM || this.props.width === LARGE) {
      styles.content = Object.assign(styles.content, styles.contentWhenMedium);
    }

    return styles;
  }


  render() {
    let {
      open,
    } = this.state;

    const styles = this.getStyles();

    let showMenuIconButton = true;

    if (this.props.width === LARGE) {
      open = true;
      showMenuIconButton = false;

      styles.navDrawer = {
        //zIndex: styles.appBar.zIndex - 1,
      };
      styles.root.paddingLeft = 256;
    }
    
    return (
      <MuiThemeProvider muiTheme={mainTheme}>
        <div className="App">
          <AppBar
            title="NASA Images"
            showMenuIconButton={showMenuIconButton}
            zDepth={0}
            onLeftIconButtonTouchTap={this.handleTouchTapLeftIconButton}
            style={styles.appBar}
          />
          <Drawer 
            open={open} 
            style={styles.navDrawer}
            containerStyle={drawerStyle}
            onRequestChangeNavDrawer={this.handleChangeRequestNavDrawer}
            >
            <MenuItem>APOD</MenuItem>
            <MenuItem>Curiosity</MenuItem>
            <MenuItem>Opportunity</MenuItem>
          </Drawer>
          <div style={styles.root}>
            <div style={styles.content}>
              <MainContent  />
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withWidth()(App);
