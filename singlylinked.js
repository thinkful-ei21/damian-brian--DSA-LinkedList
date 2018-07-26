'use strict';
const LinkedList = require('./linkedlist.js');


function main(){
  const SLL = new LinkedList();
  
  
  SLL.insertLast('Apollo'); 
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');
  SLL.insertLast('Tauhida');
  SLL.remove('Tauhida');
  SLL.insertLast('squirrel');
  SLL.insertLast('Apollo');  
  SLL.insertBefore('Athena', 'Boomer');
  SLL.insertAfter('Hotdog', 'Helo');
  //SLL.remove('squirrel');
  console.log('runs');
  SLL.size();
  //console.log(SLL.find('squirrel'));
  console.log(JSON.stringify(SLL));
    
}


main();