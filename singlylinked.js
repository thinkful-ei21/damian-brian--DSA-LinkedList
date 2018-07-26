'use strict';
const LinkedList = require('./linkedlist.js');


function main(){
  const SLL = new LinkedList();
  
  function insertBefore(item, key){
    // if head = key then replace this value
    let currNode = this.head;
    let previousNode = this.head;
    while(this.head !== key){
      previousNode = currNode;
      currNode = currNode.next;
    }
    if(this.head === key){
      this.insertFirst(item);
    }
}

  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');
  SLL.insertLast('Tauhida');
  SLL.insertLast('Helo');
  SLL.insertLast('squirrel');
  SLL.insertLast('Apollo');  
  insertBefore('Damian', 'Boomer');
  //SLL.remove('squirrel');
  console.log('runs');
  //console.log(SLL.find('squirrel'));
  console.log(JSON.stringify(SLL));
}


main();