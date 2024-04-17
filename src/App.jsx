import NavBar from "./components/NavBar"
import SignUp from "./components/SignUp"
import SignIn from "./components/SignIn"
import LandingPage from "./components/LandingPage"
import GameClassPicker from "./components/GameClassPicker"
import GameAlliancePicker from "./components/GameAlliancePicker"

export default function App() {
  return (
    <>
      <NavBar/>

      <GameClassPicker/>

      <GameAlliancePicker/>

      <SignUp/>

      <SignIn/>
    </>
  )
}