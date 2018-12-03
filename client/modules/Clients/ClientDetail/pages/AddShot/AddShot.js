import React, { Component } from 'react';
import { Button } from 'antd';
import styles from './AddShot.css';

class AddShot extends Component {
  render() {
    return (
      <div className={styles.shotInfo}>
        <div className={styles.shotInner}>
          <div className={styles.shotAction}>
            <div className={styles.availableleft}>
              <h3>Available Shots</h3>
              <Button ghost size="small" type="primary">ADD</Button>
            </div>
            <div className={styles.availableright}>
              <h3>Remaining</h3>
            </div>
          </div>
          <div className={styles.shotsListContainer}>
            <div>
              <h5>Lipo Extreme</h5>
            </div>
            <div>
              <Button disabled className={styles.numbersbtn} size="small" type="primary">F</Button>
              <Button className={styles.numbersbtn} size="small" type="primary">01</Button>
              <Button className={styles.numbersbtn} size="small" type="primary">02</Button>
              <Button className={styles.numbersbtn} size="small" type="primary">03</Button>
              <Button className={styles.numbersbtn} size="small" type="primary">04</Button>
              <Button className={styles.numbersbtn} size="small" type="primary">05</Button>
              <Button className={styles.numbersbtn} size="small" type="primary">06</Button>
              <Button className={styles.numbersbtn} size="small" type="primary">07</Button>
              <Button className={styles.numbersbtn} size="small" type="primary">08</Button>
              <Button className={styles.numbersbtn} size="small" type="primary">09</Button>
              <Button className={styles.numbersbtn} size="small" type="primary">10</Button>
              <Button className={styles.numbersbtn} size="small" type="primary">11</Button>
            </div>
            <div>
              <h3>10</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddShot;
