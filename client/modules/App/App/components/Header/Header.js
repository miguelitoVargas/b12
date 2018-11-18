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
    // console.log('constructor', this.props);
    this.headerContent = this.headerContent.bind(this);
  }

  componentDidMount() {
        // console.log('moounted', this.props);
  }

  /*{
    context.router.isActive('/:uuid', true)
      ? <a className={styles['add-post-button']} href="#" onClick={props.toggleAddPost}><FormattedMessage id="addPost" /></a>
      : null
      }*/
  headerContent = () => {
    return <div>HEADERCONTENT</div>
  }
  render() {

    return (
      <div className={styles.header}>
        <div className={styles.content}>

          {this.headerContent()}
        </div>
      </div>
      );
  }

}

const mapStateToProps = (state) => {
  return state;
};

Header.propTypes = {
};

export default connect(mapStateToProps)(Header);
