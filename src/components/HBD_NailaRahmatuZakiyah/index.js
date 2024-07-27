import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import renderSection1 from './section1';
import renderSection2 from './section2';
import renderSection3 from './section3';
import renderSection4 from './section4';
import renderSection5 from './section5';
import renderSection6 from './section6';

import styles from './index.module.scss';

function HBD_NailaRahmatuZakiyah(props) {
  return (
    <main className={cn(styles.main, props.className, 'hbd-naila-rahmatu-zakiyah')}>
      {renderSection1(props)}
      {renderSection2(props)}
      {renderSection3(props)}
      {renderSection4(props)}
      {renderSection5(props)}
      {renderSection6(props)}
    </main>
  );
}

HBD_NailaRahmatuZakiyah.propTypes = {
  className: PropTypes.string
};

export default HBD_NailaRahmatuZakiyah;
