import React, { Component } from 'react'
import Web3 from 'web3'
import '/Users/vinee/Documents/workspace/eth-todolist-react/src/App.css';
import { ETH_ADDRESS, ETH_ABI } from '/Users/vinee/Documents/workspace/eth-todolist-react/src/components/config.js'
import { View, StyleSheet } from 'react-native'
import index from '/Users/vinee/Documents/workspace/eth-todolist-react/src/index.js';





class App extends Component {
  componentWillMount() {
    //this.loadBlockchainData()

  }

  constructor(props) {
    super(props)
    this.state = {
    ProductName: '',
    ProductId: 0,
    Description:'',
  
  };
    this.loadBlockchainData = this.loadBlockchainData.bind(this);
    this.CreateProduct = this.CreateProduct.bind(this);
  }

  async loadBlockchainData() {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545")
    const accounts = await web3.eth.getAccounts()
    // this.setState({ account: accounts[0] })
    console.log(accounts[0])

    const CoursesContract = new web3.eth.Contract(ETH_ABI, ETH_ADDRESS)
    // this.setState({ CoursesContract : CoursesContract })

    console.log('Add product')

    
    // const val = await CoursesContract.methods.CreateProduct("Vinee",1000,"My first name").send({from :accounts[0]})
    // console.log({val})
  }


  myChangeHandlerProductName = (event) => {
    this.state.ProductName = event.target.value
   
  }
  
  myChangeHandlerProductId = (event) => {
    this.state.ProductID = event.target.value
   
  }

  myChangeHandlerDescription = (event) => {
    this.state.Description = event.target.value
   
  }

   CreateProduct = async() =>  {
    console.log('Create product',this.state.ProductName,this.state.ProductID,this.state.Description)
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545")
    const accounts = await web3.eth.getAccounts()
    //console.log(accounts[0])
    const CoursesContract = new web3.eth.Contract(ETH_ABI, ETH_ADDRESS)
    const val = await CoursesContract.methods.CreateProduct(this.state.ProductName,this.state.ProductID,this.state.Description).send({from :accounts[0]})
    console.log({val})
  }


  render() {
    return (

         <div className="App">
        
      <br/>
      <form>
      <p>Enter Product name: </p>
      <input
        type='text'
        name='ProductName'
        onChange={this.myChangeHandlerProductName}
      />
      <br/>
      <p>Enter Product Id: </p>
      <input
        type= 'number'
        name='ProductId'
        onChange={this.myChangeHandlerProductId}
      />
      <br/>
      <p>Enter Product Description : </p>
      <input
        type='text'
        name='Description'
        onChange={this.myChangeHandlerDescription}
      />
      </form>
      <br/>
      <br/>
      <button onClick={this.CreateProduct}>
        Create Button
        </button>
        
        
      </div>


    );
  }
}

export default App;