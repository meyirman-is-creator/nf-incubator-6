import React, { useState } from "react";
import styles from "./style.module.css";

const MessageBlock = ({ socket }) => {
  const [message, setMessage] = useState("");

  const isTyping = () => {
    socket.emit('typing', `${localStorage.getItem('user')} is typing`);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (message.trim() && localStorage.getItem("user")) {
      socket.emit("message", {
        text: message,
        name: localStorage.getItem("user"),
        id: `${socket.id}-${Math.random()}`,
        socketId: socket.id,
      });
      setMessage(""); // Перенесено внутрь условия
    }
  };

  return (
    <div className={styles.messageBlock}>
      <form className={styles.form} onSubmit={handleSend}>
        <input
          type="text"
          className={styles.userMessage}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={isTyping}
        />
        <button className={styles.btn} type="submit">Сказать</button>
      </form>
    </div>
  );
};

export default MessageBlock;
