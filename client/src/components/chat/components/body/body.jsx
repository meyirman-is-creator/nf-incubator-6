import { useNavigate } from "react-router-dom";
import styles from "./style.module.css";

const Body = ({ messages, status }) => {
  const navigate = useNavigate();
  const handleLeave = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  const currentUser = localStorage.getItem("user");

  return (
    <>
      <header className={styles.header}>
        <button className={styles.btn} onClick={handleLeave}>
          Покинуть чат
        </button>
      </header>
      <div className={styles.container}>
        {messages.map((element, index) => (
          element.name === currentUser ? (
            <div key={index} className={styles.chats}>
              <p className={styles.senderName}>Вы</p>
              <div className={styles.messageSender}>
                <p>{element.text}</p>
              </div>
            </div>
          ) : (
            <div key={index} className={styles.chats}>
              <p>{element.name}</p>
              <div className={styles.messageRecipient}>
                <p>{element.text}</p>
              </div>
            </div>
          )
        ))}
        <div className={styles.status}>
          <p>{status}</p>
        </div>
      </div>
    </>
  );
};

export default Body;
