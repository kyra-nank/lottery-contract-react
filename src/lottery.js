import web3 from './web3';

// from running deploy.js in lottery project and console logging the address the contract was deployed to
const address = '0xeB2076f1666766cC614362A4934040Aac0C4F86c';

// from running the deploy.js in lottery project and console logging the interface
const abi = [{
  "constant": true,
  "inputs": [],
  "name": "manager",
  "outputs": [{
    "name": "",
    "type": "address"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [],
  "name": "pickWinner",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "getPlayers",
  "outputs": [{
    "name": "",
    "type": "address[]"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [],
  "name": "enter",
  "outputs": [],
  "payable": true,
  "stateMutability": "payable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "",
    "type": "uint256"
  }],
  "name": "players",
  "outputs": [{
    "name": "",
    "type": "address"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "constructor"
}];

// create new local contract instance of the web3 library
// object that exists only inside our browser that is an abstraction of the contract (JS only copy - not on blockchain)
export default new web3.eth.Contract(abi, address);
