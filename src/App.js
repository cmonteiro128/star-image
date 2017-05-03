import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {mainTheme} from './theme.js';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import APOD from './components/APOD'
import Curiosity from './components/Curiosity'
import withWidth, {MEDIUM, LARGE} from 'material-ui/utils/withWidth';
import spacing from 'material-ui/styles/spacing';
import './App.css';

const NotFound = () => (
  <h1>404.. This page is not found!</h1>)


class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleTouchTap = this.handleTouchTap.bind(this);

    this.state = { open: false, docked: false };
  }

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
      open, docked
    } = this.state;

    const styles = this.getStyles();

    let showMenuIconButton = true;

    if (this.props.width === LARGE) {
      open = true;
      docked = true;
      showMenuIconButton = false;

      styles.navDrawer = {
        //zIndex: styles.appBar.zIndex - 1,
      };
      styles.root.paddingLeft = 256;
    }
    
    return (
      <Router>
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
              docked={docked}
              style={styles.navDrawer}
              onRequestChange={this.handleChangeRequestNavDrawer}
              >
              <MenuItem 
                containerElement={<Link to="/apod" />}
                >
                APOD
              </MenuItem>
              <MenuItem 
                containerElement={<Link to="/curiosity" />}
                >
                Curiosity
              </MenuItem>
              <MenuItem 
                containerElement={<Link to="/opportunity" />}
                >
                Opportunity
              </MenuItem>            
            </Drawer>
            <div style={styles.root}>
              <div style={styles.content}>
                <Switch>
                    <Route exact path='/' component={APOD} />
                    <Route path='/apod' component={APOD} />
                    <Route path='/curiosity' component={Curiosity} />
                    <Route component={NotFound} />
                </Switch>
              </div>
            </div>
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default withWidth()(App);

