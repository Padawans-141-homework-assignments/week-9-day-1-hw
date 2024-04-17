import NavBar from "./components/NavBar"
import SignUp from "./components/SignUp"
import SignIn from "./components/SignIn"
import LandingPage from "./components/LandingPage"
import GameClassPicker from "./components/GameClassPicker"

export default function App() {
  return (
    <>
      <NavBar/>

      <GameClassPicker/>

      <SignUp/>

      <SignIn/>
    </>
  )
}