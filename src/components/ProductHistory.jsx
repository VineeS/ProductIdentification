import React, { Component } from 'react'
import Web3 from 'web3'
import '/Users/vinee/Documents/workspace/eth-todolist-react/src/App.css';
import { ETH_ABI, ETH_ADDRESS } from './config'
import { View, StyleSheet } from 'react-native'
import index from '/Users/vinee/Documents/workspace/eth-todolist-react/src/index.js';





class AppOne extends Component {
  componentWillMount() {
    //this.loadBlockchainData()
  }

  constructor(props) {
    super(props)
    this.state = {
    ProductId: 0,
    Data :[],
    ProductArray: {} ,
  };
    this.loadBlockchainData = this.loadBlockchainData.bind(this);
  }

  myChangeHandlerProductId = (event) => {
    this.state.ProductId = event.target.value
   
  }

   loadBlockchainData = async () => {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545")
    const accounts = await web3.eth.getAccounts()


    const CoursesContract = new web3.eth.Contract(ETH_ABI, ETH_ADDRESS)
    
    
    console.log('Get provinence',CoursesContract)
    const Data= this.state;
    const ProductArray = this.state;
    const data = [];
    const productListarray = [];

    
    const val = await CoursesContract.methods.productList(this.state.ProductId).call()
    // productListarray.push(val)
    console.log(val)
    this.setState({ ProductArray: val })

    

    //const val = await CoursesContract.methods.getProvenence(1000,0).call()
    for (var i = 0; i <= val.tNumber; i++){
      const val1 = await CoursesContract.methods.getProvenence(this.state.ProductId,i).call()
      data.push(val1)
    }
    console.log(data);
    this.setState({ Data: data });
  }





// myChangeHandler = (event) => {
    // let nam = event.target.name;
    // let val = event.target.value;
    // if (nam === "ProductId") {
      // if (!Number(val)) {
        // alert("Your Id must be a number");
      // }
    // }
    // this.setState({[nam]: val});
  // }
  

  render() {
    return (


         <div className="App">
        <br/>
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
       </form>
      <br/>
      <br/>
      <button onClick={this.loadBlockchainData}>
        Fetch History
      </button>
      <br/>
<br/> 
<br/> 

<form>
<p>Output</p>
<p>Product Id: {this.state.ProductId}</p>
<br/> 
<p>Product Name: {this.state.ProductArray.ProductName}</p>
<br/> 
<p>Product Description: {this.state.ProductArray.Description}</p>
<br/> 
<p>Product Current Owner: {this.state.ProductArray.owner}</p>
<br/> 
<p>Number of Owners: {this.state.ProductArray.tNumber}</p>
<br/> 
</form>

{/* <p>History Owner Addresses: { this.state.Data.map(item => <h1>{item.toString()}</h1>) }</p> */}
<br/>
<p>Owners History Table: 
<table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Owner</th>
            <th>Block Number</th>
            <th>Time Stamp</th>
          </tr>
        </thead>
        <tbody>
          {this.state.Data.slice(0, this.state.Data.length).map((item, index) => {
            return (
              <tr>
                <td>{item[0]}</td>
                <td>{item[1]}</td>
                <td>{item[2]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
</p>

        
      
</div>




    );
  }
}

export default AppOne;

