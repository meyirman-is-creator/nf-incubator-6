import { useEffect, useState } from "react";
import Body from "./components/body/body";
import MessageBlock from "./components/message-block/message-block";
import Sidebar from "./components/sidebar/sidebar";
import styles from "./style.module.css";

const ChatPage = ({ socket }) => {
  const [messages, setMessages] = useState([]);
  const [status, setStatus] = useState('');


  

  useEffect(() => {
    const handleResponse = (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    };

    const handleResponseTyping = (data) => {
      setStatus(data);
      setTimeout(()=>setStatus(''),1000)
    };

    socket.on("response", handleResponse);
    socket.on('responseTyping', handleResponseTyping);

    // Cleanup listeners on unmount
    return () => {
      socket.off("response", handleResponse);
      socket.off("responseTyping", handleResponseTyping);
    };
  }, [socket]);

  return (
    <div className={styles.chat}>
      <Sidebar socket={socket} />
      <main className={styles.main}>
        <Body messages={messages} status={status} />
        <MessageBlock socket={socket} />
      </main>
    </div>
  );
};

export default ChatPage;
