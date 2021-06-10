import React, { Component } from 'react'
import Web3 from 'web3'
import '/Users/vinee/Documents/workspace/eth-todolist-react/src/App.css';
import { ETH_ADDRESS, ETH_ABI } from './config.js'
import { View, StyleSheet } from 'react-native'
import index from '/Users/vinee/Documents/workspace/eth-todolist-react/src/index.js';





class App extends Component {
  componentWillMount() {
    this.loadBlockchainData()
  }

  constructor(props) {
    super(props)
    this.state = {
    ProductName: '',
    ProductId: null,
    Description:'',
  };
    this.loadBlockchainData = this.loadBlockchainData.bind(this);
  }

  async loadBlockchainData() {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545")
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })
    console.log(accounts[0])

    const CoursesContract = new web3.eth.Contract(ETH_ABI, ETH_ADDRESS)
    this.setState({ CoursesContract })

    console.log('Add product')

    
    const val = await CoursesContract.methods.CreateProduct("Vinee",1000,"My first name").send({from :accounts[0]})
    console.log({val})
  }


  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
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
      <p>Enter Product name: {this.state.ProductName}</p>
      <input
        type='text'
        name='ProductName'
        onChange={this.myChangeHandler}
      />
      <p>Enter Product Id: {this.state.ProductID}</p>
      <input
        type='text'
        name='ProductId'
        onChange={this.myChangeHandler}
      />
      <p>Enter Product Description : {this.state.Description}</p>
      <input
        type='text'
        name='Description'
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

