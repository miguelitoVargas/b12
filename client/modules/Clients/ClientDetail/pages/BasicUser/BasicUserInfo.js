import React, { Component } from 'react';
import { RIEToggle, RIEInput, RIETextArea, RIENumber, RIETags, RIESelect } from 'riek';
import { Table, Input, Button, Popconfirm, Form, Checkbox } from 'antd';
import styles from './BasicUserInfo.css';

class BasicUserInfo extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: 'Add todays data',
      isDisabled: false,
    };
  }
  dataChanged = (data) => {
    console.log(data);
    this.setState({
      isDisabled: true,
    })
  }

  customValidateText = (text) => {
    return (text.length > 0 && text.length < 64);
  }
  render() {
    function onChange(e) {
      console.log(`checked = ${e.target.checked}`);
    }
    const age = this.props.customer && this.props.customer.age;
    const height = this.props.customer && this.props.customer.height;
    return (
      <div className={styles.leftInfo}>
        <div className={styles.topleftinfo}>
          <div><h6>Age</h6><h2>{age}</h2></div>
          <div><h6>Height</h6><br /><h1>{height}</h1></div>
        </div>
        <div className={styles.dataInfoMargin}>
          <div className={styles.weightinfo}>
            <div className={styles.weighttitle}><h6>WEIGHT</h6></div>
            <div className={styles.weightOutline}>
              <span>194</span>
              <RIEInput
                value={this.state.text}
                change={this.dataChanged}
                propName="text"
                className={this.state.highlight ? 'editable' : ''}
                validate={this.customValidateText}
                classInvalid={styles.invalid}
                isDisabled={this.state.isDisabled}
              />
            </div>
          </div>
          <div className={styles.bpinfo}>
            <div className={styles.bptitle}><h6>BP</h6></div>
            <div className={styles.bpOutline}>
              <span>124/80</span>
              <span>110/80</span>
            </div>
          </div>
          <div className={styles.pulseinfo}>
            <div className={styles.pulsetitle}><h6>PULSE</h6></div>
            <div className={styles.pulseOutline}>
              <span>120</span>
              <span>120</span>
            </div>
          </div>
          <div className={styles.o2info}>
            <div className={styles.o2title}><h6>O2 SAT</h6></div>
            <div className={styles.o2Outline}>
              <span>99</span>
              <span>99</span>
            </div>
          </div>
          <div className={styles.drinfo}>
            <div className={styles.drtitle}><h6>PHYSICIAN</h6></div>
            <div className={styles.drOutline}>
              <span>Dr. HAM</span>
            </div>
          </div>
          <div className={styles.notesinfo}>
            <div className={styles.notestitle}><h6>NOTES</h6></div>
            <div className={styles.notesOutline}>
              <span>nothing to document</span>
            </div>
          </div>
          <Checkbox onChange={onChange}>Consent Form</Checkbox>
          <Button onClick={this.handleAdd} type="primary" style={{ marginBottom: 16 }}>
            SAVE
          </Button>
        </div>
      </div>
    );
  }
}

export default BasicUserInfo;
