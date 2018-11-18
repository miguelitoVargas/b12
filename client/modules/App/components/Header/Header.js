import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Layout, Menu, Button } from 'antd';

const { Header } = Layout;

// Import Style
import styles from './Header.css';

class HeaderContainer extends Component {
  constructor(props) {
    super(props);
    this.headerContent = this.headerContent.bind(this);
  }
  headerContent() {
    console.log(this.props)
    return (
      this.props.app.currentUser ? this.renderClientsMenu() : null
    )
  }
  renderClientsMenu() {
    return (
      <div className={styles.appMenu}>
        <Button type="primary" className={styles.menuBtn} />
        <Menu
          className={styles.appDaysContainer}
          type="primary"
          defaultSelectedKeys={['yesterday']}
          mode="horizontal"
        >
          <Menu.Item className={styles.appDaysMenu} key="today"> today</Menu.Item>
          <Menu.Item className={styles.appDaysMenu} key="yesterday">yesterday</Menu.Item>
          <Menu.Item className={styles.appDaysMenu} key="this_week">this week</Menu.Item>
          <Menu.Item className={styles.appDaysMenu} key="all"> all</Menu.Item>
        </Menu>
      </div>
      );
  }


  render() {
    const finalClass = this.props.currentUser ? `${styles.headerLogged}` : `${styles.headerNotLogged}`;
    return (
      <Header className={styles.content}>
        {this.headerContent()}
      </Header>
      );
  }
}

const mapStateToProps = (state) => {
  return state;
};

Header.propTypes = {
  userLoginInfo: PropTypes.object,
};

export default connect(mapStateToProps)(HeaderContainer);
