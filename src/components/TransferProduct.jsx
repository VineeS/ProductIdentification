import React, { Component } from 'react'
import Web3 from 'web3'
import '../App.css';
import { ETH_ABI, ETH_ADDRESS } from './config';
import { View, StyleSheet } from 'react-native';


class App extends Component {
  componentWillMount() {
    //this.loadBlockchainData()
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

  myChangeHandlerProductId = (event) => {
    this.state.ProductId = event.target.value
   
  }

  myChangeHandlerProductAddress = (event) => {
    this.state.ProductAddress = event.target.value
   
  }

   loadBlockchainData = async() =>{
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545")
    const accounts = await web3.eth.getAccounts()
    const CoursesContract = new web3.eth.Contract(ETH_ABI, ETH_ADDRESS)
  
    console.log('Transfer Product',CoursesContract)

    const val = await CoursesContract.methods.transferProduct(this.state.ProductAddress,this.state.ProductId).send({from :accounts[0]})
    console.log({val})
  }
  

  render() {
    return (
         <div className="App">
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <form>
            <p>Enter Product Id: </p>
            <input
              type='number'
              name='ProductId'
              onChange={this.myChangeHandlerProductId}
            />
            <br/>
            <p>Enter Product Address:</p>
            <input
              type='text'
              name='ProductAddress'
              onChange={this.myChangeHandlerProductAddress}
            />
          </form>
      <br/>
      <br/>
      <button onClick={this.loadBlockchainData}>
        Transfer Product
      </button>
      

      </div>


    );
  }
}

export default App;

