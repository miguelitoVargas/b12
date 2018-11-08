import React from 'react';
import { FormattedMessage } from 'react-intl';
import {Layout} from 'antd';

const {Footer} = Layout;
// Import Style
import styles from './Footer.css';

export function FooterContent() {
  return (
    <Footer className={styles.footer}>
      <p>Footer content</p>
    </Footer>
  );
}

export default FooterContent;
