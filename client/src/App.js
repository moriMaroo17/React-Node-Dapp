import {React, useState} from 'react'
import './App.css'
import { Routes, Route, Link} from 'react-router-dom'
import { Nav, Navbar} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './Components/Profile'
import Login from './Components/Login';
import Registration from './Components/Registration';
import { useEffect } from 'react';


const getAddress = async function () {
  const res = await fetch('http://localhost:3000/', {
    method: 'GET'
  })
  console.log(res)
}



export default function App() {

  const {role, setRole} = useState('visitor')
  const {address, setAddress} = useState('')


  useEffect(() => {
    getAddress()
  }, [])
  // .then(setAddress(address))
  
  // useMountEffect(() => {
  //   return async () => {
  //     const res = await fetch('/')
  //     // return res
  //     console.log(res)
  //   }
  // })

  return (
    <div>  
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand>Courses</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link>
                        <Link to="/">Профиль</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/login">Логин</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/registration">Регистрация</Link>
                    </Nav.Link>         
                </Nav>
            </Navbar.Collapse>
        </Navbar>

        <Routes>
          <Route path="/" element={<Profile/>}/>
          <Route path="/registration" element={<Registration/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>

    </div>
  )
}

