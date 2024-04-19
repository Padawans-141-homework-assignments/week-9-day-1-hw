import HomePage from "./pages/HomePage"
import GameClassPicker from "./components/GameClassPicker"
import GameAlliancePicker from "./components/GameAlliancePicker"
import DBProducts from "./components/DBProducts"
import DBSingleProduct from "./components/DBSingleProduct"
import SignInPage from "./pages/SignInPage"
import SignUpPage from "./pages/SignUpPage"
import { Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"

export default function App() {
  return (
    <>

    <NavBar/>

    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/signup" element={<SignUpPage/>}/>
      <Route path="/signin" element={<SignInPage/>}/>
      <Route path="/class" element={<GameClassPicker/>}/>
      <Route path="/alliance" element={<GameAlliancePicker/>}/>
      <Route path="/products" element={<DBProducts/>}/>
      <Route path="/product" element={<DBSingleProduct/>}/>
    </Routes>
    </>
  )
}