const Accounts = require('../bin/contracts/Example.json')

module.exports = {

    web3: null,
    contractAddress: null,

    start: async function () {

        const accounts = await this.web3.eth.getAccounts()
        console.log(accounts[0])
        const balance = await this.web3.eth.getBalance(accounts[0])  
        console.log(balance)
        if (accounts) {
            console.log('Attempting to deploy from account', accounts[0]);
        } else {
            console.log('No accounts detected')
        }

        const result = await new this.web3.eth.Contract(Accounts.abi)
            .deploy({ data: Accounts.bytecode })
            .send({ gas: 4712388, from: accounts[0] })

        this.contractAddress = result._address

    },

    login: async function (login, password, account, callback) {

        const Account = await new this.web3.eth.Contract(Accounts.abi, this.contractAddress)
        await Account.setProvider(this.web3.currentProvider)
        await Account.methods.login(login, password).call({from: account}, (error, result) => {
            callback(error, result)
        })
    },

    getOwner: async function (account, callback) {

        const Account = await new this.web3.eth.Contract(Accounts.abi, this.contractAddress)
        await Account.setProvider(this.web3.currentProvider)
        await Account.methods.getOwner().call({from: account}, (error, result) => {
            callback(error, result)
        })

    },

    getUser: async function (account, callback) {

        const Account = await new this.web3.eth.Contract(Accounts.abi, this.contractAddress)
        await Account.setProvider(this.web3.currentProvider)
        await Account.methods.getUser(account).call({from: account}, (error, result) => {
            callback(error, result)
        })

    },

    register: async function (login, name, age, password, account, callback) {

        const Account = await new this.web3.eth.Contract(Accounts.abi, this.contractAddress)
        await Account.setProvider(this.web3.currentProvider)
        await Account.methods.register(login, name, age, password).send({gas: 1000000,from: account}, (error, result) => {
            callback(error, result)
        })
    },
}

