import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router';
// --- form imports
import { Form, Icon, Input, Button, Modal, Card } from 'antd';
// Import Style
import { loginForm, loginformHeading, loginFormButton,
  loginFormBody, loginContainer, logout, start } from './Login.css';
  // --- actions
import { validateUser } from '../App/AppActions';

const FormItem = Form.Item;

class Login extends Component {
  state = { signinmsgModal: true }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.dispatch(validateUser(values));
      }
    });
  }
  handleOk = () => {
    this.setState({
      signinmsgModal: !this.state.signinmsgModal,
    });
    window.location.reload()
  }

  handleCancel = () => {
    this.setState({
      signinmsgModal: !this.state.signinmsgModal,
    });
  }
  render() {
    const userName = this.props.currentUser && this.props.currentUser.userName
    const signinmsg = (this.props.signinmsg) ? (this.props.signinmsg.credentialsmsg || this.props.signinmsg.nousrmsg) : '';
    const { getFieldDecorator } = this.props.form;
    return (
      <div className={loginContainer}>
        <Modal
          title="Basic Modal"
          visible={this.state.signinmsgModal && signinmsg !== ''}
          onOk={this.handleOk}
          onCancel={this.onCancel}
        >
          <p>{signinmsg}</p>
        </Modal>
        {(!this.props.currentUser) ?
          <div className={loginForm}>
            <h3 className={loginformHeading}> SIGN IN TO YOUR ACCOUNT </h3>
            <Form onSubmit={this.handleSubmit} className={loginFormBody}>
              <FormItem>
                {getFieldDecorator('email', {
                  rules: [
                  { type: 'email', message: 'This is not a valid email!' },
                  { required: true, message: 'Please input your email' },
                  ],
                })(
                  <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="email" />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                  <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                )}
              </FormItem>
              <FormItem>
                <Button type="default" htmlType="submit" className={loginFormButton}>
                  Log in
                </Button>
              </FormItem>
            </Form>
          </div> :
          <div>
            <Card
              title="Welcome Back"
              extra={<Link to="/home" className={start}>START</Link>}
              style={{ width: 250 }}
            >
              <h3>{userName}</h3>
              <a className={logout} href="api/logout">Logout</a>
            </Card>
          </div>
        }
      </div>
      );
  }
}
// ------enhancers helpers
const mapStateToProps = (state) => {
  // console.log(state)
  return {
    currentUser: state.app.currentUser,
    signinmsg: state.app.signinmsg,
  };
};

Login.propTypes = {
  router: PropTypes.object,
  dispatch: PropTypes.func,
  getFieldDecorator: PropTypes.func,
  form: PropTypes.object,
  signinmsg: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
};

export default connect(
  mapStateToProps
)(Form.create()(Login));
