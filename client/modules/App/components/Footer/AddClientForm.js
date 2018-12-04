import React from 'react';
import { Form, Icon, Input, DatePicker, Radio } from 'antd';
import styles from './Footer'
const FormItem = Form.Item;

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class HorizontalLoginForm extends React.Component {
  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    const RadioButton = Radio.Button;
    const RadioGroup = Radio.Group;
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
    // Only show error after a field is touched.
    const firstNameError = isFieldTouched('firstName') && getFieldError('firstName');
    const lastNameError = isFieldTouched('lastName') && getFieldError('lastName');
    const addressError = isFieldTouched('address') && getFieldError('address');
    const cityError = isFieldTouched('city') && getFieldError('city');
    const stateError = isFieldTouched('state') && getFieldError('state');
    const zipError = isFieldTouched('zipCode') && getFieldError('zipCode');
    const ageError = isFieldTouched('age') && getFieldError('age');
    const phoneError = isFieldTouched('phone') && getFieldError('phone');
    const emailError = isFieldTouched('email') && getFieldError('email');
    const occupationError = isFieldTouched('occupation') && getFieldError('occupation');
    const emergencyNameError = isFieldTouched('emergencyName') && getFieldError('emergencyName');
    const emergencyNumberError = isFieldTouched('emergencyNumber') && getFieldError('emergencyNumber');
    return (
      <Form layout="inline" onSubmit={this.handleSubmit}>
        <FormItem
          validateStatus={firstNameError ? 'error' : ''}
          help={firstNameError || ''}
        >
          {getFieldDecorator('firstName', {
            rules: [{ required: true, message: 'Please input your first name!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="First Name" />
          )}
        </FormItem>
        <FormItem
          validateStatus={lastNameError ? 'error' : ''}
          help={lastNameError || ''}
        >
          {getFieldDecorator('lastName', {
            rules: [{ required: true, message: 'Please input your last name!' }],
          })(
            <Input prefix={<Icon type="user-add" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Last Name" />
          )}
        </FormItem>
        <FormItem
          validateStatus={addressError ? 'error' : ''}
          help={addressError || ''}
        >
          {getFieldDecorator('address', {
            rules: [{ required: true, message: 'Please input your Address!' }],
          })(
            <Input prefix={<Icon type="home" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Address" />
          )}
        </FormItem>
        <div>
          <FormItem
            validateStatus={cityError ? 'error' : ''}
            help={cityError || ''}
          >
            {getFieldDecorator('city', {
              rules: [{ required: true, message: 'Please input your city!' }],
            })(
              <Input placeholder="City" />
            )}
          </FormItem>
          <FormItem
            validateStatus={stateError ? 'error' : ''}
            help={stateError || ''}
          >
            {getFieldDecorator('state', {
              rules: [{ required: true, message: 'Please input your state!' }],
            })(
              <Input placeholder="State" />
            )}
          </FormItem>
          <FormItem
            validateStatus={zipError ? 'error' : ''}
            help={zipError || ''}
          >
            {getFieldDecorator('zipCode', {
              rules: [{ required: true, message: 'Please input your zip code!' }],
            })(
              <Input placeholder="Zip Code" />
            )}
          </FormItem>
        </div>
        <FormItem>
          {getFieldDecorator('date-picker', {
            rules: [{ type: 'object', required: true, message: 'Please select date of birth!' }],
          })(
            <DatePicker />
          )}
        </FormItem>
        <FormItem
          validateStatus={ageError ? 'error' : ''}
          help={ageError || ''}
        >
          {getFieldDecorator('age', {
            rules: [{ required: true, message: 'Please input your age!' }],
          })(
            <Input type="number" placeholder="Age" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('radio-group')(
            <RadioGroup>
              <Radio value="male">Male</Radio>
              <Radio value="female">Female</Radio>
            </RadioGroup>
          )}
        </FormItem>
        <FormItem
          validateStatus={phoneError ? 'error' : ''}
          help={phoneError || ''}
        >
          {getFieldDecorator('phone', {
            rules: [{ required: true, message: 'Please input your phone!' }],
          })(
            <Input type="number" placeholder="Phone" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('email', {
            rules: [{
              type: 'email', message: 'The input is not valid E-mail!',
            }, {
              required: true, message: 'Please input your E-mail!',
            }],
          })(
            <Input placeholder='client@example.com' />
          )}
        </FormItem>
        <FormItem
          validateStatus={occupationError ? 'error' : ''}
          help={occupationError || ''}
        >
          {getFieldDecorator('occupation', {
            rules: [{ required: true, message: 'Please input your Ocupation!' }],
          })(
            <Input placeholder="Occupation" />
          )}
        </FormItem>
        <FormItem
          validateStatus={emergencyNameError ? 'error' : ''}
          help={emergencyNameError || ''}
        >
          {getFieldDecorator('emergencyName', {
            rules: [{ required: true, message: 'Please input your emergency contact name!' }],
          })(
            <Input placeholder="Emergency Contact Name" />
          )}
        </FormItem>
        <FormItem
          validateStatus={emergencyNumberError ? 'error' : ''}
          help={emergencyNumberError || ''}
        >
          {getFieldDecorator('emergencyNumber', {
            rules: [{ required: true, message: 'Please input your emergency contact number!' }],
          })(
            <Input placeholder="Emergency Contact Number" />
          )}
        </FormItem>
      </Form>
    );
  }
}

const WrappedHorizontalLoginForm = Form.create()(HorizontalLoginForm);

export default WrappedHorizontalLoginForm;
