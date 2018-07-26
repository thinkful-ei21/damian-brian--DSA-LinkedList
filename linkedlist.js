'use strict';
////we need to make find from scratch 
const _Node = require('./nodes.js');

class LinkedList {
  constructor(){
    this.head;
  }

  insertFirst(item){
    this.head = new _Node(item, this.head);
  }

  insertLast(item){
    if(this.head === null){
      this.insertFirst(item);
    }else{
      let tempNode = this.head;
      while(tempNode.next !== null){
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  find(item){
    let currNode = this.head;

    if(!this.head){
      return null;
    }
    while(currNode.value !== item) {

      if(currNode.next === null){
        return null;
      }
      else{
        currNode = currNode.next;
      }
    }
    return currNode;
  }

}