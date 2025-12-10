import { Routes, Route } from "react-router"
import ChatScreen from "./Screens/ChatScreen/ChatScreen"
import MessagesScreen from "./Screens/MessagesScreen/MessagesScreen"
import './Global.css'
import ContactListContextProvider from "./Contexts/ContactListContext"
import ContactDetailContextProvider from "./Contexts/ContactDetailContext"

function App() {

  return (
    <div>
      <Routes>
        <Route element = {<ContactListContextProvider/>}>
          <Route path="/" element={<ChatScreen/>} />
          <Route path="/chat/:contact_id" element={<ContactDetailContextProvider/>}>
            <Route path="/chat/:contact_id/messages" element={<MessagesScreen/>} />
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
