import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// Import Style
import styles from './App.css';
// Import Components
import Helmet from 'react-helmet';
import HeaderContainer from './components/Header/Header';
import FooterContent from './components/Footer/Footer';
import {Layout} from 'antd';
// Import Actions
import { toggleAddPost } from './AppActions';
import { switchLanguage } from '../../modules/Intl/IntlActions';

let DevTools;
if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line global-require
  DevTools = require('./components/DevTools').default;
}
//------------------
const {Content} = Layout;

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isMounted: false };
  }
  //----lifecyle
  componentDidMount() {
    this.setState({isMounted: true}); // eslint-disable-line
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
            title="MERN()()()()RERERE Starter - Blog App"
            titleTemplate="%s - Blog App"
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
            <HeaderContainer
            />
            <Content>
              <div className={styles.container}>
                {this.props.children}
              </div>
            </Content>
            <FooterContent />
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

//--- enhancers helpers
// Retrieve data from store as props
function mapStateToProps(store) {
  return {
    intl: store.intl,
  };
}

export default connect(mapStateToProps)(App);
