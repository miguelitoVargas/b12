import React, {Component} from 'react';
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
        <Menu
          className={styles.appMenu}
          type="primary"
          defaultSelectedKeys={['yesterday']}
          mode="horizontal"
        >
          <Menu.Item className={styles.appMenuIndent} key="menu-btn-toggle">
            <Button type="primary" className={styles.menuBtn}></Button>
          </Menu.Item>
          <Menu.Item key="today"> today</Menu.Item>
          <Menu.Item key="yesterday">yesterday</Menu.Item>
          <Menu.Item key="this_week">this week</Menu.Item>
          <Menu.Item key="all"> all</Menu.Item>

        </Menu>
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

