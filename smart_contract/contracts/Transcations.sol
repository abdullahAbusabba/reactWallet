//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;
contract Transactions {

address public owner;
uint public transactionsCount;
// mapping(address => uint) public transactionsCount;

event Transfer(address from, address receiver,uint amount, string message, uint timestamp, string keyword);

struct TransferStruct {
address sender;
address receiver;
uint amount;
string message;
uint timestamp;
string keyword;
}

TransferStruct[] transactions;



 constructor() {
     owner = msg.sender;
 }
function addTransaction(address payable receiver,uint amount, string memory message,string memory keyword) public {

transactionsCount+=1;
transactions.push(TransferStruct(msg.sender,receiver,amount,message,block.timestamp,keyword));
emit Transfer(msg.sender,receiver,amount,message,block.timestamp,keyword);


}

function getTransaction() public view returns (TransferStruct[] memory) {

return transactions;

}

function getCount() public view returns (uint) {
    return transactionsCount;
}


}