import { Routes, Route } from "react-router"
import ChatScreen from "./Screens/ChatScreen/ChatScreen"
import MessagesScreen from "./Screens/MessagesScreen/MessagesScreen"
import './Global.css'

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<ChatScreen/>} />
        <Route path="/chat/:contact_id" element={<MessagesScreen/>} />
      </Routes>
    </div>
  )
}

export default App
