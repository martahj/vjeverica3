// @flow
import React, { PureComponent, Children } from 'react';
// import selectn from 'selectn';
import Head from 'next/head';
import { CloudinaryContext } from 'cloudinary-react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Navigation from '../components/Navigation';
import Auth from '../components/Auth';

try {
  injectTapEventPlugin();
} catch (err) {
  console.log('injectTapEventPlugin error', err);
}


// const redColor = '209, 66, 10';
const yellowColor = '209, 142, 10';
const blueColor = '12, 50, 112';
const lighterYellowColor = '232, 214, 176';

const backgroundStyle = {
  backgroundImage: 'url(/static/nature-field-flowers-yellow.jpg)',
  backgroundSize: 'cover',
  // backgroundSize: 'contain',
  height: '100%',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
};

const contentBoxStyle = {
  backgroundImage: `radial-gradient(rgba(${yellowColor}, .4) 0%, rgba(${yellowColor}, .2) 50%, rgba(${yellowColor}, .05) 100%)`,
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  textAlign: 'center',
  flexDirection: 'column',
};

const headerHolderStyle = {
  width: '100%',
};

const headerStyle = {
  fontFamily: "'Spectral', serif",
  color: `rgb(${blueColor})`,
};

const muiTheme = getMuiTheme({
  fontFamily: "'Spectral', serif",
  palette: {
    textColor: `rgb(${blueColor})`,
  },
});

const childBoxStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  flexWrap: 'wrap',
  textAlign: 'left',
  backgroundColor: `rgba(${lighterYellowColor}, .8)`,
  marginLeft: '5%',
  marginRight: '5%',
  marginBottom: 20,
  marginTop: 20,
  padding: '5%',
  color: 'rgb(12, 50, 112)',
  fontFamily: "'Spectral', serif",
};

type User = {
  email: string,
  admin: boolean,
};

type LayoutState = {
  user: ?User,
  token: ?string,
};

type LayoutProps = {
  children: any,
}

class Layout extends PureComponent<LayoutProps, LayoutState> {
  state = {
    user: null,
    token: null,
  };

  updateUser = (user: User): void => {
    this.setState({ user });
  }

  updateToken = (token: string): void => this.setState({ token })

  logOut = (): void => this.setState({ user: null, token: null })

  logIn = ({ user, token }: LayoutState): void => {
    this.updateToken(token);
    this.updateUser(user);
  }

  render() {
    const { user, token } = this.state;
    const loggedIn = Boolean(user && token);
    return (
      <div>
        <Head>
          <link href="https://fonts.googleapis.com/css?family=Spectral" rel="stylesheet" />
        </Head>
        <MuiThemeProvider muiTheme={muiTheme}>
          <CloudinaryContext cloudName="dfts7qlgf">
            <div style={backgroundStyle}>
              <div style={contentBoxStyle}>
                <Auth
                  loggedIn={loggedIn}
                  logIn={this.logIn}
                  logOut={this.logOut}
                />
                {loggedIn && (
                  <div>
                    {`You are logged in as ${user.email}`}
                  </div>
                )}
                <div style={headerHolderStyle}>
                  <h1 style={headerStyle}>Vjeverica Productions</h1>
                  <h3 style={{ ...headerStyle, marginBottom: 0 }}>
                    SHIRLEY JOHNSON
                  </h3>
                  <h3 style={{ ...headerStyle, marginTop: 0 }}>
                    Accordion and Vocals
                  </h3>
                </div>
                <Navigation />
                <div style={childBoxStyle}>
                  {Children.map(this.props.children, child => (
                    React.cloneElement(child, {
                      token,
                      user,
                    })
                  ))}
                </div>
              </div>
            </div>
          </CloudinaryContext>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default Layout;
