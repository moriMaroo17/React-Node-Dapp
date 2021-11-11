import { React, useState } from 'react'

export default function Registration() {
    const [login, setLogin] = useState('')
        const [password, setPassword] = useState('')
        const [age, setAge] = useState('')
        const [name, setName] = useState('')

        function loginChange(event) {
            setLogin(event.target.value)
        }

        function nameChange(event) {
            setName(event.target.value)
        } 

        function passwordChange(event) {
            setPassword(event.target.value)
        }  

        function ageChange(event) {
            setAge(event.target.value)
        } 

        function handleSubmit(event) {
            console.log(login + " "+ name + " " + password + " " + age)
            fetch('/register',{
                method: 'post',
                headers: {
                    'content-type': 'application/json; charset=UTF-8'
                },
                body: JSON.stringify({
                    login, password, name, age, account: '0x34Ad1B9A5c57Fe62cDed0CC6e3d99Ed8B4aEA588'
                })
            })
        
        event.preventDefault();
        }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Регистрация</h1>
                <input onChange={loginChange} placeholder="Логин" type="text"/><br/>
                <input onChange={nameChange} placeholder="Имя" type="text"/><br/>
                <input onChange={passwordChange} placeholder="Пароль" type="password"/><br/>
                <input onChange={ageChange} placeholder="Возраст" type="number"/><br/>
                <input type="submit"/>
            </form>
        </div>
    )
}
