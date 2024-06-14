import io from 'socket.io-client';
import Home from './components/home/home';
import ChatPage from './components/chat';
import { Route, Routes } from 'react-router-dom';
const socket =io('http://localhost:5001');

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home socket={socket}/>}/>
      <Route path="/chat" element={<ChatPage socket={socket}/>}/>
    </Routes>
  )
}

export default App
