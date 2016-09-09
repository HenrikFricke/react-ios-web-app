import React from 'react';
import Bar from 'react-toolbox/lib/app_bar';
import Navigation from 'react-toolbox/lib/navigation';

import styles from '../styling/appBar.scss';

const actions = [
  { label: 'Add', raised: true, icon: 'add', flat: true, inverse: true },
];

const AppBar = () => (
  <Bar title="Todo" fixed className={styles.appBar}>
    <Navigation type="horizontal" actions={actions} />
  </Bar>
);

export default AppBar;
