import { Routes, Route } from "react-router"
import ContactScreen from "./Screens/ContactScreen/ContactScreen"
import MessagesScreen from "./Screens/MessagesScreen/MessagesScreen"
import './Global.css'

function App() {

  return (
    <div>
      {/* <ContactSidebar /> */}
      <Routes>
        <Route path="/" element={<ContactScreen/>} />
        <Route path="/chat/:contact_id" element={<MessagesScreen/>} />
      </Routes>
    </div>
  )
}

export default App
