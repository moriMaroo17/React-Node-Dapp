import { React, useState } from 'react'
import styles from './Login.module.css'

export default function Login() {
        const [login, setLogin] = useState('')
        const [password, setPassword] = useState('')
        const [age, setAge] = useState('')

        function loginChange(event) {
            setLogin(event.target.value)
        }

        function passwordChange(event) {
            setPassword(event.target.value)
        }  

        function ageChange(event) {
            setAge(event.target.value)
        } 

        function handleSubmit(event) {
            console.log(login + " " + password + " " + age)
            fetch('/login',{
                method: 'post',
                headers: {
                    'content-type': 'application/json; charset=UTF-8'
                },
                body: JSON.stringify({
                    login, password, account: '0x34Ad1B9A5c57Fe62cDed0CC6e3d99Ed8B4aEA588'
                })
            })
        
        event.preventDefault();
        }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Логин</h1>
                <input onChange={loginChange} placeholder="Логин" type="text"/><br/>
                <input onChange={passwordChange} placeholder="Пароль" type="password"/><br/>
                {/* <input onChange={ageChange} placeholder="Возраст" type="number"/><br/> */}
                <input type="submit"/>
            </form>
        </div>
    )
}
