import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// Import Style
import styles from './App.css';
// Import Components
import Helmet from 'react-helmet';
import HeaderContainer from './components/Header/Header';
import FooterContent from './components/Footer/Footer';
import { Layout } from 'antd';
//  Import Actions
import { toggleAddPost, fetchCurrentUser } from './AppActions';

let DevTools;
if (process.env.NODE_ENV === 'development') {
  //  eslint-disable-next-line global-require
  DevTools = require('./components/DevTools').default;
}
//------------------
const { Content } = Layout;

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isMounted: false };
  }
  componentDidMount() {
    this.setState({isMounted: true}); // eslint-disable-line
    this.props.dispatch(fetchCurrentUser());
  }
  toggleAddPostSection = () => {
    this.props.dispatch(toggleAddPost());
  };

  render() {
    return (
      <div>
        {this.state.isMounted && !window.devToolsExtension && process.env.NODE_ENV === 'development' && <DevTools />}
        <div>
          <Helmet
            title="B12"
            titleTemplate="%s - Web App"
            meta={[
            { charset: 'utf-8' },
              {
                'http-equiv': 'X-UA-Compatible',
                content: 'IE=edge',
              },
              {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
              },
            ]}
          />
          <Layout>
            <Content>
              <HeaderContainer />
              <div className={styles.container}>
                {this.props.children}
              </div>
              <FooterContent />
            </Content>
          </Layout>
        </div>
      </div>
      );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  intl: PropTypes.object.isRequired,
};

function mapStateToProps(store) {
  return {
    intl: store.intl,
  };
}

export default connect(mapStateToProps)(App);
