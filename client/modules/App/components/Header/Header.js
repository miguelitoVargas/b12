import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';

// Import Style
import styles from './Header.css';

class Header extends Component {

  constructor(props) {
    super(props);
    console.log('constructor', this.props);
    this.headerContent = this.headerContent.bind(this);
  }
  //---------life cycle
  componentDidMount() {
    console.log('moounted', styles.header);
  }
  headerContent() {

    return (
            this.props.userLoginInfo.isUserLogged ? <div>HEADERCONTENT</div> : null
           )
  }

  /*{
          this.props.userLoginInfo.isUserLogged ? <div>OXIMORON</div> : null
          }*/
  render() {
    const finalClass = this.props.userLoginInfo.isUserLogged ? `${styles.headerLogged}`:`${styles.headerNotLogged}`;
    return (
      <div className={finalClass}>
        <div className={styles.content}>
          {this.headerContent()}
        </div>
      </div>
      );
  }

}

const mapStateToProps = (state, ownProps) => {
  console.log('Header_state2props', state, ownProps);
  //  const {uuid} = state.login;
  //console.log('header', state);
  return state;
};

Header.propTypes = {
};

export default connect(mapStateToProps)(Header);

