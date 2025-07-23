import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Adduser from './Adduser'
import Login from "./Login"
import Root from './Root'
import Allusers from './Allusers';
import UnknownList from './UnkownList';
import Admin from './Admin'
import Adminlogin from './Adminlogin'
import Dashboard from './Dashboard';
function App() {
  

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path={"/"} element={<Root/>}/>
            <Route path={"/login"} element={<Login/>}/>
            <Route path={"/adduser"} element={<Adduser/>}/>
            <Route path={"/allusers"} element={<Allusers/>}/>
            <Route path={"/unknowlist"} element={<UnknownList/>}/>
            <Route path={"/admin"} element={<Admin/>}/>
            <Route path={'/dashboard'} element={<Dashboard/>}/>
            <Route path={"/adminlogin"} element={<Adminlogin/>}/>
          </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
