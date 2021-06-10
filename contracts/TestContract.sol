pragma solidity >=0.5.0 <0.8.0;

contract TestContract {
    address payable public owner;
    uint256 public value;

    modifier onlyOwner {
        require(msg.sender == owner);
        _;
    }

    constructor() public {
        owner == msg.sender; //only owner is who calls the function
        value = 12346789;
    }

    function kill() public {
        if (msg.sender == owner) selfdestruct(owner);
    }

    function changeValue(uint256 _value) public {
        value = _value;
    }
}
