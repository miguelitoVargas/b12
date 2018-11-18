import React, { Component } from 'react';
import { Layout, Button, Icon, Modal } from 'antd';
import { connect } from 'react-redux';

const { Footer } = Layout;
// Import Style
import styles from './Footer.css';

class FooterContent extends Component {
  state = {
    newClientModal: false,
  }
  handleOk = () => {
    this.setState({
      newClientModal: !this.state.newClientModal,
    });
  }

  handleCancel = () => {
    this.setState({
      newClientModal: !this.state.newClientModal,
    });
  }
  showNewClientModal = () => {
    this.setState({
      newClientModal: !this.state.newClientModal,
    });
  }
  render() {
    return (
      <Footer className={styles.footer}>
        <Modal
          title="Basic Modal"
          visible={this.state.newClientModal}
          onOk={this.handleOk}
          onCancel={this.onCancel}
        >
          <p>Prueba de modal</p>
        </Modal>
      {(this.props.currentUser) ?
        <Button type="primary" onClick={this.showNewClientModal}>
          ADD NEW CUSTOMER <Icon type="plus-circle" />
        </Button> : null
      }
      </Footer>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state)
  return {
    currentUser: state.app.currentUser,
  };
};
export default connect(mapStateToProps)(FooterContent);
