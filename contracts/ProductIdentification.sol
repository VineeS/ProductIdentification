pragma solidity >=0.5.0 <0.8.0;
pragma experimental ABIEncoderV2;

contract ProductIdentification {
    struct history {
        address owner;
        uint256 BlockNumber;
        uint256 TimeStamp;
    }

    struct product {
        string ProductName;
        uint256 ProductID;
        address owner;
        string Description;
        uint256 tNumber;
        mapping(uint256 => history) historymapping;
    }

    mapping(uint256 => product) public productList;

    uint256[] productArray;
    uint256 public numberOfProduct;

    constructor() public {
        numberOfProduct = 0;
    }

    function CreateProduct(
        string memory _ProductName,
        uint256 _ProductID,
        string memory _Description
    ) public {
        require(
            productList[_ProductID].ProductID == 0,
            "the product allready exist"
        );

        product memory tempProduct;
        history memory historyOfProduct =
            history(msg.sender, block.number, block.timestamp);

        tempProduct.owner = msg.sender;
        tempProduct.ProductName = _ProductName;
        tempProduct.ProductID = _ProductID;
        tempProduct.Description = _Description;

        productList[_ProductID] = tempProduct;

        product storage p = productList[_ProductID];

        p.historymapping[0] = historyOfProduct;

        numberOfProduct++;
    }

    function transferProduct(address _newOwnerAddress, uint256 _ProductID)
        public
    {
        //require (productList[_ProductID].owner == msg.sender, "msg.sender is not the owner of the product" );
        productList[_ProductID].owner = _newOwnerAddress;
        productList[_ProductID].tNumber++;

        uint256 n = productList[_ProductID].tNumber++;
        product storage p = productList[_ProductID];

        history memory h;
        h.BlockNumber = block.number;
        h.TimeStamp = block.timestamp;
        h.owner = _newOwnerAddress;

        p.historymapping[n] = h;
    }

    function getProvenence(uint256 ProductID, uint256 n)
        public
        returns (history memory h)
    {
        return productList[ProductID].historymapping[n];
    }

    // function getAllProduct() public{
    //     return productArray;
    // }

    // function getAllHistory() public{
    //     return historyArray;
    // }

    //function fetchHistory()
}
