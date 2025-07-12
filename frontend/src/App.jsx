import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import LogInPage from "./pages/LogInPage";
import ProfilePage from "./pages/ProfilePage";
import SettingsPage from "./pages/SettingsPage";
import SignUpPage from "./pages/SignUpPage";
import { Routes, Route } from "react-router-dom";
import { useAuthStore } from "./store/useAuthStore";

const App = () => {
  const {authUser} = useAuthStore
  return (
    <div >
      <Navbar/>

      <Routes>
        <Route path ="/" element = {<HomePage/>}/>
        <Route path ="/signup" element = {<SignUpPage/>}/>
        <Route path ="/login" element = {<LogInPage/>}/>
        <Route path ="/settings" element = {<SettingsPage/>}/>
        <Route path ="/profile" element = {<ProfilePage/>}/>
      </Routes>

    </div>
  )
}

export default App