export const ETH_ADDRESS = '0xA16C28ba3CB3353cB3e1d1D9B05b99B6DE80E44F'
export const ETH_ABI =  [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "numberOfProduct",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "productList",
      "outputs": [
        {
          "internalType": "string",
          "name": "ProductName",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "ProductID",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "Description",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "tNumber",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_ProductName",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_ProductID",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_Description",
          "type": "string"
        }
      ],
      "name": "CreateProduct",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_newOwnerAddress",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_ProductID",
          "type": "uint256"
        }
      ],
      "name": "transferProduct",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "ProductID",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "n",
          "type": "uint256"
        }
      ],
      "name": "getProvenence",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "BlockNumber",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "TimeStamp",
              "type": "uint256"
            }
          ],
          "internalType": "struct ProductIdentification.history",
          "name": "h",
          "type": "tuple"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]