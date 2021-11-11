pragma solidity < 0.9.0;

contract Example {

    struct User {
        string name;
        string login;
        uint8 age;
    }

    mapping (address => User) private users;
    mapping (string => bytes32) private passwords;

    address private owner;

    constructor() {
        owner = msg.sender;
    }

    function getUser(address _user_address) external view returns (string memory) {
        User memory user = users[_user_address];
        return user.name;
    }

    function getOwner() external view returns (address) {
        return owner;
    }

    function register(string memory _login, string memory _name, uint8 _age, string memory _password) public {
        User memory user;
        user.age = _age;
        user.login = _login;
        user.name = _name;
        users[msg.sender] = user;
        passwords[_login] = keccak256(abi.encode(_password));
    }

    function login(string memory _login, string memory _password) external view returns (bool) {
        return (passwords[_login] == keccak256(abi.encode(_password)));
        // return passwords[_login];
        // return _login;
    }
}