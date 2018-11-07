import React, { Component } from 'react';
import {Link} from 'react-router';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//--- form imports
import { Form, Icon, Input, Button, Checkbox } from 'antd';
// Import Style
import styles, {initValues, loginForm, loginFormHeading,
  loginFormButton, loginFormForgot, loginFormBody, loginContainer} from './Login.css';
  //--- actions
import {saveUserLoginInfo} from './LoginActions';

const FormItem = Form.Item;

class Login extends Component {

  constructor(props) {

    super(props);
    this.state = {userIsLogged: false};
  }

  componentDidMount() {
    console.log('didmount', this.state, this.props);
    //    this.props.uuid ? console.log('o canary', this.state, this.props) : console.log('o perique', this.state,this.props);
  }
  componentWillUpdate() {

    //    console.log('willupdate', this.state, this.props);

    //this.props.uuid ? console.log('o elephant', this.state, this.props) : console.log('o mousey', this.state,this.props);
  }
  componentDidUpdate() {


    const {uuid, isUserLogged} = this.props.userLoginInfo;
    if(isUserLogged) {
      const usrAddrs = `/${uuid}`;
      ///      console.log('USR_ADDRS', usrAddrs);
      this.props.router.push(`${usrAddrs}`);
    }

  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values, this.props);
        this.props.saveUserLoginInfo(values);
        this.setState({userIsLogged: true});
      }
    });
  }

  render() {

    const { getFieldDecorator } = this.props.form;

    return (
      <div className={loginContainer}>
        <div className={loginForm}>
          <h3 className={loginFormHeading}> SIGN IN TO YOUR ACCOUNT </h3>
          <Form onSubmit={this.handleSubmit} className={loginFormBody}>
            <FormItem>
              {getFieldDecorator('email', {
              rules: [
              { type:'email', message: 'This is not a valid email!' },
              { required: true, message: 'Please input your email' }
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
              {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
              })(
              <Checkbox className={initValues}>Remember me</Checkbox>
              )}
              <a className={loginFormForgot} href="">Forgot password</a>
              <Button type="primary" htmlType="submit" className={loginFormButton}>
                Log in
              </Button>
              Or <a href="">register now!</a>
            </FormItem>
          </Form>
        </div>
      </div>
      );
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log('state2props', state, ownProps);
  //  const {uuid} = state.login;
  console.log('UUID', state);
  return {

    userLoginInfo: state.userLoginInfo,


  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({saveUserLoginInfo}, dispatch)
};

Login.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form.create()(Login));
