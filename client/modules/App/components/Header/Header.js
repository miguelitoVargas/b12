import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import {Layout, Menu, Button} from 'antd';

const {Header} = Layout;

// Import Style
import styles from './Header.css';

class HeaderContainer extends Component {

  constructor(props) {
    super(props);
    console.log('constructor', this.props);
    this.headerContent = this.headerContent.bind(this);
  }
  //---------life cycle
  componentDidMount() {
    console.log('moounted', styles.header);
  }

  renderClientsMenu() {
    return (
      <div className={styles.appMenu}>
        <Button type="primary" className={styles.menuBtn}></Button>
        <Menu
          className={styles.appDaysContainer}
          type="primary"
          defaultSelectedKeys={['yesterday']}
          mode="horizontal"
        >
          <Menu.Item className={styles.appDaysMenu} key="today"> today</Menu.Item>
          <Menu.Item className={styles.appDaysMenu} key="yesterday">yesterday</Menu.Item>
          <Menu.Item className={styles.appDaysMenu}  key="this_week">this week</Menu.Item>
          <Menu.Item className={styles.appDaysMenu}  key="all"> all</Menu.Item>
        </Menu>
      </div>
      );
  }

  headerContent() {
    return (
      this.props.userLoginInfo.isUserLogged ? this.renderClientsMenu() : null
    )
  }

  render() {
    const finalClass = this.props.userLoginInfo.isUserLogged ? `${styles.headerLogged}`:`${styles.headerNotLogged}`;
    return (
      <Header className={styles.content}>
        {this.headerContent()}
      </Header>
      );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log('Header_state2props', state, ownProps);
  return state;
};

Header.propTypes = {
};

export default connect(mapStateToProps)(HeaderContainer);

