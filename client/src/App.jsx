import socketIO from 'socket.io-client'
import Home from './components/home/home';
import ChatPage from './components/chat';
import { Route, Routes } from 'react-router-dom';
const socket = socketIO.connect('http://localhost:5000');

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/chat" element={<ChatPage/>}/>
    </Routes>
  )
}

export default App
