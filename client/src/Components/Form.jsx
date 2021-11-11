import { useState, useEffect } from "react"

import React from 'react'

export default function Form() {

   const [name, setName] = useState('')
   const [surname, setSurname] = useState('')

   function nameChange(event) {
        setName(event.target.value)
   }

   function surnameChange(event) {
    setSurname(event.target.value)
   }  

   function handleSubmit(event) {
    console.log(name + " " + surname)
    fetch('/api',{
        method: 'post',
        headers: {
            'content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify({name: name})
    })
    
    event.preventDefault();
    
   }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Форма</h1>
                <input onChange={nameChange} placeholder="Имя" type="text"/><br/>
                <input onChange={surnameChange} placeholder="Фамилия" type="text"/><br/>
                <input type="submit"/>
            </form>
        </div>
    )
}
