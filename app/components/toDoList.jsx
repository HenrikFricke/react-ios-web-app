import React from 'react';
import { List, ListItem } from 'react-toolbox/lib/list';

import styles from '../styling/toDoList.scss';

const ToDoList = () => (
  <List selectable ripple className={styles.toDoList} >
    <ListItem
      caption="Dr. Manhattan"
      legend="Jonathan 'Jon' Osterman"
      rightIcon="star"
      className={styles.listItem}
    />
    <ListItem
      caption="Ozymandias"
      legend="Adrian Veidt"
      rightIcon="star"
      className={styles.listItem}
    />
    <ListItem
      caption="Rorschach"
      legend="Walter Joseph Kovacs"
      rightIcon="star"
      className={styles.listItem}
    />
    <ListItem
      caption="Dr. Manhattan"
      legend="Jonathan 'Jon' Osterman"
      rightIcon="star"
      className={styles.listItem}
    />
    <ListItem
      caption="Ozymandias"
      legend="Adrian Veidt"
      rightIcon="star"
      className={styles.listItem}
    />
    <ListItem
      caption="Rorschach"
      legend="Walter Joseph Kovacs"
      rightIcon="star"
      className={styles.listItem}
    />
    <ListItem
      caption="Dr. Manhattan"
      legend="Jonathan 'Jon' Osterman"
      rightIcon="star"
      className={styles.listItem}
    />
    <ListItem
      caption="Ozymandias"
      legend="Adrian Veidt"
      rightIcon="star"
      className={styles.listItem}
    />
    <ListItem
      caption="Rorschach"
      legend="Walter Joseph Kovacs"
      rightIcon="star"
      className={styles.listItem}
    />
  </List>
);

export default ToDoList;
