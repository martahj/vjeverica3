// @flow
import React from 'react';
// import selectn from 'selectn';
import Head from 'next/head';
import { CloudinaryContext } from 'cloudinary-react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Navigation from '../components/Navigation';

const appStyle = {
  backgroundColor: 'rgba(209, 142, 10, .5)',
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  // '@font-face': {
  //   fontFamily: 'Bitstream Vera Serif Bold',
  //   src: "url('https://mdn.mozillademos.org/files/2468/VeraSeBd.ttf')",
  // },
};

const cloudinaryContextStyle = {
  // width: '100%',
  // height: '100%',
};

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
  // backgroundImage: 'radial-gradient(rgba(209, 66, 10, .9) 0%, rgba(209, 66, 10, .8) 50%, rgba(209, 142, 10, .5) 100%)',
  backgroundImage: 'radial-gradient(rgba(209, 142, 10, .4) 0%, rgba(209, 142, 10, .2) 50%, rgba(209, 142, 10, .05) 100%)',
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
  color: 'rgb(12, 50, 112)',
  // width: '100%',
};

const muiTheme = getMuiTheme({
  fontFamily: "'Spectral', serif",
  palette: {
    textColor: 'rgb(12, 50, 112)',
  },
});

const childBoxStyle = {
  display: 'flex',
  flexDirection: 'row',
  backgroundColor: 'rgba(239, 229, 208, .8)',
  // backgroundColor: 'rgba(209, 142, 10, .4)',
  border: '1px solid rgba(239, 229, 208, .5)',
  marginLeft: '5%',
  marginRight: '5%',
  marginBottom: 20,
  marginTop: 20,
  padding: '5%',
  color: 'rgb(12, 50, 112)',
};

const Layout = props => (
  <div>
    <Head>
      <link href="https://fonts.googleapis.com/css?family=Spectral" rel="stylesheet" />
    </Head>
    <MuiThemeProvider muiTheme={muiTheme}>
      <CloudinaryContext cloudName="dfts7qlgf" style={cloudinaryContextStyle}>
        <div style={backgroundStyle}>
          <div style={contentBoxStyle}>
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
              {props.children}
            </div>
          </div>
        </div>
      </CloudinaryContext>
    </MuiThemeProvider>
  </div>
);

export default Layout;
