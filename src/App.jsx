import NavBar from "./components/NavBar"
import SignUp from "./components/SignUp"
import SignIn from "./components/SignIn"
import LandingPage from "./components/LandingPage"
import GameClassPicker from "./components/GameClassPicker"
import GameAlliancePicker from "./components/GameAlliancePicker"
import DBUsers from "./components/DBProducts"
import DBSingleProduct from "./components/DBSingleProduct"

export default function App() {
  return (
    <>
      <NavBar/>

      <GameClassPicker/>

      <GameAlliancePicker/>

      <DBUsers/>

      <DBSingleProduct/>

      <SignUp/>

      <SignIn/>
    </>
  )
}