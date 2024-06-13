import React from 'react';
import styles from './style.module.css';

const MessageBlock = () => {
  return (
    <div className={styles.messageBlock}>
      <form className={styles.form}>
        <input type="text" className={styles.userMessage} />
        <button className={styles.btn}>Сказать</button>
      </form>
    </div>
  );
};

export default MessageBlock;
