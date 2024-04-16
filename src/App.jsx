import NavBar from "./components/NavBar"
import SignUp from "./components/SignUp"
import SignIn from "./components/SignIn"
import LandingPage from "./components/LandingPage"

export default function App() {
  return (
    <>
      <NavBar/>

      <LandingPage/>

      <SignUp/>

      <SignIn/>
    </>
  )
}