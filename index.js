const express = require('express')
const Web3 = require('web3')
const connection = require('./deploy/deploy.js')

const port = 5000
const app = express()

app.use(express.json({extends: false}))

// app.use('*', (req, res) => {
//     req.account = '0xFCA057119cb655B0AcBb7C77cF8F7da3867A083D'
// })

app.get('/', (req, res) => {
    if (!connection.contractAddress) {
        connection.start()
        res.send(JSON.stringify({body: {
            data: 'Deployed'
        }}))
    } else {
        res.send(JSON.stringify({body: {
            data: 'Deployed'
        }}))
        console.log('Already deployed')
    }
})

app.get('/owner', async (req, res) => {
    await connection.getUser('0x34Ad1B9A5c57Fe62cDed0CC6e3d99Ed8B4aEA588', (error, result) => {
        console.log(result)
    })
})

app.post('/login', async (req, res) => {
    const {login, password, account} = req.body
    console.log({
        login,
        password,
        account
    })
    await connection.login(login, password, account, (error, result) => {
        if (error) {
            console.log(error)
            res.send('Something gonna wrong')
        } else {
            console.log(result)
            res.send(result)
        }
    })
})

app.post('/register', async (req, res) => {
    const {login, name, age, password, account} = req.body
    console.log({
        login,
        name,
        age,
        password,
        account
    })
    await connection.register(login, name, age, password, account, (error, result) => {
        if (error) {
            console.log(error)
            res.send('Something gonna wrong')
        } else {
            res.send('Success')
        }
    })
})

app.listen(port, () => {

    connection.web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:8545'))
    // connection.start()

    console.log('app listening on port 5000')
})