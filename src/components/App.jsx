import React from 'react';
import Header from './Header/Header';
import Main from './Main/Main';
import Modal from './Modal/Modal';
import styles from './App.css';

const App = () => (
  <div className={styles.app}>
    <Header />
    <Main />
    <Modal />
  </div>
);

export default App;
