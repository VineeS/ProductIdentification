import React, { Component } from 'react'
import Web3 from 'web3'
import '/Users/vinee/Documents/workspace/eth-todolist-react/src/App.css';
import { TODO_LIST_ABI, TODO_LIST_ADDRESS } from '/Users/vinee/Documents/workspace/eth-todolist-react/src/config.js'
import { View, StyleSheet } from 'react-native'
import index from '/Users/vinee/Documents/workspace/eth-todolist-react/src/index.js';





class App extends Component {
  componentWillMount() {
    this.loadBlockchainData()
  }

  async loadBlockchainData() {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545")
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })
    console.log(accounts[0])

    const CoursesContract = new web3.eth.Contract(TODO_LIST_ABI, TODO_LIST_ADDRESS)
    this.setState({ CoursesContract })

    console.log('Transfer Product',CoursesContract)

    
    const val = await CoursesContract.methods.value().call()
    this.setState({ val })
  }

  constructor(props) {
    super(props)
    this.state = { account: '' ,
    val: 0,
    ProductAddress: null,
    ProductId: null,

    
  };
    this.loadBlockchainData = this.loadBlockchainData.bind(this);

  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    if (nam === "ProductAddress") {
      if (!Number(val)) {
        alert("Your Id must be a number");
      }
    }
    if (nam === "ProductId") {
        if (!Number(val)) {
          alert("Your Id must be a number");
        }
      }
    this.setState({[nam]: val});
  }
  

  render() {
    return (

         <div className="App">
        
         <h1>Test Contract</h1>
      <p>Owner Account: {this.state.account}</p>
      <p>Interger Value Passed in Test Contract: {this.state.val}</p>
      <h1>React Dynamic Table: {this.state.students}</h1>
      <form>
      <p>Enter Product Id:</p>
      <input
        type='text'
        name='ProductId'
        onChange={this.myChangeHandler}
      />

    <p>Enter Product Address:</p>
    <input
        type='text'
        name='ProductAddress'
        onChange={this.myChangeHandler}
    />
      </form>
      <br/>
      <br/>
      <input type='submit' />

      </div>


    );
  }
}

export default App;

